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
var listFunc = require("../../template/list_item/list_item");
var constant_1 = require("../../constant");
Page(__assign({ data: {
        activity: [],
        goods: []
    } }, listFunc, { onLoad: function () {
        var _this = this;
        wx.request({
            url: constant_1.HOST + '/api/activity/pagingQuery',
            data: {
                currentPage: 1,
                pageSize: 2
            },
            success: function (res) {
                var list = res.data.data.list;
                _this.setData({ activity: list.map(_this._parseData) });
            }
        });
        wx.request({
            url: constant_1.HOST + '/api/commodity/pagingQuery',
            data: {
                currentPage: 1,
                pageSize: 2
            },
            success: function (res) {
                var list = res.data.data.list;
                _this.setData({ goods: list.map(_this._parseData) });
            }
        });
    },
    _parseData: function (v) {
        v.authentication = Reflect.get(constant_1.AUTHENTICATION, v.authentication) || '未认证';
        v.img = '/public/images/23.jpg';
        return v;
    } }));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBR0EsNkRBQStEO0FBQy9ELDJDQUFzRDtBQUV0RCxJQUFJLFlBQ0YsSUFBSSxFQUFFO1FBQ0osUUFBUSxFQUFFLEVBQWU7UUFDekIsS0FBSyxFQUFFLEVBQWtCO0tBQzFCLElBRUUsUUFBUSxJQUVYLE1BQU07UUFBTixpQkF3QkM7UUF2QkMsRUFBRSxDQUFDLE9BQU8sQ0FBQztZQUNULEdBQUcsRUFBRSxlQUFJLEdBQUcsMkJBQTJCO1lBQ3ZDLElBQUksRUFBRTtnQkFDSixXQUFXLEVBQUUsQ0FBQztnQkFDZCxRQUFRLEVBQUUsQ0FBQzthQUNaO1lBQ0QsT0FBTyxFQUFFLFVBQUMsR0FBRztnQkFDSyxJQUFBLHlCQUFJLENBQWlEO2dCQUNyRSxLQUFJLENBQUMsT0FBUSxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUN6RCxDQUFDO1NBQ0YsQ0FBQyxDQUFDO1FBRUgsRUFBRSxDQUFDLE9BQU8sQ0FBQztZQUNULEdBQUcsRUFBRSxlQUFJLEdBQUcsNEJBQTRCO1lBQ3hDLElBQUksRUFBRTtnQkFDSixXQUFXLEVBQUUsQ0FBQztnQkFDZCxRQUFRLEVBQUUsQ0FBQzthQUNaO1lBQ0QsT0FBTyxFQUFFLFVBQUMsR0FBRztnQkFDSyxJQUFBLHlCQUFJLENBQW9EO2dCQUN4RSxLQUFJLENBQUMsT0FBUSxDQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUN0RCxDQUFDO1NBQ0YsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUdELFVBQVUsWUFBQyxDQUF1QjtRQUNoQyxDQUFDLENBQUMsY0FBYyxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMseUJBQWMsRUFBRSxDQUFDLENBQUMsY0FBYyxDQUFDLElBQUksS0FBSyxDQUFDO1FBQzFFLENBQUMsQ0FBQyxHQUFHLEdBQUcsdUJBQXVCLENBQUM7UUFFaEMsT0FBTyxDQUFDLENBQUM7SUFDWCxDQUFDLElBQ0QsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICog6aaW6aG1XG4gKi9cbmltcG9ydCAqIGFzIGxpc3RGdW5jIGZyb20gXCIuLi8uLi90ZW1wbGF0ZS9saXN0X2l0ZW0vbGlzdF9pdGVtXCI7XG5pbXBvcnQgeyBIT1NULCBBVVRIRU5USUNBVElPTiB9IGZyb20gXCIuLi8uLi9jb25zdGFudFwiO1xuXG5QYWdlKHtcbiAgZGF0YToge1xuICAgIGFjdGl2aXR5OiBbXSBhcyBJQWN0aXZlW10sXG4gICAgZ29vZHM6IFtdIGFzIElDb21tb2RpdHlbXVxuICB9LFxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT3kuovku7ZcbiAgLi4ubGlzdEZ1bmMsXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT0955Sf5ZG95ZGo5pyfXG4gIG9uTG9hZCgpIHtcbiAgICB3eC5yZXF1ZXN0KHtcbiAgICAgIHVybDogSE9TVCArICcvYXBpL2FjdGl2aXR5L3BhZ2luZ1F1ZXJ5JyxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgY3VycmVudFBhZ2U6IDEsXG4gICAgICAgIHBhZ2VTaXplOiAyXG4gICAgICB9LFxuICAgICAgc3VjY2VzczogKHJlcykgPT4ge1xuICAgICAgICBjb25zdCB7IGRhdGE6IHsgbGlzdCB9IH0gPSA8UmVzcG9lbnNEYXRhPFBhZ2VEYXRhPElBY3RpdmU+Pj5yZXMuZGF0YTtcbiAgICAgICAgdGhpcy5zZXREYXRhISh7IGFjdGl2aXR5OiBsaXN0Lm1hcCh0aGlzLl9wYXJzZURhdGEpIH0pO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgd3gucmVxdWVzdCh7XG4gICAgICB1cmw6IEhPU1QgKyAnL2FwaS9jb21tb2RpdHkvcGFnaW5nUXVlcnknLFxuICAgICAgZGF0YToge1xuICAgICAgICBjdXJyZW50UGFnZTogMSxcbiAgICAgICAgcGFnZVNpemU6IDJcbiAgICAgIH0sXG4gICAgICBzdWNjZXNzOiAocmVzKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgZGF0YTogeyBsaXN0IH0gfSA9IDxSZXNwb2Vuc0RhdGE8UGFnZURhdGE8SUNvbW1vZGl0eT4+PnJlcy5kYXRhO1xuICAgICAgICB0aGlzLnNldERhdGEhKHsgZ29vZHM6IGxpc3QubWFwKHRoaXMuX3BhcnNlRGF0YSkgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sXG5cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIF9wYXJzZURhdGEodjogSUNvbW1vZGl0eSB8IElBY3RpdmUpIHtcbiAgICB2LmF1dGhlbnRpY2F0aW9uID0gUmVmbGVjdC5nZXQoQVVUSEVOVElDQVRJT04sIHYuYXV0aGVudGljYXRpb24pIHx8ICfmnKrorqTor4EnO1xuICAgIHYuaW1nID0gJy9wdWJsaWMvaW1hZ2VzLzIzLmpwZyc7XG5cbiAgICByZXR1cm4gdjtcbiAgfVxufSk7XG4iXX0=