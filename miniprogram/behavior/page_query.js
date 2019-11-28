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
var http_1 = require("../utils/http");
var util_1 = require("../utils/util");
exports.default = Behavior({
    data: {
        list: [],
        hasMore: false,
        dataConfig: {
            currentPage: 'currentPage',
            pageSize: 'pageSize'
        }
    },
    methods: {
        reflash: function () {
            this.data.list.length > 1 ? this.onShow() : this.setData({ list: [] });
        },
        onShow: function () {
            var _this = this;
            this.getPageData()
                .then(function (_a) {
                var list = _a.list, total = _a.total;
                return _this.setData({ list: list, hasMore: total > list.length });
            })
                .catch(function (e) { return console.log(e.errMsg); });
        },
        getMore: function () {
            var _this = this;
            if (!this.data.hasMore) {
                return;
            }
            this.getPageData(Math.ceil(this.data.list.length / 8) + 1)
                .then(function (_a) {
                var list = _a.list, total = _a.total;
                var tempList = list.concat(_this.data.list);
                _this.setData({
                    list: tempList,
                    hasMore: total > tempList.length
                });
            })
                .catch(function (e) { return console.log(e.errMsg); });
        },
        getPageData: function (page) {
            if (page === void 0) { page = 1; }
            return __awaiter(this, void 0, void 0, function () {
                var _a, _b, currentPage, pageSize, _c, list, total;
                return __generator(this, function (_d) {
                    switch (_d.label) {
                        case 0:
                            if (!this.data.url) {
                                return [2, Promise.reject({ errMsg: '请求路径错误' })];
                            }
                            _b = this.data.dataConfig, currentPage = _b.currentPage, pageSize = _b.pageSize;
                            return [4, (http_1.request({
                                    url: this.data.url,
                                    data: (_a = {},
                                        _a[currentPage] = page,
                                        _a[pageSize] = 8,
                                        _a)
                                }))];
                        case 1:
                            _c = (_d.sent()).data, list = _c.list, total = _c.total;
                            return [2, ({ list: list.map(util_1.parseData), total: total })];
                    }
                });
            });
        },
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZV9xdWVyeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInBhZ2VfcXVlcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHNDQUF3QztBQUN4QyxzQ0FBMEM7QUFZMUMsa0JBQWUsUUFBUSxDQUFnQjtJQUNuQyxJQUFJLEVBQUU7UUFDRixJQUFJLEVBQVMsRUFBRTtRQUNmLE9BQU8sRUFBRSxLQUFLO1FBQ2QsVUFBVSxFQUFFO1lBQ1IsV0FBVyxFQUFFLGFBQWE7WUFDMUIsUUFBUSxFQUFFLFVBQVU7U0FDdkI7S0FDSjtJQUNELE9BQU8sRUFBRTtRQUNMLE9BQU87WUFDSCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBQyxJQUFJLEVBQUUsRUFBRSxFQUFDLENBQUMsQ0FBQztRQUN6RSxDQUFDO1FBQ0QsTUFBTTtZQUFOLGlCQUlDO1lBSEcsSUFBSSxDQUFDLFdBQVcsRUFBRTtpQkFDYixJQUFJLENBQUMsVUFBQyxFQUFlO29CQUFiLGNBQUksRUFBRSxnQkFBSztnQkFBTyxPQUFBLEtBQUksQ0FBQyxPQUFRLENBQUMsRUFBRSxJQUFJLE1BQUEsRUFBRSxPQUFPLEVBQUUsS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUFyRCxDQUFxRCxDQUFDO2lCQUNoRixLQUFLLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBckIsQ0FBcUIsQ0FBQyxDQUFDO1FBQzNDLENBQUM7UUFDRCxPQUFPO1lBQVAsaUJBY0M7WUFiRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7Z0JBQ3BCLE9BQU87YUFDVjtZQUVELElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2lCQUNyRCxJQUFJLENBQUMsVUFBQyxFQUFlO29CQUFiLGNBQUksRUFBRSxnQkFBSztnQkFDaEIsSUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUM3QyxLQUFJLENBQUMsT0FBUSxDQUFDO29CQUNWLElBQUksRUFBRSxRQUFRO29CQUNkLE9BQU8sRUFBRSxLQUFLLEdBQUcsUUFBUSxDQUFDLE1BQU07aUJBQ25DLENBQUMsQ0FBQztZQUNQLENBQUMsQ0FBQztpQkFDRCxLQUFLLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBckIsQ0FBcUIsQ0FBQyxDQUFDO1FBQzNDLENBQUM7UUFDSyxXQUFXLFlBQUMsSUFBZ0I7WUFBaEIscUJBQUEsRUFBQSxRQUFnQjs7Ozs7OzRCQUM5QixJQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUU7Z0NBQ2YsV0FBTyxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUMsTUFBTSxFQUFFLFFBQVEsRUFBQyxDQUFDLEVBQUM7NkJBQzdDOzRCQUVLLEtBQTBCLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUE3QyxXQUFXLGlCQUFBLEVBQUUsUUFBUSxjQUFBLENBQXlCOzRCQUNuQixXQUFNLENBQUMsY0FBTyxDQUFnQjtvQ0FDNUQsR0FBRyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRztvQ0FDbEIsSUFBSTt3Q0FDQSxHQUFDLFdBQVcsSUFBRyxJQUFJO3dDQUNuQixHQUFDLFFBQVEsSUFBRyxDQUFDOzJDQUNoQjtpQ0FDSixDQUFDLENBQUMsRUFBQTs7NEJBTkssS0FBMEIsQ0FBQSxTQU0vQixDQUFBLEtBTjBCLEVBQWIsSUFBSSxVQUFBLEVBQUUsS0FBSyxXQUFBOzRCQU8zQixXQUFPLENBQUMsRUFBRSxJQUFJLEVBQVUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxnQkFBUyxDQUFFLEVBQUUsS0FBSyxPQUFBLEVBQUUsQ0FBQyxFQUFDOzs7O1NBQzFEO0tBQ0o7Q0FDSixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZXF1ZXN0IH0gZnJvbSAnLi4vdXRpbHMvaHR0cCc7XHJcbmltcG9ydCB7IHBhcnNlRGF0YSB9IGZyb20gJy4uL3V0aWxzL3V0aWwnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBMaXN0Q29tcG9uZW50IGV4dGVuZHMgV3hDb21wb25lbnQge1xyXG4gICAgcmVmbGFzaCgpOiB2b2lkO1xyXG4gICAgb25TaG93KCk6IHZvaWQ7XHJcbiAgICBnZXRNb3JlKCk6IHZvaWQ7XHJcbiAgICBnZXRQYWdlRGF0YShwYWdlPzogbnVtYmVyKTogUHJvbWlzZTx7XHJcbiAgICAgICAgbGlzdDogQXJyYXk8SUFjdGl2ZSB8IElDb21tb2RpdHk+O1xyXG4gICAgICAgIHRvdGFsOiBudW1iZXI7XHJcbiAgICB9PjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQmVoYXZpb3I8TGlzdENvbXBvbmVudD4oe1xyXG4gICAgZGF0YToge1xyXG4gICAgICAgIGxpc3Q6IDxhbnlbXT5bXSxcclxuICAgICAgICBoYXNNb3JlOiBmYWxzZSxcclxuICAgICAgICBkYXRhQ29uZmlnOiB7XHJcbiAgICAgICAgICAgIGN1cnJlbnRQYWdlOiAnY3VycmVudFBhZ2UnLFxyXG4gICAgICAgICAgICBwYWdlU2l6ZTogJ3BhZ2VTaXplJ1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgcmVmbGFzaCgpIHtcclxuICAgICAgICAgICAgdGhpcy5kYXRhLmxpc3QubGVuZ3RoID4gMSA/IHRoaXMub25TaG93KCkgOiB0aGlzLnNldERhdGEoe2xpc3Q6IFtdfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBvblNob3coKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0UGFnZURhdGEoKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKHsgbGlzdCwgdG90YWwgfSkgPT4gdGhpcy5zZXREYXRhISh7IGxpc3QsIGhhc01vcmU6IHRvdGFsID4gbGlzdC5sZW5ndGggfSkpXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goZSA9PiBjb25zb2xlLmxvZyhlLmVyck1zZykpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ2V0TW9yZSgpIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmRhdGEuaGFzTW9yZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLmdldFBhZ2VEYXRhKE1hdGguY2VpbCh0aGlzLmRhdGEubGlzdC5sZW5ndGggLyA4KSArIDEpXHJcbiAgICAgICAgICAgICAgICAudGhlbigoeyBsaXN0LCB0b3RhbCB9KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGVtcExpc3QgPSBsaXN0LmNvbmNhdCh0aGlzLmRhdGEubGlzdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXREYXRhISh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpc3Q6IHRlbXBMaXN0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoYXNNb3JlOiB0b3RhbCA+IHRlbXBMaXN0Lmxlbmd0aFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaChlID0+IGNvbnNvbGUubG9nKGUuZXJyTXNnKSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBhc3luYyBnZXRQYWdlRGF0YShwYWdlOiBudW1iZXIgPSAxKSB7XHJcbiAgICAgICAgICAgIGlmKCF0aGlzLmRhdGEudXJsKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3Qoe2Vyck1zZzogJ+ivt+axgui3r+W+hOmUmeivryd9KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3Qge2N1cnJlbnRQYWdlLCBwYWdlU2l6ZX0gPSB0aGlzLmRhdGEuZGF0YUNvbmZpZztcclxuICAgICAgICAgICAgY29uc3QgeyBkYXRhOiB7IGxpc3QsIHRvdGFsIH0gfSA9IGF3YWl0IChyZXF1ZXN0PFBhZ2VEYXRhPGFueT4+KHtcclxuICAgICAgICAgICAgICAgIHVybDogdGhpcy5kYXRhLnVybCxcclxuICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICBbY3VycmVudFBhZ2VdOiBwYWdlLFxyXG4gICAgICAgICAgICAgICAgICAgIFtwYWdlU2l6ZV06IDhcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgICAgICByZXR1cm4gKHsgbGlzdDogKDxhbnlbXT5saXN0Lm1hcChwYXJzZURhdGEpKSwgdG90YWwgfSk7XHJcbiAgICAgICAgfSxcclxuICAgIH1cclxufSk7XHJcbiJdfQ==