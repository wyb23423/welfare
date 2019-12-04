"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = require("../../../utils/util");
var http_1 = require("../../../utils/http");
function parseTime(start, end) {
    var _a = util_1.resolveTime(start), sy = _a.year, sm = _a.month, sd = _a.day;
    var _b = util_1.resolveTime(end), ey = _b.year, em = _b.month, ed = _b.day;
    if (sy === ey) {
        if (sm === em && sd === ed) {
            return sm + "/" + sd;
        }
        return sm + "/" + sd + " - " + em + "/" + ed;
    }
    else {
        return sy + "/" + sm + "/" + sd + " - " + ey + "/" + em + "/" + sd;
    }
}
Component({
    options: {
        multipleSlots: true
    },
    properties: {
        info: {
            type: Object,
            value: {}
        },
        isGoods: {
            type: Number,
            value: 0
        },
        hasBtn: {
            type: Boolean,
            value: false
        }
    },
    data: {
        time: '',
        btn: ''
    },
    attached: function () {
        var _a = this.data, _b = _a.info, size = _b.size, sign = _b.sign, origination = _b.origination, finish = _b.finish, hasBtn = _a.hasBtn, isGoods = _a.isGoods;
        var obj = { time: parseTime(+origination, +finish), btn: '' };
        if (hasBtn) {
            var text = parseBtnText(sign, size);
            var word = isGoods ? '兑换' : '报名';
            obj.btn = text ? word + text : '立即' + word;
        }
        this.setData(obj);
    },
    methods: {
        clickBtn: function () {
            var _a = this.data, _b = _a.info, size = _b.size, sign = _b.sign, origination = _b.origination, id = _b.id, isGoods = _a.isGoods;
            if (size - sign <= 0 || Date.now() > origination) {
                return;
            }
            if (isGoods) {
                exchange(createEvent({ id: id }));
            }
            else {
                wx.navigateTo({ url: "/pages/sign/sign?id=" + id });
            }
        }
    }
});
function parseBtnText(sign, size) {
    var reset = size - sign;
    if (reset <= 0) {
        return '已满';
    }
    else if (reset <= Math.max(2, Math.round(size / 10))) {
        return '仅剩' + reset + '名';
    }
    return '';
}
exports.parseBtnText = parseBtnText;
function exchange(e) {
    var id = e.target.dataset.id;
    http_1.request({ url: '/api/commodity/participation/deal/' + id })
        .then(function () { return wx.showToast({ title: '兑换成功' }); })
        .catch(console.log);
}
exports.exchange = exchange;
function collect(e) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, id, collect;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = e.target.dataset, id = _a.id, collect = _a.collect;
                    return [4, http_1.request({
                            url: '/api/like',
                            method: collect ? 'DELETE' : 'PUT',
                            data: {
                                targetId: id,
                                type: 1
                            }
                        })];
                case 1:
                    _b.sent();
                    return [2, ({ id: id, collect: collect })];
            }
        });
    });
}
exports.collect = collect;
function createEvent(dataset) {
    return {
        type: 'simulation',
        detail: {},
        target: { id: 'id', dataset: dataset },
        currentTarget: { id: 'id', dataset: dataset },
        timeStamp: Date.now(),
        mark: {}
    };
}
exports.createEvent = createEvent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIml0ZW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDRDQUFrRDtBQUNsRCw0Q0FBOEM7QUFZOUMsU0FBUyxTQUFTLENBQUMsS0FBYSxFQUFFLEdBQVc7SUFDbkMsSUFBQSw4QkFBbUQsRUFBbEQsWUFBUSxFQUFFLGFBQVMsRUFBRSxXQUE2QixDQUFDO0lBQ3BELElBQUEsNEJBQWlELEVBQWhELFlBQVEsRUFBRSxhQUFTLEVBQUUsV0FBMkIsQ0FBQztJQUV4RCxJQUFHLEVBQUUsS0FBSyxFQUFFLEVBQUU7UUFDVixJQUFHLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsRUFBRTtZQUN2QixPQUFVLEVBQUUsU0FBSSxFQUFJLENBQUM7U0FDeEI7UUFFRCxPQUFVLEVBQUUsU0FBSSxFQUFFLFdBQU0sRUFBRSxTQUFJLEVBQUksQ0FBQztLQUN0QztTQUFNO1FBQ0gsT0FBVSxFQUFFLFNBQUksRUFBRSxTQUFJLEVBQUUsV0FBTSxFQUFFLFNBQUksRUFBRSxTQUFJLEVBQUksQ0FBQztLQUNsRDtBQUNMLENBQUM7QUFFRCxTQUFTLENBQVc7SUFDaEIsT0FBTyxFQUFFO1FBQ0wsYUFBYSxFQUFFLElBQUk7S0FDdEI7SUFDRCxVQUFVLEVBQUU7UUFDUixJQUFJLEVBQUU7WUFDRixJQUFJLEVBQUUsTUFBTTtZQUNaLEtBQUssRUFBRSxFQUFFO1NBQ1o7UUFDRCxPQUFPLEVBQUU7WUFDTCxJQUFJLEVBQUUsTUFBTTtZQUNaLEtBQUssRUFBRSxDQUFDO1NBQ1g7UUFFRCxNQUFNLEVBQUU7WUFDSixJQUFJLEVBQUUsT0FBTztZQUNiLEtBQUssRUFBRSxLQUFLO1NBQ2Y7S0FDSjtJQUNELElBQUksRUFBRTtRQUNGLElBQUksRUFBRSxFQUFFO1FBQ1IsR0FBRyxFQUFFLEVBQUU7S0FDVjtJQUNELFFBQVE7UUFDRSxJQUFB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QUNKLENBQUMsRUFBQTs7b0JBUEYsU0FPRSxDQUFDO29CQUNILFdBQU8sQ0FBQyxFQUFFLEVBQUUsSUFBQSxFQUFFLE9BQU8sU0FBQSxFQUFFLENBQUMsRUFBQzs7OztDQUM1QjtBQWJELDBCQWFDO0FBRUQsU0FBZ0IsV0FBVyxDQUFtQixPQUFVO0lBQ3BELE9BQU87UUFDSCxJQUFJLEVBQUUsWUFBWTtRQUNsQixNQUFNLEVBQUUsRUFBRTtRQUNWLE1BQU0sRUFBRSxFQUFDLEVBQUUsRUFBRSxJQUFJLEVBQUUsT0FBTyxTQUFBLEVBQUM7UUFDM0IsYUFBYSxFQUFFLEVBQUMsRUFBRSxFQUFFLElBQUksRUFBRSxPQUFPLFNBQUEsRUFBQztRQUNsQyxTQUFTLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRTtRQUNyQixJQUFJLEVBQUUsRUFBRTtLQUNYLENBQUM7QUFDTixDQUFDO0FBVEQsa0NBU0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZXNvbHZlVGltZSB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL3V0aWwnO1xyXG5pbXBvcnQgeyByZXF1ZXN0IH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvaHR0cCc7XHJcblxyXG5pbnRlcmZhY2UgTGlzdEl0ZW0gZXh0ZW5kcyBXeENvbXBvbmVudCB7XHJcbiAgICBkYXRhOiB7XHJcbiAgICAgICAgaW5mbzogSUFjdGl2ZSB8IElDb21tb2RpdHksXHJcbiAgICAgICAgaGFzQnRuOiBib29sZWFuO1xyXG4gICAgICAgIGlzR29vZHM6IGJvb2xlYW47XHJcbiAgICAgICAgdGltZTogc3RyaW5nO1xyXG4gICAgICAgIGJ0bjogc3RyaW5nXHJcbiAgICB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBwYXJzZVRpbWUoc3RhcnQ6IG51bWJlciwgZW5kOiBudW1iZXIpIHtcclxuICAgIGNvbnN0IHt5ZWFyOiBzeSwgbW9udGg6IHNtLCBkYXk6IHNkfSA9IHJlc29sdmVUaW1lKHN0YXJ0KTtcclxuICAgIGNvbnN0IHt5ZWFyOiBleSwgbW9udGg6IGVtLCBkYXk6IGVkfSA9IHJlc29sdmVUaW1lKGVuZCk7XHJcblxyXG4gICAgaWYoc3kgPT09IGV5KSB7XHJcbiAgICAgICAgaWYoc20gPT09IGVtICYmIHNkID09PSBlZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gYCR7c219LyR7c2R9YDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBgJHtzbX0vJHtzZH0gLSAke2VtfS8ke2VkfWA7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBgJHtzeX0vJHtzbX0vJHtzZH0gLSAke2V5fS8ke2VtfS8ke3NkfWA7XHJcbiAgICB9XHJcbn1cclxuXHJcbkNvbXBvbmVudDxMaXN0SXRlbT4oe1xyXG4gICAgb3B0aW9uczoge1xyXG4gICAgICAgIG11bHRpcGxlU2xvdHM6IHRydWVcclxuICAgIH0sXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgaW5mbzoge1xyXG4gICAgICAgICAgICB0eXBlOiBPYmplY3QsXHJcbiAgICAgICAgICAgIHZhbHVlOiB7fVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaXNHb29kczoge1xyXG4gICAgICAgICAgICB0eXBlOiBOdW1iZXIsXHJcbiAgICAgICAgICAgIHZhbHVlOiAwXHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyDmmK/lkKboh6rluKbmjInpkq5cclxuICAgICAgICBoYXNCdG46IHtcclxuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcclxuICAgICAgICAgICAgdmFsdWU6IGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGRhdGE6IHtcclxuICAgICAgICB0aW1lOiAnJyxcclxuICAgICAgICBidG46ICcnXHJcbiAgICB9LFxyXG4gICAgYXR0YWNoZWQodGhpczogTGlzdEl0ZW0pIHtcclxuICAgICAgICBjb25zdCB7aW5mbzoge3NpemUsIHNpZ24sIG9yaWdpbmF0aW9uLCBmaW5pc2h9LCBoYXNCdG4sIGlzR29vZHN9ID0gdGhpcy5kYXRhO1xyXG5cclxuICAgICAgICBjb25zdCBvYmogPSB7dGltZTogcGFyc2VUaW1lKCtvcmlnaW5hdGlvbiwgK2ZpbmlzaCksIGJ0bjogJyd9O1xyXG4gICAgICAgIGlmKGhhc0J0bikge1xyXG4gICAgICAgICAgICBjb25zdCB0ZXh0ID0gcGFyc2VCdG5UZXh0KHNpZ24sIHNpemUpO1xyXG4gICAgICAgICAgICBjb25zdCB3b3JkID0gaXNHb29kcyA/ICflhZHmjaInIDogJ+aKpeWQjSc7XHJcbiAgICAgICAgICAgIG9iai5idG4gPSB0ZXh0ID8gd29yZCArIHRleHQgOiAn56uL5Y2zJyArIHdvcmQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2V0RGF0YShvYmopO1xyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgICBjbGlja0J0bigpIHtcclxuICAgICAgICAgICAgY29uc3Qge2luZm86IHtzaXplLCBzaWduLCBvcmlnaW5hdGlvbiwgaWR9LCBpc0dvb2RzfSA9IHRoaXMuZGF0YTtcclxuICAgICAgICAgICAgaWYoc2l6ZSAtIHNpZ24gPD0gMCB8fCBEYXRlLm5vdygpID4gb3JpZ2luYXRpb24pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYoaXNHb29kcykge1xyXG4gICAgICAgICAgICAgICAgZXhjaGFuZ2UoY3JlYXRlRXZlbnQoe2lkfSkpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgd3gubmF2aWdhdGVUbyh7dXJsOiBgL3BhZ2VzL3NpZ24vc2lnbj9pZD0ke2lkfWB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSk7XHJcblxyXG4vKipcclxuICog5qC55o2u5Y+v5oql5ZCNL+WFkeaNouWJqeS9meS6uuaVsOaYvuekuuS4jeWQjOeahOaMiemSrlxyXG4gKiBAcGFyYW0gc2lnbiDlt7LmiqXlkI0v5YWR5o2i5Lq65pWwXHJcbiAqIEBwYXJhbSBzaXplIOaAu+aVsFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlQnRuVGV4dChzaWduOiBudW1iZXIsIHNpemU6IG51bWJlcikge1xyXG4gICAgY29uc3QgcmVzZXQgPSBzaXplIC0gc2lnbjtcclxuICAgIGlmKHJlc2V0IDw9IDApIHtcclxuICAgICAgICByZXR1cm4gJ+W3sua7oSc7XHJcbiAgICB9IGVsc2UgaWYocmVzZXQgPD0gTWF0aC5tYXgoMiwgTWF0aC5yb3VuZChzaXplIC8gMTApKSkge1xyXG4gICAgICAgIHJldHVybiAn5LuF5YmpJyArIHJlc2V0ICsgJ+WQjSc7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuICcnO1xyXG59XHJcblxyXG4vKlxyXG4qIOWFkeaNouWVhuWTgVxyXG4qL1xyXG5leHBvcnQgZnVuY3Rpb24gZXhjaGFuZ2UodGhpczogYW55LCBlOiBCYXNlRXZlbnQ8e2lkOiBudW1iZXJ9Pikge1xyXG4gICAgY29uc3QgaWQgPSBlLnRhcmdldC5kYXRhc2V0LmlkO1xyXG4gICAgcmVxdWVzdCh7IHVybDogJy9hcGkvY29tbW9kaXR5L3BhcnRpY2lwYXRpb24vZGVhbC8nICsgaWQgfSlcclxuICAgICAgICAudGhlbigoKSA9PiB3eC5zaG93VG9hc3QoeyB0aXRsZTogJ+WFkeaNouaIkOWKnycgfSkpXHJcbiAgICAgICAgLmNhdGNoKGNvbnNvbGUubG9nKTtcclxufVxyXG5cclxuLyoqXHJcbiAqICjlj5bmtogp5pS26JeP5ZWG5ZOBXHJcbiAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY29sbGVjdChlOiBCYXNlRXZlbnQ8e2lkOiBudW1iZXI7IGNvbGxlY3Q6IGJvb2xlYW59Pikge1xyXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLXNoYWRvd2VkLXZhcmlhYmxlXHJcbiAgICBjb25zdCB7IGlkLCBjb2xsZWN0IH0gPSBlLnRhcmdldC5kYXRhc2V0O1xyXG5cclxuICAgIGF3YWl0IHJlcXVlc3Qoe1xyXG4gICAgICAgIHVybDogJy9hcGkvbGlrZScsXHJcbiAgICAgICAgbWV0aG9kOiBjb2xsZWN0ID8gJ0RFTEVURScgOiAnUFVUJyxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgIHRhcmdldElkOiBpZCxcclxuICAgICAgICAgICAgdHlwZTogMVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcmV0dXJuICh7IGlkLCBjb2xsZWN0IH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRXZlbnQ8VCBleHRlbmRzIG9iamVjdD4oZGF0YXNldDogVCk6IEJhc2VFdmVudDxUPiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGU6ICdzaW11bGF0aW9uJyxcclxuICAgICAgICBkZXRhaWw6IHt9LFxyXG4gICAgICAgIHRhcmdldDoge2lkOiAnaWQnLCBkYXRhc2V0fSxcclxuICAgICAgICBjdXJyZW50VGFyZ2V0OiB7aWQ6ICdpZCcsIGRhdGFzZXR9LFxyXG4gICAgICAgIHRpbWVTdGFtcDogRGF0ZS5ub3coKSxcclxuICAgICAgICBtYXJrOiB7fVxyXG4gICAgfTtcclxufVxyXG4iXX0=