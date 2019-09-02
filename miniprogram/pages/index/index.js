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
var http_1 = require("../../utils/http");
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
            return _this.setData({ activity: list.map(constant_1.parseData) });
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
            return _this.setData({ goods: list.map(constant_1.parseData) });
        })
            .catch(console.log);
    } }));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBR0EsNkRBQStEO0FBQy9ELDJDQUEyQztBQUMzQyx5Q0FBMkM7QUFFM0MsSUFBSSxZQUNGLElBQUksRUFBRTtRQUNKLFFBQVEsRUFBRSxFQUFlO1FBQ3pCLEtBQUssRUFBRSxFQUFrQjtLQUMxQixJQUVFLFFBQVEsSUFFWCxNQUFNO1FBQU4saUJBb0JDO1FBbkJDLGNBQU8sQ0FBb0I7WUFDekIsR0FBRyxFQUFFLDJCQUEyQjtZQUNoQyxJQUFJLEVBQUU7Z0JBQ0osV0FBVyxFQUFFLENBQUM7Z0JBQ2QsUUFBUSxFQUFFLENBQUM7YUFDWjtTQUNGLENBQUM7YUFDQyxJQUFJLENBQUMsVUFBQyxFQUFrQjtnQkFBUixtQkFBSTtZQUFTLE9BQUEsS0FBSSxDQUFDLE9BQVEsQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLG9CQUFTLENBQUMsRUFBRSxDQUFDO1FBQWhELENBQWdELENBQUM7YUFDOUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUV0QixjQUFPLENBQXVCO1lBQzVCLEdBQUcsRUFBRSw0QkFBNEI7WUFDakMsSUFBSSxFQUFFO2dCQUNKLFdBQVcsRUFBRSxDQUFDO2dCQUNkLFFBQVEsRUFBRSxDQUFDO2FBQ1o7U0FDRixDQUFDO2FBQ0MsSUFBSSxDQUFDLFVBQUMsRUFBa0I7Z0JBQVIsbUJBQUk7WUFBUyxPQUFBLEtBQUksQ0FBQyxPQUFRLENBQUMsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxvQkFBUyxDQUFDLEVBQUUsQ0FBQztRQUE3QyxDQUE2QyxDQUFDO2FBQzNFLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDeEIsQ0FBQyxJQUdELENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIOmmlumhtVxuICovXG5pbXBvcnQgKiBhcyBsaXN0RnVuYyBmcm9tICcuLi8uLi90ZW1wbGF0ZS9saXN0X2l0ZW0vbGlzdF9pdGVtJztcbmltcG9ydCB7IHBhcnNlRGF0YSB9IGZyb20gJy4uLy4uL2NvbnN0YW50JztcbmltcG9ydCB7IHJlcXVlc3QgfSBmcm9tICcuLi8uLi91dGlscy9odHRwJztcblxuUGFnZSh7XG4gIGRhdGE6IHtcbiAgICBhY3Rpdml0eTogW10gYXMgSUFjdGl2ZVtdLFxuICAgIGdvb2RzOiBbXSBhcyBJQ29tbW9kaXR5W11cbiAgfSxcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT095LqL5Lu2XG4gIC4uLmxpc3RGdW5jLFxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PeeUn+WRveWRqOacn1xuICBvbkxvYWQoKSB7XG4gICAgcmVxdWVzdDxQYWdlRGF0YTxJQWN0aXZlPj4oe1xuICAgICAgdXJsOiAnL2FwaS9hY3Rpdml0eS9wYWdpbmdRdWVyeScsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIGN1cnJlbnRQYWdlOiAxLFxuICAgICAgICBwYWdlU2l6ZTogMlxuICAgICAgfVxuICAgIH0pXG4gICAgICAudGhlbigoeyBkYXRhOiB7IGxpc3QgfSB9KSA9PiB0aGlzLnNldERhdGEhKHsgYWN0aXZpdHk6IGxpc3QubWFwKHBhcnNlRGF0YSkgfSkpXG4gICAgICAuY2F0Y2goY29uc29sZS5sb2cpO1xuXG4gICAgcmVxdWVzdDxQYWdlRGF0YTxJQ29tbW9kaXR5Pj4oe1xuICAgICAgdXJsOiAnL2FwaS9jb21tb2RpdHkvcGFnaW5nUXVlcnknLFxuICAgICAgZGF0YToge1xuICAgICAgICBjdXJyZW50UGFnZTogMSxcbiAgICAgICAgcGFnZVNpemU6IDJcbiAgICAgIH1cbiAgICB9KVxuICAgICAgLnRoZW4oKHsgZGF0YTogeyBsaXN0IH0gfSkgPT4gdGhpcy5zZXREYXRhISh7IGdvb2RzOiBsaXN0Lm1hcChwYXJzZURhdGEpIH0pKVxuICAgICAgLmNhdGNoKGNvbnNvbGUubG9nKTtcbiAgfSxcblxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbn0pO1xuIl19