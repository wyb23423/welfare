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
            _this.setData(__assign({}, data, { startTime: util_1.formatTime(new Date(+data.origination)), endTime: util_1.formatTime(new Date(+data.finish)), img: data.originImg, merchant: data.merchant ? util_1.parseData(data.merchant) : null }));
        })
            .catch(console.log);
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV0YWlscy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRldGFpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUdBLHlDQUEyQztBQUMzQyx5Q0FBeUQ7QUFDekQsZ0VBQThEO0FBRTlELElBQUksQ0FBQztJQUNELE9BQU8sRUFBRSxDQUFDO0lBQ1YsSUFBSSxFQUFFO1FBQ0YsRUFBRSxFQUFFLENBQUM7UUFDTCxPQUFPLEVBQUUsS0FBSztRQUNkLFFBQVEsRUFBRSxFQUFFO1FBQ1osTUFBTSxFQUFFLENBQUM7UUFDVCxJQUFJLEVBQUUsdUJBQXVCO1FBQzdCLElBQUksRUFBRSxDQUFDO1FBQ1AsUUFBUSxFQUFFLEVBQUU7UUFDWixTQUFTLEVBQUUsaUJBQVUsQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDO1FBQ2pDLE9BQU8sRUFBRSxpQkFBVSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxJQUFJLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztRQUMvRCxJQUFJLEVBQUUsRUFBRTtRQUNSLElBQUksRUFBRSxFQUFFO1FBQ1IsR0FBRyxFQUFFLHVCQUF1QjtRQUM1QixXQUFXLEVBQUUsS0FBSztRQUNsQixRQUFRLEVBQUU7WUFDTixJQUFJLEVBQUUsWUFBWTtZQUNsQixhQUFhLEVBQUUsRUFBRTtZQUNqQixJQUFJLEVBQUUsRUFBRTtZQUNSLEdBQUcsRUFBRSx1QkFBdUI7WUFDNUIsTUFBTSxFQUFFLHNFQUFzRTtZQUM5RSxTQUFTLEVBQUUsdUJBQXVCO1lBQ2xDLE1BQU0sRUFBRSxTQUFTO1NBQ3BCO0tBQ0o7SUFDRCxNQUFNLFlBQUMsS0FBd0M7UUFDM0MsSUFBRyxDQUFDLEtBQUssRUFBRTtZQUNQLE9BQU8sQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDeEIsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDLEVBQUMsS0FBSyxFQUFFLENBQUMsRUFBQyxDQUFDLENBQUM7U0FDdEM7UUFFRCxJQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQztRQUM5QyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDOUIsRUFBRSxDQUFDLHFCQUFxQixDQUFDO1lBQ3JCLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTTtTQUNuQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBQ0QsUUFBUSxzQkFBQTtJQUNSLE9BQU87UUFBUCxpQkFlQztRQWRHLElBQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQ2xDLGNBQU8sQ0FBQztZQUNKLEdBQUcsRUFBRSxXQUFXO1lBQ2hCLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsS0FBSztZQUM5QixJQUFJLEVBQUU7Z0JBQ0YsUUFBUSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDdEIsSUFBSSxFQUFFLElBQUksQ0FBQyxPQUFPO2FBQ3JCO1NBQ0osQ0FBQzthQUNHLElBQUksQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLE9BQVEsQ0FBQztZQUN0QixXQUFXLEVBQUUsQ0FBQyxHQUFHO1lBQ2pCLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQztTQUN0RCxDQUFDLEVBSFUsQ0FHVixDQUFDO2FBQ0YsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBQ0QsS0FBSyxZQUFDLE9BQWUsRUFBRSxFQUFVO1FBQWpDLGlCQWFDO1FBWkcsY0FBTyxDQUF1QixFQUFFLEdBQUcsRUFBRSxXQUFRLE9BQU8sQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxVQUFVLFVBQUksRUFBSSxFQUFFLENBQUM7YUFDckYsSUFBSSxDQUFDLFVBQUMsRUFBUTtnQkFBTixjQUFJO1lBQ1QsSUFBSSxHQUFHLGdCQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDdkIsS0FBSSxDQUFDLE9BQVEsY0FDTixJQUFJLElBQ1AsU0FBUyxFQUFFLGlCQUFVLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsRUFDbEQsT0FBTyxFQUFFLGlCQUFVLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsRUFDM0MsR0FBRyxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQ25CLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxnQkFBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUMzRCxDQUFDO1FBQ1AsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUM1QixDQUFDO0NBQ0osQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIOWFrOebiua0u+WKqOivpuaDhVxyXG4gKi9cclxuaW1wb3J0IHsgcmVxdWVzdCB9IGZyb20gJy4uLy4uL3V0aWxzL2h0dHAnO1xyXG5pbXBvcnQgeyBwYXJzZURhdGEsIGZvcm1hdFRpbWUgfSBmcm9tICcuLi8uLi91dGlscy91dGlsJztcclxuaW1wb3J0IHsgZXhjaGFuZ2UgfSBmcm9tICcuLi8uLi90ZW1wbGF0ZS9saXN0X2l0ZW0vbGlzdF9pdGVtJztcclxuXHJcblBhZ2Uoe1xyXG4gICAgaXNHb29kczogMCxcclxuICAgIGRhdGE6IHtcclxuICAgICAgICBpZDogMSxcclxuICAgICAgICBkZXRhaWxzOiAnMTIzJyxcclxuICAgICAgICBpbnRlZ3JhbDogMjEsXHJcbiAgICAgICAgY3JlZGl0OiAwLFxyXG4gICAgICAgIG5hbWU6ICfmnInniLHnmoTmiJHku6zkuI3lraTni6zigJTigJToh6rpl63nl4flhL/nq6XkuYnor4rns7vliJfmtLvliqgnLFxyXG4gICAgICAgIHNpemU6IDEsXHJcbiAgICAgICAgbG9jYXRpb246ICcnLFxyXG4gICAgICAgIHN0YXJ0VGltZTogZm9ybWF0VGltZShuZXcgRGF0ZSgpKSxcclxuICAgICAgICBlbmRUaW1lOiBmb3JtYXRUaW1lKG5ldyBEYXRlKERhdGUubm93KCkgKyAxMDAwICogNjAgKiA2MCAqIDI0KSksXHJcbiAgICAgICAgbG9vazogMjMsXHJcbiAgICAgICAgbGlrZTogNDAsXHJcbiAgICAgICAgaW1nOiAnL3B1YmxpYy9pbWFnZXMvMjMuanBnJyxcclxuICAgICAgICBpc0NvbGxlY3RlZDogZmFsc2UsXHJcbiAgICAgICAgbWVyY2hhbnQ6IHtcclxuICAgICAgICAgICAgbmFtZTogJ+WMl+S6rOWEv+erpeWMu+eWl+WPkeWxleS4reW/gycsXHJcbiAgICAgICAgICAgIGFjdGl2aXR5Q291bnQ6IDEyLFxyXG4gICAgICAgICAgICBmYW5zOiA1MixcclxuICAgICAgICAgICAgaW1nOiAnL3B1YmxpYy9pbWFnZXMvMjMuanBnJyxcclxuICAgICAgICAgICAgZGV0YWlsOiAn5YyX5Lqs5Yy755aX5YS/56ul5Y+R5bGV5Lit5b+D55qE5a2k54us55eH5ZKM5YW25LuW6Zqc56KN5pWi5LqO5pyN5Yqh77yM5piveHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eCcsXHJcbiAgICAgICAgICAgIG9yaWdpbkltZzogJy9wdWJsaWMvaW1hZ2VzLzIzLmpwZycsXHJcbiAgICAgICAgICAgIHVzZXJJZDogJ2ZzZGZzZmQnXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIG9uTG9hZChxdWVyeT86IFJlY29yZDwnaXNHb29kcycgfCAnaWQnLCBzdHJpbmc+KSB7XHJcbiAgICAgICAgaWYoIXF1ZXJ5KSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ+i3r+eUseWPguaVsOmUmeivrycpO1xyXG4gICAgICAgICAgICByZXR1cm4gd3gubmF2aWdhdGVCYWNrKHtkZWx0YTogMX0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgaXNHb29kcyA9IHRoaXMuaXNHb29kcyA9ICtxdWVyeS5pc0dvb2RzO1xyXG4gICAgICAgIHRoaXMuX2luaXQoaXNHb29kcywgcXVlcnkuaWQpO1xyXG4gICAgICAgIHd4LnNldE5hdmlnYXRpb25CYXJUaXRsZSh7XHJcbiAgICAgICAgICAgIHRpdGxlOiBpc0dvb2RzID8gJ+WVhuWTgeivpuaDhScgOiAn5rS75Yqo6K+m5oOFJ1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIGV4Y2hhbmdlLFxyXG4gICAgY29sbGVjdCgpIHtcclxuICAgICAgICBjb25zdCBvbGQgPSB0aGlzLmRhdGEuaXNDb2xsZWN0ZWQ7XHJcbiAgICAgICAgcmVxdWVzdCh7XHJcbiAgICAgICAgICAgIHVybDogJy9hcGkvbGlrZScsXHJcbiAgICAgICAgICAgIG1ldGhvZDogb2xkID8gJ0RFTEVURScgOiAnUFVUJyxcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0SWQ6IHRoaXMuZGF0YS5pZCxcclxuICAgICAgICAgICAgICAgIHR5cGU6IHRoaXMuaXNHb29kc1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oKCkgPT4gdGhpcy5zZXREYXRhISh7XHJcbiAgICAgICAgICAgICAgICBpc0NvbGxlY3RlZDogIW9sZCxcclxuICAgICAgICAgICAgICAgIGxpa2U6IG9sZCA/IHRoaXMuZGF0YS5saWtlIC0gMSA6IHRoaXMuZGF0YS5saWtlICsgMVxyXG4gICAgICAgICAgICB9KSlcclxuICAgICAgICAgICAgLmNhdGNoKGNvbnNvbGUubG9nKTtcclxuICAgIH0sXHJcbiAgICBfaW5pdChpc0dvb2RzOiBudW1iZXIsIGlkOiBzdHJpbmcpIHtcclxuICAgICAgICByZXF1ZXN0PElBY3RpdmUgfCBJQ29tbW9kaXR5Pih7IHVybDogYC9hcGkvJHtpc0dvb2RzID8gJ2NvbW1vZGl0eScgOiAnYWN0aXZpdHknfS8ke2lkfWAgfSlcclxuICAgICAgICAgICAgLnRoZW4oKHsgZGF0YSB9KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBkYXRhID0gcGFyc2VEYXRhKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXREYXRhISh7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4uZGF0YSxcclxuICAgICAgICAgICAgICAgICAgICBzdGFydFRpbWU6IGZvcm1hdFRpbWUobmV3IERhdGUoK2RhdGEub3JpZ2luYXRpb24pKSxcclxuICAgICAgICAgICAgICAgICAgICBlbmRUaW1lOiBmb3JtYXRUaW1lKG5ldyBEYXRlKCtkYXRhLmZpbmlzaCkpLFxyXG4gICAgICAgICAgICAgICAgICAgIGltZzogZGF0YS5vcmlnaW5JbWcsXHJcbiAgICAgICAgICAgICAgICAgICAgbWVyY2hhbnQ6IGRhdGEubWVyY2hhbnQgPyBwYXJzZURhdGEoZGF0YS5tZXJjaGFudCkgOiBudWxsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGNvbnNvbGUubG9nKTtcclxuICAgIH1cclxufSk7XHJcbiJdfQ==