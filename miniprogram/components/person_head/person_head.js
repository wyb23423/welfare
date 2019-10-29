"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var store_1 = require("../../constant/store");
Component({
    properties: {
        isindex: {
            type: Boolean,
            value: false
        }
    },
    ready: function () {
        this.setData({
            username: wx.getStorageSync(store_1.USER_NAME)
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVyc29uX2hlYWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwZXJzb25faGVhZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUdBLDhDQUFpRDtBQUNqRCxTQUFTLENBQUM7SUFDTixVQUFVLEVBQUU7UUFDUixPQUFPLEVBQUU7WUFDTCxJQUFJLEVBQUUsT0FBTztZQUNiLEtBQUssRUFBRSxLQUFLO1NBQ2Y7S0FDSjtJQUNELEtBQUs7UUFDRCxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ1QsUUFBUSxFQUFFLEVBQUUsQ0FBQyxjQUFjLENBQUMsaUJBQVMsQ0FBQztTQUN6QyxDQUFDLENBQUM7SUFDUCxDQUFDO0NBQ0osQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIOS4quS6uuS/oeaBr+mhtemhtumDqOWktOWDj+WPiuWQjeensFxyXG4gKi9cclxuaW1wb3J0IHsgVVNFUl9OQU1FIH0gZnJvbSAnLi4vLi4vY29uc3RhbnQvc3RvcmUnO1xyXG5Db21wb25lbnQoe1xyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIGlzaW5kZXg6IHtcclxuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcclxuICAgICAgICAgICAgdmFsdWU6IGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHJlYWR5KCkge1xyXG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICAgIHVzZXJuYW1lOiB3eC5nZXRTdG9yYWdlU3luYyhVU0VSX05BTUUpXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0pO1xyXG4iXX0=