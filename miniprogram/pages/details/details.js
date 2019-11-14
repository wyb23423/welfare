"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("../../utils/http");
var util_1 = require("../../utils/util");
var list_item_1 = require("../../template/list_item/list_item");
Page({
    isGoods: 0,
    data: {
        id: 1,
        details: '123',
        integral: 21,
        credit: 0,
        name: '有爱的我们不孤独——自闭症儿童义诊系列活动',
        size: 1,
        location: '',
        startTime: util_1.formatTime(new Date()),
        endTime: util_1.formatTime(new Date(Date.now() + 1000 * 60 * 60 * 24)),
        look: 23,
        like: 40,
        img: '/public/images/23.jpg',
        isCollected: false,
        merchant: {
            name: '北京儿童医疗发展中心',
            activityCount: 12,
            fans: 52,
            img: '/public/images/23.jpg',
            detail: '北京医疗儿童发展中心的孤独症和其他障碍敢于服务，是xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
            originImg: '/public/images/23.jpg',
            userId: 'fsdfsfd'
        }
    },
    onLoad: function (query) {
        if (!query) {
            console.error('路由参数错误');
            return wx.navigateBack({ delta: 1 });
        }
        var isGoods = this.isGoods = +query.isGoods;
        this._init(isGoods, query.id);
        wx.setNavigationBarTitle({
            title: isGoods ? '商品详情' : '活动详情'
        });
    },
    exchange: list_item_1.exchange,
    collect: function () {
        var _this = this;
        var old = this.data.isCollected;
        http_1.request({
            url: '/api/like',
            method: old ? 'DELETE' : 'PUT',
            data: {
                targetId: this.data.id,
                type: this.isGoods
            }
        })
            .then(function () { return _this.setData({
            isCollected: !old,
            like: old ? _this.data.like - 1 : _this.data.like + 1
        }); })
            .catch(console.log);
    },
    _init: function (isGoods, id) {
        var _this = this;
        http_1.request({ url: "/api/" + (isGoods ? 'commodity' : 'activity') + "/" + id })
            .then(function (_a) {
            var data = _a.data;
            data = util_1.parseData(data);
            _this.setData(__assign({}, data, { startTime: util_1.formatTime(new Date(+data.origination)), endTime: util_1.formatTime(new Date(+data.finish)), img: data.originImg, merchant: data.merchant ? util_1.parseData(data.merchant) : null, isActivity: !isGoods }));
        })
            .catch(console.log);
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV0YWlscy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRldGFpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUdBLHlDQUEyQztBQUMzQyx5Q0FBeUQ7QUFDekQsZ0VBQThEO0FBRTlELElBQUksQ0FBQztJQUNELE9BQU8sRUFBRSxDQUFDO0lBQ1YsSUFBSSxFQUFFO1FBQ0YsRUFBRSxFQUFFLENBQUM7UUFDTCxPQUFPLEVBQUUsS0FBSztRQUNkLFFBQVEsRUFBRSxFQUFFO1FBQ1osTUFBTSxFQUFFLENBQUM7UUFDVCxJQUFJLEVBQUUsdUJBQXVCO1FBQzdCLElBQUksRUFBRSxDQUFDO1FBQ1AsUUFBUSxFQUFFLEVBQUU7UUFDWixTQUFTLEVBQUUsaUJBQVUsQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDO1FBQ2pDLE9BQU8sRUFBRSxpQkFBVSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxJQUFJLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztRQUMvRCxJQUFJLEVBQUUsRUFBRTtRQUNSLElBQUksRUFBRSxFQUFFO1FBQ1IsR0FBRyxFQUFFLHVCQUF1QjtRQUM1QixXQUFXLEVBQUUsS0FBSztRQUNsQixRQUFRLEVBQUU7WUFDTixJQUFJLEVBQUUsWUFBWTtZQUNsQixhQUFhLEVBQUUsRUFBRTtZQUNqQixJQUFJLEVBQUUsRUFBRTtZQUNSLEdBQUcsRUFBRSx1QkFBdUI7WUFDNUIsTUFBTSxFQUFFLHNFQUFzRTtZQUM5RSxTQUFTLEVBQUUsdUJBQXVCO1lBQ2xDLE1BQU0sRUFBRSxTQUFTO1NBQ3BCO0tBQ0o7SUFDRCxNQUFNLFlBQUMsS0FBd0M7UUFDM0MsSUFBRyxDQUFDLEtBQUssRUFBRTtZQUNQLE9BQU8sQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDeEIsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDLEVBQUMsS0FBSyxFQUFFLENBQUMsRUFBQyxDQUFDLENBQUM7U0FDdEM7UUFFRCxJQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQztRQUM5QyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDOUIsRUFBRSxDQUFDLHFCQUFxQixDQUFDO1lBQ3JCLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTTtTQUNuQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBQ0QsUUFBUSxzQkFBQTtJQUNSLE9BQU87UUFBUCxpQkFlQztRQWRHLElBQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQ2xDLGNBQU8sQ0FBQztZQUNKLEdBQUcsRUFBRSxXQUFXO1lBQ2hCLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsS0FBSztZQUM5QixJQUFJLEVBQUU7Z0JBQ0YsUUFBUSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDdEIsSUFBSSxFQUFFLElBQUksQ0FBQyxPQUFPO2FBQ3JCO1NBQ0osQ0FBQzthQUNHLElBQUksQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLE9BQVEsQ0FBQztZQUN0QixXQUFXLEVBQUUsQ0FBQyxHQUFHO1lBQ2pCLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQztTQUN0RCxDQUFDLEVBSFUsQ0FHVixDQUFDO2FBQ0YsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBQ0QsS0FBSyxZQUFDLE9BQWUsRUFBRSxFQUFVO1FBQWpDLGlCQWNDO1FBYkcsY0FBTyxDQUF1QixFQUFFLEdBQUcsRUFBRSxXQUFRLE9BQU8sQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxVQUFVLFVBQUksRUFBSSxFQUFFLENBQUM7YUFDckYsSUFBSSxDQUFDLFVBQUMsRUFBUTtnQkFBTixjQUFJO1lBQ1QsSUFBSSxHQUFHLGdCQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDdkIsS0FBSSxDQUFDLE9BQVEsY0FDTixJQUFJLElBQ1AsU0FBUyxFQUFFLGlCQUFVLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsRUFDbEQsT0FBTyxFQUFFLGlCQUFVLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsRUFDM0MsR0FBRyxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQ25CLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxnQkFBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUN6RCxVQUFVLEVBQUUsQ0FBQyxPQUFPLElBQ3RCLENBQUM7UUFDUCxDQUFDLENBQUM7YUFDRCxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzVCLENBQUM7Q0FDSixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICog5YWs55uK5rS75Yqo6K+m5oOFXHJcbiAqL1xyXG5pbXBvcnQgeyByZXF1ZXN0IH0gZnJvbSAnLi4vLi4vdXRpbHMvaHR0cCc7XHJcbmltcG9ydCB7IHBhcnNlRGF0YSwgZm9ybWF0VGltZSB9IGZyb20gJy4uLy4uL3V0aWxzL3V0aWwnO1xyXG5pbXBvcnQgeyBleGNoYW5nZSB9IGZyb20gJy4uLy4uL3RlbXBsYXRlL2xpc3RfaXRlbS9saXN0X2l0ZW0nO1xyXG5cclxuUGFnZSh7XHJcbiAgICBpc0dvb2RzOiAwLFxyXG4gICAgZGF0YToge1xyXG4gICAgICAgIGlkOiAxLFxyXG4gICAgICAgIGRldGFpbHM6ICcxMjMnLFxyXG4gICAgICAgIGludGVncmFsOiAyMSxcclxuICAgICAgICBjcmVkaXQ6IDAsXHJcbiAgICAgICAgbmFtZTogJ+acieeIseeahOaIkeS7rOS4jeWtpOeLrOKAlOKAlOiHqumXreeXh+WEv+erpeS5ieiviuezu+WIl+a0u+WKqCcsXHJcbiAgICAgICAgc2l6ZTogMSxcclxuICAgICAgICBsb2NhdGlvbjogJycsXHJcbiAgICAgICAgc3RhcnRUaW1lOiBmb3JtYXRUaW1lKG5ldyBEYXRlKCkpLFxyXG4gICAgICAgIGVuZFRpbWU6IGZvcm1hdFRpbWUobmV3IERhdGUoRGF0ZS5ub3coKSArIDEwMDAgKiA2MCAqIDYwICogMjQpKSxcclxuICAgICAgICBsb29rOiAyMyxcclxuICAgICAgICBsaWtlOiA0MCxcclxuICAgICAgICBpbWc6ICcvcHVibGljL2ltYWdlcy8yMy5qcGcnLFxyXG4gICAgICAgIGlzQ29sbGVjdGVkOiBmYWxzZSxcclxuICAgICAgICBtZXJjaGFudDoge1xyXG4gICAgICAgICAgICBuYW1lOiAn5YyX5Lqs5YS/56ul5Yy755aX5Y+R5bGV5Lit5b+DJyxcclxuICAgICAgICAgICAgYWN0aXZpdHlDb3VudDogMTIsXHJcbiAgICAgICAgICAgIGZhbnM6IDUyLFxyXG4gICAgICAgICAgICBpbWc6ICcvcHVibGljL2ltYWdlcy8yMy5qcGcnLFxyXG4gICAgICAgICAgICBkZXRhaWw6ICfljJfkuqzljLvnlpflhL/nq6Xlj5HlsZXkuK3lv4PnmoTlraTni6znl4flkozlhbbku5bpmpznoo3mlaLkuo7mnI3liqHvvIzmmK94eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4JyxcclxuICAgICAgICAgICAgb3JpZ2luSW1nOiAnL3B1YmxpYy9pbWFnZXMvMjMuanBnJyxcclxuICAgICAgICAgICAgdXNlcklkOiAnZnNkZnNmZCdcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgb25Mb2FkKHF1ZXJ5PzogUmVjb3JkPCdpc0dvb2RzJyB8ICdpZCcsIHN0cmluZz4pIHtcclxuICAgICAgICBpZighcXVlcnkpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcign6Lev55Sx5Y+C5pWw6ZSZ6K+vJyk7XHJcbiAgICAgICAgICAgIHJldHVybiB3eC5uYXZpZ2F0ZUJhY2soe2RlbHRhOiAxfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBpc0dvb2RzID0gdGhpcy5pc0dvb2RzID0gK3F1ZXJ5LmlzR29vZHM7XHJcbiAgICAgICAgdGhpcy5faW5pdChpc0dvb2RzLCBxdWVyeS5pZCk7XHJcbiAgICAgICAgd3guc2V0TmF2aWdhdGlvbkJhclRpdGxlKHtcclxuICAgICAgICAgICAgdGl0bGU6IGlzR29vZHMgPyAn5ZWG5ZOB6K+m5oOFJyA6ICfmtLvliqjor6bmg4UnXHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgZXhjaGFuZ2UsXHJcbiAgICBjb2xsZWN0KCkge1xyXG4gICAgICAgIGNvbnN0IG9sZCA9IHRoaXMuZGF0YS5pc0NvbGxlY3RlZDtcclxuICAgICAgICByZXF1ZXN0KHtcclxuICAgICAgICAgICAgdXJsOiAnL2FwaS9saWtlJyxcclxuICAgICAgICAgICAgbWV0aG9kOiBvbGQgPyAnREVMRVRFJyA6ICdQVVQnLFxyXG4gICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXRJZDogdGhpcy5kYXRhLmlkLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogdGhpcy5pc0dvb2RzXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbigoKSA9PiB0aGlzLnNldERhdGEhKHtcclxuICAgICAgICAgICAgICAgIGlzQ29sbGVjdGVkOiAhb2xkLFxyXG4gICAgICAgICAgICAgICAgbGlrZTogb2xkID8gdGhpcy5kYXRhLmxpa2UgLSAxIDogdGhpcy5kYXRhLmxpa2UgKyAxXHJcbiAgICAgICAgICAgIH0pKVxyXG4gICAgICAgICAgICAuY2F0Y2goY29uc29sZS5sb2cpO1xyXG4gICAgfSxcclxuICAgIF9pbml0KGlzR29vZHM6IG51bWJlciwgaWQ6IHN0cmluZykge1xyXG4gICAgICAgIHJlcXVlc3Q8SUFjdGl2ZSB8IElDb21tb2RpdHk+KHsgdXJsOiBgL2FwaS8ke2lzR29vZHMgPyAnY29tbW9kaXR5JyA6ICdhY3Rpdml0eSd9LyR7aWR9YCB9KVxyXG4gICAgICAgICAgICAudGhlbigoeyBkYXRhIH0pID0+IHtcclxuICAgICAgICAgICAgICAgIGRhdGEgPSBwYXJzZURhdGEoZGF0YSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldERhdGEhKHtcclxuICAgICAgICAgICAgICAgICAgICAuLi5kYXRhLFxyXG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0VGltZTogZm9ybWF0VGltZShuZXcgRGF0ZSgrZGF0YS5vcmlnaW5hdGlvbikpLFxyXG4gICAgICAgICAgICAgICAgICAgIGVuZFRpbWU6IGZvcm1hdFRpbWUobmV3IERhdGUoK2RhdGEuZmluaXNoKSksXHJcbiAgICAgICAgICAgICAgICAgICAgaW1nOiBkYXRhLm9yaWdpbkltZyxcclxuICAgICAgICAgICAgICAgICAgICBtZXJjaGFudDogZGF0YS5tZXJjaGFudCA/IHBhcnNlRGF0YShkYXRhLm1lcmNoYW50KSA6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgaXNBY3Rpdml0eTogIWlzR29vZHNcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goY29uc29sZS5sb2cpO1xyXG4gICAgfVxyXG59KTtcclxuIl19