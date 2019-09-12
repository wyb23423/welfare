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
        itemid: {
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
    ready: function () {
        var _this = this;
        http_1.request({ url: "/api/" + (this.data.isActivity ? 'activity' : 'commodity') + "/" + this.data.itemid })
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
                    targetId: this.data.itemid,
                    type: +!this.data.isActivity
                }
            })
                .then(function () { return _this.setData({
                isCollected: !old,
                like: old ? _this.data.like - 1 : _this.data.like + 1
            }); })
                .catch(console.log);
        },
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV0YWlscy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRldGFpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUdBLHlDQUEyQztBQUMzQyx5Q0FBeUQ7QUFDekQsZ0VBQThEO0FBRTlELFNBQVMsQ0FBQztJQUNOLFVBQVUsRUFBRTtRQUNSLFVBQVUsRUFBRTtZQUNSLElBQUksRUFBRSxPQUFPO1lBQ2IsS0FBSyxFQUFFLElBQUk7U0FDZDtRQUNELE1BQU0sRUFBRTtZQUNKLElBQUksRUFBRSxNQUFNO1lBQ1osS0FBSyxFQUFFLENBQUM7U0FDWDtLQUNKO0lBQ0QsSUFBSSxFQUFFO1FBQ0YsT0FBTyxFQUFFLEtBQUs7UUFDZCxRQUFRLEVBQUUsRUFBRTtRQUNaLE1BQU0sRUFBRSxDQUFDO1FBQ1QsSUFBSSxFQUFFLHVCQUF1QjtRQUM3QixJQUFJLEVBQUUsQ0FBQztRQUNQLFFBQVEsRUFBRSxFQUFFO1FBQ1osU0FBUyxFQUFFLGlCQUFVLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUNqQyxPQUFPLEVBQUUsaUJBQVUsQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsSUFBSSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFDL0QsSUFBSSxFQUFFLEVBQUU7UUFDUixJQUFJLEVBQUUsRUFBRTtRQUNSLEdBQUcsRUFBRSx1QkFBdUI7UUFDNUIsV0FBVyxFQUFFLEtBQUs7UUFDbEIsUUFBUSxFQUFFO1lBQ04sSUFBSSxFQUFFLFlBQVk7WUFDbEIsYUFBYSxFQUFFLEVBQUU7WUFDakIsSUFBSSxFQUFFLEVBQUU7WUFDUixHQUFHLEVBQUUsdUJBQXVCO1lBQzVCLE1BQU0sRUFBRSxzRUFBc0U7WUFDOUUsU0FBUyxFQUFFLHVCQUF1QjtZQUNsQyxNQUFNLEVBQUUsU0FBUztTQUNwQjtLQUNKO0lBQ0QsS0FBSztRQUFMLGlCQWFDO1FBWkcsY0FBTyxDQUFVLEVBQUUsR0FBRyxFQUFFLFdBQVEsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsV0FBVyxVQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBUSxFQUFFLENBQUM7YUFDbkcsSUFBSSxDQUFDLFVBQUMsRUFBUTtnQkFBTixjQUFJO1lBQ1QsSUFBSSxHQUFZLGdCQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDaEMsS0FBSSxDQUFDLE9BQVEsY0FDTixJQUFJLElBQ1AsU0FBUyxFQUFFLGlCQUFVLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsRUFDbEQsT0FBTyxFQUFFLGlCQUFVLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsRUFDM0MsR0FBRyxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQ25CLFFBQVEsRUFBRSxnQkFBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFDcEMsQ0FBQztRQUNQLENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUNELE9BQU8sRUFBRTtRQUNMLFFBQVEsc0JBQUE7UUFDUixPQUFPO1lBQVAsaUJBZUM7WUFkRyxJQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztZQUNsQyxjQUFPLENBQUM7Z0JBQ0osR0FBRyxFQUFFLFdBQVc7Z0JBQ2hCLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsS0FBSztnQkFDOUIsSUFBSSxFQUFFO29CQUNGLFFBQVEsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU07b0JBQzFCLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVO2lCQUMvQjthQUNKLENBQUM7aUJBQ0csSUFBSSxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsT0FBUSxDQUFDO2dCQUN0QixXQUFXLEVBQUUsQ0FBQyxHQUFHO2dCQUNqQixJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUM7YUFDdEQsQ0FBQyxFQUhVLENBR1YsQ0FBQztpQkFDRixLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzVCLENBQUM7S0FDSjtDQUNKLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiDlhaznm4rmtLvliqjor6bmg4VcclxuICovXHJcbmltcG9ydCB7IHJlcXVlc3QgfSBmcm9tICcuLi8uLi91dGlscy9odHRwJztcclxuaW1wb3J0IHsgcGFyc2VEYXRhLCBmb3JtYXRUaW1lIH0gZnJvbSAnLi4vLi4vdXRpbHMvdXRpbCc7XHJcbmltcG9ydCB7IGV4Y2hhbmdlIH0gZnJvbSAnLi4vLi4vdGVtcGxhdGUvbGlzdF9pdGVtL2xpc3RfaXRlbSc7XHJcblxyXG5Db21wb25lbnQoe1xyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIGlzQWN0aXZpdHk6IHtcclxuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcclxuICAgICAgICAgICAgdmFsdWU6IHRydWVcclxuICAgICAgICB9LFxyXG4gICAgICAgIGl0ZW1pZDoge1xyXG4gICAgICAgICAgICB0eXBlOiBOdW1iZXIsXHJcbiAgICAgICAgICAgIHZhbHVlOiAxXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGRhdGE6IHtcclxuICAgICAgICBkZXRhaWxzOiAnMTIzJyxcclxuICAgICAgICBpbnRlZ3JhbDogMjEsXHJcbiAgICAgICAgY3JlZGl0OiAwLFxyXG4gICAgICAgIG5hbWU6ICfmnInniLHnmoTmiJHku6zkuI3lraTni6zigJTigJToh6rpl63nl4flhL/nq6XkuYnor4rns7vliJfmtLvliqgnLFxyXG4gICAgICAgIHNpemU6IDEsXHJcbiAgICAgICAgbG9jYXRpb246ICcnLFxyXG4gICAgICAgIHN0YXJ0VGltZTogZm9ybWF0VGltZShuZXcgRGF0ZSgpKSxcclxuICAgICAgICBlbmRUaW1lOiBmb3JtYXRUaW1lKG5ldyBEYXRlKERhdGUubm93KCkgKyAxMDAwICogNjAgKiA2MCAqIDI0KSksXHJcbiAgICAgICAgbG9vazogMjMsXHJcbiAgICAgICAgbGlrZTogNDAsXHJcbiAgICAgICAgaW1nOiAnL3B1YmxpYy9pbWFnZXMvMjMuanBnJyxcclxuICAgICAgICBpc0NvbGxlY3RlZDogZmFsc2UsXHJcbiAgICAgICAgbWVyY2hhbnQ6IHtcclxuICAgICAgICAgICAgbmFtZTogJ+WMl+S6rOWEv+erpeWMu+eWl+WPkeWxleS4reW/gycsXHJcbiAgICAgICAgICAgIGFjdGl2aXR5Q291bnQ6IDEyLFxyXG4gICAgICAgICAgICBmYW5zOiA1MixcclxuICAgICAgICAgICAgaW1nOiAnL3B1YmxpYy9pbWFnZXMvMjMuanBnJyxcclxuICAgICAgICAgICAgZGV0YWlsOiAn5YyX5Lqs5Yy755aX5YS/56ul5Y+R5bGV5Lit5b+D55qE5a2k54us55eH5ZKM5YW25LuW6Zqc56KN5pWi5LqO5pyN5Yqh77yM5piveHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eCcsXHJcbiAgICAgICAgICAgIG9yaWdpbkltZzogJy9wdWJsaWMvaW1hZ2VzLzIzLmpwZycsXHJcbiAgICAgICAgICAgIHVzZXJJZDogJ2ZzZGZzZmQnXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHJlYWR5KCkge1xyXG4gICAgICAgIHJlcXVlc3Q8SUFjdGl2ZT4oeyB1cmw6IGAvYXBpLyR7dGhpcy5kYXRhLmlzQWN0aXZpdHkgPyAnYWN0aXZpdHknIDogJ2NvbW1vZGl0eSd9LyR7dGhpcy5kYXRhLml0ZW1pZH1gIH0pXHJcbiAgICAgICAgICAgIC50aGVuKCh7IGRhdGEgfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZGF0YSA9IDxJQWN0aXZlPnBhcnNlRGF0YShkYXRhKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0RGF0YSEoe1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLmRhdGEsXHJcbiAgICAgICAgICAgICAgICAgICAgc3RhcnRUaW1lOiBmb3JtYXRUaW1lKG5ldyBEYXRlKCtkYXRhLm9yaWdpbmF0aW9uKSksXHJcbiAgICAgICAgICAgICAgICAgICAgZW5kVGltZTogZm9ybWF0VGltZShuZXcgRGF0ZSgrZGF0YS5maW5pc2gpKSxcclxuICAgICAgICAgICAgICAgICAgICBpbWc6IGRhdGEub3JpZ2luSW1nLFxyXG4gICAgICAgICAgICAgICAgICAgIG1lcmNoYW50OiBwYXJzZURhdGEoZGF0YS5tZXJjaGFudClcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goY29uc29sZS5sb2cpO1xyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgICBleGNoYW5nZSxcclxuICAgICAgICBjb2xsZWN0KCkge1xyXG4gICAgICAgICAgICBjb25zdCBvbGQgPSB0aGlzLmRhdGEuaXNDb2xsZWN0ZWQ7XHJcbiAgICAgICAgICAgIHJlcXVlc3Qoe1xyXG4gICAgICAgICAgICAgICAgdXJsOiAnL2FwaS9saWtlJyxcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogb2xkID8gJ0RFTEVURScgOiAnUFVUJyxcclxuICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICB0YXJnZXRJZDogdGhpcy5kYXRhLml0ZW1pZCxcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiArIXRoaXMuZGF0YS5pc0FjdGl2aXR5XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB0aGlzLnNldERhdGEhKHtcclxuICAgICAgICAgICAgICAgICAgICBpc0NvbGxlY3RlZDogIW9sZCxcclxuICAgICAgICAgICAgICAgICAgICBsaWtlOiBvbGQgPyB0aGlzLmRhdGEubGlrZSAtIDEgOiB0aGlzLmRhdGEubGlrZSArIDFcclxuICAgICAgICAgICAgICAgIH0pKVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKGNvbnNvbGUubG9nKTtcclxuICAgICAgICB9LFxyXG4gICAgfVxyXG59KTtcclxuIl19