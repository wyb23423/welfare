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
var http_1 = require("../../../../utils/http");
var index_1 = require("../../../../constant/index");
var util_1 = require("../../../../utils/util");
Component({
    properties: {
        hidden: {
            type: Boolean,
            value: false
        }
    },
    data: {
        ads: [],
        isDouble: true
    },
    attached: function () {
        var _this = this;
        http_1.request({ url: '/api/ad/getCarouse' })
            .then(function (_a) {
            var data = _a.data;
            return _this.setData({ ads: data });
        })
            .catch(console.log);
    },
    methods: {
        remove: function (_a) {
            var _this = this;
            var index = _a.currentTarget.dataset.index;
            wx.showModal({
                content: '删除该广告?',
                success: function (_a) {
                    var confirm = _a.confirm;
                    if (confirm) {
                        var ads_1 = _this.data.ads;
                        http_1.request({
                            url: '/api/ad/remove',
                            data: { id: ads_1[index].id }
                        })
                            .then(function () {
                            wx.showToast({ title: '删除成功' });
                            ads_1.splice(index, 1);
                            _this.setData({ ads: ads_1 });
                        })
                            .catch(console.log);
                    }
                }
            });
        },
        add: function () {
            var _this = this;
            upload_1.chooseImage()
                .then(function (src) { return Promise.all([util_1.upload(src, ''), src]); })
                .then(function (_a) {
                var origin = _a[0], src = _a[1];
                return __awaiter(_this, void 0, void 0, function () {
                    var id;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0: return [4, http_1.request({
                                    url: '/api/ad',
                                    method: 'PUT',
                                    data: { img: origin, url: '', type: index_1.AD_TYPE.INDEX },
                                    header: { 'Content-type': 'application/x-www-form-urlencoded' }
                                })];
                            case 1:
                                id = (_b.sent()).data;
                                return [2, this.data.ads.push({ img: src, id: id, url: '' })];
                        }
                    });
                });
            })
                .then(function () { return _this.setData(_this.data); })
                .then(function () { return wx.showToast({ title: '添加成功' }); })
                .catch(console.log);
        },
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRfc2Nyb2xsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYWRfc2Nyb2xsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrREFBbUU7QUFDbkUsK0NBQWlEO0FBQ2pELG9EQUFxRDtBQUNyRCwrQ0FBZ0Q7QUFVaEQsU0FBUyxDQUFVO0lBQ2YsVUFBVSxFQUFFO1FBQ1IsTUFBTSxFQUFFO1lBQ0osSUFBSSxFQUFFLE9BQU87WUFDYixLQUFLLEVBQUUsS0FBSztTQUNmO0tBQ0o7SUFDRCxJQUFJLEVBQUU7UUFDRixHQUFHLEVBQVksRUFBRTtRQUNqQixRQUFRLEVBQUUsSUFBSTtLQUNqQjtJQUNELFFBQVE7UUFBUixpQkFJQztRQUhHLGNBQU8sQ0FBUSxFQUFDLEdBQUcsRUFBRSxvQkFBb0IsRUFBQyxDQUFDO2FBQ3RDLElBQUksQ0FBQyxVQUFDLEVBQU07Z0JBQUwsY0FBSTtZQUFNLE9BQUEsS0FBSSxDQUFDLE9BQU8sQ0FBQyxFQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUMsQ0FBQztRQUF6QixDQUF5QixDQUFDO2FBQzNDLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUNELE9BQU8sRUFBRTtRQUNMLE1BQU0sWUFBQyxFQUE4QztZQUFyRCxpQkFtQkM7Z0JBbkJpQyxzQ0FBSztZQUNuQyxFQUFFLENBQUMsU0FBUyxDQUFDO2dCQUNULE9BQU8sRUFBRSxRQUFRO2dCQUNqQixPQUFPLEVBQUUsVUFBQyxFQUFTO3dCQUFSLG9CQUFPO29CQUNkLElBQUcsT0FBTyxFQUFFO3dCQUNSLElBQU0sS0FBRyxHQUFHLEtBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO3dCQUMxQixjQUFPLENBQUM7NEJBQ0osR0FBRyxFQUFFLGdCQUFnQjs0QkFDckIsSUFBSSxFQUFFLEVBQUMsRUFBRSxFQUFFLEtBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLEVBQUM7eUJBQzVCLENBQUM7NkJBQ0csSUFBSSxDQUFDOzRCQUNGLEVBQUUsQ0FBQyxTQUFTLENBQUMsRUFBQyxLQUFLLEVBQUUsTUFBTSxFQUFDLENBQUMsQ0FBQzs0QkFDOUIsS0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7NEJBQ3JCLEtBQUksQ0FBQyxPQUFPLENBQUMsRUFBQyxHQUFHLE9BQUEsRUFBQyxDQUFDLENBQUM7d0JBQ3hCLENBQUMsQ0FBQzs2QkFDRCxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO3FCQUMzQjtnQkFDTCxDQUFDO2FBQ0osQ0FBQyxDQUFDO1FBQ1AsQ0FBQztRQUNELEdBQUc7WUFBSCxpQkFlQztZQWRHLG9CQUFXLEVBQUU7aUJBQ1IsSUFBSSxDQUFDLFVBQUMsR0FBRyxJQUFLLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLGFBQU0sQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFBbkMsQ0FBbUMsQ0FBQztpQkFDbEQsSUFBSSxDQUFDLFVBQU8sRUFBYTtvQkFBWixjQUFNLEVBQUUsV0FBRzs7Ozs7b0NBQ0EsV0FBTSxjQUFPLENBQVM7b0NBQ3ZDLEdBQUcsRUFBRSxTQUFTO29DQUNkLE1BQU0sRUFBRSxLQUFLO29DQUNiLElBQUksRUFBRSxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsZUFBTyxDQUFDLEtBQUssRUFBRTtvQ0FDbkQsTUFBTSxFQUFFLEVBQUUsY0FBYyxFQUFFLG1DQUFtQyxFQUFFO2lDQUNsRSxDQUFDLEVBQUE7O2dDQUxZLEVBQUUsR0FBSyxDQUFBLFNBS25CLENBQUEsS0FMYztnQ0FNaEIsV0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsSUFBQSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFDOzs7O2FBQ3hELENBQUM7aUJBQ0QsSUFBSSxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsT0FBTyxDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsRUFBdkIsQ0FBdUIsQ0FBQztpQkFDbkMsSUFBSSxDQUFDLGNBQU0sT0FBQSxFQUFFLENBQUMsU0FBUyxDQUFDLEVBQUMsS0FBSyxFQUFFLE1BQU0sRUFBQyxDQUFDLEVBQTdCLENBQTZCLENBQUM7aUJBQ3pDLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDNUIsQ0FBQztLQUNKO0NBQ0osQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY2hvb3NlSW1hZ2UgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL3VwbG9hZC91cGxvYWQnO1xyXG5pbXBvcnQgeyByZXF1ZXN0IH0gZnJvbSAnLi4vLi4vLi4vLi4vdXRpbHMvaHR0cCc7XHJcbmltcG9ydCB7IEFEX1RZUEUgfSBmcm9tICcuLi8uLi8uLi8uLi9jb25zdGFudC9pbmRleCc7XHJcbmltcG9ydCB7IHVwbG9hZCB9IGZyb20gJy4uLy4uLy4uLy4uL3V0aWxzL3V0aWwnO1xyXG5cclxudHlwZSBBREl0ZW0gPSBQaWNrPElBRCwgJ2ltZycgfCAnaWQnIHwgJ3VybCc+O1xyXG5cclxuaW50ZXJmYWNlIEFkSW5kZXggZXh0ZW5kcyBXeENvbXBvbmVudCB7XHJcbiAgICBkYXRhOiB7XHJcbiAgICAgICAgYWRzOiBBREl0ZW1bXTtcclxuICAgIH07XHJcbn1cclxuXHJcbkNvbXBvbmVudDxBZEluZGV4Pih7XHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgaGlkZGVuOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXHJcbiAgICAgICAgICAgIHZhbHVlOiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBkYXRhOiB7XHJcbiAgICAgICAgYWRzOiA8QURJdGVtW10+W10sXHJcbiAgICAgICAgaXNEb3VibGU6IHRydWVcclxuICAgIH0sXHJcbiAgICBhdHRhY2hlZCgpIHtcclxuICAgICAgICByZXF1ZXN0PElBRFtdPih7dXJsOiAnL2FwaS9hZC9nZXRDYXJvdXNlJ30pXHJcbiAgICAgICAgICAgIC50aGVuKCh7ZGF0YX0pID0+IHRoaXMuc2V0RGF0YSh7YWRzOiBkYXRhfSkpXHJcbiAgICAgICAgICAgIC5jYXRjaChjb25zb2xlLmxvZyk7XHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICAgIHJlbW92ZSh7Y3VycmVudFRhcmdldDoge2RhdGFzZXQ6IHtpbmRleH19fTogQmFzZUV2ZW50KSB7XHJcbiAgICAgICAgICAgIHd4LnNob3dNb2RhbCh7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiAn5Yig6Zmk6K+l5bm/5ZGKPycsXHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiAoe2NvbmZpcm19KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoY29uZmlybSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhZHMgPSB0aGlzLmRhdGEuYWRzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1ZXN0KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybDogJy9hcGkvYWQvcmVtb3ZlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHtpZDogYWRzW2luZGV4XS5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3eC5zaG93VG9hc3Qoe3RpdGxlOiAn5Yig6Zmk5oiQ5YqfJ30pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7YWRzfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGNvbnNvbGUubG9nKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYWRkKCkge1xyXG4gICAgICAgICAgICBjaG9vc2VJbWFnZSgpXHJcbiAgICAgICAgICAgICAgICAudGhlbigoc3JjKSA9PiBQcm9taXNlLmFsbChbdXBsb2FkKHNyYywgJycpLCBzcmNdKSlcclxuICAgICAgICAgICAgICAgIC50aGVuKGFzeW5jIChbb3JpZ2luLCBzcmNdKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeyBkYXRhOiBpZCB9ID0gYXdhaXQgcmVxdWVzdDxudW1iZXI+KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiAnL2FwaS9hZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BVVCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHsgaW1nOiBvcmlnaW4sIHVybDogJycsIHR5cGU6IEFEX1RZUEUuSU5ERVggfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyOiB7ICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGF0YS5hZHMucHVzaCh7IGltZzogc3JjLCBpZCwgdXJsOiAnJyB9KTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB0aGlzLnNldERhdGEodGhpcy5kYXRhKSlcclxuICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHd4LnNob3dUb2FzdCh7dGl0bGU6ICfmt7vliqDmiJDlip8nfSkpXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goY29uc29sZS5sb2cpO1xyXG4gICAgICAgIH0sXHJcbiAgICB9XHJcbn0pO1xyXG4iXX0=