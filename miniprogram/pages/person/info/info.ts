/**
 * 
 */
import { IMyApp } from "../../../app";
import { InputBehavior } from "../../../behavior/input";

const app = <IMyApp>getApp();

Page({
    data: {
        form: {
            address: '学园都市',
            idcard: '111111111111111111',
            phone: 13111111111,
            name: '御坂御坂',
            code: '',
            email: ''
        },
        idcardRule: {
            regexp: '^[1-9]\\d{7}((0\\d)|(1[0-2]))(([0|1|2]\\d)|3[0-1])\\d{3}$|^[1-9]\\d{5}[1-9]\\d{3}((0\\d)|(1[0-2]))(([0|1|2]\\d)|3[0-1])\\d{3}([0-9]|X)$',
            message: '无效身份证号'
        },
        canGetCode: true,
        codeBtnText: '获取验证码',
    },
    onLoad() {
        const userInfo: wx.UserInfo = app.globalData.userInfo;
        this.setData!({
            name: userInfo.nickName,
            img: userInfo.avatarUrl
        })
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

        Promise.all(arr).then(() => console.log(this.data.form)).catch(console.log);
    },
})