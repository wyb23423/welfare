"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = require("../../../../utils/util");
Page({
    data: {
        list: []
    },
    onLoad: function () {
        var now = Date.now();
        var list = [
            {
                title: '兑换海贼周边',
                time: util_1.formatTime(new Date(now + this._getTestData())),
                value: -100
            },
            {
                title: '不良记录扣除',
                time: util_1.formatTime(new Date(now + this._getTestData())),
                value: -100
            }
        ];
        for (var i = 0; i < 3; i++) {
            list.push({
                title: '公益活动参加',
                time: util_1.formatTime(new Date(now + this._getTestData())),
                value: [100, 500, 600][i]
            });
        }
        this.setData({ list: list });
    },
    _getTestData: function () {
        return Math.round(Math.random() * 518400000) - 259200000;
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV0YWlscy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRldGFpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFHQSwrQ0FBb0Q7QUFRcEQsSUFBSSxDQUFDO0lBQ0QsSUFBSSxFQUFFO1FBQ0YsSUFBSSxFQUFpQixFQUFFO0tBQzFCO0lBQ0QsTUFBTTtRQUNGLElBQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUN2QixJQUFNLElBQUksR0FBa0I7WUFDeEI7Z0JBQ0ksS0FBSyxFQUFFLFFBQVE7Z0JBQ2YsSUFBSSxFQUFFLGlCQUFVLENBQUMsSUFBSSxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDO2dCQUNyRCxLQUFLLEVBQUUsQ0FBQyxHQUFHO2FBQ2Q7WUFDRDtnQkFDSSxLQUFLLEVBQUUsUUFBUTtnQkFDZixJQUFJLEVBQUUsaUJBQVUsQ0FBQyxJQUFJLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUM7Z0JBQ3JELEtBQUssRUFBRSxDQUFDLEdBQUc7YUFDZDtTQUNKLENBQUM7UUFDRixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3hCLElBQUksQ0FBQyxJQUFJLENBQUM7Z0JBQ04sS0FBSyxFQUFFLFFBQVE7Z0JBQ2YsSUFBSSxFQUFFLGlCQUFVLENBQUMsSUFBSSxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDO2dCQUNyRCxLQUFLLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUM1QixDQUFDLENBQUM7U0FDTjtRQUNELElBQUksQ0FBQyxPQUFRLENBQUMsRUFBRSxJQUFJLE1BQUEsRUFBRSxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUNELFlBQVk7UUFDUixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLFNBQVMsQ0FBQyxHQUFHLFNBQVMsQ0FBQztJQUM3RCxDQUFDO0NBQ0osQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIOenr+WIhuaYjue7hlxyXG4gKi9cclxuaW1wb3J0IHsgZm9ybWF0VGltZSB9IGZyb20gJy4uLy4uLy4uLy4uL3V0aWxzL3V0aWwnO1xyXG5cclxuaW50ZXJmYWNlIERldGFpbHNJdGVtIHtcclxuICAgIHRpdGxlOiBzdHJpbmc7XHJcbiAgICB0aW1lOiBzdHJpbmc7XHJcbiAgICB2YWx1ZTogbnVtYmVyO1xyXG59XHJcblxyXG5QYWdlKHtcclxuICAgIGRhdGE6IHtcclxuICAgICAgICBsaXN0OiA8RGV0YWlsc0l0ZW1bXT5bXVxyXG4gICAgfSxcclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICBjb25zdCBub3cgPSBEYXRlLm5vdygpO1xyXG4gICAgICAgIGNvbnN0IGxpc3Q6IERldGFpbHNJdGVtW10gPSBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAn5YWR5o2i5rW36LS85ZGo6L65JyxcclxuICAgICAgICAgICAgICAgIHRpbWU6IGZvcm1hdFRpbWUobmV3IERhdGUobm93ICsgdGhpcy5fZ2V0VGVzdERhdGEoKSkpLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6IC0xMDBcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICfkuI3oia/orrDlvZXmiaPpmaQnLFxyXG4gICAgICAgICAgICAgICAgdGltZTogZm9ybWF0VGltZShuZXcgRGF0ZShub3cgKyB0aGlzLl9nZXRUZXN0RGF0YSgpKSksXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogLTEwMFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xyXG4gICAgICAgICAgICBsaXN0LnB1c2goe1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICflhaznm4rmtLvliqjlj4LliqAnLFxyXG4gICAgICAgICAgICAgICAgdGltZTogZm9ybWF0VGltZShuZXcgRGF0ZShub3cgKyB0aGlzLl9nZXRUZXN0RGF0YSgpKSksXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogWzEwMCwgNTAwLCA2MDBdW2ldXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNldERhdGEhKHsgbGlzdCB9KTtcclxuICAgIH0sXHJcbiAgICBfZ2V0VGVzdERhdGEoKSB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDUxODQwMDAwMCkgLSAyNTkyMDAwMDA7XHJcbiAgICB9XHJcbn0pO1xyXG4iXX0=