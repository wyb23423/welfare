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
Component({
    properties: {
        hidden: {
            type: Boolean,
            value: false
        }
    },
    data: {
        imgs: ['/public/images/23.jpg', '', ''],
        radioIndex: 0,
        options: ['活动列表', '商品列表', '个人中心']
    },
    methods: {
        radioChange: function (_a) {
            var value = _a.detail.value;
            this.setData({ radioIndex: value });
        },
        modify: function () {
            return __awaiter(this, void 0, void 0, function () {
                var _a, url, e_1;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _b.trys.push([0, 2, , 3]);
                            return [4, upload_1.chooseImage()];
                        case 1:
                            url = _b.sent();
                            this.setData((_a = {}, _a["imgs[" + this.data.radioIndex + "]"] = url, _a));
                            return [3, 3];
                        case 2:
                            e_1 = _b.sent();
                            return [3, 3];
                        case 3: return [2];
                    }
                });
            });
        },
        remove: function () {
            var _a;
            this.setData((_a = {}, _a["imgs[" + this.data.radioIndex + "]"] = '', _a));
        },
        onSubmit: function () {
            var _a = this.data, imgs = _a.imgs, radioIndex = _a.radioIndex;
            console.log(imgs[radioIndex]);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRfYmFubmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYWRfYmFubmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw0REFBZ0U7QUFFaEUsU0FBUyxDQUFDO0lBQ04sVUFBVSxFQUFFO1FBQ1IsTUFBTSxFQUFFO1lBQ0osSUFBSSxFQUFFLE9BQU87WUFDYixLQUFLLEVBQUUsS0FBSztTQUNmO0tBQ0o7SUFDRCxJQUFJLEVBQUU7UUFDRixJQUFJLEVBQUUsQ0FBQyx1QkFBdUIsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO1FBQ3ZDLFVBQVUsRUFBRSxDQUFDO1FBQ2IsT0FBTyxFQUFFLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUM7S0FDcEM7SUFDRCxPQUFPLEVBQUU7UUFDTCxXQUFXLFlBQUMsRUFBNEI7Z0JBQWxCLHVCQUFLO1lBQ3ZCLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBQyxVQUFVLEVBQUUsS0FBSyxFQUFDLENBQUMsQ0FBQztRQUN0QyxDQUFDO1FBQ0ssTUFBTTs7Ozs7Ozs0QkFFUSxXQUFNLG9CQUFXLEVBQUUsRUFBQTs7NEJBQXpCLEdBQUcsR0FBRyxTQUFtQjs0QkFDL0IsSUFBSSxDQUFDLE9BQU8sV0FBRSxHQUFDLFVBQVEsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLE1BQUcsSUFBRyxHQUFHLE1BQUUsQ0FBQzs7Ozs7Ozs7O1NBSTlEO1FBQ0QsTUFBTTs7WUFDRixJQUFJLENBQUMsT0FBTyxXQUFFLEdBQUMsVUFBUSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsTUFBRyxJQUFHLEVBQUUsTUFBRSxDQUFDO1FBQzFELENBQUM7UUFDRCxRQUFRO1lBQ0UsSUFBQSxjQUE4QixFQUE3QixjQUFJLEVBQUUsMEJBQXVCLENBQUM7WUFDckMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztRQUNsQyxDQUFDO0tBQ0o7Q0FDSixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjaG9vc2VJbWFnZSB9IGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvdXBsb2FkL3VwbG9hZCc7XHJcblxyXG5Db21wb25lbnQoe1xyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIGhpZGRlbjoge1xyXG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxyXG4gICAgICAgICAgICB2YWx1ZTogZmFsc2VcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgZGF0YToge1xyXG4gICAgICAgIGltZ3M6IFsnL3B1YmxpYy9pbWFnZXMvMjMuanBnJywgJycsICcnXSxcclxuICAgICAgICByYWRpb0luZGV4OiAwLFxyXG4gICAgICAgIG9wdGlvbnM6IFsn5rS75Yqo5YiX6KGoJywgJ+WVhuWTgeWIl+ihqCcsICfkuKrkurrkuK3lv4MnXVxyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgICByYWRpb0NoYW5nZSh7ZGV0YWlsOiB7dmFsdWV9fTogQmFzZUV2ZW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7cmFkaW9JbmRleDogdmFsdWV9KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGFzeW5jIG1vZGlmeSgpIHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHVybCA9IGF3YWl0IGNob29zZUltYWdlKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldERhdGEoe1tgaW1nc1ske3RoaXMuZGF0YS5yYWRpb0luZGV4fV1gXTogdXJsfSk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2goZSkge1xyXG4gICAgICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcmVtb3ZlKCkge1xyXG4gICAgICAgICAgICB0aGlzLnNldERhdGEoe1tgaW1nc1ske3RoaXMuZGF0YS5yYWRpb0luZGV4fV1gXTogJyd9KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIG9uU3VibWl0KCkge1xyXG4gICAgICAgICAgICBjb25zdCB7aW1ncywgcmFkaW9JbmRleH0gPSB0aGlzLmRhdGE7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGltZ3NbcmFkaW9JbmRleF0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSk7XHJcbiJdfQ==