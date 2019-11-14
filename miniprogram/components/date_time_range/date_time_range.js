"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = require("./util");
Component({
    properties: {
        value: {
            type: Array,
            value: []
        },
        layout: {
            type: String,
            value: 'year, month, day, hours, minutes'
        },
        selectedIndex: {
            type: Array,
            value: [0, 0, 0, 0, 0, 0]
        }
    },
    data: {
        visible: false,
        progress: 0,
        scrollTop: [],
        px2rpxRatio: 2,
        timer: null,
        setTop: false,
        date: [],
        layoutData: []
    },
    attached: function () {
        this.triggerEvent('input', { value: this._fillValue() }, {});
    },
    methods: {
        switchPicker: function () {
            var visible = !this.data.visible;
            this.setData({
                visible: visible,
                progress: 0
            });
            this.triggerEvent('mask', { visible: visible }, {});
        },
        none: function () {
        },
        go: function () {
            if (!this.data.progress) {
                this.ok();
            }
            else {
                this.setData({ progress: 0 });
            }
        },
        ok: function () {
            var _this = this;
            var date = new Date();
            this.data.layoutData.forEach(function (v, i) {
                var selected = v[_this.data.selectedIndex[i]];
                var _a = selected.match(/(\d+)([^\d]){1}/), num = _a[1], unit = _a[2];
                switch (unit) {
                    case '年':
                        date.setFullYear(+num);
                        break;
                    case '月':
                        date.setMonth(+num - 1);
                        break;
                    case '日':
                        date.setDate(+num);
                        break;
                    case '时':
                        date.setHours(+num);
                        break;
                    case '分':
                        date.setMinutes(+num);
                        break;
                    case '秒':
                        date.setSeconds(+num);
                        break;
                    default:
                }
            });
            var value = this.data.value;
            value[this.data.progress] = date.getTime();
            if (this.data.progress) {
                this.switchPicker();
            }
            else {
                value[1] = date.getTime();
                this.setData({ progress: 1 });
            }
            this.data.value = value = value.filter(function (v) { return !!v; }).sort(function (a, b) { return a - b; });
            this.triggerEvent('input', { value: value }, {});
        },
        scroll: function (e) {
            var _a;
            if (this.data.setTop) {
                return this.data.setTop = false;
            }
            var itemIndex = e.target.dataset.index;
            var index = Math.round(e.detail.scrollTop / 64 * this.data.px2rpxRatio);
            this.setData((_a = {},
                _a["selectedIndex[" + itemIndex + "]"] = index,
                _a));
        },
        setScrollIndex: function (e) {
            var _a;
            var itemIndex = e.target.dataset.index;
            if (itemIndex != null) {
                var index = e.currentTarget.dataset.index;
                this.setData((_a = {},
                    _a["selectedIndex[" + index + "]"] = itemIndex,
                    _a));
            }
        },
        _fillValue: function (value) {
            value = (value || this.data.value).filter(function (v) { return !!v; });
            while (value.length < 2) {
                value.push(Date.now());
            }
            return value.sort(function (a, b) { return a - b; });
        }
    },
    observers: {
        'selectedIndex.**': function (val) {
            var _this = this;
            if (this.data.timer) {
                clearTimeout(this.data.timer);
                this.data.timer = null;
            }
            this.data.timer = setTimeout(function () {
                _this.data.setTop = true;
                _this.setData({ scrollTop: val.map(function (v) { return v * 32; }) });
            }, 100);
        },
        'value.**, progress, layout': function (value, progress, layout) {
            this.data.value = value = this._fillValue(value);
            var date = value.map(function (v) { return util_1.formatTime(layout, v); });
            var layoutData = util_1.getLayoutData(layout, value[progress]);
            this.setData({
                date: date, layoutData: layoutData,
                selectedIndex: util_1.calcSelIndex(layoutData, value[progress])
            });
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZV90aW1lX3JhbmdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGF0ZV90aW1lX3JhbmdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBR0EsK0JBQWlFO0FBc0JqRSxTQUFTLENBQXFCO0lBQzFCLFVBQVUsRUFBRTtRQUNSLEtBQUssRUFBRTtZQUNILElBQUksRUFBRSxLQUFLO1lBQ1gsS0FBSyxFQUFFLEVBQUU7U0FDWjtRQUNELE1BQU0sRUFBRTtZQUNKLElBQUksRUFBRSxNQUFNO1lBQ1osS0FBSyxFQUFFLGtDQUFrQztTQUM1QztRQUVELGFBQWEsRUFBRTtZQUNYLElBQUksRUFBRSxLQUFLO1lBQ1gsS0FBSyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDNUI7S0FDSjtJQUNELElBQUksRUFBRTtRQUNGLE9BQU8sRUFBRSxLQUFLO1FBQ2QsUUFBUSxFQUFFLENBQUM7UUFDWCxTQUFTLEVBQUUsRUFBRTtRQUNiLFdBQVcsRUFBRSxDQUFDO1FBQ2QsS0FBSyxFQUFFLElBQUk7UUFDWCxNQUFNLEVBQUUsS0FBSztRQUNiLElBQUksRUFBRSxFQUFFO1FBQ1IsVUFBVSxFQUFFLEVBQUU7S0FDakI7SUFDRCxRQUFRO1FBQ0osSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsRUFBRSxLQUFLLEVBQVcsSUFBSyxDQUFDLFVBQVUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFFM0UsQ0FBQztJQUNELE9BQU8sRUFBRTtRQUNMLFlBQVk7WUFDUixJQUFNLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ25DLElBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ1QsT0FBTyxTQUFBO2dCQUNQLFFBQVEsRUFBRSxDQUFDO2FBQ2QsQ0FBQyxDQUFDO1lBRUgsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUs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ICog5pel5pyf5pe26Ze06IyD5Zu06YCJ5oup5ZmoXHJcbiAqL1xyXG5pbXBvcnQgeyBnZXRMYXlvdXREYXRhLCBjYWxjU2VsSW5kZXgsIGZvcm1hdFRpbWUgfSBmcm9tICcuL3V0aWwnO1xyXG5cclxuaW50ZXJmYWNlIElSYW5nZURhdGEge1xyXG4gICAgdmFsdWU6IG51bWJlcltdO1xyXG4gICAgdmlzaWJsZTogYm9vbGVhbjtcclxuICAgIGxheW91dDogc3RyaW5nO1xyXG4gICAgbGF5b3V0RGF0YTogc3RyaW5nW11bXTtcclxuICAgIHB4MnJweFJhdGlvOiBudW1iZXI7XHJcbiAgICB0aW1lcjogbnVtYmVyIHwgbnVsbDtcclxuICAgIHNlbGVjdGVkSW5kZXg6IG51bWJlcltdO1xyXG4gICAgc2Nyb2xsVG9wOiBudW1iZXJbXTtcclxuICAgIHNldFRvcDogYm9vbGVhbjtcclxuICAgIHByb2dyZXNzOiBudW1iZXI7XHJcbn1cclxuXHJcbmludGVyZmFjZSBJUmFuZ2UgZXh0ZW5kcyBXeENvbXBvbmVudCB7XHJcbiAgICBkYXRhOiBJUmFuZ2VEYXRhO1xyXG4gICAgc3dpdGNoUGlja2VyKCk6IHZvaWQ7XHJcbiAgICBvaygpOiB2b2lkO1xyXG4gICAgX2ZpbGxWYWx1ZSh2YWx1ZT86IG51bWJlcltdKTogbnVtYmVyW107XHJcbn1cclxuXHJcbkNvbXBvbmVudDxJUmFuZ2UsIElSYW5nZURhdGE+KHtcclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICB2YWx1ZToge1xyXG4gICAgICAgICAgICB0eXBlOiBBcnJheSxcclxuICAgICAgICAgICAgdmFsdWU6IFtdXHJcbiAgICAgICAgfSxcclxuICAgICAgICBsYXlvdXQ6IHtcclxuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgICAgICB2YWx1ZTogJ3llYXIsIG1vbnRoLCBkYXksIGhvdXJzLCBtaW51dGVzJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8g6YCJ5Lit55qE57Si5byVXHJcbiAgICAgICAgc2VsZWN0ZWRJbmRleDoge1xyXG4gICAgICAgICAgICB0eXBlOiBBcnJheSxcclxuICAgICAgICAgICAgdmFsdWU6IFswLCAwLCAwLCAwLCAwLCAwXVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBkYXRhOiB7XHJcbiAgICAgICAgdmlzaWJsZTogZmFsc2UsXHJcbiAgICAgICAgcHJvZ3Jlc3M6IDAsXHJcbiAgICAgICAgc2Nyb2xsVG9wOiBbXSwgLy8g5rua5Yqo6auY5bqmXHJcbiAgICAgICAgcHgycnB4UmF0aW86IDIsIC8vIDFweC8xcnB4XHJcbiAgICAgICAgdGltZXI6IG51bGwsXHJcbiAgICAgICAgc2V0VG9wOiBmYWxzZSwgLy8g5piv5ZCm5piv55Sx5LqO6K6+572u5rua5Yqo5YC85byV5Y+R55qE5rua5YqoXHJcbiAgICAgICAgZGF0ZTogW10sXHJcbiAgICAgICAgbGF5b3V0RGF0YTogW11cclxuICAgIH0sXHJcbiAgICBhdHRhY2hlZCgpIHtcclxuICAgICAgICB0aGlzLnRyaWdnZXJFdmVudCgnaW5wdXQnLCB7IHZhbHVlOiAoPElSYW5nZT50aGlzKS5fZmlsbFZhbHVlKCkgfSwge30pO1xyXG4gICAgICAgIC8vIHd4LmdldFN5c3RlbUluZm8oeyBzdWNjZXNzOiByZXMgPT4gdGhpcy5kYXRhLnB4MnJweFJhdGlvID0gNzUwIC8gcmVzLndpbmRvd1dpZHRoIH0pO1xyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgICBzd2l0Y2hQaWNrZXIoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHZpc2libGUgPSAhdGhpcy5kYXRhLnZpc2libGU7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICAgICAgICB2aXNpYmxlLFxyXG4gICAgICAgICAgICAgICAgcHJvZ3Jlc3M6IDBcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnRyaWdnZXJFdmVudCgnbWFzaycsIHsgdmlzaWJsZSB9LCB7fSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBub25lKCkge1xyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ28oKSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5kYXRhLnByb2dyZXNzKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9rKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldERhdGEoeyBwcm9ncmVzczogMCB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgb2soKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgICAgICB0aGlzLmRhdGEubGF5b3V0RGF0YS5mb3JFYWNoKCh2LCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3RlZCA9IHZbdGhpcy5kYXRhLnNlbGVjdGVkSW5kZXhbaV1dO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgWywgbnVtLCB1bml0XSA9IDxzdHJpbmdbXT5zZWxlY3RlZC5tYXRjaCgvKFxcZCspKFteXFxkXSl7MX0vKTtcclxuXHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHVuaXQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICflubQnOiBkYXRlLnNldEZ1bGxZZWFyKCtudW0pOyBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICfmnIgnOiBkYXRlLnNldE1vbnRoKCtudW0gLSAxKTsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAn5pelJzogZGF0ZS5zZXREYXRlKCtudW0pOyBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICfml7YnOiBkYXRlLnNldEhvdXJzKCtudW0pOyBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICfliIYnOiBkYXRlLnNldE1pbnV0ZXMoK251bSk7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ+enkic6IGRhdGUuc2V0U2Vjb25kcygrbnVtKTsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBsZXQgdmFsdWUgPSB0aGlzLmRhdGEudmFsdWU7XHJcbiAgICAgICAgICAgIHZhbHVlW3RoaXMuZGF0YS5wcm9ncmVzc10gPSBkYXRlLmdldFRpbWUoKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRhdGEucHJvZ3Jlc3MpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3dpdGNoUGlja2VyKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZVsxXSA9IGRhdGUuZ2V0VGltZSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXREYXRhKHsgcHJvZ3Jlc3M6IDEgfSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuZGF0YS52YWx1ZSA9IHZhbHVlID0gdmFsdWUuZmlsdGVyKHYgPT4gISF2KS5zb3J0KChhLCBiKSA9PiBhIC0gYik7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnRyaWdnZXJFdmVudCgnaW5wdXQnLCB7IHZhbHVlIH0sIHt9KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNjcm9sbChlOiBCYXNlRXZlbnQpOiBmYWxzZSB8IHZvaWQge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5kYXRhLnNldFRvcCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGF0YS5zZXRUb3AgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgaXRlbUluZGV4ID0gZS50YXJnZXQuZGF0YXNldC5pbmRleDtcclxuICAgICAgICAgICAgY29uc3QgaW5kZXggPSBNYXRoLnJvdW5kKGUuZGV0YWlsLnNjcm9sbFRvcCAvIDY0ICogdGhpcy5kYXRhLnB4MnJweFJhdGlvKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICAgICAgICBbYHNlbGVjdGVkSW5kZXhbJHtpdGVtSW5kZXh9XWBdOiBpbmRleFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNldFNjcm9sbEluZGV4KGU6IEJhc2VFdmVudCkge1xyXG4gICAgICAgICAgICBjb25zdCBpdGVtSW5kZXggPSBlLnRhcmdldC5kYXRhc2V0LmluZGV4O1xyXG4gICAgICAgICAgICBpZiAoaXRlbUluZGV4ICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXg7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgICAgICAgICAgIFtgc2VsZWN0ZWRJbmRleFske2luZGV4fV1gXTogaXRlbUluZGV4XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgX2ZpbGxWYWx1ZSh2YWx1ZT86IG51bWJlcltdKSB7XHJcbiAgICAgICAgICAgIHZhbHVlID0gKHZhbHVlIHx8IHRoaXMuZGF0YS52YWx1ZSkuZmlsdGVyKHYgPT4gISF2KTtcclxuICAgICAgICAgICAgd2hpbGUgKHZhbHVlLmxlbmd0aCA8IDIpIHtcclxuICAgICAgICAgICAgICAgIHZhbHVlLnB1c2goRGF0ZS5ub3coKSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZS5zb3J0KChhLCBiKSA9PiBhIC0gYik7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIG9ic2VydmVyczoge1xyXG4gICAgICAgICdzZWxlY3RlZEluZGV4LioqJyh2YWw6IG51bWJlcltdKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRhdGEudGltZXIpIHtcclxuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLmRhdGEudGltZXIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhLnRpbWVyID0gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5kYXRhLnRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGEuc2V0VG9wID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7IHNjcm9sbFRvcDogdmFsLm1hcCh2ID0+IHYgKiAzMikgfSk7XHJcbiAgICAgICAgICAgIH0sIDEwMCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAndmFsdWUuKiosIHByb2dyZXNzLCBsYXlvdXQnKHZhbHVlOiBudW1iZXJbXSwgcHJvZ3Jlc3M6IG51bWJlciwgbGF5b3V0OiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgdGhpcy5kYXRhLnZhbHVlID0gdmFsdWUgPSB0aGlzLl9maWxsVmFsdWUodmFsdWUpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgZGF0ZSA9IHZhbHVlLm1hcCh2ID0+IGZvcm1hdFRpbWUobGF5b3V0LCB2KSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGxheW91dERhdGEgPSBnZXRMYXlvdXREYXRhKGxheW91dCwgdmFsdWVbcHJvZ3Jlc3NdKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICAgICAgICBkYXRlLCBsYXlvdXREYXRhLFxyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRJbmRleDogY2FsY1NlbEluZGV4KGxheW91dERhdGEsIHZhbHVlW3Byb2dyZXNzXSlcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KTtcclxuIl19