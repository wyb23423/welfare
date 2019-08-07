/**
 * 创建活动
 */
import { Form } from "../../../components/form/form";

Page({
    data: {
        form: {
            name: '',
            intro: '',
            details: '',
            size: '',
            time: '',
            location: '',
            type: 0
        },
        img: ''
    },
    onInput(e: BaseEvent) {
        let value = e.detail.value;
        const name = e.target.id;
        if (name === 'size' || name === 'type') {
            value = value === '' ? value : +value;
        }
        this.setData!({ [`form.${name}`]: value });
    },
    onSubmit() {
        (<Form>this.selectComponent!('#form')).valid().catch(console.log)
    }
});
