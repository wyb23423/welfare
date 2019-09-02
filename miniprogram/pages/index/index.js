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
                _this.setData({ activity: list.map(constant_1.parseData) });
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
                _this.setData({ goods: list.map(constant_1.parseData) });
            }
        });
    } }));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBR0EsNkRBQStEO0FBQy9ELDJDQUFpRDtBQUVqRCxJQUFJLFlBQ0YsSUFBSSxFQUFFO1FBQ0osUUFBUSxFQUFFLEVBQWU7UUFDekIsS0FBSyxFQUFFLEVBQWtCO0tBQzFCLElBRUUsUUFBUSxJQUVYLE1BQU07UUFBTixpQkF3QkM7UUF2QkMsRUFBRSxDQUFDLE9BQU8sQ0FBQztZQUNULEdBQUcsRUFBRSxlQUFJLEdBQUcsMkJBQTJCO1lBQ3ZDLElBQUksRUFBRTtnQkFDSixXQUFXLEVBQUUsQ0FBQztnQkFDZCxRQUFRLEVBQUUsQ0FBQzthQUNaO1lBQ0QsT0FBTyxFQUFFLFVBQUMsR0FBRztnQkFDSyxJQUFBLHlCQUFJLENBQWlEO2dCQUNyRSxLQUFJLENBQUMsT0FBUSxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsb0JBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNuRCxDQUFDO1NBQ0YsQ0FBQyxDQUFDO1FBRUgsRUFBRSxDQUFDLE9BQU8sQ0FBQztZQUNULEdBQUcsRUFBRSxlQUFJLEdBQUcsNEJBQTRCO1lBQ3hDLElBQUksRUFBRTtnQkFDSixXQUFXLEVBQUUsQ0FBQztnQkFDZCxRQUFRLEVBQUUsQ0FBQzthQUNaO1lBQ0QsT0FBTyxFQUFFLFVBQUMsR0FBRztnQkFDSyxJQUFBLHlCQUFJLENBQW9EO2dCQUN4RSxLQUFJLENBQUMsT0FBUSxDQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsb0JBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNoRCxDQUFDO1NBQ0YsQ0FBQyxDQUFDO0lBQ0wsQ0FBQyxJQUdELENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIOmmlumhtVxuICovXG5pbXBvcnQgKiBhcyBsaXN0RnVuYyBmcm9tICcuLi8uLi90ZW1wbGF0ZS9saXN0X2l0ZW0vbGlzdF9pdGVtJztcbmltcG9ydCB7IEhPU1QsIHBhcnNlRGF0YSB9IGZyb20gJy4uLy4uL2NvbnN0YW50JztcblxuUGFnZSh7XG4gIGRhdGE6IHtcbiAgICBhY3Rpdml0eTogW10gYXMgSUFjdGl2ZVtdLFxuICAgIGdvb2RzOiBbXSBhcyBJQ29tbW9kaXR5W11cbiAgfSxcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT095LqL5Lu2XG4gIC4uLmxpc3RGdW5jLFxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PeeUn+WRveWRqOacn1xuICBvbkxvYWQoKSB7XG4gICAgd3gucmVxdWVzdCh7XG4gICAgICB1cmw6IEhPU1QgKyAnL2FwaS9hY3Rpdml0eS9wYWdpbmdRdWVyeScsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIGN1cnJlbnRQYWdlOiAxLFxuICAgICAgICBwYWdlU2l6ZTogMlxuICAgICAgfSxcbiAgICAgIHN1Y2Nlc3M6IChyZXMpID0+IHtcbiAgICAgICAgY29uc3QgeyBkYXRhOiB7IGxpc3QgfSB9ID0gPFJlc3BvZW5zRGF0YTxQYWdlRGF0YTxJQWN0aXZlPj4+cmVzLmRhdGE7XG4gICAgICAgIHRoaXMuc2V0RGF0YSEoeyBhY3Rpdml0eTogbGlzdC5tYXAocGFyc2VEYXRhKSB9KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHd4LnJlcXVlc3Qoe1xuICAgICAgdXJsOiBIT1NUICsgJy9hcGkvY29tbW9kaXR5L3BhZ2luZ1F1ZXJ5JyxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgY3VycmVudFBhZ2U6IDEsXG4gICAgICAgIHBhZ2VTaXplOiAyXG4gICAgICB9LFxuICAgICAgc3VjY2VzczogKHJlcykgPT4ge1xuICAgICAgICBjb25zdCB7IGRhdGE6IHsgbGlzdCB9IH0gPSA8UmVzcG9lbnNEYXRhPFBhZ2VEYXRhPElDb21tb2RpdHk+Pj5yZXMuZGF0YTtcbiAgICAgICAgdGhpcy5zZXREYXRhISh7IGdvb2RzOiBsaXN0Lm1hcChwYXJzZURhdGEpIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9LFxuXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxufSk7XG4iXX0=