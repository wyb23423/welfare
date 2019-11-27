/**
 * 个人信息页顶部头像及名称
 */
import { USER_NAME, USER_AUTHENTICATION } from '../../constant/store';
import { Authentication } from '../../constant/index';
import { request } from '../../utils/http';

Component({
    properties: {
        isindex: {
            type: Boolean,
            value: false
        },
        hasinfo: {
            type: Boolean,
            value: true
        }
    },
    ready() {
        const auth = wx.getStorageSync(USER_AUTHENTICATION);
        this.setData({
            username: wx.getStorageSync(USER_NAME),
            hasCommodity: !(auth === Authentication.commodity || auth === Authentication.auditing)
        });
    },
    methods: {
        authentication() {
            wx.showModal({
                content: '申请成为社区管理员?',
                success: ({confirm}) => {
                    if(confirm) {
                        request({url: '/api/user/communityAuthorization'})
                            .then(() => wx.showToast({title: '申请成功'}))
                            .then(() => this.setData({hasCommodity: false}))
                            .catch(console.log);
                    }
                }
            });
        }
    }
});
