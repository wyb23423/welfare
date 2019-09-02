import { FormItem } from '../form_item/form_item';

export interface Rule {
    required?: boolean;
    min?: number;
    max?: number;
    regexp?: string;
    func?: (value: string | number) => string | boolean | void | Promise<string | boolean | void>;
    message?: string;
}

export interface Form extends WxComponent {
    valid(...keys: string[]): Promise<true>;
    reset(): void;
}

Component<Form>(({
    externalClasses: ['custom-class'],
    properties: {
        rules: {
            type: Object,
            value: <{ [prop: string]: Rule | Rule[] }>{}
        },
        model: {
            type: Object,
            value: {}
        },
        labelwidth: {
            type: String,
            value: ''
        },
        inline: {
            type: Boolean,
            value: false
        }
    },
    data: {
        fileds: <{ [k: string]: WxComponent }>{},
        labelWidth: 0,
        originModel: {},
        id: 0
    },
    attached() {
        this.data.originModel = this.data.model;
    },
    relations: {
        '../form_item/form_item': {
            type: 'child',
            linked(target) {
                this.data.fileds[target.data.prop || '__default__'] = target;

                const rules = this.data.rules[target.data.prop];
                if (rules) {
                    if (Array.isArray(rules)) {
                        target.data.rules.push(...rules);
                    } else {
                        target.data.rules.push(rules);
                    }

                    target.setData!({ rules: target.data.rules });
                }
            },
            unlinked(target) {
                delete this.data.fileds[target.data.prop];
            }
        }
    },
    observers: {
        labelWidth(val: number) {
            if (this.data.labelwidth === 'auto') {
                this.data.fileds.forEach((wx: WxComponent) => wx.setData!({ labelwidth: val + 'px' }));
            }
        }
    },
    methods: {
        valid(...keys: string[]) {
            if (keys.length === 0) {
                keys = Object.keys(this.data.fileds);
            }

            return Promise.all(keys.map(k => {
                const filed: FormItem = this.data.fileds[k];
                if (filed) {
                    return filed.valid(this.data.model[filed.data.prop]);
                }

                return true;
            }));
        },
        reset() {
            (<FormItem[]>Object.values(this.data.fileds)).forEach(v => v.setData!({ errMsg: '' }));
            this.triggerEvent('reset', this.data.originModel, {});
        }
    }
}));
