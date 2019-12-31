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
var upload_1 = require("../../../../components/upload/upload");
var index_1 = require("../../../../constant/index");
var http_1 = require("../../../../utils/http");
var util_1 = require("../../../../utils/util");
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
        showMessage: [true, true],
        loading: false
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
                var _a, src, img, index, id, e_1;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            if (this.data.loading) {
                                return [2];
                            }
                            _b.label = 1;
                        case 1:
                            _b.trys.push([1, 5, , 6]);
                            return [4, upload_1.chooseImage()];
                        case 2:
                            src = _b.sent();
                            this.setData({ loading: true });
                            return [4, util_1.upload(src, '')];
                        case 3:
                            img = _b.sent();
                            index = this.data.radioIndex;
                            return [4, http_1.request({
                                    url: '/api/ad',
                                    method: 'PUT',
                                    data: { img: img, url: '', type: typeArr[index] },
                                    header: {
                                        'Content-type': 'application/x-www-form-urlencoded'
                                    }
                                })];
                        case 4:
                            id = (_b.sent()).data;
                            if (this.data.showMessage[0]) {
                                this.data.showMessage[0] = false;
                                wx.showToast({ title: '设置成功' });
                            }
                            this.setData((_a = {}, _a["ads[" + index + "]"] = { img: src, id: id, url: '' }, _a));
                            return [3, 6];
                        case 5:
                            e_1 = _b.sent();
                            console.log(e_1);
                            return [3, 6];
                        case 6:
                            this.setData({ loading: false });
                            return [2];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRfYmFubmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYWRfYmFubmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrREFBbUU7QUFDbkUsb0RBQXFEO0FBQ3JELCtDQUFpRDtBQUNqRCwrQ0FBZ0Q7QUFFaEQsSUFBTSxPQUFPLEdBQUcsQ0FBQyxlQUFPLENBQUMsUUFBUSxFQUFFLGVBQU8sQ0FBQyxLQUFLLEVBQUUsZUFBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBRWxFLFNBQVMsQ0FBQztJQUNOLFVBQVUsRUFBRTtRQUNSLE1BQU0sRUFBRTtZQUNKLElBQUksRUFBRSxPQUFPO1lBQ2IsS0FBSyxFQUFFLEtBQUs7U0FDZjtLQUNKO0lBQ0QsSUFBSSxFQUFFO1FBQ0YsR0FBRyxFQUFFLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUM7UUFDdkIsVUFBVSxFQUFFLENBQUM7UUFDYixPQUFPLEVBQUUsQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBQztRQUNqQyxXQUFXLEVBQUUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDO1FBQ3pCLE9BQU8sRUFBRSxLQUFLO0tBQ2pCO0lBQ0QsUUFBUTtRQUFSLGlCQVNDO1FBUkcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFDLENBQUMsRUFBRSxDQUFDO1lBQ2pCLGNBQU8sQ0FBTTtnQkFDVCxHQUFHLEVBQUUsZUFBZTtnQkFDcEIsSUFBSSxFQUFFLEVBQUMsSUFBSSxFQUFFLENBQUMsRUFBQzthQUNsQixDQUFDO2lCQUNHLElBQUksQ0FBQyxVQUFDLEVBQU07b0JBQUwsY0FBSTs7Z0JBQU0sT0FBQSxLQUFJLENBQUMsT0FBTyxXQUFFLEdBQUMsU0FBTyxDQUFDLE1BQUcsSUFBRyxJQUFJLE1BQUU7WUFBbkMsQ0FBbUMsQ0FBQztpQkFDckQsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztR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QkFDM0I7Z0JBQ0wsQ0FBQzthQUNKLENBQUMsQ0FBQztZQUNILElBQUksQ0FBQyxPQUFPLFdBQUUsR0FBQyxTQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxVQUFPLElBQUcsS0FBSyxDQUFDLE1BQUUsQ0FBQztRQUNqRSxDQUFDO0tBQ0o7Q0FDSixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjaG9vc2VJbWFnZSB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvdXBsb2FkL3VwbG9hZCc7XHJcbmltcG9ydCB7IEFEX1RZUEUgfSBmcm9tICcuLi8uLi8uLi8uLi9jb25zdGFudC9pbmRleCc7XHJcbmltcG9ydCB7IHJlcXVlc3QgfSBmcm9tICcuLi8uLi8uLi8uLi91dGlscy9odHRwJztcclxuaW1wb3J0IHsgdXBsb2FkIH0gZnJvbSAnLi4vLi4vLi4vLi4vdXRpbHMvdXRpbCc7XHJcblxyXG5jb25zdCB0eXBlQXJyID0gW0FEX1RZUEUuQUNUSVZJVFksIEFEX1RZUEUuR09PRFMsIEFEX1RZUEUuUEVSU09OXTtcclxuXHJcbkNvbXBvbmVudCh7XHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgaGlkZGVuOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXHJcbiAgICAgICAgICAgIHZhbHVlOiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBkYXRhOiB7XHJcbiAgICAgICAgYWRzOiBbbnVsbCwgbnVsbCwgbnVsbF0sXHJcbiAgICAgICAgcmFkaW9JbmRleDogMCxcclxuICAgICAgICBvcHRpb25zOiBbJ+a0u+WKqOWIl+ihqCcsICfllYblk4HliJfooagnLCAn5Liq5Lq65Lit5b+DJ10sXHJcbiAgICAgICAgc2hvd01lc3NhZ2U6IFt0cnVlLCB0cnVlXSxcclxuICAgICAgICBsb2FkaW5nOiBmYWxzZVxyXG4gICAgfSxcclxuICAgIGF0dGFjaGVkKCkge1xyXG4gICAgICAgIHR5cGVBcnIuZm9yRWFjaCgodiwgaSkgPT4ge1xyXG4gICAgICAgICAgICByZXF1ZXN0PElBRD4oe1xyXG4gICAgICAgICAgICAgICAgdXJsOiAnL2FwaS9hZC9nZXRBZCcsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7dHlwZTogdn1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC50aGVuKCh7ZGF0YX0pID0+IHRoaXMuc2V0RGF0YSh7W2BhZHNbJHtpfV1gXTogZGF0YX0pKVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKGNvbnNvbGUubG9nKTtcclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgcmFkaW9DaGFuZ2Uoe2RldGFpbDoge3ZhbHVlfX06IEJhc2VFdmVudCkge1xyXG4gICAgICAgICAgICB0aGlzLnNldERhdGEoe3JhZGlvSW5kZXg6IHZhbHVlfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBhc3luYyBtb2RpZnkoKSB7XHJcbiAgICAgICAgICAgIGlmKHRoaXMuZGF0YS5sb2FkaW5nKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzcmMgPSBhd2FpdCBjaG9vc2VJbWFnZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7bG9hZGluZzogdHJ1ZX0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGltZyA9IGF3YWl0IHVwbG9hZChzcmMsICcnKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5kYXRhLnJhZGlvSW5kZXg7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB7ZGF0YTogaWR9ID0gYXdhaXQgcmVxdWVzdDxudW1iZXI+KHtcclxuICAgICAgICAgICAgICAgICAgICB1cmw6ICcvYXBpL2FkJyxcclxuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdQVVQnLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHsgaW1nLCB1cmw6ICcnLCB0eXBlOiB0eXBlQXJyW2luZGV4XSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnQ29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCdcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMuZGF0YS5zaG93TWVzc2FnZVswXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YS5zaG93TWVzc2FnZVswXSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7dGl0bGU6ICforr7nva7miJDlip8nfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldERhdGEoe1tgYWRzWyR7aW5kZXh9XWBdOiB7IGltZzogc3JjLCBpZCwgdXJsOiAnJyB9fSk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2goZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7bG9hZGluZzogZmFsc2V9KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHJlbW92ZSgpIHtcclxuICAgICAgICAgICAgd3guc2hvd01vZGFsKHtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICfliKDpmaTor6Xlub/lkYo/JyxcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6ICh7Y29uZmlybX0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZihjb25maXJtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHthZHMsIHJhZGlvSW5kZXg6IGluZGV4fSA9IHRoaXMuZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWVzdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6ICcvYXBpL2FkL3JlbW92ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7aWQ6IGFkc1tpbmRleF0uaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB0aGlzLnNldERhdGEoe1tgYWRzWyR7aW5kZXh9XWBdOiBudWxsfSkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5kYXRhLnNob3dNZXNzYWdlWzFdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YS5zaG93TWVzc2FnZVsxXSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3eC5zaG93VG9hc3Qoe3RpdGxlOiAn5Yig6Zmk5oiQ5YqfJ30pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY2F0Y2goY29uc29sZS5sb2cpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7W2BhZHNbJHt0aGlzLmRhdGEucmFkaW9JbmRleH1dLmltZ2BdOiB2b2lkIDB9KTtcclxuICAgICAgICB9LFxyXG4gICAgfVxyXG59KTtcclxuIl19