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
Page(__assign({ data: {
        activity: [],
        goods: []
    } }, listFunc, { onLoad: function () {
        var activity = [];
        var goods = [];
        for (var i = 1; i < 3; i++) {
            activity.push({
                id: i,
                img: '/public/images/23.jpg',
                title: '有爱的我们不孤独——自闭症儿童义诊系列活动__' + i,
                authentication: '社区认证',
                sign: 11,
                size: 24
            });
            goods.push({
                id: i,
                img: '/public/images/23.jpg',
                title: '少儿基础篮球培训课1节',
                authentication: '社区认证',
                sign: 11,
                size: 24,
                cost: 50 + i * 40,
                isCollected: i > 1
            });
        }
        ;
        this.setData({ activity: activity, goods: goods });
    } }));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBSUEsNkRBQStEO0FBRS9ELElBQUksWUFDRixJQUFJLEVBQUU7UUFDSixRQUFRLEVBQUUsRUFBa0I7UUFDNUIsS0FBSyxFQUFFLEVBQWtCO0tBQzFCLElBRUUsUUFBUSxJQUVYLE1BQU07UUFDSixJQUFNLFFBQVEsR0FBRyxFQUFFLENBQUM7UUFDcEIsSUFBTSxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDMUIsUUFBUSxDQUFDLElBQUksQ0FBQztnQkFDWixFQUFFLEVBQUUsQ0FBQztnQkFDTCxHQUFHLEVBQUUsdUJBQXVCO2dCQUM1QixLQUFLLEVBQUUseUJBQXlCLEdBQUcsQ0FBQztnQkFDcEMsY0FBYyxFQUFFLE1BQU07Z0JBQ3RCLElBQUksRUFBRSxFQUFFO2dCQUNSLElBQUksRUFBRSxFQUFFO2FBQ1QsQ0FBQyxDQUFDO1lBRUgsS0FBSyxDQUFDLElBQUksQ0FBQztnQkFDVCxFQUFFLEVBQUUsQ0FBQztnQkFDTCxHQUFHLEVBQUUsdUJBQXVCO2dCQUM1QixLQUFLLEVBQUUsYUFBYTtnQkFDcEIsY0FBYyxFQUFFLE1BQU07Z0JBQ3RCLElBQUksRUFBRSxFQUFFO2dCQUNSLElBQUksRUFBRSxFQUFFO2dCQUNSLElBQUksRUFBRSxFQUFFLEdBQUcsQ0FBQyxHQUFHLEVBQUU7Z0JBQ2pCLFdBQVcsRUFBRSxDQUFDLEdBQUcsQ0FBQzthQUNuQixDQUFDLENBQUM7U0FDSjtRQUFBLENBQUM7UUFFSSxJQUFLLENBQUMsT0FBTyxDQUFDLEVBQUUsUUFBUSxVQUFBLEVBQUUsS0FBSyxPQUFBLEVBQUUsQ0FBQyxDQUFDO0lBQzNDLENBQUMsSUFDRCxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiDpppbpobVcbiAqL1xuXG5pbXBvcnQgKiBhcyBsaXN0RnVuYyBmcm9tIFwiLi4vLi4vdGVtcGxhdGUvbGlzdF9pdGVtL2xpc3RfaXRlbVwiO1xuXG5QYWdlKHtcbiAgZGF0YToge1xuICAgIGFjdGl2aXR5OiBbXSBhcyBJQW55T2JqZWN0W10sXG4gICAgZ29vZHM6IFtdIGFzIElBbnlPYmplY3RbXVxuICB9LFxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT3kuovku7ZcbiAgLi4ubGlzdEZ1bmMsXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT0955Sf5ZG95ZGo5pyfXG4gIG9uTG9hZCgpIHtcbiAgICBjb25zdCBhY3Rpdml0eSA9IFtdO1xuICAgIGNvbnN0IGdvb2RzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCAzOyBpKyspIHtcbiAgICAgIGFjdGl2aXR5LnB1c2goe1xuICAgICAgICBpZDogaSxcbiAgICAgICAgaW1nOiAnL3B1YmxpYy9pbWFnZXMvMjMuanBnJyxcbiAgICAgICAgdGl0bGU6ICfmnInniLHnmoTmiJHku6zkuI3lraTni6zigJTigJToh6rpl63nl4flhL/nq6XkuYnor4rns7vliJfmtLvliqhfXycgKyBpLFxuICAgICAgICBhdXRoZW50aWNhdGlvbjogJ+ekvuWMuuiupOivgScsXG4gICAgICAgIHNpZ246IDExLFxuICAgICAgICBzaXplOiAyNFxuICAgICAgfSk7XG5cbiAgICAgIGdvb2RzLnB1c2goe1xuICAgICAgICBpZDogaSxcbiAgICAgICAgaW1nOiAnL3B1YmxpYy9pbWFnZXMvMjMuanBnJyxcbiAgICAgICAgdGl0bGU6ICflsJHlhL/ln7rnoYDnr67nkIPln7norq3or74x6IqCJyxcbiAgICAgICAgYXV0aGVudGljYXRpb246ICfnpL7ljLrorqTor4EnLFxuICAgICAgICBzaWduOiAxMSxcbiAgICAgICAgc2l6ZTogMjQsXG4gICAgICAgIGNvc3Q6IDUwICsgaSAqIDQwLFxuICAgICAgICBpc0NvbGxlY3RlZDogaSA+IDFcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICAoPGFueT50aGlzKS5zZXREYXRhKHsgYWN0aXZpdHksIGdvb2RzIH0pO1xuICB9XG59KVxuIl19