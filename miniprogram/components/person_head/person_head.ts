/**
 * 个人信息页顶部头像及名称
 */
import { USER_NAME } from '../../constant/store';
Component({
    properties: {
        isindex: {
            type: Boolean,
            value: false
        }
    },
    ready() {
        this.setData({
            username: wx.getStorageSync(USER_NAME)
        });
    }
});
