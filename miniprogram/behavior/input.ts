
export interface InputBehavior extends WxComponent {
    valid(value: string | number): Promise<true>;
    _required(value: string | number, rule: Rule): boolean;
    _len(value: string | number, rule: Rule): boolean;
    _exec(value: string | number, rule: Rule): boolean;
    _func(value: string | number, rule: Rule): Promise<boolean>;
    _getValue(value: string): string | number;
}

export type Rule = {
    required?: boolean;
    min?: number;
    max?: number;
    regexp?: RegExp;
    func?: (value: string | number) => string | boolean | void | Promise<string | boolean | void>;
    message?: string;
};

export default Behavior<InputBehavior>({
    properties: {
        lable: {
            type: String,
            value: ''
        },
        labelWidth: {
            type: String,
            value: 'auto'
        },
        value: {
            type: String,
            value: '',
            optionalTypes: [Number]
        },
        placeholder: {
            type: String,
            value: ''
        },
        disabled: {
            type: Boolean,
            value: false
        },
        // 检测规则
        rules: {
            type: Array,
            value: []
        },
        // 是否必须
        required: {
            type: Boolean,
            value: false
        }
    },
    data: {
        errMsg: '',
        currType: 'text'
    },
    methods: {
        onInput(e: BaseEvent) {
            const value = this._getValue(e.detail.value);
            this.valid(value).catch(console.log);
            this.triggerEvent('input', { value }, {});
        },
        onConfirm(e: BaseEvent) {
            this.triggerEvent('confirm', {
                value: this._getValue(e.detail.value)
            }, {});
        },
        // 检测内容是否有效
        async valid(value: string | number): Promise<true> {
            this.data.errMsg = '';

            const rules: Rule[] = this.data.rules;
            for (const rule of rules) {
                const valid = this._required(value, rule)
                    && this._len(value, rule)
                    && this._exec(value, rule)
                    && (await this._func(value, rule));

                if (!valid) {
                    this.setData({ errMsg: this.data.errMsg });
                    return Promise.reject();
                }
            }

            return true;
        },
        // 检测必需性
        _required(value: string | number, rule: Rule): boolean {
            if ((rule.required || this.data.required) && (value == null || value === '')) {
                this.data.errMsg = rule.required && rule.message ? rule.message : `${this.data.lable}不能为空`;
                return false;
            }

            return true;
        },
        // 检测值或值长度的范围
        _len(value: string | number, rule: Rule): boolean {
            const min = rule.min == null ? -Number.MAX_VALUE : rule.min;
            const max = rule.max == null ? Number.MAX_VALUE : rule.max;

            const v: string | number = typeof value === 'number' ? value : value.length;
            const main = `${this.data.lable}${typeof value === 'string' ? '的长度' : ''}`;
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
        _exec(value: string | number, rule: Rule): boolean {
            if (rule.regexp && !rule.regexp.test(value + '')) {
                this.data.errMsg = rule.message || `${this.data.lable}不满足正则${rule.regexp}`;
                return false;
            }

            return true;
        },
        // 使用检测函数
        _func(value: string | number, rule: Rule): Promise<boolean> {
            return new Promise((resolve) => {
                if (rule.func) {
                    const fn = (result: string | boolean | void) => {
                        if (typeof result === 'string') {
                            this.data.errMsg = result;
                            return resolve(false);
                        }

                        if (result === false) {
                            this.data.errMsg = `${this.data.lable}无效`;
                            return resolve(false);
                        }

                        resolve(true);
                    }

                    const res = rule.func(value);
                    if (res instanceof Promise) {
                        res.then(fn);
                    } else {
                        fn(res);
                    }
                } else {
                    resolve(true);
                }
            })
        },
        _getValue(value: string) {
            if(this.data.currType !== 'text' && value !== '') {
                return +value;
            }

            return value;
        }
    }
})