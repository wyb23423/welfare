/**
 * 个人信息页顶部头像及名称
 */
import { USER_NAME, IS_OFFICIAL } from '../../constant/store';
import { Authentication } from '../../constant/index';
import { request } from '../../utils/http';

interface PersonHead extends WxComponent {
    authentication(): void;
    initInfoValue(): void;
}

Component<PersonHead>({
    properties: {
        isindex: {
            type: Boolean,
            value: false
        }
    },
    data: {
        time: 0, // 上次点击头像时间
        count: 0, // 连续点击头像次数
        hasCommodity: false,
        integral: 0,
        follow: 0,
        collection: 0
    },
    pageLifetimes: {
        show(this: PersonHead) {
            this.data.isindex && this.initInfoValue();
            this.data.hasCommodity = !wx.getStorageSync(IS_OFFICIAL);
            this.setData({username: wx.getStorageSync(USER_NAME)});
        }
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
        },
        initInfoValue() {
            // 关注数
            request<IMerchant[]>({ url: '/api/follow', notShowMsg: true })
                .then(({ data }) => this.setData!({ follow: data.length }))
                .catch(console.log);

            // 收藏数
            Promise.all([0, 1].map(type =>
                request<ICommodity[] | IActive[]>({
                    url: '/api/like',
                    data: { type },
                    notShowMsg: true
                }).catch(() => ({data: []}))
            ))
                .then(([{ data: res1 }, { data: res2 }]) => this.setData!({ collection: res1.length + res2.length }))
                .catch(console.log);

            // 积分(公益)
            request<IUser>({ url: '/api/user', notShowMsg: true })
                .then(({ data: { integral } }) => this.setData!({ integral }))
                .catch(console.log);
        }
    }
});
