/**
 * 个人信息页顶部头像及名称
 */
import { USER_NAME, USER_AUTHENTICATION } from '../../constant/store';
import { Authentication } from '../../constant/index';
import { request } from '../../utils/http';

interface PersonHead extends WxComponent {
    authentication(): void;
}

Component<PersonHead>({
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
    data: {
        time: 0, // 上次点击头像时间
        count: 0 // 连续点击头像次数
    },
    ready() {
        const auth = wx.getStorageSync(USER_AUTHENTICATION);
        this.data.hasCommodity = !(auth === Authentication.commodity || auth === Authentication.auditing);
        this.setData({username: wx.getStorageSync(USER_NAME)});
    },
    methods: {
        clickAvator() {
            // tslint:disable-next-line:prefer-const
            let {count, time, hasCommodity} = this.data;
            if(!hasCommodity) {
                return;
            }
            const now = Date.now();
            if(now - time >= 500) {
                count = 0;
            }
            this.data.time = now;
            this.data.count = ++count;
            count >= 5 && this.authentication();
        },
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
                },
                complete: () => this.data.count = this.data.time = 0
            });
        }
    }
});
