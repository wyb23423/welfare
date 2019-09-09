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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBR0EsNkRBQStEO0FBQy9ELHlDQUEyQztBQUMzQyx5Q0FBNkM7QUFFN0MsSUFBSSxZQUNGLElBQUksRUFBRTtRQUNKLFFBQVEsRUFBRSxFQUFlO1FBQ3pCLEtBQUssRUFBRSxFQUFrQjtLQUMxQixJQUVFLFFBQVEsSUFDWCxPQUFPLFlBQUMsQ0FBZTtRQUF2QixpQkFTQztRQVJDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO2FBQ2hCLElBQUksQ0FBQyxVQUFDLEVBQWU7Z0JBQWIsVUFBRSxFQUFFLG9CQUFPOztZQUNsQixJQUFNLEtBQUssR0FBRyxLQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBWCxDQUFXLENBQUMsQ0FBQztZQUMxRCxJQUFJLEtBQUssR0FBRyxDQUFDLENBQUMsRUFBRTtnQkFDZCxLQUFJLENBQUMsT0FBUSxXQUFHLEdBQUMsV0FBUyxLQUFLLGtCQUFlLElBQUcsQ0FBQyxPQUFPLE1BQUcsQ0FBQzthQUM5RDtRQUNILENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDeEIsQ0FBQztJQUVELE1BQU07UUFBTixpQkFvQkM7UUFuQkMsY0FBTyxDQUFvQjtZQUN6QixHQUFHLEVBQUUsMkJBQTJCO1lBQ2hDLElBQUksRUFBRTtnQkFDSixXQUFXLEVBQUUsQ0FBQztnQkFDZCxRQUFRLEVBQUUsQ0FBQzthQUNaO1NBQ0YsQ0FBQzthQUNDLElBQUksQ0FBQyxVQUFDLEVBQWtCO2dCQUFSLG1CQUFJO1lBQVMsT0FBQSxLQUFJLENBQUMsT0FBUSxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsZ0JBQVMsQ0FBQyxFQUFFLENBQUM7UUFBaEQsQ0FBZ0QsQ0FBQzthQUM5RSxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRXRCLGNBQU8sQ0FBdUI7WUFDNUIsR0FBRyxFQUFFLDRCQUE0QjtZQUNqQyxJQUFJLEVBQUU7Z0JBQ0osV0FBVyxFQUFFLENBQUM7Z0JBQ2QsUUFBUSxFQUFFLENBQUM7YUFDWjtTQUNGLENBQUM7YUFDQyxJQUFJLENBQUMsVUFBQyxFQUFrQjtnQkFBUixtQkFBSTtZQUFTLE9BQUEsS0FBSSxDQUFDLE9BQVEsQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLGdCQUFTLENBQUMsRUFBRSxDQUFDO1FBQTdDLENBQTZDLENBQUM7YUFDM0UsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN4QixDQUFDLElBR0QsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICog6aaW6aG1XG4gKi9cbmltcG9ydCAqIGFzIGxpc3RGdW5jIGZyb20gJy4uLy4uL3RlbXBsYXRlL2xpc3RfaXRlbS9saXN0X2l0ZW0nO1xuaW1wb3J0IHsgcmVxdWVzdCB9IGZyb20gJy4uLy4uL3V0aWxzL2h0dHAnO1xuaW1wb3J0IHsgcGFyc2VEYXRhIH0gZnJvbSAnLi4vLi4vdXRpbHMvdXRpbCc7XG5cblBhZ2Uoe1xuICBkYXRhOiB7XG4gICAgYWN0aXZpdHk6IFtdIGFzIElBY3RpdmVbXSxcbiAgICBnb29kczogW10gYXMgSUNvbW1vZGl0eVtdXG4gIH0sXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PeS6i+S7tlxuICAuLi5saXN0RnVuYyxcbiAgY29sbGVjdChlOiBXeFRvdWNoRXZlbnQpIHtcbiAgICBsaXN0RnVuYy5jb2xsZWN0KGUpXG4gICAgICAudGhlbigoeyBpZCwgY29sbGVjdCB9KSA9PiB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5kYXRhLmdvb2RzLmZpbmRJbmRleCh2ID0+IHYuaWQgPT09IGlkKTtcbiAgICAgICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgICB0aGlzLnNldERhdGEhKHsgW2Bnb29kc1ske2luZGV4fV0uaXNDb2xsZWN0ZWRgXTogIWNvbGxlY3QgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuY2F0Y2goY29uc29sZS5sb2cpO1xuICB9LFxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PeeUn+WRveWRqOacn1xuICBvbkxvYWQoKSB7XG4gICAgcmVxdWVzdDxQYWdlRGF0YTxJQWN0aXZlPj4oe1xuICAgICAgdXJsOiAnL2FwaS9hY3Rpdml0eS9wYWdpbmdRdWVyeScsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIGN1cnJlbnRQYWdlOiAxLFxuICAgICAgICBwYWdlU2l6ZTogMlxuICAgICAgfVxuICAgIH0pXG4gICAgICAudGhlbigoeyBkYXRhOiB7IGxpc3QgfSB9KSA9PiB0aGlzLnNldERhdGEhKHsgYWN0aXZpdHk6IGxpc3QubWFwKHBhcnNlRGF0YSkgfSkpXG4gICAgICAuY2F0Y2goY29uc29sZS5sb2cpO1xuXG4gICAgcmVxdWVzdDxQYWdlRGF0YTxJQ29tbW9kaXR5Pj4oe1xuICAgICAgdXJsOiAnL2FwaS9jb21tb2RpdHkvcGFnaW5nUXVlcnknLFxuICAgICAgZGF0YToge1xuICAgICAgICBjdXJyZW50UGFnZTogMSxcbiAgICAgICAgcGFnZVNpemU6IDJcbiAgICAgIH1cbiAgICB9KVxuICAgICAgLnRoZW4oKHsgZGF0YTogeyBsaXN0IH0gfSkgPT4gdGhpcy5zZXREYXRhISh7IGdvb2RzOiBsaXN0Lm1hcChwYXJzZURhdGEpIH0pKVxuICAgICAgLmNhdGNoKGNvbnNvbGUubG9nKTtcbiAgfSxcblxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbn0pO1xuIl19