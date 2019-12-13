"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var page_query_1 = require("../../../behavior/page_query");
var status_1 = require("../../../constant/status");
var goods_1 = require("../../person/goods/goods");
Component({
    behaviors: [page_query_1.default],
    data: {
        url: '/api/commodity/pagingQuery',
        all: true,
        NORMAL: status_1.GOODS_STATUS.NORMAL
    },
    ready: function () {
        this.onShow();
    },
    methods: {
        updateStatus: function (_a) {
            var index = _a.target.dataset.index;
            goods_1.updateStatus(this, index);
        },
        delete: function (_a) {
            var index = _a.target.dataset.index;
            goods_1.deleteGoods(this, index);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ29vZHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJnb29kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUdBLDJEQUF3RTtBQUN4RSxtREFBd0Q7QUFDeEQsa0RBQXFFO0FBRXJFLFNBQVMsQ0FBZ0I7SUFDckIsU0FBUyxFQUFFLENBQUMsb0JBQVMsQ0FBQztJQUN0QixJQUFJLEVBQUM7UUFDRCxHQUFHLEVBQUUsNEJBQTRCO1FBQ2pDLEdBQUcsRUFBRSxJQUFJO1FBQ1QsTUFBTSxFQUFFLHFCQUFZLENBQUMsTUFBTTtLQUM5QjtJQUNELEtBQUs7UUFDRCxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDbEIsQ0FBQztJQUNELE9BQU8sRUFBRTtRQUNMLFlBQVksWUFBQyxFQUF3RDtnQkFBcEMsK0JBQUs7WUFDbEMsb0JBQVksQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDOUIsQ0FBQztRQUNELE1BQU0sWUFBQyxFQUF3RDtnQkFBcEMsK0JBQUs7WUFDNUIsbUJBQVcsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDN0IsQ0FBQztLQUNKO0NBQ0osQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIOWVhuWTgeWIl+ihqFxyXG4gKi9cclxuaW1wb3J0IFBhZ2VRdWVyeSwgeyBMaXN0Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vYmVoYXZpb3IvcGFnZV9xdWVyeSc7XHJcbmltcG9ydCB7IEdPT0RTX1NUQVRVUyB9IGZyb20gJy4uLy4uLy4uL2NvbnN0YW50L3N0YXR1cyc7XHJcbmltcG9ydCB7IGRlbGV0ZUdvb2RzLCB1cGRhdGVTdGF0dXMgfSBmcm9tICcuLi8uLi9wZXJzb24vZ29vZHMvZ29vZHMnO1xyXG5cclxuQ29tcG9uZW50PExpc3RDb21wb25lbnQ+KHtcclxuICAgIGJlaGF2aW9yczogW1BhZ2VRdWVyeV0sXHJcbiAgICBkYXRhOntcclxuICAgICAgICB1cmw6ICcvYXBpL2NvbW1vZGl0eS9wYWdpbmdRdWVyeScsXHJcbiAgICAgICAgYWxsOiB0cnVlLFxyXG4gICAgICAgIE5PUk1BTDogR09PRFNfU1RBVFVTLk5PUk1BTFxyXG4gICAgfSxcclxuICAgIHJlYWR5KHRoaXM6IExpc3RDb21wb25lbnQpIHtcclxuICAgICAgICB0aGlzLm9uU2hvdygpO1xyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgICB1cGRhdGVTdGF0dXMoe3RhcmdldDoge2RhdGFzZXQ6IHtpbmRleH19fTogQmFzZUV2ZW50PHtpbmRleDogbnVtYmVyfT4pIHtcclxuICAgICAgICAgICAgdXBkYXRlU3RhdHVzKHRoaXMsIGluZGV4KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRlbGV0ZSh7dGFyZ2V0OiB7ZGF0YXNldDoge2luZGV4fX19OiBCYXNlRXZlbnQ8e2luZGV4OiBudW1iZXJ9Pikge1xyXG4gICAgICAgICAgICBkZWxldGVHb29kcyh0aGlzLCBpbmRleCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KTtcclxuIl19