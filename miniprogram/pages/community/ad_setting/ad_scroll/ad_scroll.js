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
        isDouble: true,
        loading: false
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
            if (this.data.loading) {
                return;
            }
            upload_1.chooseImage()
                .then(function (src) {
                _this.setData({ loading: true });
                return Promise.all([util_1.upload(src, ''), src]);
            })
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
                .catch(console.log)
                .finally(function () { return _this.setData({ loading: false }); });
        },
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRfc2Nyb2xsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYWRfc2Nyb2xsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrREFBbUU7QUFDbkUsK0NBQWlEO0FBQ2pELG9EQUFxRDtBQUNyRCwrQ0FBZ0Q7QUFXaEQsU0FBUyxDQUFVO0lBQ2YsVUFBVSxFQUFFO1FBQ1IsTUFBTSxFQUFFO1lBQ0osSUFBSSxFQUFFLE9BQU87WUFDYixLQUFLLEVBQUUsS0FBSztTQUNmO0tBQ0o7SUFDRCxJQUFJLEVBQUU7UUFDRixHQUFHLEVBQVksRUFBRTtRQUNqQixRQUFRLEVBQUUsSUFBSTtRQUNkLE9BQU8sRUFBRSxLQUFLO0tBQ2pCO0lBQ0QsUUFBUTtRQUFSLGlCQUlDO1FBSEcsY0FBTyxDQUFRLEVBQUMsR0FBRyxFQUFFLG9CQUFvQixFQUFDLENBQUM7YUFDdEMsSUFBSSxDQUFDLFVBQUMsRUFBTTtnQkFBTCxjQUFJO1lBQU0sT0FBQSxLQUFJLENBQUMsT0FBTyxDQUFDLEVBQUMsR0FBRyxFQUFFLElBQUksRUFBQyxDQUFDO1FBQXpCLENBQXlCLENBQUM7YUFDM0MsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBQ0QsT0FBTyxFQUFFO1FBQ0wsTUFBTSxZQUFDLEVBQThDO1lBQXJELGlCQW1CQztnQkFuQmlDLHNDQUFLO1lBQ25DLEVBQUUsQ0FBQyxTQUFTLENBQUM7Z0JBQ1QsT0FBTyxFQUFFLFFBQVE7Z0JBQ2pCLE9BQU8sRUFBRSxVQUFDLEVBQVM7d0JBQVIsb0JBQU87b0JBQ2QsSUFBRyxPQUFPLEVBQUU7d0JBQ1IsSUFBTSxLQUFHLEdBQUcsS0FBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7d0JBQzFCLGNBQU8sQ0FBQzs0QkFDSixHQUFHLEVBQUUsZ0JBQWdCOzRCQUNyQixJQUFJLEVBQUUsRUFBQyxFQUFFLEVBQUUsS0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsRUFBQzt5QkFDNUIsQ0FBQzs2QkFDRyxJQUFJLENBQUM7NEJBQ0YsRUFBRSxDQUFDLFNBQVMsQ0FBQyxFQUFDLEtBQUssRUFBRSxNQUFNLEVBQUMsQ0FBQyxDQUFDOzRCQUM5QixLQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQzs0QkFDckIsS0FBSSxDQUFDLE9BQU8sQ0FBQyxFQUFDLEdBQUcsT0FBQSxFQUFDLENBQUMsQ0FBQzt3QkFDeEIsQ0FBQyxDQUFDOzZCQUNELEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7cUJBQzNCO2dCQUNMLENBQUM7YUFDSixDQUFDLENBQUM7UUFDUCxDQUFDO1FBQ0QsR0FBRztZQUFILGlCQXVCQztZQXRCRyxJQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO2dCQUNsQixPQUFPO2FBQ1Y7WUFFRCxvQkFBVyxFQUFFO2lCQUNSLElBQUksQ0FBQyxVQUFDLEdBQUc7Z0JBQ04sS0FBSSxDQUFDLE9BQU8sQ0FBQyxFQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUMsQ0FBQyxDQUFDO2dCQUM5QixPQUFPLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxhQUFNLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDL0MsQ0FBQyxDQUFDO2lCQUNELElBQUksQ0FBQyxVQUFPLEVBQWE7b0JBQVosY0FBTSxFQUFFLFdBQUc7Ozs7O29DQUNBLFdBQU0sY0FBTyxDQUFTO29DQUN2QyxHQUFHLEVBQUUsU0FBUztvQ0FDZCxNQUFNLEVBQUUsS0FBSztvQ0FDYixJQUFJLEVBQUUsRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLGVBQU8sQ0FBQyxLQUFLLEVBQUU7b0NBQ25ELE1BQU0sRUFBRSxFQUFFLGNBQWMsRUFBRSxtQ0FBbUMsRUFBRTtpQ0FDbEUsQ0FBQyxFQUFBOztnQ0FMWSxFQUFFLEdBQUssQ0FBQSxTQUtuQixDQUFBLEtBTGM7Z0NBTWhCLFdBQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLElBQUEsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBQzs7OzthQUN4RCxDQUFDO2lCQUNELElBQUksQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLE9BQU8sQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLEVBQXZCLENBQXVCLENBQUM7aUJBQ25DLElBQUksQ0FBQyxjQUFNLE9BQUEsRUFBRSxDQUFDLFNBQVMsQ0FBQyxFQUFDLEtBQUssRUFBRSxNQUFNLEVBQUMsQ0FBQyxFQUE3QixDQUE2QixDQUFDO2lCQUN6QyxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQztpQkFDbEIsT0FBTyxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsT0FBTyxDQUFDLEVBQUMsT0FBTyxFQUFFLEtBQUssRUFBQyxDQUFDLEVBQTlCLENBQThCLENBQUMsQ0FBQztRQUN2RCxDQUFDO0tBQ0o7Q0FDSixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjaG9vc2VJbWFnZSB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvdXBsb2FkL3VwbG9hZCc7XHJcbmltcG9ydCB7IHJlcXVlc3QgfSBmcm9tICcuLi8uLi8uLi8uLi91dGlscy9odHRwJztcclxuaW1wb3J0IHsgQURfVFlQRSB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbnN0YW50L2luZGV4JztcclxuaW1wb3J0IHsgdXBsb2FkIH0gZnJvbSAnLi4vLi4vLi4vLi4vdXRpbHMvdXRpbCc7XHJcblxyXG50eXBlIEFESXRlbSA9IFBpY2s8SUFELCAnaW1nJyB8ICdpZCcgfCAndXJsJz47XHJcblxyXG5pbnRlcmZhY2UgQWRJbmRleCBleHRlbmRzIFd4Q29tcG9uZW50IHtcclxuICAgIGRhdGE6IHtcclxuICAgICAgICBhZHM6IEFESXRlbVtdO1xyXG4gICAgICAgIGxvYWRpbmc6IGJvb2xlYW47XHJcbiAgICB9O1xyXG59XHJcblxyXG5Db21wb25lbnQ8QWRJbmRleD4oe1xyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIGhpZGRlbjoge1xyXG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxyXG4gICAgICAgICAgICB2YWx1ZTogZmFsc2VcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgZGF0YToge1xyXG4gICAgICAgIGFkczogPEFESXRlbVtdPltdLFxyXG4gICAgICAgIGlzRG91YmxlOiB0cnVlLFxyXG4gICAgICAgIGxvYWRpbmc6IGZhbHNlXHJcbiAgICB9LFxyXG4gICAgYXR0YWNoZWQoKSB7XHJcbiAgICAgICAgcmVxdWVzdDxJQURbXT4oe3VybDogJy9hcGkvYWQvZ2V0Q2Fyb3VzZSd9KVxyXG4gICAgICAgICAgICAudGhlbigoe2RhdGF9KSA9PiB0aGlzLnNldERhdGEoe2FkczogZGF0YX0pKVxyXG4gICAgICAgICAgICAuY2F0Y2goY29uc29sZS5sb2cpO1xyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgICByZW1vdmUoe2N1cnJlbnRUYXJnZXQ6IHtkYXRhc2V0OiB7aW5kZXh9fX06IEJhc2VFdmVudCkge1xyXG4gICAgICAgICAgICB3eC5zaG93TW9kYWwoe1xyXG4gICAgICAgICAgICAgICAgY29udGVudDogJ+WIoOmZpOivpeW5v+WRij8nLFxyXG4gICAgICAgICAgICAgICAgc3VjY2VzczogKHtjb25maXJtfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKGNvbmZpcm0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYWRzID0gdGhpcy5kYXRhLmFkcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWVzdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6ICcvYXBpL2FkL3JlbW92ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7aWQ6IGFkc1tpbmRleF0uaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd3guc2hvd1RvYXN0KHt0aXRsZTogJ+WIoOmZpOaIkOWKnyd9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZHMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldERhdGEoe2Fkc30pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaChjb25zb2xlLmxvZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGFkZCgpIHtcclxuICAgICAgICAgICAgaWYodGhpcy5kYXRhLmxvYWRpbmcpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY2hvb3NlSW1hZ2UoKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKHNyYykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7bG9hZGluZzogdHJ1ZX0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLmFsbChbdXBsb2FkKHNyYywgJycpLCBzcmNdKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAudGhlbihhc3luYyAoW29yaWdpbiwgc3JjXSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgZGF0YTogaWQgfSA9IGF3YWl0IHJlcXVlc3Q8bnVtYmVyPih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogJy9hcGkvYWQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdQVVQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7IGltZzogb3JpZ2luLCB1cmw6ICcnLCB0eXBlOiBBRF9UWVBFLklOREVYIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcjogeyAnQ29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmRhdGEuYWRzLnB1c2goeyBpbWc6IHNyYywgaWQsIHVybDogJycgfSk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4gdGhpcy5zZXREYXRhKHRoaXMuZGF0YSkpXHJcbiAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB3eC5zaG93VG9hc3Qoe3RpdGxlOiAn5re75Yqg5oiQ5YqfJ30pKVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKGNvbnNvbGUubG9nKVxyXG4gICAgICAgICAgICAgICAgLmZpbmFsbHkoKCkgPT4gdGhpcy5zZXREYXRhKHtsb2FkaW5nOiBmYWxzZX0pKTtcclxuICAgICAgICB9LFxyXG4gICAgfVxyXG59KTtcclxuIl19