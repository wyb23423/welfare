/**
 * 修改个人信息
 */
import { InputBehavior } from '../../../behavior/input';
import { request } from '../../../utils/http';

Page({
    data: {
        form: {
            code: ''
        },
        idCardRule: {
            regexp: '',
            message: '无效身份证号'
        },
        canGetCode: true,
        codeBtnText: '获取验证码',
        notGetInfo: false
    },
    onLoad(query?: IAnyObject) {
        this._setIdCardRule();

        if (!(query && query.notGetInfo)) {
            request<IUser>({ url: '/api/user' })
                .then(({ data }) => {
                    this.setData!(
                        ['address', 'idCard', 'phone', 'realName', 'email']
                            .reduce(
                                (form, k) => {
                                    form[`form.${k}`] = (<IAnyObject>data)[k];
                                    return form;
                                },
                                <IAnyObject>{}
                            )
                    );
                })
                .then(console.log);
        } else {
            this.data.notGetInfo = true;
        }
    },
    onInput(e: BaseEvent) {
        this.setData!({ [`form.${e.target.id}`]: e.detail.value });
    },
    getCode() {
        console.log('getCode');
    },
    save() {
        const arr = Object.entries<string | number>(this.data.form).map(([id, value]) => {
            const input = <InputBehavior>this.selectComponent!('#' + id);

            if (input) {
                return input.valid(value);
            } else {
                return true;
            }
        });

        Promise.all(arr)
            .then(() => (
                request({
                    url: '/api/user',
                    method: 'POST',
                    data: this.data.form
                })
            ))
            .then(() => new Promise(resolve => {
                wx.showToast({
                    title: '修改个人信息成功',
                    complete: () => resolve(this.data.notGetInfo)
                });
            }))
            .then(notGetInfo => notGetInfo && wx.reLaunch({ url: '/pages/index/index' }))
            .catch(console.log);

        this.setData!({ 'form.code': '' });
    },
    _setIdCardRule() {
        const common = String.raw`((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}`;

        const str15 = String.raw`(\d{7}${common})`;
        const str18 = String.raw`(\d{5}[1-9]\d{3}${common}([0-9]|X))`;

        this.setData!({ 'idCardRule.regexp': `^[1-9](${str15}|${str18})$` });
    }
});
