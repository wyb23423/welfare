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
        goods: [],
        ad: new Array(5).fill('/public/images/23.jpg')
    } }, listFunc, { collect: function (e) {
        var _this = this;
        listFunc.collect(e)
            .then(function (_a) {
            var id = _a.id, collect = _a.collect;
            var _b;
            var index = _this.data.goods.findIndex(function (v) { return v.id === id; });
            if (index > -1) {
                _this.setData((_b = {}, _b["goods[" + index + "].isCollected"] = !collect, _b));
            }
        })
            .catch(console.log);
    },
    onShow: function () {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBR0EsNkRBQStEO0FBQy9ELHlDQUEyQztBQUMzQyx5Q0FBNkM7QUFFN0MsSUFBSSxZQUNGLElBQUksRUFBRTtRQUNKLFFBQVEsRUFBRSxFQUFlO1FBQ3pCLEtBQUssRUFBRSxFQUFrQjtRQUN6QixFQUFFLEVBQUUsSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLHVCQUF1QixDQUFDO0tBQy9DLElBRUUsUUFBUSxJQUNYLE9BQU8sWUFBQyxDQUFlO1FBQXZCLGlCQVNDO1FBUkMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7YUFDaEIsSUFBSSxDQUFDLFVBQUMsRUFBZTtnQkFBYixVQUFFLEVBQUUsb0JBQU87O1lBQ2xCLElBQU0sS0FBSyxHQUFHLEtBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUFYLENBQVcsQ0FBQyxDQUFDO1lBQzFELElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQyxFQUFFO2dCQUNkLEtBQUksQ0FBQyxPQUFRLFdBQUcsR0FBQyxXQUFTLEtBQUssa0JBQWUsSUFBRyxDQUFDLE9BQU8sTUFBRyxDQUFDO2FBQzlEO1FBQ0gsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN4QixDQUFDO0lBRUQsTUFBTTtRQUFOLGlCQW9CQztRQW5CQyxjQUFPLENBQW9CO1lBQ3pCLEdBQUcsRUFBRSwyQkFBMkI7WUFDaEMsSUFBSSxFQUFFO2dCQUNKLFdBQVcsRUFBRSxDQUFDO2dCQUNkLFFBQVEsRUFBRSxDQUFDO2FBQ1o7U0FDRixDQUFDO2FBQ0MsSUFBSSxDQUFDLFVBQUMsRUFBa0I7Z0JBQVIsbUJBQUk7WUFBUyxPQUFBLEtBQUksQ0FBQyxPQUFRLENBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxnQkFBUyxDQUFDLEVBQUUsQ0FBQztRQUFoRCxDQUFnRCxDQUFDO2FBQzlFLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFdEIsY0FBTyxDQUF1QjtZQUM1QixHQUFHLEVBQUUsNEJBQTRCO1lBQ2pDLElBQUksRUFBRTtnQkFDSixXQUFXLEVBQUUsQ0FBQztnQkFDZCxRQUFRLEVBQUUsQ0FBQzthQUNaO1NBQ0YsQ0FBQzthQUNDLElBQUksQ0FBQyxVQUFDLEVBQWtCO2dCQUFSLG1CQUFJO1lBQVMsT0FBQSxLQUFJLENBQUMsT0FBUSxDQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsZ0JBQVMsQ0FBQyxFQUFFLENBQUM7UUFBN0MsQ0FBNkMsQ0FBQzthQUMzRSxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3hCLENBQUMsSUFHRCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIOmmlumhtVxyXG4gKi9cclxuaW1wb3J0ICogYXMgbGlzdEZ1bmMgZnJvbSAnLi4vLi4vdGVtcGxhdGUvbGlzdF9pdGVtL2xpc3RfaXRlbSc7XHJcbmltcG9ydCB7IHJlcXVlc3QgfSBmcm9tICcuLi8uLi91dGlscy9odHRwJztcclxuaW1wb3J0IHsgcGFyc2VEYXRhIH0gZnJvbSAnLi4vLi4vdXRpbHMvdXRpbCc7XHJcblxyXG5QYWdlKHtcclxuICBkYXRhOiB7XHJcbiAgICBhY3Rpdml0eTogW10gYXMgSUFjdGl2ZVtdLFxyXG4gICAgZ29vZHM6IFtdIGFzIElDb21tb2RpdHlbXSxcclxuICAgIGFkOiBuZXcgQXJyYXkoNSkuZmlsbCgnL3B1YmxpYy9pbWFnZXMvMjMuanBnJylcclxuICB9LFxyXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PeS6i+S7tlxyXG4gIC4uLmxpc3RGdW5jLFxyXG4gIGNvbGxlY3QoZTogV3hUb3VjaEV2ZW50KSB7XHJcbiAgICBsaXN0RnVuYy5jb2xsZWN0KGUpXHJcbiAgICAgIC50aGVuKCh7IGlkLCBjb2xsZWN0IH0pID0+IHtcclxuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuZGF0YS5nb29kcy5maW5kSW5kZXgodiA9PiB2LmlkID09PSBpZCk7XHJcbiAgICAgICAgaWYgKGluZGV4ID4gLTEpIHtcclxuICAgICAgICAgIHRoaXMuc2V0RGF0YSEoeyBbYGdvb2RzWyR7aW5kZXh9XS5pc0NvbGxlY3RlZGBdOiAhY29sbGVjdCB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaChjb25zb2xlLmxvZyk7XHJcbiAgfSxcclxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PeeUn+WRveWRqOacn1xyXG4gIG9uU2hvdygpIHtcclxuICAgIHJlcXVlc3Q8UGFnZURhdGE8SUFjdGl2ZT4+KHtcclxuICAgICAgdXJsOiAnL2FwaS9hY3Rpdml0eS9wYWdpbmdRdWVyeScsXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBjdXJyZW50UGFnZTogMSxcclxuICAgICAgICBwYWdlU2l6ZTogMlxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gICAgICAudGhlbigoeyBkYXRhOiB7IGxpc3QgfSB9KSA9PiB0aGlzLnNldERhdGEhKHsgYWN0aXZpdHk6IGxpc3QubWFwKHBhcnNlRGF0YSkgfSkpXHJcbiAgICAgIC5jYXRjaChjb25zb2xlLmxvZyk7XHJcblxyXG4gICAgcmVxdWVzdDxQYWdlRGF0YTxJQ29tbW9kaXR5Pj4oe1xyXG4gICAgICB1cmw6ICcvYXBpL2NvbW1vZGl0eS9wYWdpbmdRdWVyeScsXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBjdXJyZW50UGFnZTogMSxcclxuICAgICAgICBwYWdlU2l6ZTogMlxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gICAgICAudGhlbigoeyBkYXRhOiB7IGxpc3QgfSB9KSA9PiB0aGlzLnNldERhdGEhKHsgZ29vZHM6IGxpc3QubWFwKHBhcnNlRGF0YSkgfSkpXHJcbiAgICAgIC5jYXRjaChjb25zb2xlLmxvZyk7XHJcbiAgfSxcclxuXHJcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbn0pO1xyXG4iXX0=