"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("../../../utils/http");
var list_item_1 = require("../../../template/list_item/list_item");
var util_1 = require("../../../utils/util");
Page({
    data: {
        exchanges: []
    },
    collect: function (e) {
        var _this = this;
        list_item_1.collect(e)
            .then(function (_a) {
            var id = _a.id, collect = _a.collect;
            var _b;
            var index = _this.data.exchanges.findIndex(function (v) { return v.id === id; });
            if (index > -1) {
                _this.setData((_b = {}, _b["exchanges[" + index + "].isCollected"] = !collect, _b));
            }
        })
            .catch(console.log);
    },
    onLoad: function () {
        var _this = this;
        http_1.request({ url: '/api/commodity/participation/completeList' })
            .then(function (_a) {
            var list = _a.data;
            return _this.setData({ exchanges: list.map(util_1.parseData) });
        })
            .catch(console.log);
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhjaGFuZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJleGNoYW5nZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUlBLDRDQUE4QztBQUM5QyxtRUFBK0U7QUFDL0UsNENBQWdEO0FBRWhELElBQUksQ0FBQztJQUNELElBQUksRUFBRTtRQUNGLFNBQVMsRUFBZ0IsRUFBRTtLQUM5QjtJQUNELE9BQU8sWUFBQyxDQUFlO1FBQXZCLGlCQVNDO1FBUkcsbUJBQVcsQ0FBQyxDQUFDLENBQUM7YUFDVCxJQUFJLENBQUMsVUFBQyxFQUFlO2dCQUFiLFVBQUUsRUFBRSxvQkFBTzs7WUFDaEIsSUFBTSxLQUFLLEdBQUcsS0FBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQVgsQ0FBVyxDQUFDLENBQUM7WUFDOUQsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDLEVBQUU7Z0JBQ1osS0FBSSxDQUFDLE9BQVEsV0FBRyxHQUFDLGVBQWEsS0FBSyxrQkFBZSxJQUFHLENBQUMsT0FBTyxNQUFHLENBQUM7YUFDcEU7UUFDTCxDQUFDLENBQUM7YUFDRCxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFDRCxNQUFNO1FBQU4saUJBSUM7UUFIRyxjQUFPLENBQWUsRUFBRSxHQUFHLEVBQUUsMkNBQTJDLEVBQUUsQ0FBQzthQUN0RSxJQUFJLENBQUMsVUFBQyxFQUFjO2dCQUFaLGNBQVU7WUFBTyxPQUFBLEtBQUksQ0FBQyxPQUFRLENBQUMsRUFBRSxTQUFTLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxnQkFBUyxDQUFDLEVBQUUsQ0FBQztRQUFqRCxDQUFpRCxDQUFDO2FBQzNFLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDNUIsQ0FBQztDQUNKLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4vKipcclxuICog5oiR55qE5YWR5o2i6K6w5b2VXHJcbiAqL1xyXG5pbXBvcnQgeyByZXF1ZXN0IH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvaHR0cCc7XHJcbmltcG9ydCB7IGNvbGxlY3QgYXMgY29sbGVjdEZ1bmMgfSBmcm9tICcuLi8uLi8uLi90ZW1wbGF0ZS9saXN0X2l0ZW0vbGlzdF9pdGVtJztcclxuaW1wb3J0IHsgcGFyc2VEYXRhIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvdXRpbCc7XHJcblxyXG5QYWdlKHtcclxuICAgIGRhdGE6IHtcclxuICAgICAgICBleGNoYW5nZXM6IDxJQ29tbW9kaXR5W10+W11cclxuICAgIH0sXHJcbiAgICBjb2xsZWN0KGU6IFd4VG91Y2hFdmVudCkge1xyXG4gICAgICAgIGNvbGxlY3RGdW5jKGUpXHJcbiAgICAgICAgICAgIC50aGVuKCh7IGlkLCBjb2xsZWN0IH0pID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5kYXRhLmV4Y2hhbmdlcy5maW5kSW5kZXgodiA9PiB2LmlkID09PSBpZCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggPiAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0RGF0YSEoeyBbYGV4Y2hhbmdlc1ske2luZGV4fV0uaXNDb2xsZWN0ZWRgXTogIWNvbGxlY3QgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChjb25zb2xlLmxvZyk7XHJcbiAgICB9LFxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIHJlcXVlc3Q8SUNvbW1vZGl0eVtdPih7IHVybDogJy9hcGkvY29tbW9kaXR5L3BhcnRpY2lwYXRpb24vY29tcGxldGVMaXN0JyB9KVxyXG4gICAgICAgICAgICAudGhlbigoeyBkYXRhOiBsaXN0IH0pID0+IHRoaXMuc2V0RGF0YSEoeyBleGNoYW5nZXM6IGxpc3QubWFwKHBhcnNlRGF0YSkgfSkpXHJcbiAgICAgICAgICAgIC5jYXRjaChjb25zb2xlLmxvZyk7XHJcbiAgICB9LFxyXG59KTtcclxuIl19