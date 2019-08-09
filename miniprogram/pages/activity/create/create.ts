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
            time: [],
            location: '',
            type: 0,
            img: ''
        },
        timeRule: {
            min: 2,
            message: '活动时间需选择两个时间点'
        }
    },
    onInput(e: BaseEvent) {
        let value = e.detail.value;
        const name = e.target.id;
        if (name === 'size' || name === 'type') {
            value = value === '' ? value : +value;
        }
        this.setData!({ [`form.${name}`]: value });
        (<Form>this.selectComponent!('#form'))
            .valid(name)
            .catch(console.log)
    },
    onSubmit() {
        (<Form>this.selectComponent!('#form')).valid()
            .then(() => console.log(this.data.form))
            .catch(console.log)
    }
});
