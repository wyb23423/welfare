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
var http_1 = require("../../utils/http");
var util_1 = require("../../utils/util");
Page(__assign({ data: {
        activity: [],
        goods: []
    } }, listFunc, { onLoad: function () {
        var _this = this;
        http_1.request({
            url: '/api/activity/pagingQuery',
            data: {
                currentPage: 1,
                pageSize: 2
            }
        })
            .then(function (_a) {
            var list = _a.data.list;
            return _this.setData({ activity: list.map(util_1.parseData) });
        })
            .catch(console.log);
        http_1.request({
            url: '/api/commodity/pagingQuery',
            data: {
                currentPage: 1,
                pageSize: 2
            }
        })
            .then(function (_a) {
            var list = _a.data.list;
            return _this.setData({ goods: list.map(util_1.parseData) });
        })
            .catch(console.log);
    } }));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBR0EsNkRBQStEO0FBQy9ELHlDQUEyQztBQUMzQyx5Q0FBNkM7QUFFN0MsSUFBSSxZQUNGLElBQUksRUFBRTtRQUNKLFFBQVEsRUFBRSxFQUFlO1FBQ3pCLEtBQUssRUFBRSxFQUFrQjtLQUMxQixJQUVFLFFBQVEsSUFFWCxNQUFNO1FBQU4saUJBb0JDO1FBbkJDLGNBQU8sQ0FBb0I7WUFDekIsR0FBRyxFQUFFLDJCQUEyQjtZQUNoQyxJQUFJLEVBQUU7Z0JBQ0osV0FBVyxFQUFFLENBQUM7Z0JBQ2QsUUFBUSxFQUFFLENBQUM7YUFDWjtTQUNGLENBQUM7YUFDQyxJQUFJLENBQUMsVUFBQyxFQUFrQjtnQkFBUixtQkFBSTtZQUFTLE9BQUEsS0FBSSxDQUFDLE9BQVEsQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLGdCQUFTLENBQUMsRUFBRSxDQUFDO1FBQWhELENBQWdELENBQUM7YUFDOUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUV0QixjQUFPLENBQXVCO1lBQzVCLEdBQUcsRUFBRSw0QkFBNEI7WUFDakMsSUFBSSxFQUFFO2dCQUNKLFdBQVcsRUFBRSxDQUFDO2dCQUNkLFFBQVEsRUFBRSxDQUFDO2FBQ1o7U0FDRixDQUFDO2FBQ0MsSUFBSSxDQUFDLFVBQUMsRUFBa0I7Z0JBQVIsbUJBQUk7WUFBUyxPQUFBLEtBQUksQ0FBQyxPQUFRLENBQUMsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxnQkFBUyxDQUFDLEVBQUUsQ0FBQztRQUE3QyxDQUE2QyxDQUFDO2FBQzNFLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDeEIsQ0FBQyxJQUdELENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIOmmlumhtVxuICovXG5pbXBvcnQgKiBhcyBsaXN0RnVuYyBmcm9tICcuLi8uLi90ZW1wbGF0ZS9saXN0X2l0ZW0vbGlzdF9pdGVtJztcbmltcG9ydCB7IHJlcXVlc3QgfSBmcm9tICcuLi8uLi91dGlscy9odHRwJztcbmltcG9ydCB7IHBhcnNlRGF0YSB9IGZyb20gJy4uLy4uL3V0aWxzL3V0aWwnO1xuXG5QYWdlKHtcbiAgZGF0YToge1xuICAgIGFjdGl2aXR5OiBbXSBhcyBJQWN0aXZlW10sXG4gICAgZ29vZHM6IFtdIGFzIElDb21tb2RpdHlbXVxuICB9LFxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT3kuovku7ZcbiAgLi4ubGlzdEZ1bmMsXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT0955Sf5ZG95ZGo5pyfXG4gIG9uTG9hZCgpIHtcbiAgICByZXF1ZXN0PFBhZ2VEYXRhPElBY3RpdmU+Pih7XG4gICAgICB1cmw6ICcvYXBpL2FjdGl2aXR5L3BhZ2luZ1F1ZXJ5JyxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgY3VycmVudFBhZ2U6IDEsXG4gICAgICAgIHBhZ2VTaXplOiAyXG4gICAgICB9XG4gICAgfSlcbiAgICAgIC50aGVuKCh7IGRhdGE6IHsgbGlzdCB9IH0pID0+IHRoaXMuc2V0RGF0YSEoeyBhY3Rpdml0eTogbGlzdC5tYXAocGFyc2VEYXRhKSB9KSlcbiAgICAgIC5jYXRjaChjb25zb2xlLmxvZyk7XG5cbiAgICByZXF1ZXN0PFBhZ2VEYXRhPElDb21tb2RpdHk+Pih7XG4gICAgICB1cmw6ICcvYXBpL2NvbW1vZGl0eS9wYWdpbmdRdWVyeScsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIGN1cnJlbnRQYWdlOiAxLFxuICAgICAgICBwYWdlU2l6ZTogMlxuICAgICAgfVxuICAgIH0pXG4gICAgICAudGhlbigoeyBkYXRhOiB7IGxpc3QgfSB9KSA9PiB0aGlzLnNldERhdGEhKHsgZ29vZHM6IGxpc3QubWFwKHBhcnNlRGF0YSkgfSkpXG4gICAgICAuY2F0Y2goY29uc29sZS5sb2cpO1xuICB9LFxuXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxufSk7XG4iXX0=