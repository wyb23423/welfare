"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("../../../utils/http");
var util_1 = require("../../../utils/util");
Page({
    data: { exchanges: [] },
    onLoad: function () {
        var _this = this;
        http_1.request({ url: '/api/commodity/participation/user' })
            .then(function (_a) {
            var list = _a.data;
            return _this.setData({ exchanges: list.map(util_1.parseData) });
        })
            .catch(console.log);
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhjaGFuZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJleGNoYW5nZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUlBLDRDQUE4QztBQUM5Qyw0Q0FBZ0Q7QUFFaEQsSUFBSSxDQUFDO0lBQ0QsSUFBSSxFQUFFLEVBQUMsU0FBUyxFQUFnQixFQUFFLEVBQUM7SUFDbkMsTUFBTTtRQUFOLGlCQUlDO1FBSEcsY0FBTyxDQUFlLEVBQUUsR0FBRyxFQUFFLG1DQUFtQyxFQUFFLENBQUM7YUFDOUQsSUFBSSxDQUFDLFVBQUMsRUFBYztnQkFBWixjQUFVO1lBQU8sT0FBQSxLQUFJLENBQUMsT0FBUSxDQUFDLEVBQUUsU0FBUyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsZ0JBQVMsQ0FBQyxFQUFFLENBQUM7UUFBakQsQ0FBaUQsQ0FBQzthQUMzRSxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzVCLENBQUM7Q0FDSixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLyoqXHJcbiAqIOaIkeeahOWFkeaNouiusOW9lVxyXG4gKi9cclxuaW1wb3J0IHsgcmVxdWVzdCB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL2h0dHAnO1xyXG5pbXBvcnQgeyBwYXJzZURhdGEgfSBmcm9tICcuLi8uLi8uLi91dGlscy91dGlsJztcclxuXHJcblBhZ2Uoe1xyXG4gICAgZGF0YToge2V4Y2hhbmdlczogPElDb21tb2RpdHlbXT5bXX0sXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgcmVxdWVzdDxJQ29tbW9kaXR5W10+KHsgdXJsOiAnL2FwaS9jb21tb2RpdHkvcGFydGljaXBhdGlvbi91c2VyJyB9KVxyXG4gICAgICAgICAgICAudGhlbigoeyBkYXRhOiBsaXN0IH0pID0+IHRoaXMuc2V0RGF0YSEoeyBleGNoYW5nZXM6IGxpc3QubWFwKHBhcnNlRGF0YSkgfSkpXHJcbiAgICAgICAgICAgIC5jYXRjaChjb25zb2xlLmxvZyk7XHJcbiAgICB9LFxyXG59KTtcclxuIl19