"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var listFunc = require("../../template/list_item/list_item");
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
    methods: __assign({}, listFunc, { search: function (e) {
            console.log(e.detail.value);
        } })
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxpc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUlBLDZEQUErRDtBQUMvRCx3REFBcUU7QUFFckUsU0FBUyxDQUFnQjtJQUNyQixTQUFTLEVBQUUsQ0FBQyxvQkFBUyxDQUFDO0lBQ3RCLFVBQVUsRUFBRTtRQUNSLE9BQU8sRUFBRTtZQUNMLElBQUksRUFBRSxNQUFNO1lBQ1osS0FBSyxFQUFFLENBQUM7U0FDWDtLQUNKO0lBQ0QsYUFBYSxFQUFFO1FBQ1gsSUFBSTtZQUNBLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBQyxHQUFHLEVBQUUsV0FBUSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxVQUFVLGtCQUFlLEVBQUMsQ0FBQyxDQUFDO1lBQ3pGLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNsQixDQUFDO0tBQ0o7SUFDRCxPQUFPLGVBQ0EsUUFBUSxJQUNYLE1BQU0sWUFBQyxDQUFhO1lBQ2hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNoQyxDQUFDLEdBQ0o7Q0FDSixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICog5rS75YqoL+WVhuWTgeWIl+ihqFxyXG4gKi9cclxuXHJcbmltcG9ydCAqIGFzIGxpc3RGdW5jIGZyb20gJy4uLy4uL3RlbXBsYXRlL2xpc3RfaXRlbS9saXN0X2l0ZW0nO1xyXG5pbXBvcnQgUGFnZVF1ZXJ5LCB7IExpc3RDb21wb25lbnQgfSBmcm9tICcuLi8uLi9iZWhhdmlvci9wYWdlX3F1ZXJ5JztcclxuXHJcbkNvbXBvbmVudDxMaXN0Q29tcG9uZW50Pih7XHJcbiAgICBiZWhhdmlvcnM6IFtQYWdlUXVlcnldLFxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIGlzR29vZHM6IHtcclxuICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxyXG4gICAgICAgICAgICB2YWx1ZTogMFxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBwYWdlTGlmZXRpbWVzOiB7XHJcbiAgICAgICAgc2hvdyh0aGlzOiBMaXN0Q29tcG9uZW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7dXJsOiBgL2FwaS8ke3RoaXMuZGF0YS5pc0dvb2RzID8gJ2NvbW1vZGl0eScgOiAnYWN0aXZpdHknIH0vcGFnaW5nUXVlcnlgfSk7XHJcbiAgICAgICAgICAgIHRoaXMub25TaG93KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgICAuLi5saXN0RnVuYyxcclxuICAgICAgICBzZWFyY2goZTogSUFueU9iamVjdCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlLmRldGFpbC52YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KTtcclxuIl19