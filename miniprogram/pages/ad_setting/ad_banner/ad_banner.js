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
var upload_1 = require("../../../components/upload/upload");
var index_1 = require("../../../constant/index");
var http_1 = require("../../../utils/http");
var util_1 = require("../../../utils/util");
var typeArr = [index_1.AD_TYPE.ACTIVITY, index_1.AD_TYPE.GOODS, index_1.AD_TYPE.PERSON];
Component({
    properties: {
        hidden: {
            type: Boolean,
            value: false
        }
    },
    data: {
        ads: [null, null, null],
        radioIndex: 0,
        options: ['活动列表', '商品列表', '个人中心'],
        showMessage: [true, true]
    },
    attached: function () {
        var _this = this;
        typeArr.forEach(function (v, i) {
            http_1.request({
                url: '/api/ad/getAd',
                data: { type: v }
            })
                .then(function (_a) {
                var data = _a.data;
                var _b;
                return _this.setData((_b = {}, _b["ads[" + i + "]"] = data, _b));
            })
                .catch(console.log);
        });
    },
    methods: {
        radioChange: function (_a) {
            var value = _a.detail.value;
            this.setData({ radioIndex: value });
        },
        modify: function () {
            return __awaiter(this, void 0, void 0, function () {
                var _a, img, _b, index, id, e_1;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            _c.trys.push([0, 4, , 5]);
                            _b = util_1.upload;
                            return [4, upload_1.chooseImage()];
                        case 1: return [4, _b.apply(void 0, [_c.sent(), ''])];
                        case 2:
                            img = _c.sent();
                            index = this.data.radioIndex;
                            return [4, http_1.request({
                                    url: '/api/ad',
                                    method: 'PUT',
                                    data: { img: img, url: '', type: typeArr[index] },
                                    header: {
                                        'Content-type': 'application/x-www-form-urlencoded'
                                    }
                                })];
                        case 3:
                            id = (_c.sent()).data;
                            if (this.data.showMessage[0]) {
                                this.data.showMessage[0] = false;
                                wx.showToast({ title: '设置成功' });
                            }
                            this.setData((_a = {}, _a["ads[" + index + "]"] = { img: img, id: id, url: '' }, _a));
                            return [3, 5];
                        case 4:
                            e_1 = _c.sent();
                            console.log(e_1);
                            return [3, 5];
                        case 5: return [2];
                    }
                });
            });
        },
        remove: function () {
            var _this = this;
            var _a;
            wx.showModal({
                content: '删除该广告?',
                success: function (_a) {
                    var confirm = _a.confirm;
                    if (confirm) {
                        var _b = _this.data, ads = _b.ads, index_2 = _b.radioIndex;
                        http_1.request({
                            url: '/api/ad/remove',
                            data: { id: ads[index_2].id }
                        })
                            .then(function () {
                            var _a;
                            return _this.setData((_a = {}, _a["ads[" + index_2 + "]"] = null, _a));
                        })
                            .then(function () {
                            if (_this.data.showMessage[1]) {
                                _this.data.showMessage[1] = false;
                                wx.showToast({ title: '删除成功' });
                            }
                        })
                            .catch(console.log);
                    }
                }
            });
            this.setData((_a = {}, _a["ads[" + this.data.radioIndex + "].img"] = void 0, _a));
        },
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRfYmFubmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYWRfYmFubmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw0REFBZ0U7QUFDaEUsaURBQWtEO0FBQ2xELDRDQUE4QztBQUM5Qyw0Q0FBNkM7QUFFN0MsSUFBTSxPQUFPLEdBQUcsQ0FBQyxlQUFPLENBQUMsUUFBUSxFQUFFLGVBQU8sQ0FBQyxLQUFLLEVBQUUsZUFBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBRWxFLFNBQVMsQ0FBQztJQUNOLFVBQVUsRUFBRTtRQUNSLE1BQU0sRUFBRTtZQUNKLElBQUksRUFBRSxPQUFPO1lBQ2IsS0FBSyxFQUFFLEtBQUs7U0FDZjtLQUNKO0lBQ0QsSUFBSSxFQUFFO1FBQ0YsR0FBRyxFQUFFLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUM7UUFDdkIsVUFBVSxFQUFFLENBQUM7UUFDYixPQUFPLEVBQUUsQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBQztRQUNqQyxXQUFXLEVBQUUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDO0tBQzVCO0lBQ0QsUUFBUTtRQUFSLGlCQVNDO1FBUkcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFDLENBQUMsRUFBRSxDQUFDO1lBQ2pCLGNBQU8sQ0FBTTtnQkFDVCxHQUFHLEVBQUUsZUFBZTtnQkFDcEIsSUFBSSxFQUFFLEVBQUMsSUFBSSxFQUFFLENBQUMsRUFBQzthQUNsQixDQUFDO2lCQUNHLElBQUksQ0FBQyxVQUFDLEVBQU07b0JBQUwsY0FBSTs7Z0JBQU0sT0FBQSxLQUFJLENBQUMsT0FBTyxXQUFFLEdBQUMsU0FBTyxDQUFDLE1BQUcsSUFBRyxJQUFJLE1BQUU7WUFBbkMsQ0FBbUMsQ0FBQztpQkFDckQsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM1QixDQUFDLENBQUMsQ0FBQztJ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bnRzL3VwbG9hZC91cGxvYWQnO1xyXG5pbXBvcnQgeyBBRF9UWVBFIH0gZnJvbSAnLi4vLi4vLi4vY29uc3RhbnQvaW5kZXgnO1xyXG5pbXBvcnQgeyByZXF1ZXN0IH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvaHR0cCc7XHJcbmltcG9ydCB7IHVwbG9hZCB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL3V0aWwnO1xyXG5cclxuY29uc3QgdHlwZUFyciA9IFtBRF9UWVBFLkFDVElWSVRZLCBBRF9UWVBFLkdPT0RTLCBBRF9UWVBFLlBFUlNPTl07XHJcblxyXG5Db21wb25lbnQoe1xyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIGhpZGRlbjoge1xyXG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxyXG4gICAgICAgICAgICB2YWx1ZTogZmFsc2VcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgZGF0YToge1xyXG4gICAgICAgIGFkczogW251bGwsIG51bGwsIG51bGxdLFxyXG4gICAgICAgIHJhZGlvSW5kZXg6IDAsXHJcbiAgICAgICAgb3B0aW9uczogWyfmtLvliqjliJfooagnLCAn5ZWG5ZOB5YiX6KGoJywgJ+S4quS6uuS4reW/gyddLFxyXG4gICAgICAgIHNob3dNZXNzYWdlOiBbdHJ1ZSwgdHJ1ZV1cclxuICAgIH0sXHJcbiAgICBhdHRhY2hlZCgpIHtcclxuICAgICAgICB0eXBlQXJyLmZvckVhY2goKHYsIGkpID0+IHtcclxuICAgICAgICAgICAgcmVxdWVzdDxJQUQ+KHtcclxuICAgICAgICAgICAgICAgIHVybDogJy9hcGkvYWQvZ2V0QWQnLFxyXG4gICAgICAgICAgICAgICAgZGF0YToge3R5cGU6IHZ9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAudGhlbigoe2RhdGF9KSA9PiB0aGlzLnNldERhdGEoe1tgYWRzWyR7aX1dYF06IGRhdGF9KSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaChjb25zb2xlLmxvZyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICAgIHJhZGlvQ2hhbmdlKHtkZXRhaWw6IHt2YWx1ZX19OiBCYXNlRXZlbnQpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXREYXRhKHtyYWRpb0luZGV4OiB2YWx1ZX0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYXN5bmMgbW9kaWZ5KCkge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaW1nID0gYXdhaXQgdXBsb2FkKGF3YWl0IGNob29zZUltYWdlKCksICcnKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5kYXRhLnJhZGlvSW5kZXg7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB7ZGF0YTogaWR9ID0gYXdhaXQgcmVxdWVzdDxudW1iZXI+KHtcclxuICAgICAgICAgICAgICAgICAgICB1cmw6ICcvYXBpL2FkJyxcclxuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdQVVQnLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHsgaW1nLCB1cmw6ICcnLCB0eXBlOiB0eXBlQXJyW2luZGV4XSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnQ29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCdcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMuZGF0YS5zaG93TWVzc2FnZVswXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YS5zaG93TWVzc2FnZVswXSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7dGl0bGU6ICforr7nva7miJDlip8nfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldERhdGEoe1tgYWRzWyR7aW5kZXh9XWBdOiB7IGltZywgaWQsIHVybDogJycgfX0pO1xyXG4gICAgICAgICAgICB9IGNhdGNoKGUpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICByZW1vdmUoKSB7XHJcbiAgICAgICAgICAgIHd4LnNob3dNb2RhbCh7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiAn5Yig6Zmk6K+l5bm/5ZGKPycsXHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiAoe2NvbmZpcm19KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoY29uZmlybSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB7YWRzLCByYWRpb0luZGV4OiBpbmRleH0gPSB0aGlzLmRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVlc3Qoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiAnL2FwaS9hZC9yZW1vdmUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge2lkOiBhZHNbaW5kZXhdLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4gdGhpcy5zZXREYXRhKHtbYGFkc1ske2luZGV4fV1gXTogbnVsbH0pKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuZGF0YS5zaG93TWVzc2FnZVsxXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGEuc2hvd01lc3NhZ2VbMV0gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd3guc2hvd1RvYXN0KHt0aXRsZTogJ+WIoOmZpOaIkOWKnyd9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGNvbnNvbGUubG9nKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGlzLnNldERhdGEoe1tgYWRzWyR7dGhpcy5kYXRhLnJhZGlvSW5kZXh9XS5pbWdgXTogdm9pZCAwfSk7XHJcbiAgICAgICAgfSxcclxuICAgIH1cclxufSk7XHJcbiJdfQ==