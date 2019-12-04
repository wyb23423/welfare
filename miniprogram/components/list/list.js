"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var page_query_1 = require("../../behavior/page_query");
Component({
    behaviors: [page_query_1.default],
    properties: {
        isGoods: {
            type: Number,
            value: 0
        }
    },
    pageLifetimes: {
        show: function () {
            this.setData({ url: "/api/" + (this.data.isGoods ? 'commodity' : 'activity') + "/pagingQuery" });
            this.onShow();
        }
    },
    methods: {
        search: function (e) {
            console.log(e.detail.value);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxpc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFHQSx3REFBcUU7QUFFckUsU0FBUyxDQUFnQjtJQUNyQixTQUFTLEVBQUUsQ0FBQyxvQkFBUyxDQUFDO0lBQ3RCLFVBQVUsRUFBRTtRQUNSLE9BQU8sRUFBRTtZQUNMLElBQUksRUFBRSxNQUFNO1lBQ1osS0FBSyxFQUFFLENBQUM7U0FDWDtLQUNKO0lBQ0QsYUFBYSxFQUFFO1FBQ1gsSUFBSTtZQUNBLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBQyxHQUFHLEVBQUUsV0FBUSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxVQUFVLGtCQUFlLEVBQUMsQ0FBQyxDQUFDO1lBQ3pGLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNsQixDQUFDO0tBQ0o7SUFDRCxPQUFPLEVBQUU7UUFDTCxNQUFNLFlBQUMsQ0FBYTtZQUNoQixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDaEMsQ0FBQztLQUNKO0NBQ0osQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIOa0u+WKqC/llYblk4HliJfooahcclxuICovXHJcbmltcG9ydCBQYWdlUXVlcnksIHsgTGlzdENvbXBvbmVudCB9IGZyb20gJy4uLy4uL2JlaGF2aW9yL3BhZ2VfcXVlcnknO1xyXG5cclxuQ29tcG9uZW50PExpc3RDb21wb25lbnQ+KHtcclxuICAgIGJlaGF2aW9yczogW1BhZ2VRdWVyeV0sXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgaXNHb29kczoge1xyXG4gICAgICAgICAgICB0eXBlOiBOdW1iZXIsXHJcbiAgICAgICAgICAgIHZhbHVlOiAwXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHBhZ2VMaWZldGltZXM6IHtcclxuICAgICAgICBzaG93KHRoaXM6IExpc3RDb21wb25lbnQpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXREYXRhKHt1cmw6IGAvYXBpLyR7dGhpcy5kYXRhLmlzR29vZHMgPyAnY29tbW9kaXR5JyA6ICdhY3Rpdml0eScgfS9wYWdpbmdRdWVyeWB9KTtcclxuICAgICAgICAgICAgdGhpcy5vblNob3coKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICAgIHNlYXJjaChlOiBJQW55T2JqZWN0KSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUuZGV0YWlsLnZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pO1xyXG4iXX0=