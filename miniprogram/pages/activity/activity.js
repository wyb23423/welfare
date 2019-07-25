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
Page(__assign({ data: {
        activitys: []
    } }, listFunc, { onLoad: function () {
        var activitys = [];
        for (var i = 1; i < 10; i++) {
            activitys.push({
                id: i,
                img: '/public/images/23.jpg',
                title: '有爱的我们不孤独——自闭症儿童义诊系列活动__' + i,
                authentication: '社区认证',
                sign: 11,
                size: 24
            });
        }
        ;
        this.setData({ activitys: activitys });
    },
    getMore: function () {
        for (var i = 1; i < 10; i++) {
            this.data.activitys.push({
                id: i,
                img: '/public/images/23.jpg',
                title: '有爱的我们不孤独——自闭症儿童义诊系列活动__' + i,
                authentication: '社区认证',
                sign: 11,
                size: 24
            });
        }
        ;
        this.setData({ activitys: this.data.activitys });
    },
    search: function (e) {
        console.log(e.detail.value);
    } }));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZpdHkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhY3Rpdml0eS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBR0EsNkRBQStEO0FBRS9ELElBQUksWUFDQSxJQUFJLEVBQUU7UUFDRixTQUFTLEVBQUUsRUFBa0I7S0FDaEMsSUFFRSxRQUFRLElBRVgsTUFBTTtRQUNGLElBQU0sU0FBUyxHQUFHLEVBQUUsQ0FBQztRQUNyQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3pCLFNBQVMsQ0FBQyxJQUFJLENBQUM7Z0JBQ1gsRUFBRSxFQUFFLENBQUM7Z0JBQ0wsR0FBRyxFQUFFLHVCQUF1QjtnQkFDNUIsS0FBSyxFQUFFLHlCQUF5QixHQUFHLENBQUM7Z0JBQ3BDLGNBQWMsRUFBRSxNQUFNO2dCQUN0QixJQUFJLEVBQUUsRUFBRTtnQkFDUixJQUFJLEVBQUUsRUFBRTthQUNYLENBQUMsQ0FBQztTQUNOO1FBQUEsQ0FBQztRQUVGLElBQUksQ0FBQyxPQUFRLENBQUMsRUFBRSxTQUFTLFdBQUEsRUFBRSxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUNELE9BQU87UUFDSCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3pCLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQztnQkFDckIsRUFBRSxFQUFFLENBQUM7Z0JBQ0wsR0FBRyxFQUFFLHVCQUF1QjtnQkFDNUIsS0FBSyxFQUFFLHlCQUF5QixHQUFHLENBQUM7Z0JBQ3BDLGNBQWMsRUFBRSxNQUFNO2dCQUN0QixJQUFJLEVBQUUsRUFBRTtnQkFDUixJQUFJLEVBQUUsRUFBRTthQUNYLENBQUMsQ0FBQztTQUNOO1FBQUEsQ0FBQztRQUVGLElBQUksQ0FBQyxPQUFRLENBQUMsRUFBRSxTQUFTLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFDRCxNQUFNLFlBQUMsQ0FBYTtRQUNoQixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDaEMsQ0FBQyxJQUNILENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICog5YWs55uK5rS75YqoXHJcbiAqL1xyXG5pbXBvcnQgKiBhcyBsaXN0RnVuYyBmcm9tIFwiLi4vLi4vdGVtcGxhdGUvbGlzdF9pdGVtL2xpc3RfaXRlbVwiO1xyXG5cclxuUGFnZSh7XHJcbiAgICBkYXRhOiB7XHJcbiAgICAgICAgYWN0aXZpdHlzOiBbXSBhcyBJQW55T2JqZWN0W11cclxuICAgIH0sXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT3kuovku7ZcclxuICAgIC4uLmxpc3RGdW5jLFxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT3nlJ/lkb3lkajmnJ9cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICBjb25zdCBhY3Rpdml0eXMgPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IDEwOyBpKyspIHtcclxuICAgICAgICAgICAgYWN0aXZpdHlzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgaWQ6IGksXHJcbiAgICAgICAgICAgICAgICBpbWc6ICcvcHVibGljL2ltYWdlcy8yMy5qcGcnLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICfmnInniLHnmoTmiJHku6zkuI3lraTni6zigJTigJToh6rpl63nl4flhL/nq6XkuYnor4rns7vliJfmtLvliqhfXycgKyBpLFxyXG4gICAgICAgICAgICAgICAgYXV0aGVudGljYXRpb246ICfnpL7ljLrorqTor4EnLFxyXG4gICAgICAgICAgICAgICAgc2lnbjogMTEsXHJcbiAgICAgICAgICAgICAgICBzaXplOiAyNFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLnNldERhdGEhKHsgYWN0aXZpdHlzIH0pO1xyXG4gICAgfSxcclxuICAgIGdldE1vcmUoKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCAxMDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YS5hY3Rpdml0eXMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBpZDogaSxcclxuICAgICAgICAgICAgICAgIGltZzogJy9wdWJsaWMvaW1hZ2VzLzIzLmpwZycsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ+acieeIseeahOaIkeS7rOS4jeWtpOeLrOKAlOKAlOiHqumXreeXh+WEv+erpeS5ieiviuezu+WIl+a0u+WKqF9fJyArIGksXHJcbiAgICAgICAgICAgICAgICBhdXRoZW50aWNhdGlvbjogJ+ekvuWMuuiupOivgScsXHJcbiAgICAgICAgICAgICAgICBzaWduOiAxMSxcclxuICAgICAgICAgICAgICAgIHNpemU6IDI0XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMuc2V0RGF0YSEoeyBhY3Rpdml0eXM6IHRoaXMuZGF0YS5hY3Rpdml0eXMgfSk7XHJcbiAgICB9LFxyXG4gICAgc2VhcmNoKGU6IElBbnlPYmplY3QpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlLmRldGFpbC52YWx1ZSk7XHJcbiAgICB9XHJcbn0pXHJcbiJdfQ==