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
    onLoad: function () {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBR0EsNkRBQStEO0FBQy9ELHlDQUEyQztBQUMzQyx5Q0FBNkM7QUFFN0MsSUFBSSxZQUNGLElBQUksRUFBRTtRQUNKLFFBQVEsRUFBRSxFQUFlO1FBQ3pCLEtBQUssRUFBRSxFQUFrQjtLQUMxQixJQUVFLFFBQVEsSUFDWCxPQUFPLFlBQUMsQ0FBZTtRQUF2QixpQkFTQztRQVJDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO2FBQ2hCLElBQUksQ0FBQyxVQUFDLEVBQWU7Z0JBQWIsVUFBRSxFQUFFLG9CQUFPOztZQUNsQixJQUFNLEtBQUssR0FBRyxLQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBWCxDQUFXLENBQUMsQ0FBQztZQUMxRCxJQUFJLEtBQUssR0FBRyxDQUFDLENBQUMsRUFBRTtnQkFDZCxLQUFJLENBQUMsT0FBUSxXQUFHLEdBQUMsV0FBUyxLQUFLLGtCQUFlLElBQUcsQ0FBQyxPQUFPLE1BQUcsQ0FBQzthQUM5RDtRQUNILENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDeEIsQ0FBQztJQUVELE1BQU07UUFBTixpQkFvQkM7UUFuQkMsY0FBTyxDQUFvQjtZQUN6QixHQUFHLEVBQUUsMkJBQTJCO1lBQ2hDLElBQUksRUFBRTtnQkFDSixXQUFXLEVBQUUsQ0FBQztnQkFDZCxRQUFRLEVBQUUsQ0FBQzthQUNaO1NBQ0YsQ0FBQzthQUNDLElBQUksQ0FBQyxVQUFDLEVBQWtCO2dCQUFSLG1CQUFJO1lBQVMsT0FBQSxLQUFJLENBQUMsT0FBUSxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsZ0JBQVMsQ0FBQyxFQUFFLENBQUM7UUFBaEQsQ0FBZ0QsQ0FBQzthQUM5RSxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRXRCLGNBQU8sQ0FBdUI7WUFDNUIsR0FBRyxFQUFFLDRCQUE0QjtZQUNqQyxJQUFJLEVBQUU7Z0JBQ0osV0FBVyxFQUFFLENBQUM7Z0JBQ2QsUUFBUSxFQUFFLENBQUM7YUFDWjtTQUNGLENBQUM7YUFDQyxJQUFJLENBQUMsVUFBQyxFQUFrQjtnQkFBUixtQkFBSTtZQUFTLE9BQUEsS0FBSSxDQUFDLE9BQVEsQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLGdCQUFTLENBQUMsRUFBRSxDQUFDO1FBQTdDLENBQTZDLENBQUM7YUFDM0UsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN4QixDQUFDLElBR0QsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiDpppbpobVcclxuICovXHJcbmltcG9ydCAqIGFzIGxpc3RGdW5jIGZyb20gJy4uLy4uL3RlbXBsYXRlL2xpc3RfaXRlbS9saXN0X2l0ZW0nO1xyXG5pbXBvcnQgeyByZXF1ZXN0IH0gZnJvbSAnLi4vLi4vdXRpbHMvaHR0cCc7XHJcbmltcG9ydCB7IHBhcnNlRGF0YSB9IGZyb20gJy4uLy4uL3V0aWxzL3V0aWwnO1xyXG5cclxuUGFnZSh7XHJcbiAgZGF0YToge1xyXG4gICAgYWN0aXZpdHk6IFtdIGFzIElBY3RpdmVbXSxcclxuICAgIGdvb2RzOiBbXSBhcyBJQ29tbW9kaXR5W11cclxuICB9LFxyXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PeS6i+S7tlxyXG4gIC4uLmxpc3RGdW5jLFxyXG4gIGNvbGxlY3QoZTogV3hUb3VjaEV2ZW50KSB7XHJcbiAgICBsaXN0RnVuYy5jb2xsZWN0KGUpXHJcbiAgICAgIC50aGVuKCh7IGlkLCBjb2xsZWN0IH0pID0+IHtcclxuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuZGF0YS5nb29kcy5maW5kSW5kZXgodiA9PiB2LmlkID09PSBpZCk7XHJcbiAgICAgICAgaWYgKGluZGV4ID4gLTEpIHtcclxuICAgICAgICAgIHRoaXMuc2V0RGF0YSEoeyBbYGdvb2RzWyR7aW5kZXh9XS5pc0NvbGxlY3RlZGBdOiAhY29sbGVjdCB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaChjb25zb2xlLmxvZyk7XHJcbiAgfSxcclxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PeeUn+WRveWRqOacn1xyXG4gIG9uTG9hZCgpIHtcclxuICAgIHJlcXVlc3Q8UGFnZURhdGE8SUFjdGl2ZT4+KHtcclxuICAgICAgdXJsOiAnL2FwaS9hY3Rpdml0eS9wYWdpbmdRdWVyeScsXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBjdXJyZW50UGFnZTogMSxcclxuICAgICAgICBwYWdlU2l6ZTogMlxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gICAgICAudGhlbigoeyBkYXRhOiB7IGxpc3QgfSB9KSA9PiB0aGlzLnNldERhdGEhKHsgYWN0aXZpdHk6IGxpc3QubWFwKHBhcnNlRGF0YSkgfSkpXHJcbiAgICAgIC5jYXRjaChjb25zb2xlLmxvZyk7XHJcblxyXG4gICAgcmVxdWVzdDxQYWdlRGF0YTxJQ29tbW9kaXR5Pj4oe1xyXG4gICAgICB1cmw6ICcvYXBpL2NvbW1vZGl0eS9wYWdpbmdRdWVyeScsXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBjdXJyZW50UGFnZTogMSxcclxuICAgICAgICBwYWdlU2l6ZTogMlxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gICAgICAudGhlbigoeyBkYXRhOiB7IGxpc3QgfSB9KSA9PiB0aGlzLnNldERhdGEhKHsgZ29vZHM6IGxpc3QubWFwKHBhcnNlRGF0YSkgfSkpXHJcbiAgICAgIC5jYXRjaChjb25zb2xlLmxvZyk7XHJcbiAgfSxcclxuXHJcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbn0pO1xyXG4iXX0=