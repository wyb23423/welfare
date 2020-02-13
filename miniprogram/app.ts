import { request } from './utils/http';
import { COOKIE, USER_NAME, IS_MERCHANT, IS_OFFICIAL } from './constant/store';

interface LoginRes {
    username: string;
    authorities: Array<{authority: string}>;
}

const ROLE_MERCHANT = 'ROLE_MERCHANT';
const ROLE_OFFICIAL = 'ROLE_OFFICIAL';

// app.ts
App({
    onLaunch() {
        // 登录
        wx.login({
            success: ({ code }) => {
                request<LoginRes>({
                    url: '/api/login',
                    method: 'POST',
                    data: { code },
                    success: this.setCookie
                }).then(this.setStore)
                .catch(console.log);
            },
            fail: console.log
        });
    },
    setStore({data: {username, authorities}}: ResponseData<LoginRes>) {
        // 用户名
        wx.setStorage({
            key: USER_NAME,
            data: username
        });
        // 是否商家(组织)
        wx.setStorage({
            key: IS_MERCHANT,
            data: authorities.some(v => v.authority === ROLE_MERCHANT)
        });
        // 是否社区管理员
        wx.setStorage({
            key: IS_OFFICIAL,
            data: authorities.some(v => v.authority === ROLE_OFFICIAL)
        });
    },
    setCookie(res: wx.RequestSuccessCallbackResult) {
        if (res.header) {
            if ('Set-Cookie' in res.header) {
                wx.setStorageSync(COOKIE, (<any>res.header)['Set-Cookie']);
            } else if ('set-cookie' in res.header) {
                wx.setStorageSync(COOKIE, (<any>res.header)['set-cookie']);
            }
        }
    }
});
