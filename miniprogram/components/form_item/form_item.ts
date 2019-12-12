import { Rule } from '../form/form';

export interface FormItem extends WxComponent {
    valid(value: any): Promise<true>;
    _required(value: any, rule: Rule): boolean;
    _len(value: any, rule: Rule): boolean;
    _exec(value: any, rule: Rule): boolean;
    _func(value: any, rule: Rule): Promise<boolean>;
    _getValue(value: string): any;
}

Component<FormItem>({
    externalClasses: ['custom-class', 'label-class', 'input-class', 'msg-class', 'input-box-class'],
    properties: {
        label: {
            type: String,
            value: ''
        },
        labelwidth: {
            type: String,
            value: 'auto'
        },
        prop: {
            type: String,
            value: ''
        },
        rules: {
            type: Array,
            value: [],
            optionalTypes: [Object]
        },
        required: {
            type: Boolean,
            value: false
        }
    },
    data: {
        errMsg: '',
        isRequired: false
    },
    attached() {
        const rules = this.data.rules;
        if (!Array.isArray(rules)) {
            this.data.rules = [rules];
        }

        this.setData({
            isRequired: this.data.required || this.data.rules.some((v: Rule) => !!v.required)
        });
    },
    relations: {
        '../form/form': {
            type: 'parent',
            linked(target) {
                if (this.data.labelwidth === 'auto') {
                    const parentLabelWidth: string = target.data.labelwidth;
                    if (!parentLabelWidth || parentLabelWidth === 'auto') {
                        this.createSelectorQuery()
                            .select('#label')
                            .boundingClientRect(rect => {
                                // 不会执行。。。
                                if (rect.width > target.data.labelWidth) {
                                    target.setData!({ labelWidth: rect.width });
                                } else {
                                    this.setData!({ labelwidth: this.data.labelWidth + 'px' });
                                }
                            });
                    } else {
                        this.setData!({ labelwidth: parentLabelWidth });
                    }
                }
            }
        }
    },
    methods: {
        // 检测内容是否有效
        async valid(value: any): Promise<true> {
            const rules: Rule[] = this.data.rules;

            let hasRquired: boolean = false;
            for (const rule of rules) {
                if (rule.required) {
                    hasRquired = true;
                }

                const valid = this._required(value, rule)
                    && this._len(value, rule)
                    && this._exec(value, rule)
                    && (await this._func(value, rule));

                if (!valid) {
                    this.setData({ errMsg: this.data.errMsg });
                    return Promise.reject();
                }
            }

            if (!hasRquired && this.data.required && !this._required(value, {})) {
                this.setData({ errMsg: this.data.errMsg });
                return Promise.reject();
            }

            this.setData({ errMsg: '' });
            return true;
        },
        // 检测必需性
        _required(value: any, rule: Rule): boolean {
            if (
                (rule.required || this.data.required)
                && (
                    value == null
                    || typeof value !== 'number' && !Object.keys(value).length
                    || value !== value
                )
            ) {
                this.data.errMsg = rule.required && rule.message ? rule.message : `${this.data.label || '必填项'}不能为空`;
                return false;
            }

            return true;
        },
        // 检测值或值长度的范围
        _len(value: any, rule: Rule): boolean {
            if (value == null || value === '') {
                return true;
            }

            const min = rule.min == null ? -Number.MAX_VALUE : rule.min;
            const max = rule.max == null ? Number.MAX_VALUE : rule.max;

            const v: any = typeof value === 'number' ? value : Object.keys(value).length;
            const main = `${this.data.label}${typeof value === 'string' ? '的长度' : ''}`;
            if (v < min) {
                this.data.errMsg = rule.message || `${main}不能小于${min}`;
                return false;
            }
            if (v > max) {
                this.data.errMsg = rule.message || `${main}不能大于${max}`;
                return false;
            }

            return true;
        },
        // 根据正则检测
        _exec(value: any, rule: Rule): boolean {
            if (value != null && value !== '' && rule.regexp) {
                const exp = new RegExp(rule.regexp);
                if (!exp.test(value + '')) {
                    this.data.errMsg = rule.message || `${this.data.label}不满足正则${rule.regexp}`;
                    return false;
                }
            }

            return true;
        },
        // 使用检测函数
        _func(value: any, rule: Rule): Promise<boolean> {
            return new Promise((resolve) => {
                if (rule.func) {
                    const fn = (result: string | boolean | void) => {
                        if (typeof result === 'string') {
                            this.data.errMsg = result;
                            return resolve(false);
                        }

                        if (result === false) {
                            this.data.errMsg = `${this.data.label}无效`;
                            return resolve(false);
                        }

                        resolve(true);
                    };

                    const res = rule.func(value);
                    if (res instanceof Promise) {
                        res.then(fn);
                    } else {
                        fn(res);
                    }
                } else {
                    resolve(true);
                }
            });
        }
    },
    observers: {
        rules(val: Rule[] | Rule) {
            if (!Array.isArray(val)) {
                val = [val];
            }

            this.setData({
                isRequired: this.data.required || val.some((v: Rule) => !!v.required)
            });
        }
    }
});
