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
        imgs: ['', '', ''],
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRfYmFubmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYWRfYmFubmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw0REFBZ0U7QUFFaEUsU0FBUyxDQUFDO0lBQ04sVUFBVSxFQUFFO1FBQ1IsTUFBTSxFQUFFO1lBQ0osSUFBSSxFQUFFLE9BQU87WUFDYixLQUFLLEVBQUUsS0FBSztTQUNmO0tBQ0o7SUFDRCxJQUFJLEVBQUU7UUFDRixJQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQztRQUNsQixVQUFVLEVBQUUsQ0FBQztRQUNiLE9BQU8sRUFBRSxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDO0tBQ3BDO0lBQ0QsT0FBTyxFQUFFO1FBQ0wsV0FBVyxZQUFDLEVBQTRCO2dCQUFsQix1QkFBSztZQUN2QixJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUMsVUFBVSxFQUFFLEtBQUssRUFBQyxDQUFDLENBQUM7UUFDdEMsQ0FBQztRQUNLLE1BQU07Ozs7Ozs7NEJBRVEsV0FBTSxvQkFBVyxFQUFFLEVBQUE7OzRCQUF6QixHQUFHLEdBQUcsU0FBbUI7NEJBQy9CLElBQUksQ0FBQyxPQUFPLFdBQUUsR0FBQyxVQUFRLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxNQUFHLElBQUcsR0FBRyxNQUFFLENBQUM7Ozs7Ozs7OztTQUk5RDtRQUNELE1BQU07O1lBQ0YsSUFBSSxDQUFDLE9BQU8sV0FBRSxHQUFDLFVBQVEsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLE1BQUcsSUFBRyxFQUFFLE1BQUUsQ0FBQztRQUMxRCxDQUFDO1FBQ0QsUUFBUTtZQUNFLElBQUEsY0FBOEIsRUFBN0IsY0FBSSxFQUFFLDBCQUF1QixDQUFDO1lBQ3JDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7UUFDbEMsQ0FBQztLQUNKO0NBQ0osQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY2hvb3NlSW1hZ2UgfSBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL3VwbG9hZC91cGxvYWQnO1xyXG5cclxuQ29tcG9uZW50KHtcclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBoaWRkZW46IHtcclxuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcclxuICAgICAgICAgICAgdmFsdWU6IGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGRhdGE6IHtcclxuICAgICAgICBpbWdzOiBbJycsICcnLCAnJ10sXHJcbiAgICAgICAgcmFkaW9JbmRleDogMCxcclxuICAgICAgICBvcHRpb25zOiBbJ+a0u+WKqOWIl+ihqCcsICfllYblk4HliJfooagnLCAn5Liq5Lq65Lit5b+DJ11cclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgcmFkaW9DaGFuZ2Uoe2RldGFpbDoge3ZhbHVlfX06IEJhc2VFdmVudCkge1xyXG4gICAgICAgICAgICB0aGlzLnNldERhdGEoe3JhZGlvSW5kZXg6IHZhbHVlfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBhc3luYyBtb2RpZnkoKSB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB1cmwgPSBhd2FpdCBjaG9vc2VJbWFnZSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXREYXRhKHtbYGltZ3NbJHt0aGlzLmRhdGEucmFkaW9JbmRleH1dYF06IHVybH0pO1xyXG4gICAgICAgICAgICB9IGNhdGNoKGUpIHtcclxuICAgICAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHJlbW92ZSgpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXREYXRhKHtbYGltZ3NbJHt0aGlzLmRhdGEucmFkaW9JbmRleH1dYF06ICcnfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBvblN1Ym1pdCgpIHtcclxuICAgICAgICAgICAgY29uc3Qge2ltZ3MsIHJhZGlvSW5kZXh9ID0gdGhpcy5kYXRhO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhpbWdzW3JhZGlvSW5kZXhdKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pO1xyXG4iXX0=