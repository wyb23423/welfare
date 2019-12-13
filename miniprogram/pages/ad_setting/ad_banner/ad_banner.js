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
                var _a, img, index, id, e_1;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _b.trys.push([0, 3, , 4]);
                            return [4, upload_1.chooseImage()];
                        case 1:
                            img = _b.sent();
                            index = this.data.radioIndex;
                            return [4, http_1.request({
                                    url: '/api/ad',
                                    method: 'PUT',
                                    data: { img: img, url: '', type: typeArr[index] }
                                })];
                        case 2:
                            id = (_b.sent()).data;
                            if (this.data.showMessage[0]) {
                                this.data.showMessage[0] = false;
                                wx.showToast({ title: '设置成功' });
                            }
                            this.setData((_a = {}, _a["imgs[" + index + "]"] = { img: img, id: id, url: '' }, _a));
                            return [3, 4];
                        case 3:
                            e_1 = _b.sent();
                            return [3, 4];
                        case 4: return [2];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRfYmFubmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYWRfYmFubmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw0REFBZ0U7QUFDaEUsaURBQWtEO0FBQ2xELDRDQUE4QztBQUU5QyxJQUFNLE9BQU8sR0FBRyxDQUFDLGVBQU8sQ0FBQyxRQUFRLEVBQUUsZUFBTyxDQUFDLEtBQUssRUFBRSxlQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7QUFFbEUsU0FBUyxDQUFDO0lBQ04sVUFBVSxFQUFFO1FBQ1IsTUFBTSxFQUFFO1lBQ0osSUFBSSxFQUFFLE9BQU87WUFDYixLQUFLLEVBQUUsS0FBSztTQUNmO0tBQ0o7SUFDRCxJQUFJLEVBQUU7UUFDRixHQUFHLEVBQUUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQztRQUN2QixVQUFVLEVBQUUsQ0FBQztRQUNiLE9BQU8sRUFBRSxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDO1FBQ2pDLFdBQVcsRUFBRSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUM7S0FDNUI7SUFDRCxRQUFRO1FBQVIsaUJBU0M7UUFSRyxPQUFPLENBQUMsT0FBTyxDQUFDLFVBQUMsQ0FBQyxFQUFFLENBQUM7WUFDakIsY0FBTyxDQUFNO2dCQUNULEdBQUcsRUFBRSxlQUFlO2dCQUNwQixJQUFJLEVBQUUsRUFBQyxJQUFJLEVBQUUsQ0FBQyxFQUFDO2FBQ2xCLENBQUM7aUJBQ0csSUFBSSxDQUFDLFVBQUMsRUFBTTtvQkFBTCxjQUFJOztnQkFBTSxPQUFBLEtBQUksQ0FBQyxPQUFPLFdBQUUsR0FBQyxTQUFPLENBQUMsTUFBRyxJQUFHLElBQUksTUFBRTtZQUFuQyxDQUFtQyxDQUFDO2lCQUNyRCxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzVCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUNELE9BQU8sRUFBRTtRQUNMLFdBQVcsWUFBQyxFQUE0QjtnQkFBbEIsdUJBQUs7WUFDdkIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFDLFVBQVUsRUFBRSxLQUFLLEVBQUMsQ0FBQyxDQUFDO1FBQ3RDLENBQUM7UUFDSyxNQUFNOzs7Ozs7OzRCQUVRLFdBQU0sb0JBQVcsRUFBRSxFQUFBOzs0QkFBekIsR0FBRyxHQUFHLFNBQW1COzRCQUN6QixLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7NEJBQ2hCLFdBQU0sY0FBTyxDQUFTO29DQUNyQyxHQUFHLEVBQUUsU0FBUztvQ0FDZCxNQUFNLEVBQUUsS0FBSztvQ0FDYixJQUFJLEVBQUUsRUFBRSxHQUFHLEtBQUEsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7aUNBQy9DLENBQUMsRUFBQTs7NEJBSlcsRUFBRSxHQUFJLENBQUEsU0FJakIsQ0FBQSxLQUphOzRCQUtmLElBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0NBQ3pCLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQztnQ0FDakMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxFQUFDLEtBQUssRUFBRSxNQUFNLEVBQUMsQ0FBQyxDQUFDOzZCQUNqQzs0QkFDRCxJQUFJLENBQUMsT0FBTyxXQUFFLEdBQUMsVUFBUSxLQUFLLE1BQUcsSUFBRyxFQUFFLEdBQUcsS0FBQSxFQUFFLEVBQUUsSUFBQSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsTUFBRSxDQUFDOzs7Ozs7Ozs7U0FJaEU7UUFDRCxNQUFNO1lBQU4saUJBc0JDOztZQXJCRyxFQUFFLENBQUMsU0FBUyxDQUFDO2dCQUNULE9BQU8sRUFBRSxRQUFRO2dCQUNqQixPQUFPLEVBQUUsVUFBQyxFQUFTO3dCQUFSLG9CQUFPO29CQUNkLElBQUcsT0FBTyxFQUFFO3dCQUNGLElBQUEsZUFBb0MsRUFBbkMsWUFBRyxFQUFFLHVCQUE4QixDQUFDO3dCQUMzQyxjQUFPLENBQUM7NEJBQ0osR0FBRyxFQUFFLGdCQUFnQjs0QkFDckIsSUFBSSxFQUFFLEVBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxPQUFLLENBQUMsQ0FBQyxFQUFFLEVBQUM7eUJBQzVCLENBQUM7NkJBQ0csSUFBSSxDQUFDOzs0QkFBTSxPQUFBLEtBQUksQ0FBQyxPQUFPLFdBQUUsR0FBQyxTQUFPLE9BQUssTUFBRyxJQUFHLElBQUksTUFBRTt3QkFBdkMsQ0FBdUMsQ0FBQzs2QkFDbkQsSUFBSSxDQUFDOzRCQUNGLElBQUcsS0FBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0NBQ3pCLEtBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQztnQ0FDakMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxFQUFDLEtBQUssRUFBRSxNQUFNLEVBQUMsQ0FBQyxDQUFDOzZCQUNqQzt3QkFDTCxDQUFDLENBQUM7NkJBQ0QsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztxQkFDM0I7Z0JBQ0wsQ0FBQzthQUNKLENBQUMsQ0FBQztZQUNILElBQUksQ0FBQyxPQUFPLFdBQUUsR0FBQyxTQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxVQUFPLElBQUcsS0FBSyxDQUFDLE1BQUUsQ0FBQztRQUNqRSxDQUFDO0tBQ0o7Q0FDSixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjaG9vc2VJbWFnZSB9IGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvdXBsb2FkL3VwbG9hZCc7XHJcbmltcG9ydCB7IEFEX1RZUEUgfSBmcm9tICcuLi8uLi8uLi9jb25zdGFudC9pbmRleCc7XHJcbmltcG9ydCB7IHJlcXVlc3QgfSBmcm9tICcuLi8uLi8uLi91dGlscy9odHRwJztcclxuXHJcbmNvbnN0IHR5cGVBcnIgPSBbQURfVFlQRS5BQ1RJVklUWSwgQURfVFlQRS5HT09EUywgQURfVFlQRS5QRVJTT05dO1xyXG5cclxuQ29tcG9uZW50KHtcclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBoaWRkZW46IHtcclxuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcclxuICAgICAgICAgICAgdmFsdWU6IGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGRhdGE6IHtcclxuICAgICAgICBhZHM6IFtudWxsLCBudWxsLCBudWxsXSxcclxuICAgICAgICByYWRpb0luZGV4OiAwLFxyXG4gICAgICAgIG9wdGlvbnM6IFsn5rS75Yqo5YiX6KGoJywgJ+WVhuWTgeWIl+ihqCcsICfkuKrkurrkuK3lv4MnXSxcclxuICAgICAgICBzaG93TWVzc2FnZTogW3RydWUsIHRydWVdXHJcbiAgICB9LFxyXG4gICAgYXR0YWNoZWQoKSB7XHJcbiAgICAgICAgdHlwZUFyci5mb3JFYWNoKCh2LCBpKSA9PiB7XHJcbiAgICAgICAgICAgIHJlcXVlc3Q8SUFEPih7XHJcbiAgICAgICAgICAgICAgICB1cmw6ICcvYXBpL2FkL2dldEFkJyxcclxuICAgICAgICAgICAgICAgIGRhdGE6IHt0eXBlOiB2fVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKHtkYXRhfSkgPT4gdGhpcy5zZXREYXRhKHtbYGFkc1ske2l9XWBdOiBkYXRhfSkpXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goY29uc29sZS5sb2cpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgICByYWRpb0NoYW5nZSh7ZGV0YWlsOiB7dmFsdWV9fTogQmFzZUV2ZW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7cmFkaW9JbmRleDogdmFsdWV9KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGFzeW5jIG1vZGlmeSgpIHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGltZyA9IGF3YWl0IGNob29zZUltYWdlKCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuZGF0YS5yYWRpb0luZGV4O1xyXG4gICAgICAgICAgICAgICAgY29uc3Qge2RhdGE6IGlkfSA9IGF3YWl0IHJlcXVlc3Q8bnVtYmVyPih7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsOiAnL2FwaS9hZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnUFVUJyxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7IGltZywgdXJsOiAnJywgdHlwZTogdHlwZUFycltpbmRleF0gfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLmRhdGEuc2hvd01lc3NhZ2VbMF0pIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGEuc2hvd01lc3NhZ2VbMF0gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB3eC5zaG93VG9hc3Qoe3RpdGxlOiAn6K6+572u5oiQ5YqfJ30pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXREYXRhKHtbYGltZ3NbJHtpbmRleH1dYF06IHsgaW1nLCBpZCwgdXJsOiAnJyB9fSk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2goZSkge1xyXG4gICAgICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcmVtb3ZlKCkge1xyXG4gICAgICAgICAgICB3eC5zaG93TW9kYWwoe1xyXG4gICAgICAgICAgICAgICAgY29udGVudDogJ+WIoOmZpOivpeW5v+WRij8nLFxyXG4gICAgICAgICAgICAgICAgc3VjY2VzczogKHtjb25maXJtfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKGNvbmZpcm0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qge2FkcywgcmFkaW9JbmRleDogaW5kZXh9ID0gdGhpcy5kYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1ZXN0KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybDogJy9hcGkvYWQvcmVtb3ZlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHtpZDogYWRzW2luZGV4XS5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHRoaXMuc2V0RGF0YSh7W2BhZHNbJHtpbmRleH1dYF06IG51bGx9KSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZih0aGlzLmRhdGEuc2hvd01lc3NhZ2VbMV0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhLnNob3dNZXNzYWdlWzFdID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7dGl0bGU6ICfliKDpmaTmiJDlip8nfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaChjb25zb2xlLmxvZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhpcy5zZXREYXRhKHtbYGFkc1ske3RoaXMuZGF0YS5yYWRpb0luZGV4fV0uaW1nYF06IHZvaWQgMH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICB9XHJcbn0pO1xyXG4iXX0=