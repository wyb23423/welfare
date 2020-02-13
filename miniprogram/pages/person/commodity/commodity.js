"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var page_query_1 = require("../../../behavior/page_query");
var status_1 = require("../../../constant/status");
var util_1 = require("../../../utils/util");
Component({
    behaviors: [page_query_1.default],
    data: {
        url: '/api/commodity/my',
        STATUS: {
            AUDITING: status_1.GOODS_STATUS.AUDITING,
            NORMAL: status_1.GOODS_STATUS.NORMAL,
            SOLD_OUT: status_1.GOODS_STATUS.SOLD_OUT,
            CLOSE: status_1.GOODS_STATUS.CLOSE
        }
    },
    pageLifetimes: {
        show: function () {
            this.showHandler();
        }
    },
    methods: {
        updateStatus: function (_a) {
            var index = _a.target.dataset.index;
            util_1.updateStatus(this, index);
        },
        delete: function (_a) {
            var index = _a.target.dataset.index;
            util_1.deleteGoods(this, index);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9kaXR5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29tbW9kaXR5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBSUEsMkRBQXNFO0FBQ3RFLG1EQUF3RDtBQUN4RCw0Q0FBZ0U7QUFFaEUsU0FBUyxDQUFnQjtJQUNyQixTQUFTLEVBQUUsQ0FBQyxvQkFBUyxDQUFDO0lBQ3RCLElBQUksRUFBRTtRQUNGLEdBQUcsRUFBRSxtQkFBbUI7UUFDeEIsTUFBTSxFQUFFO1lBQ0osUUFBUSxFQUFFLHFCQUFZLENBQUMsUUFBUTtZQUMvQixNQUFNLEVBQUUscUJBQVksQ0FBQyxNQUFNO1lBQzNCLFFBQVEsRUFBRSxxQkFBWSxDQUFDLFFBQVE7WUFDL0IsS0FBSyxFQUFFLHFCQUFZLENBQUMsS0FBSztTQUM1QjtLQUNKO0lBQ0QsYUFBYSxFQUFFO1FBQ1gsSUFBSTtZQUNBLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUN2QixDQUFDO0tBQ0o7SUFDRCxPQUFPLEVBQUU7UUFDTCxZQUFZLFlBQUMsRUFBd0Q7Z0JBQXBDLCtCQUFLO1lBQ2xDLG1CQUFZLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzlCLENBQUM7UUFDRCxNQUFNLFlBQUMsRUFBd0Q7Z0JBQXBDLCtCQUFLO1lBQzVCLGtCQUFXLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzdCLENBQUM7S0FDSjtDQUNKLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiDmiJHnmoTllYblk4FcclxuICovXHJcblxyXG5pbXBvcnQgUGFnZVF1ZXJ5LCB7TGlzdENvbXBvbmVudH0gZnJvbSAnLi4vLi4vLi4vYmVoYXZpb3IvcGFnZV9xdWVyeSc7XHJcbmltcG9ydCB7IEdPT0RTX1NUQVRVUyB9IGZyb20gJy4uLy4uLy4uL2NvbnN0YW50L3N0YXR1cyc7XHJcbmltcG9ydCB7IHVwZGF0ZVN0YXR1cywgZGVsZXRlR29vZHMgfSBmcm9tICcuLi8uLi8uLi91dGlscy91dGlsJztcclxuXHJcbkNvbXBvbmVudDxMaXN0Q29tcG9uZW50Pih7XHJcbiAgICBiZWhhdmlvcnM6IFtQYWdlUXVlcnldLFxyXG4gICAgZGF0YToge1xyXG4gICAgICAgIHVybDogJy9hcGkvY29tbW9kaXR5L215JyxcclxuICAgICAgICBTVEFUVVM6IHtcclxuICAgICAgICAgICAgQVVESVRJTkc6IEdPT0RTX1NUQVRVUy5BVURJVElORyxcclxuICAgICAgICAgICAgTk9STUFMOiBHT09EU19TVEFUVVMuTk9STUFMLFxyXG4gICAgICAgICAgICBTT0xEX09VVDogR09PRFNfU1RBVFVTLlNPTERfT1VULFxyXG4gICAgICAgICAgICBDTE9TRTogR09PRFNfU1RBVFVTLkNMT1NFXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHBhZ2VMaWZldGltZXM6IHtcclxuICAgICAgICBzaG93KHRoaXM6IExpc3RDb21wb25lbnQpIHtcclxuICAgICAgICAgICAgdGhpcy5zaG93SGFuZGxlcigpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgdXBkYXRlU3RhdHVzKHt0YXJnZXQ6IHtkYXRhc2V0OiB7aW5kZXh9fX06IEJhc2VFdmVudDx7aW5kZXg6IG51bWJlcn0+KSB7XHJcbiAgICAgICAgICAgIHVwZGF0ZVN0YXR1cyh0aGlzLCBpbmRleCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBkZWxldGUoe3RhcmdldDoge2RhdGFzZXQ6IHtpbmRleH19fTogQmFzZUV2ZW50PHtpbmRleDogbnVtYmVyfT4pIHtcclxuICAgICAgICAgICAgZGVsZXRlR29vZHModGhpcywgaW5kZXgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSk7XHJcblxyXG5cclxuIl19