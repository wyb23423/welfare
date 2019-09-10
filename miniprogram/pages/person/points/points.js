"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("../../../utils/http");
Page({
    data: {
        integral: 0,
        credit: 0
    },
    onLoad: function () {
        var _this = this;
        http_1.request({ url: '/api/user' })
            .then(function (_a) {
            var _b = _a.data, integral = _b.integral, credit = _b.credit;
            return _this.setData({ integral: integral, credit: credit });
        })
            .catch(console.log);
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9pbnRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicG9pbnRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBR0EsNENBQThDO0FBRTlDLElBQUksQ0FBQztJQUNELElBQUksRUFBRTtRQUNGLFFBQVEsRUFBRSxDQUFDO1FBQ1gsTUFBTSxFQUFFLENBQUM7S0FDWjtJQUNELE1BQU07UUFBTixpQkFJQztRQUhHLGNBQU8sQ0FBUSxFQUFFLEdBQUcsRUFBRSxXQUFXLEVBQUUsQ0FBQzthQUMvQixJQUFJLENBQUMsVUFBQyxFQUE4QjtnQkFBNUIsWUFBMEIsRUFBbEIsc0JBQVEsRUFBRSxrQkFBTTtZQUFTLE9BQUEsS0FBSSxDQUFDLE9BQVEsQ0FBQyxFQUFFLFFBQVEsVUFBQSxFQUFFLE1BQU0sUUFBQSxFQUFFLENBQUM7UUFBbkMsQ0FBbUMsQ0FBQzthQUM3RSxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzVCLENBQUM7Q0FDSixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICog5oiR55qE56ev5YiGXHJcbiAqL1xyXG5pbXBvcnQgeyByZXF1ZXN0IH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvaHR0cCc7XHJcblxyXG5QYWdlKHtcclxuICAgIGRhdGE6IHtcclxuICAgICAgICBpbnRlZ3JhbDogMCxcclxuICAgICAgICBjcmVkaXQ6IDBcclxuICAgIH0sXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgcmVxdWVzdDxJVXNlcj4oeyB1cmw6ICcvYXBpL3VzZXInIH0pXHJcbiAgICAgICAgICAgIC50aGVuKCh7IGRhdGE6IHsgaW50ZWdyYWwsIGNyZWRpdCB9IH0pID0+IHRoaXMuc2V0RGF0YSEoeyBpbnRlZ3JhbCwgY3JlZGl0IH0pKVxyXG4gICAgICAgICAgICAuY2F0Y2goY29uc29sZS5sb2cpO1xyXG4gICAgfVxyXG59KTtcclxuIl19