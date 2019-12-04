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
var item_1 = require("../../components/list/item/item");
Page({
    isGoods: 0,
    data: {
        id: 1,
        like: 40,
        isCollected: false,
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
    exchange: item_1.exchange,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV0YWlscy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRldGFpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUdBLHlDQUEyQztBQUMzQyx5Q0FBeUQ7QUFDekQsd0RBQTJEO0FBRTNELElBQUksQ0FBQztJQUNELE9BQU8sRUFBRSxDQUFDO0lBQ1YsSUFBSSxFQUFFO1FBQ0YsRUFBRSxFQUFFLENBQUM7UUFDTCxJQUFJLEVBQUUsRUFBRTtRQUNSLFdBQVcsRUFBRSxLQUFLO0tBQ3JCO0lBQ0QsTUFBTSxZQUFDLEtBQXdDO1FBQzNDLElBQUcsQ0FBQyxLQUFLLEVBQUU7WUFDUCxPQUFPLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3hCLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQyxFQUFDLEtBQUssRUFBRSxDQUFDLEVBQUMsQ0FBQyxDQUFDO1NBQ3RDO1FBRUQsSUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUM7UUFDOUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzlCLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQztZQUNyQixLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU07U0FDbkMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUNELFFBQVEsaUJBQUE7SUFDUixPQUFPO1FBQVAsaUJBZUM7UUFkRyxJQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUNsQyxjQUFPLENBQUM7WUFDSixHQUFHLEVBQUUsV0FBVztZQUNoQixNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEtBQUs7WUFDOUIsSUFBSSxFQUFFO2dCQUNGLFFBQVEsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ3RCLElBQUksRUFBRSxJQUFJLENBQUMsT0FBTzthQUNyQjtTQUNKLENBQUM7YUFDRyxJQUFJLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxPQUFRLENBQUM7WUFDdEIsV0FBVyxFQUFFLENBQUMsR0FBRztZQUNqQixJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUM7U0FDdEQsQ0FBQyxFQUhVLENBR1YsQ0FBQzthQUNGLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUNELEtBQUssWUFBQyxPQUFlLEVBQUUsRUFBVTtRQUFqQyxpQkFjQztRQWJHLGNBQU8sQ0FBdUIsRUFBRSxHQUFHLEVBQUUsV0FBUSxPQUFPLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsVUFBVSxVQUFJLEVBQUksRUFBRSxDQUFDO2FBQ3JGLElBQUksQ0FBQyxVQUFDLEVBQVE7Z0JBQU4sY0FBSTtZQUNULElBQUksR0FBRyxnQkFBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3ZCLEtBQUksQ0FBQyxPQUFRLGNBQ04sSUFBSSxJQUNQLFNBQVMsRUFBRSxpQkFBVSxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQ2xELE9BQU8sRUFBRSxpQkFBVSxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQzNDLEdBQUcsRUFBRSxJQUFJLENBQUMsU0FBUyxFQUNuQixRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsZ0JBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFDekQsVUFBVSxFQUFFLENBQUMsT0FBTyxJQUN0QixDQUFDO1FBQ1AsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUM1QixDQUFDO0NBQ0osQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIOWFrOebiua0u+WKqOivpuaDhVxyXG4gKi9cclxuaW1wb3J0IHsgcmVxdWVzdCB9IGZyb20gJy4uLy4uL3V0aWxzL2h0dHAnO1xyXG5pbXBvcnQgeyBwYXJzZURhdGEsIGZvcm1hdFRpbWUgfSBmcm9tICcuLi8uLi91dGlscy91dGlsJztcclxuaW1wb3J0IHsgZXhjaGFuZ2UgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL2xpc3QvaXRlbS9pdGVtJztcclxuXHJcblBhZ2Uoe1xyXG4gICAgaXNHb29kczogMCxcclxuICAgIGRhdGE6IHtcclxuICAgICAgICBpZDogMSxcclxuICAgICAgICBsaWtlOiA0MCxcclxuICAgICAgICBpc0NvbGxlY3RlZDogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAgb25Mb2FkKHF1ZXJ5PzogUmVjb3JkPCdpc0dvb2RzJyB8ICdpZCcsIHN0cmluZz4pIHtcclxuICAgICAgICBpZighcXVlcnkpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcign6Lev55Sx5Y+C5pWw6ZSZ6K+vJyk7XHJcbiAgICAgICAgICAgIHJldHVybiB3eC5uYXZpZ2F0ZUJhY2soe2RlbHRhOiAxfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBpc0dvb2RzID0gdGhpcy5pc0dvb2RzID0gK3F1ZXJ5LmlzR29vZHM7XHJcbiAgICAgICAgdGhpcy5faW5pdChpc0dvb2RzLCBxdWVyeS5pZCk7XHJcbiAgICAgICAgd3guc2V0TmF2aWdhdGlvbkJhclRpdGxlKHtcclxuICAgICAgICAgICAgdGl0bGU6IGlzR29vZHMgPyAn5ZWG5ZOB6K+m5oOFJyA6ICfmtLvliqjor6bmg4UnXHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgZXhjaGFuZ2UsXHJcbiAgICBjb2xsZWN0KCkge1xyXG4gICAgICAgIGNvbnN0IG9sZCA9IHRoaXMuZGF0YS5pc0NvbGxlY3RlZDtcclxuICAgICAgICByZXF1ZXN0KHtcclxuICAgICAgICAgICAgdXJsOiAnL2FwaS9saWtlJyxcclxuICAgICAgICAgICAgbWV0aG9kOiBvbGQgPyAnREVMRVRFJyA6ICdQVVQnLFxyXG4gICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXRJZDogdGhpcy5kYXRhLmlkLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogdGhpcy5pc0dvb2RzXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbigoKSA9PiB0aGlzLnNldERhdGEhKHtcclxuICAgICAgICAgICAgICAgIGlzQ29sbGVjdGVkOiAhb2xkLFxyXG4gICAgICAgICAgICAgICAgbGlrZTogb2xkID8gdGhpcy5kYXRhLmxpa2UgLSAxIDogdGhpcy5kYXRhLmxpa2UgKyAxXHJcbiAgICAgICAgICAgIH0pKVxyXG4gICAgICAgICAgICAuY2F0Y2goY29uc29sZS5sb2cpO1xyXG4gICAgfSxcclxuICAgIF9pbml0KGlzR29vZHM6IG51bWJlciwgaWQ6IHN0cmluZykge1xyXG4gICAgICAgIHJlcXVlc3Q8SUFjdGl2ZSB8IElDb21tb2RpdHk+KHsgdXJsOiBgL2FwaS8ke2lzR29vZHMgPyAnY29tbW9kaXR5JyA6ICdhY3Rpdml0eSd9LyR7aWR9YCB9KVxyXG4gICAgICAgICAgICAudGhlbigoeyBkYXRhIH0pID0+IHtcclxuICAgICAgICAgICAgICAgIGRhdGEgPSBwYXJzZURhdGEoZGF0YSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldERhdGEhKHtcclxuICAgICAgICAgICAgICAgICAgICAuLi5kYXRhLFxyXG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0VGltZTogZm9ybWF0VGltZShuZXcgRGF0ZSgrZGF0YS5vcmlnaW5hdGlvbikpLFxyXG4gICAgICAgICAgICAgICAgICAgIGVuZFRpbWU6IGZvcm1hdFRpbWUobmV3IERhdGUoK2RhdGEuZmluaXNoKSksXHJcbiAgICAgICAgICAgICAgICAgICAgaW1nOiBkYXRhLm9yaWdpbkltZyxcclxuICAgICAgICAgICAgICAgICAgICBtZXJjaGFudDogZGF0YS5tZXJjaGFudCA/IHBhcnNlRGF0YShkYXRhLm1lcmNoYW50KSA6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgaXNBY3Rpdml0eTogIWlzR29vZHNcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goY29uc29sZS5sb2cpO1xyXG4gICAgfVxyXG59KTtcclxuIl19