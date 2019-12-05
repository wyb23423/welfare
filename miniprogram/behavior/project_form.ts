/**
 * 项目里大部分表单通用方法
 */
import { Form } from '../components/form/form';

export interface ProjectFormData {
    formEl?: Form | null;
    form: IAnyObject;
    hasMask: boolean;
}

export interface ProjectForm extends WxComponent {
    data: ProjectFormData;
    _submit(): Promise<true> | void;
    _parseValue(value: string, name: string): any;
}

export default Behavior<ProjectForm>({
    ready() {
        this.data.formEl = this.selectComponent!('#form');
    },
    methods: {
        reset({ detail }) {
            this.setData({ form: detail });
        },
        mask(e: BaseEvent) {
            this.setData({ hasMask: e.detail.visible });
        },
        onInput(e: BaseEvent) {
            const name = e.target.id;
            this.setData!({ [`form.${name}`]: this._parseValue(e.detail.value, name) });

            if (this.data.formEl) {
                this.data.formEl
                    .valid(name)
                    .catch(console.log);
            }
        },
        onSubmit() {
            if (this.data.formEl) {
                this.data.formEl.valid()
                    .then(() => this._submit() || true)
                    .catch(console.log);
            } else {
                this._submit();
            }
        },
        _submit() {
            console.log(this.data.form);
        },
        _parseValue(value: string) {
            return value;
        }
    }
});
