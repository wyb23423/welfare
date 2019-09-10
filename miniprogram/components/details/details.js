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
Component({
    properties: {
        isActivity: {
            type: Boolean,
            value: true
        },
        id: {
            type: Number,
            value: 1
        }
    },
    data: {
        details: '123',
        integral: 21,
        credit: 0,
        name: '有爱的我们不孤独——自闭症儿童义诊系列活动',
        size: 1,
        location: '',
        startTime: util_1.formatTime(new Date()),
        endTime: util_1.formatTime(new Date(Date.now() + 1000 * 60 * 60 * 24)),
        look: 23,
        collect: 40,
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
    attached: function () {
        var _this = this;
        http_1.request({ url: "/api/" + (this.data.isActivity ? 'activity' : 'commodity') + "/" + this.data.id })
            .then(function (_a) {
            var data = _a.data;
            data = util_1.parseData(data);
            _this.setData(__assign({}, data, { startTime: util_1.formatTime(new Date(+data.origination)), endTime: util_1.formatTime(new Date(+data.finish)), img: data.originImg, merchant: util_1.parseData(data.merchant) }));
        })
            .catch(console.log);
    },
    methods: {
        exchange: list_item_1.exchange,
        collect: function () {
            var _this = this;
            var old = this.data.isCollected;
            http_1.request({
                url: '/api/like',
                method: old ? 'DELETE' : 'PUT',
                data: {
                    targetId: this.data.id,
                    type: +!this.data.isActivity
                }
            })
                .then(function () { return _this.setData({
                isCollected: !old,
                collect: old ? _this.data.collect - 1 : _this.data.collect + 1
            }); })
                .catch(console.log);
        },
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV0YWlscy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRldGFpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUdBLHlDQUEyQztBQUMzQyx5Q0FBeUQ7QUFDekQsZ0VBQThEO0FBRTlELFNBQVMsQ0FBQztJQUNOLFVBQVUsRUFBRTtRQUNSLFVBQVUsRUFBRTtZQUNSLElBQUksRUFBRSxPQUFPO1lBQ2IsS0FBSyxFQUFFLElBQUk7U0FDZDtRQUNELEVBQUUsRUFBRTtZQUNBLElBQUksRUFBRSxNQUFNO1lBQ1osS0FBSyxFQUFFLENBQUM7U0FDWDtLQUNKO0lBQ0QsSUFBSSxFQUFFO1FBQ0YsT0FBTyxFQUFFLEtBQUs7UUFDZCxRQUFRLEVBQUUsRUFBRTtRQUNaLE1BQU0sRUFBRSxDQUFDO1FBQ1QsSUFBSSxFQUFFLHVCQUF1QjtRQUM3QixJQUFJLEVBQUUsQ0FBQztRQUNQLFFBQVEsRUFBRSxFQUFFO1FBQ1osU0FBUyxFQUFFLGlCQUFVLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUNqQyxPQUFPLEVBQUUsaUJBQVUsQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsSUFBSSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFDL0QsSUFBSSxFQUFFLEVBQUU7UUFDUixPQUFPLEVBQUUsRUFBRTtRQUNYLEdBQUcsRUFBRSx1QkFBdUI7UUFDNUIsV0FBVyxFQUFFLEtBQUs7UUFDbEIsUUFBUSxFQUFFO1lBQ04sSUFBSSxFQUFFLFlBQVk7WUFDbEIsYUFBYSxFQUFFLEVBQUU7WUFDakIsSUFBSSxFQUFFLEVBQUU7WUFDUixHQUFHLEVBQUUsdUJBQXVCO1lBQzVCLE1BQU0sRUFBRSxzRUFBc0U7WUFDOUUsU0FBUyxFQUFFLHVCQUF1QjtZQUNsQyxNQUFNLEVBQUUsU0FBUztTQUNwQjtLQUNKO0lBQ0QsUUFBUTtRQUFSLGlCQWFDO1FBWkcsY0FBTyxDQUFVLEVBQUUsR0FBRyxFQUFFLFdBQVEsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsV0FBVyxVQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBSSxFQUFFLENBQUM7YUFDL0YsSUFBSSxDQUFDLFVBQUMsRUFBUTtnQkFBTixjQUFJO1lBQ1QsSUFBSSxHQUFZLGdCQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDaEMsS0FBSSxDQUFDLE9BQVEsY0FDTixJQUFJLElBQ1AsU0FBUyxFQUFFLGlCQUFVLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsRUFDbEQsT0FBTyxFQUFFLGlCQUFVLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsRUFDM0MsR0FBRyxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQ25CLFFBQVEsRUFBRSxnQkFBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFDcEMsQ0FBQztRQUNQLENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUNELE9BQU8sRUFBRTtRQUNMLFFBQVEsc0JBQUE7UUFDUixPQUFPO1lBQVAsaUJBZUM7WUFkRyxJQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztZQUNsQyxjQUFPLENBQUM7Z0JBQ0osR0FBRyxFQUFFLFdBQVc7Z0JBQ2hCLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsS0FBSztnQkFDOUIsSUFBSSxFQUFFO29CQUNGLFFBQVEsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7b0JBQ3RCLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVO2lCQUMvQjthQUNKLENBQUM7aUJBQ0csSUFBSSxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsT0FBUSxDQUFDO2dCQUN0QixXQUFXLEVBQUUsQ0FBQyxHQUFHO2dCQUNqQixPQUFPLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUM7YUFDL0QsQ0FBQyxFQUhVLENBR1YsQ0FBQztpQkFDRixLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzVCLENBQUM7S0FDSjtDQUNKLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiDlhaznm4rmtLvliqjor6bmg4VcclxuICovXHJcbmltcG9ydCB7IHJlcXVlc3QgfSBmcm9tICcuLi8uLi91dGlscy9odHRwJztcclxuaW1wb3J0IHsgcGFyc2VEYXRhLCBmb3JtYXRUaW1lIH0gZnJvbSAnLi4vLi4vdXRpbHMvdXRpbCc7XHJcbmltcG9ydCB7IGV4Y2hhbmdlIH0gZnJvbSAnLi4vLi4vdGVtcGxhdGUvbGlzdF9pdGVtL2xpc3RfaXRlbSc7XHJcblxyXG5Db21wb25lbnQoe1xyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIGlzQWN0aXZpdHk6IHtcclxuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcclxuICAgICAgICAgICAgdmFsdWU6IHRydWVcclxuICAgICAgICB9LFxyXG4gICAgICAgIGlkOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IE51bWJlcixcclxuICAgICAgICAgICAgdmFsdWU6IDFcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgZGF0YToge1xyXG4gICAgICAgIGRldGFpbHM6ICcxMjMnLFxyXG4gICAgICAgIGludGVncmFsOiAyMSxcclxuICAgICAgICBjcmVkaXQ6IDAsXHJcbiAgICAgICAgbmFtZTogJ+acieeIseeahOaIkeS7rOS4jeWtpOeLrOKAlOKAlOiHqumXreeXh+WEv+erpeS5ieiviuezu+WIl+a0u+WKqCcsXHJcbiAgICAgICAgc2l6ZTogMSxcclxuICAgICAgICBsb2NhdGlvbjogJycsXHJcbiAgICAgICAgc3RhcnRUaW1lOiBmb3JtYXRUaW1lKG5ldyBEYXRlKCkpLFxyXG4gICAgICAgIGVuZFRpbWU6IGZvcm1hdFRpbWUobmV3IERhdGUoRGF0ZS5ub3coKSArIDEwMDAgKiA2MCAqIDYwICogMjQpKSxcclxuICAgICAgICBsb29rOiAyMyxcclxuICAgICAgICBjb2xsZWN0OiA0MCxcclxuICAgICAgICBpbWc6ICcvcHVibGljL2ltYWdlcy8yMy5qcGcnLFxyXG4gICAgICAgIGlzQ29sbGVjdGVkOiBmYWxzZSxcclxuICAgICAgICBtZXJjaGFudDoge1xyXG4gICAgICAgICAgICBuYW1lOiAn5YyX5Lqs5YS/56ul5Yy755aX5Y+R5bGV5Lit5b+DJyxcclxuICAgICAgICAgICAgYWN0aXZpdHlDb3VudDogMTIsXHJcbiAgICAgICAgICAgIGZhbnM6IDUyLFxyXG4gICAgICAgICAgICBpbWc6ICcvcHVibGljL2ltYWdlcy8yMy5qcGcnLFxyXG4gICAgICAgICAgICBkZXRhaWw6ICfljJfkuqzljLvnlpflhL/nq6Xlj5HlsZXkuK3lv4PnmoTlraTni6znl4flkozlhbbku5bpmpznoo3mlaLkuo7mnI3liqHvvIzmmK94eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4JyxcclxuICAgICAgICAgICAgb3JpZ2luSW1nOiAnL3B1YmxpYy9pbWFnZXMvMjMuanBnJyxcclxuICAgICAgICAgICAgdXNlcklkOiAnZnNkZnNmZCdcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgYXR0YWNoZWQoKSB7XHJcbiAgICAgICAgcmVxdWVzdDxJQWN0aXZlPih7IHVybDogYC9hcGkvJHt0aGlzLmRhdGEuaXNBY3Rpdml0eSA/ICdhY3Rpdml0eScgOiAnY29tbW9kaXR5J30vJHt0aGlzLmRhdGEuaWR9YCB9KVxyXG4gICAgICAgICAgICAudGhlbigoeyBkYXRhIH0pID0+IHtcclxuICAgICAgICAgICAgICAgIGRhdGEgPSA8SUFjdGl2ZT5wYXJzZURhdGEoZGF0YSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldERhdGEhKHtcclxuICAgICAgICAgICAgICAgICAgICAuLi5kYXRhLFxyXG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0VGltZTogZm9ybWF0VGltZShuZXcgRGF0ZSgrZGF0YS5vcmlnaW5hdGlvbikpLFxyXG4gICAgICAgICAgICAgICAgICAgIGVuZFRpbWU6IGZvcm1hdFRpbWUobmV3IERhdGUoK2RhdGEuZmluaXNoKSksXHJcbiAgICAgICAgICAgICAgICAgICAgaW1nOiBkYXRhLm9yaWdpbkltZyxcclxuICAgICAgICAgICAgICAgICAgICBtZXJjaGFudDogcGFyc2VEYXRhKGRhdGEubWVyY2hhbnQpXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGNvbnNvbGUubG9nKTtcclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgZXhjaGFuZ2UsXHJcbiAgICAgICAgY29sbGVjdCgpIHtcclxuICAgICAgICAgICAgY29uc3Qgb2xkID0gdGhpcy5kYXRhLmlzQ29sbGVjdGVkO1xyXG4gICAgICAgICAgICByZXF1ZXN0KHtcclxuICAgICAgICAgICAgICAgIHVybDogJy9hcGkvbGlrZScsXHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6IG9sZCA/ICdERUxFVEUnIDogJ1BVVCcsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0SWQ6IHRoaXMuZGF0YS5pZCxcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiArIXRoaXMuZGF0YS5pc0FjdGl2aXR5XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB0aGlzLnNldERhdGEhKHtcclxuICAgICAgICAgICAgICAgICAgICBpc0NvbGxlY3RlZDogIW9sZCxcclxuICAgICAgICAgICAgICAgICAgICBjb2xsZWN0OiBvbGQgPyB0aGlzLmRhdGEuY29sbGVjdCAtIDEgOiB0aGlzLmRhdGEuY29sbGVjdCArIDFcclxuICAgICAgICAgICAgICAgIH0pKVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKGNvbnNvbGUubG9nKTtcclxuICAgICAgICB9LFxyXG4gICAgfVxyXG59KTtcclxuIl19