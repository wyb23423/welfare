/**
 * 我的积分
 */
import { request } from '../../../utils/http';

Page({
    data: {
        integral: 0,
        credit: 0
    },
    onLoad() {
        request<IUser>({ url: '/api/user' })
            .then(({ data: { integral, credit } }) => this.setData!({ integral, credit }))
            .catch(console.log);
    }
});
