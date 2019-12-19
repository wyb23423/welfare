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
                var _a, src, img, index, id, e_1;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _b.trys.push([0, 4, , 5]);
                            return [4, upload_1.chooseImage()];
                        case 1:
                            src = _b.sent();
                            return [4, util_1.upload(src, '')];
                        case 2:
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
                        case 3:
                            id = (_b.sent()).data;
                            if (this.data.showMessage[0]) {
                                this.data.showMessage[0] = false;
                                wx.showToast({ title: '设置成功' });
                            }
                            this.setData((_a = {}, _a["ads[" + index + "]"] = { img: src, id: id, url: '' }, _a));
                            return [3, 5];
                        case 4:
                            e_1 = _b.sent();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRfYmFubmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYWRfYmFubmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrREFBbUU7QUFDbkUsb0RBQXFEO0FBQ3JELCtDQUFpRDtBQUNqRCwrQ0FBZ0Q7QUFFaEQsSUFBTSxPQUFPLEdBQUcsQ0FBQyxlQUFPLENBQUMsUUFBUSxFQUFFLGVBQU8sQ0FBQyxLQUFLLEVBQUUsZUFBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBRWxFLFNBQVMsQ0FBQztJQUNOLFVBQVUsRUFBRTtRQUNSLE1BQU0sRUFBRTtZQUNKLElBQUksRUFBRSxPQUFPO1lBQ2IsS0FBSyxFQUFFLEtBQUs7U0FDZjtLQUNKO0lBQ0QsSUFBSSxFQUFFO1FBQ0YsR0FBRyxFQUFFLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUM7UUFDdkIsVUFBVSxFQUFFLENBQUM7UUFDYixPQUFPLEVBQUUsQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBQztRQUNqQyxXQUFXLEVBQUUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDO0tBQzVCO0lBQ0QsUUFBUTtRQUFSLGlCQVNDO1FBUkcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFDLENBQUMsRUFBRSxDQUFDO1lBQ2pCLGNBQU8sQ0FBTTtnQkFDVCxHQUFHLEVBQUUsZUFBZTtnQkFDcEIsSUFBSSxFQUFFLEVBQUMsSUFBSSxFQUFFLENBQUMsRUFBQzthQUNsQixDQUFDO2lCQUNHLElBQUksQ0FBQyxVQUFDLEVBQU07b0JBQUwsY0FBSTs7Z0JBQU0sT0FBQSxLQUFJLENBQUMsT0FBTyxXQUFFLEdBQUMsU0FBTyxDQUFDLE1BQUcsSUFBRyxJQUFJLE1BQUU7WUFBbkMsQ0FBbUMsQ0FBQztpQkFDckQsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM1QixDQUFDLENBQUMsQ0FBQztJ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Ly4uLy4uL2NvbXBvbmVudHMvdXBsb2FkL3VwbG9hZCc7XHJcbmltcG9ydCB7IEFEX1RZUEUgfSBmcm9tICcuLi8uLi8uLi8uLi9jb25zdGFudC9pbmRleCc7XHJcbmltcG9ydCB7IHJlcXVlc3QgfSBmcm9tICcuLi8uLi8uLi8uLi91dGlscy9odHRwJztcclxuaW1wb3J0IHsgdXBsb2FkIH0gZnJvbSAnLi4vLi4vLi4vLi4vdXRpbHMvdXRpbCc7XHJcblxyXG5jb25zdCB0eXBlQXJyID0gW0FEX1RZUEUuQUNUSVZJVFksIEFEX1RZUEUuR09PRFMsIEFEX1RZUEUuUEVSU09OXTtcclxuXHJcbkNvbXBvbmVudCh7XHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgaGlkZGVuOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXHJcbiAgICAgICAgICAgIHZhbHVlOiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBkYXRhOiB7XHJcbiAgICAgICAgYWRzOiBbbnVsbCwgbnVsbCwgbnVsbF0sXHJcbiAgICAgICAgcmFkaW9JbmRleDogMCxcclxuICAgICAgICBvcHRpb25zOiBbJ+a0u+WKqOWIl+ihqCcsICfllYblk4HliJfooagnLCAn5Liq5Lq65Lit5b+DJ10sXHJcbiAgICAgICAgc2hvd01lc3NhZ2U6IFt0cnVlLCB0cnVlXVxyXG4gICAgfSxcclxuICAgIGF0dGFjaGVkKCkge1xyXG4gICAgICAgIHR5cGVBcnIuZm9yRWFjaCgodiwgaSkgPT4ge1xyXG4gICAgICAgICAgICByZXF1ZXN0PElBRD4oe1xyXG4gICAgICAgICAgICAgICAgdXJsOiAnL2FwaS9hZC9nZXRBZCcsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7dHlwZTogdn1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC50aGVuKCh7ZGF0YX0pID0+IHRoaXMuc2V0RGF0YSh7W2BhZHNbJHtpfV1gXTogZGF0YX0pKVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKGNvbnNvbGUubG9nKTtcclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgcmFkaW9DaGFuZ2Uoe2RldGFpbDoge3ZhbHVlfX06IEJhc2VFdmVudCkge1xyXG4gICAgICAgICAgICB0aGlzLnNldERhdGEoe3JhZGlvSW5kZXg6IHZhbHVlfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBhc3luYyBtb2RpZnkoKSB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzcmMgPSBhd2FpdCBjaG9vc2VJbWFnZSgpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaW1nID0gYXdhaXQgdXBsb2FkKHNyYywgJycpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLmRhdGEucmFkaW9JbmRleDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHtkYXRhOiBpZH0gPSBhd2FpdCByZXF1ZXN0PG51bWJlcj4oe1xyXG4gICAgICAgICAgICAgICAgICAgIHVybDogJy9hcGkvYWQnLFxyXG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BVVCcsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogeyBpbWcsIHVybDogJycsIHR5cGU6IHR5cGVBcnJbaW5kZXhdIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJ1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5kYXRhLnNob3dNZXNzYWdlWzBdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhLnNob3dNZXNzYWdlWzBdID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgd3guc2hvd1RvYXN0KHt0aXRsZTogJ+iuvue9ruaIkOWKnyd9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7W2BhZHNbJHtpbmRleH1dYF06IHsgaW1nOiBzcmMsIGlkLCB1cmw6ICcnIH19KTtcclxuICAgICAgICAgICAgfSBjYXRjaChlKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcmVtb3ZlKCkge1xyXG4gICAgICAgICAgICB3eC5zaG93TW9kYWwoe1xyXG4gICAgICAgICAgICAgICAgY29udGVudDogJ+WIoOmZpOivpeW5v+WRij8nLFxyXG4gICAgICAgICAgICAgICAgc3VjY2VzczogKHtjb25maXJtfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKGNvbmZpcm0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qge2FkcywgcmFkaW9JbmRleDogaW5kZXh9ID0gdGhpcy5kYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1ZXN0KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybDogJy9hcGkvYWQvcmVtb3ZlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHtpZDogYWRzW2luZGV4XS5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHRoaXMuc2V0RGF0YSh7W2BhZHNbJHtpbmRleH1dYF06IG51bGx9KSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZih0aGlzLmRhdGEuc2hvd01lc3NhZ2VbMV0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhLnNob3dNZXNzYWdlWzFdID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7dGl0bGU6ICfliKDpmaTmiJDlip8nfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaChjb25zb2xlLmxvZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhpcy5zZXREYXRhKHtbYGFkc1ske3RoaXMuZGF0YS5yYWRpb0luZGV4fV0uaW1nYF06IHZvaWQgMH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICB9XHJcbn0pO1xyXG4iXX0=