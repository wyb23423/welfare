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
        options: ['活动列表', '商品列表', '个人中心']
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
                            .catch(console.log);
                    }
                }
            });
            this.setData((_a = {}, _a["ads[" + this.data.radioIndex + "].img"] = void 0, _a));
        },
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRfYmFubmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYWRfYmFubmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw0REFBZ0U7QUFDaEUsaURBQWtEO0FBQ2xELDRDQUE4QztBQUU5QyxJQUFNLE9BQU8sR0FBRyxDQUFDLGVBQU8sQ0FBQyxRQUFRLEVBQUUsZUFBTyxDQUFDLEtBQUssRUFBRSxlQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7QUFFbEUsU0FBUyxDQUFDO0lBQ04sVUFBVSxFQUFFO1FBQ1IsTUFBTSxFQUFFO1lBQ0osSUFBSSxFQUFFLE9BQU87WUFDYixLQUFLLEVBQUUsS0FBSztTQUNmO0tBQ0o7SUFDRCxJQUFJLEVBQUU7UUFDRixHQUFHLEVBQUUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQztRQUN2QixVQUFVLEVBQUUsQ0FBQztRQUNiLE9BQU8sRUFBRSxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDO0tBQ3BDO0lBQ0QsUUFBUTtRQUFSLGlCQVNDO1FBUkcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFDLENBQUMsRUFBRSxDQUFDO1lBQ2pCLGNBQU8sQ0FBTTtnQkFDVCxHQUFHLEVBQUUsZUFBZTtnQkFDcEIsSUFBSSxFQUFFLEVBQUMsSUFBSSxFQUFFLENBQUMsRUFBQzthQUNsQixDQUFDO2lCQUNHLElBQUksQ0FBQyxVQUFDLEVBQU07b0JBQUwsY0FBSTs7Z0JBQU0sT0FBQSxLQUFJLENBQUMsT0FBTyxXQUFFLEdBQUMsU0FBTyxDQUFDLE1BQUcsSUFBRyxJQUFJLE1BQUU7WUFBbkMsQ0FBbUMsQ0FBQztpQkFDckQsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM1QixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFDRCxPQUFPLEVBQUU7UUFDTCxXQUFXLFlBQUMsRUFBNEI7Z0JBQWxCLHVCQUFLO1lBQ3ZCLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBQyxVQUFVLEVBQUUsS0FBSyxFQUFDLENBQUMsQ0FBQztRQUN0QyxDQUFDO1FBQ0ssTUFBTTs7Ozs7Ozs0QkFFUSxXQUFNLG9CQUFXLEVBQUUsRUFBQTs7NEJBQXpCLEdBQUcsR0FBRyxTQUFtQjs0QkFDekIsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDOzRCQUNoQixXQUFNLGNBQU8sQ0FBUztvQ0FDckMsR0FBRyxFQUFFLFNBQVM7b0NBQ2QsTUFBTSxFQUFFLEtBQUs7b0NBQ2IsSUFBSSxFQUFFLEVBQUUsR0FBRyxLQUFBLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO2lDQUMvQyxDQUFDLEVBQUE7OzRCQUpXLEVBQUUsR0FBSSxDQUFBLFNBSWpCLENBQUEsS0FKYTs0QkFLZixJQUFJLENBQUMsT0FBTyxXQUFFLEdBQUMsVUFBUSxLQUFLLE1BQUcsSUFBRyxFQUFFLEdBQUcsS0FBQSxFQUFFLEVBQUUsSUFBQSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsTUFBRSxDQUFDOzs7Ozs7Ozs7U0FJaEU7UUFDRCxNQUFNO1lBQU4saUJBZ0JDOztZQWZHLEVBQUUsQ0FBQyxTQUFTLENBQUM7Z0JBQ1QsT0FBTyxFQUFFLFFBQVE7Z0JBQ2pCLE9BQU8sRUFBRSxVQUFDLEVBQVM7d0JBQVIsb0JBQU87b0JBQ2QsSUFBRyxPQUFPLEVBQUU7d0JBQ0YsSUFBQSxlQUFvQyxFQUFuQyxZQUFHLEVBQUUsdUJBQThCLENBQUM7d0JBQzNDLGNBQU8sQ0FBQzs0QkFDSixHQUFHLEVBQUUsZ0JBQWdCOzRCQUNyQixJQUFJLEVBQUUsRUFBQyxFQUFFLEVBQUUsR0FBRyxDQUFDLE9BQUssQ0FBQyxDQUFDLEVBQUUsRUFBQzt5QkFDNUIsQ0FBQzs2QkFDRyxJQUFJLENBQUM7OzRCQUFNLE9BQUEsS0FBSSxDQUFDLE9BQU8sV0FBRSxHQUFDLFNBQU8sT0FBSyxNQUFHLElBQUcsSUFBSSxNQUFFO3dCQUF2QyxDQUF1QyxDQUFDOzZCQUNuRCxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO3FCQUMzQjtnQkFDTCxDQUFDO2FBQ0osQ0FBQyxDQUFDO1lBQ0gsSUFBSSxDQUFDLE9BQU8sV0FBRSxHQUFDLFNBQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLFVBQU8sSUFBRyxLQUFLLENBQUMsTUFBRSxDQUFDO1FBQ2pFLENBQUM7S0FDSjtDQUNKLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNob29zZUltYWdlIH0gZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy91cGxvYWQvdXBsb2FkJztcclxuaW1wb3J0IHsgQURfVFlQRSB9IGZyb20gJy4uLy4uLy4uL2NvbnN0YW50L2luZGV4JztcclxuaW1wb3J0IHsgcmVxdWVzdCB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL2h0dHAnO1xyXG5cclxuY29uc3QgdHlwZUFyciA9IFtBRF9UWVBFLkFDVElWSVRZLCBBRF9UWVBFLkdPT0RTLCBBRF9UWVBFLlBFUlNPTl07XHJcblxyXG5Db21wb25lbnQoe1xyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIGhpZGRlbjoge1xyXG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxyXG4gICAgICAgICAgICB2YWx1ZTogZmFsc2VcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgZGF0YToge1xyXG4gICAgICAgIGFkczogW251bGwsIG51bGwsIG51bGxdLFxyXG4gICAgICAgIHJhZGlvSW5kZXg6IDAsXHJcbiAgICAgICAgb3B0aW9uczogWyfmtLvliqjliJfooagnLCAn5ZWG5ZOB5YiX6KGoJywgJ+S4quS6uuS4reW/gyddXHJcbiAgICB9LFxyXG4gICAgYXR0YWNoZWQoKSB7XHJcbiAgICAgICAgdHlwZUFyci5mb3JFYWNoKCh2LCBpKSA9PiB7XHJcbiAgICAgICAgICAgIHJlcXVlc3Q8SUFEPih7XHJcbiAgICAgICAgICAgICAgICB1cmw6ICcvYXBpL2FkL2dldEFkJyxcclxuICAgICAgICAgICAgICAgIGRhdGE6IHt0eXBlOiB2fVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKHtkYXRhfSkgPT4gdGhpcy5zZXREYXRhKHtbYGFkc1ske2l9XWBdOiBkYXRhfSkpXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goY29uc29sZS5sb2cpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgICByYWRpb0NoYW5nZSh7ZGV0YWlsOiB7dmFsdWV9fTogQmFzZUV2ZW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7cmFkaW9JbmRleDogdmFsdWV9KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGFzeW5jIG1vZGlmeSgpIHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGltZyA9IGF3YWl0IGNob29zZUltYWdlKCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuZGF0YS5yYWRpb0luZGV4O1xyXG4gICAgICAgICAgICAgICAgY29uc3Qge2RhdGE6IGlkfSA9IGF3YWl0IHJlcXVlc3Q8bnVtYmVyPih7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsOiAnL2FwaS9hZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnUFVUJyxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7IGltZywgdXJsOiAnJywgdHlwZTogdHlwZUFycltpbmRleF0gfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldERhdGEoe1tgaW1nc1ske2luZGV4fV1gXTogeyBpbWcsIGlkLCB1cmw6ICcnIH19KTtcclxuICAgICAgICAgICAgfSBjYXRjaChlKSB7XHJcbiAgICAgICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICByZW1vdmUoKSB7XHJcbiAgICAgICAgICAgIHd4LnNob3dNb2RhbCh7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiAn5Yig6Zmk6K+l5bm/5ZGKPycsXHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiAoe2NvbmZpcm19KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoY29uZmlybSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB7YWRzLCByYWRpb0luZGV4OiBpbmRleH0gPSB0aGlzLmRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVlc3Qoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiAnL2FwaS9hZC9yZW1vdmUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge2lkOiBhZHNbaW5kZXhdLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4gdGhpcy5zZXREYXRhKHtbYGFkc1ske2luZGV4fV1gXTogbnVsbH0pKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGNvbnNvbGUubG9nKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGlzLnNldERhdGEoe1tgYWRzWyR7dGhpcy5kYXRhLnJhZGlvSW5kZXh9XS5pbWdgXTogdm9pZCAwfSk7XHJcbiAgICAgICAgfSxcclxuICAgIH1cclxufSk7XHJcbiJdfQ==