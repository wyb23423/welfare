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
                                    data: { img: img, url: '', type: typeArr[index] },
                                    header: {
                                        'Content-type': 'application/x-www-form-urlencoded'
                                    }
                                })];
                        case 2:
                            id = (_b.sent()).data;
                            if (this.data.showMessage[0]) {
                                this.data.showMessage[0] = false;
                                wx.showToast({ title: '设置成功' });
                            }
                            this.setData((_a = {}, _a["ads[" + index + "]"] = { img: img, id: id, url: '' }, _a));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRfYmFubmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYWRfYmFubmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw0REFBZ0U7QUFDaEUsaURBQWtEO0FBQ2xELDRDQUE4QztBQUU5QyxJQUFNLE9BQU8sR0FBRyxDQUFDLGVBQU8sQ0FBQyxRQUFRLEVBQUUsZUFBTyxDQUFDLEtBQUssRUFBRSxlQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7QUFFbEUsU0FBUyxDQUFDO0lBQ04sVUFBVSxFQUFFO1FBQ1IsTUFBTSxFQUFFO1lBQ0osSUFBSSxFQUFFLE9BQU87WUFDYixLQUFLLEVBQUUsS0FBSztTQUNmO0tBQ0o7SUFDRCxJQUFJLEVBQUU7UUFDRixHQUFHLEVBQUUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQztRQUN2QixVQUFVLEVBQUUsQ0FBQztRQUNiLE9BQU8sRUFBRSxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDO1FBQ2pDLFdBQVcsRUFBRSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUM7S0FDNUI7SUFDRCxRQUFRO1FBQVIsaUJBU0M7UUFSRyxPQUFPLENBQUMsT0FBTyxDQUFDLFVBQUMsQ0FBQyxFQUFFLENBQUM7WUFDakIsY0FBTyxDQUFNO2dCQUNULEdBQUcsRUFBRSxlQUFlO2dCQUNwQixJQUFJLEVBQUUsRUFBQyxJQUFJLEVBQUUsQ0FBQyxFQUFDO2FBQ2xCLENBQUM7aUJBQ0csSUFBSSxDQUFDLFVBQUMsRUFBTTtvQkFBTCxjQUFJOztnQkFBTSxPQUFBLEtBQUksQ0FBQyxPQUFPLFdBQUUsR0FBQyxTQUFPLENBQUMsTUFBRyxJQUFHLElBQUksTUFBRTtZQUFuQyxDQUFtQyxDQUFDO2lCQUNyRCxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzVCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUNELE9BQU8sRUFBRTtRQUNMLFdBQVcsWUFBQyxFQUE0QjtnQkFBbEIsdUJBQUs7WUFDdkIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFDLFVBQVUsRUFBRSxLQUFLLEVBQUMsQ0FBQyxDQUFDO1FBQ3RDLENBQUM7UUFDSyxNQUFNOzs7Ozs7OzRCQUVRLFdBQU0sb0JBQVcsRUFBRSxFQUFBOzs0QkFBekIsR0FBRyxHQUFHLFNBQW1COzRCQUN6QixLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7NEJBQ2hCLFdBQU0sY0FBTyxDQUFTO29DQUNyQyxHQUFHLEVBQUUsU0FBUztvQ0FDZCxNQUFNLEVBQUUsS0FBSztvQ0FDYixJQUFJLEVBQUUsRUFBRSxHQUFHLEtBQUEsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7b0NBQzVDLE1BQU0sRUFBRTt3Q0FDSixjQUFjLEVBQUUsbUNBQW1DO3FDQUN0RDtpQ0FDSixDQUFDLEVBQUE7OzRCQVBXLEVBQUUsR0FBSSxDQUFBLFNBT2pCLENBQUEsS0FQYTs0QkFRZixJQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFFO2dDQUN6QixJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUM7Z0NBQ2pDLEVBQUUsQ0FBQyxTQUFTLENBQUMsRUFBQyxLQUFLLEVBQUUsTUFBTSxFQUFDLENBQUMsQ0FBQzs2QkFDakM7NEJBQ0QsSUFBSSxDQUFDLE9BQU8sV0FBRSxHQUFDLFNBQU8sS0FBSyxNQUFHLElBQUcsRUFBRSxHQUFHLEtBQUEsRUFBRSxFQUFFLElBQUEsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLE1BQUUsQ0FBQzs7Ozs7Ozs7O1NBSS9EO1FBQ0QsTUFBTTtZQUFOLGlCQXNCQzs7WUFyQkcsRUFBRSxDQUFDLFNBQVMsQ0FBQztnQkFDVCxPQUFPLEVBQUUsUUFBUTtnQkFDakIsT0FBTyxFQUFFLFVBQUMsRUFBUzt3QkFBUixvQkFBTztvQkFDZCxJQUFHLE9BQU8sRUFBRTt3QkFDRixJQUFBLGVBQW9DLEVBQW5DLFlBQUcsRUFBRSx1QkFBOEIsQ0FBQzt3QkFDM0MsY0FBTyxDQUFDOzRCQUNKLEdBQUcsRUFBRSxnQkFBZ0I7NEJBQ3JCLElBQUksRUFBRSxFQUFDLEVBQUUsRUFBRSxHQUFHLENBQUMsT0FBSyxDQUFDLENBQUMsRUFBRSxFQUFDO3lCQUM1QixDQUFDOzZCQUNHLElBQUksQ0FBQzs7NEJBQU0sT0FBQSxLQUFJLENBQUMsT0FBTyxXQUFFLEdBQUMsU0FBTyxPQUFLLE1BQUcsSUFBRyxJQUFJLE1BQUU7d0JBQXZDLENBQXVDLENBQUM7NkJBQ25ELElBQUksQ0FBQzs0QkFDRixJQUFHLEtBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFFO2dDQUN6QixLQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUM7Z0NBQ2pDLEVBQUUsQ0FBQyxTQUFTLENBQUMsRUFBQyxLQUFLLEVBQUUsTUFBTSxFQUFDLENBQUMsQ0FBQzs2QkFDakM7d0JBQ0wsQ0FBQyxDQUFDOzZCQUNELEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7cUJBQzNCO2dCQUNMLENBQUM7YUFDSixDQUFDLENBQUM7WUFDSCxJQUFJLENBQUMsT0FBTyxXQUFFLEdBQUMsU0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsVUFBTyxJQUFHLEtBQUssQ0FBQyxNQUFFLENBQUM7UUFDakUsQ0FBQztLQUNKO0NBQ0osQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY2hvb3NlSW1hZ2UgfSBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL3VwbG9hZC91cGxvYWQnO1xyXG5pbXBvcnQgeyBBRF9UWVBFIH0gZnJvbSAnLi4vLi4vLi4vY29uc3RhbnQvaW5kZXgnO1xyXG5pbXBvcnQgeyByZXF1ZXN0IH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvaHR0cCc7XHJcblxyXG5jb25zdCB0eXBlQXJyID0gW0FEX1RZUEUuQUNUSVZJVFksIEFEX1RZUEUuR09PRFMsIEFEX1RZUEUuUEVSU09OXTtcclxuXHJcbkNvbXBvbmVudCh7XHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgaGlkZGVuOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXHJcbiAgICAgICAgICAgIHZhbHVlOiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBkYXRhOiB7XHJcbiAgICAgICAgYWRzOiBbbnVsbCwgbnVsbCwgbnVsbF0sXHJcbiAgICAgICAgcmFkaW9JbmRleDogMCxcclxuICAgICAgICBvcHRpb25zOiBbJ+a0u+WKqOWIl+ihqCcsICfllYblk4HliJfooagnLCAn5Liq5Lq65Lit5b+DJ10sXHJcbiAgICAgICAgc2hvd01lc3NhZ2U6IFt0cnVlLCB0cnVlXVxyXG4gICAgfSxcclxuICAgIGF0dGFjaGVkKCkge1xyXG4gICAgICAgIHR5cGVBcnIuZm9yRWFjaCgodiwgaSkgPT4ge1xyXG4gICAgICAgICAgICByZXF1ZXN0PElBRD4oe1xyXG4gICAgICAgICAgICAgICAgdXJsOiAnL2FwaS9hZC9nZXRBZCcsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7dHlwZTogdn1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC50aGVuKCh7ZGF0YX0pID0+IHRoaXMuc2V0RGF0YSh7W2BhZHNbJHtpfV1gXTogZGF0YX0pKVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKGNvbnNvbGUubG9nKTtcclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgcmFkaW9DaGFuZ2Uoe2RldGFpbDoge3ZhbHVlfX06IEJhc2VFdmVudCkge1xyXG4gICAgICAgICAgICB0aGlzLnNldERhdGEoe3JhZGlvSW5kZXg6IHZhbHVlfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBhc3luYyBtb2RpZnkoKSB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpbWcgPSBhd2FpdCBjaG9vc2VJbWFnZSgpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLmRhdGEucmFkaW9JbmRleDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHtkYXRhOiBpZH0gPSBhd2FpdCByZXF1ZXN0PG51bWJlcj4oe1xyXG4gICAgICAgICAgICAgICAgICAgIHVybDogJy9hcGkvYWQnLFxyXG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BVVCcsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogeyBpbWcsIHVybDogJycsIHR5cGU6IHR5cGVBcnJbaW5kZXhdIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJ1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5kYXRhLnNob3dNZXNzYWdlWzBdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhLnNob3dNZXNzYWdlWzBdID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgd3guc2hvd1RvYXN0KHt0aXRsZTogJ+iuvue9ruaIkOWKnyd9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7W2BhZHNbJHtpbmRleH1dYF06IHsgaW1nLCBpZCwgdXJsOiAnJyB9fSk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2goZSkge1xyXG4gICAgICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcmVtb3ZlKCkge1xyXG4gICAgICAgICAgICB3eC5zaG93TW9kYWwoe1xyXG4gICAgICAgICAgICAgICAgY29udGVudDogJ+WIoOmZpOivpeW5v+WRij8nLFxyXG4gICAgICAgICAgICAgICAgc3VjY2VzczogKHtjb25maXJtfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKGNvbmZpcm0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qge2FkcywgcmFkaW9JbmRleDogaW5kZXh9ID0gdGhpcy5kYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1ZXN0KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybDogJy9hcGkvYWQvcmVtb3ZlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHtpZDogYWRzW2luZGV4XS5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHRoaXMuc2V0RGF0YSh7W2BhZHNbJHtpbmRleH1dYF06IG51bGx9KSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZih0aGlzLmRhdGEuc2hvd01lc3NhZ2VbMV0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhLnNob3dNZXNzYWdlWzFdID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7dGl0bGU6ICfliKDpmaTmiJDlip8nfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaChjb25zb2xlLmxvZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhpcy5zZXREYXRhKHtbYGFkc1ske3RoaXMuZGF0YS5yYWRpb0luZGV4fV0uaW1nYF06IHZvaWQgMH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICB9XHJcbn0pO1xyXG4iXX0=