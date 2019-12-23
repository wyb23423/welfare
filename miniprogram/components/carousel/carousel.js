"use strict";
Component({
    properties: {
        height: {
            type: String,
            value: '59vw'
        },
        initial: {
            type: Number,
            value: 0
        },
        interval: {
            type: Number,
            value: 3000
        }
    },
    data: {
        items: [],
        index: -1,
        label: [],
        sx: 0,
        ex: 0,
        isMoving: false,
        timer: 0
    },
    relations: {
        './item/item': {
            type: 'child',
            linked: function (target) {
                var _this = this;
                this._clearTimer();
                var _a = this.data, items = _a.items, initial = _a.initial, index = _a.index, label = _a.label;
                items.push(target);
                label.push(1);
                this.data.timer = setTimeout(function () {
                    var active = index < 0 ? (initial > items.length - 1 ? 0 : Math.max(0, initial)) : index;
                    _this.setActiveItem(active)._loop().setData({ label: label });
                });
            }
        }
    },
    detached: function () {
        this._clearTimer();
    },
    methods: {
        touchStart: function (_a) {
            var pageX = _a.touches[0].pageX;
            this.data.sx = pageX;
        },
        touchMove: function (_a) {
            var pageX = _a.touches[0].pageX;
            this.data.ex = pageX;
        },
        touchEnd: function () {
            var _a = this.data, sx = _a.sx, ex = _a.ex, length = _a.items.length, isMoving = _a.isMoving;
            if (length <= 2 || isMoving) {
                return;
            }
            if (sx < ex - 50) {
                this.prev();
            }
            else if (sx > ex + 50) {
                this.next();
            }
        },
        setActiveItem: function (nameOrIndex) {
            var _this = this;
            var _a = this.data, items = _a.items, preIndex = _a.index;
            if (items.length <= 1) {
                preIndex !== 0 && this.setData({ index: 0 });
                return this;
            }
            var index = this._getIndex(nameOrIndex);
            if (index == null) {
                return console.warn("\u672A\u627E\u5230" + (typeof nameOrIndex === 'number' ? '索引' : 'name') + "\u4E3A" + nameOrIndex + "\u7684\u8F6E\u64AD\u7EC4\u4EF6");
            }
            this.setData({ index: index });
            var offset = Math.floor(items.length / 2);
            var arr = items.slice(index).concat(items.slice(0, index));
            arr = arr.slice(-offset).concat(arr.slice(0, arr.length - offset));
            setTimeout(function () {
                _this.data.isMoving = false;
                arr.length <= 2 && arr[0].setData({ translate: '100%' });
            }, 500);
            arr.forEach(function (v, i) { return v.setData({ translate: (i - offset) * 100 + "%" }); });
            this.data.isMoving = true;
            return this;
        },
        prev: function () {
            var _a = this.data, items = _a.items, index = _a.index;
            this._clearTimer().setActiveItem(index <= 0 ? items.length - 1 : index - 1)._loop();
            return this;
        },
        next: function () {
            var _a = this.data, items = _a.items, index = _a.index;
            this._clearTimer().setActiveItem(index >= items.length - 1 ? 0 : index + 1)._loop();
            return this;
        },
        _getIndex: function (nameOrIndex) {
            var items = this.data.items;
            if (typeof nameOrIndex === 'number') {
                if (nameOrIndex >= 0 && nameOrIndex <= items.length - 1) {
                    return nameOrIndex;
                }
            }
            else {
                var index = items.findIndex(function (v) { return v.data.name === nameOrIndex; });
                if (index > -1) {
                    return index;
                }
            }
            return void 0;
        },
        _loop: function () {
            var interval = this.data.interval;
            interval > 100 && (this.data.timer = setTimeout(this.next.bind(this), this.data.interval + 500));
            return this;
        },
        _clearTimer: function () {
            var timer = this.data.timer;
            if (timer) {
                clearTimeout(timer);
                this.data.timer = 0;
            }
            return this;
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2Fyb3VzZWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjYXJvdXNlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBMkJBLFNBQVMsQ0FBVztJQUNoQixVQUFVLEVBQUU7UUFDUixNQUFNLEVBQUU7WUFDSixJQUFJLEVBQUUsTUFBTTtZQUNaLEtBQUssRUFBRSxNQUFNO1NBQ2hCO1FBQ0QsT0FBTyxFQUFFO1lBQ0wsSUFBSSxFQUFFLE1BQU07WUFDWixLQUFLLEVBQUUsQ0FBQztTQUNYO1FBQ0QsUUFBUSxFQUFFO1lBQ04sSUFBSSxFQUFFLE1BQU07WUFDWixLQUFLLEVBQUUsSUFBSTtTQUNkO0tBQ0o7SUFDRCxJQUFJLEVBQUU7UUFDRixLQUFLLEVBQUUsRUFBRTtRQUNULEtBQUssRUFBRSxDQUFDLENBQUM7UUFDVCxLQUFLLEVBQUUsRUFBRTtRQUNULEVBQUUsRUFBRSxDQUFDO1FBQ0wsRUFBRSxFQUFFLENBQUM7UUFDTCxRQUFRLEVBQUUsS0FBSztRQUNmLEtBQUssRUFBRSxDQUFDO0tBQ1g7SUFDRCxTQUFTLEVBQUU7UUFDUCxhQUFhLEVBQUU7WUFDWCxJQUFJLEVBQUUsT0FBTztZQUNiLE1BQU0sWUFBaUIsTUFBbUI7Z0JBQTFDLGlCQVdDO2dCQVZHLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztnQkFFYixJQUFBLGNBQTBDLEVBQXpDLGdCQUFLLEVBQUUsb0JBQU8sRUFBRSxnQkFBSyxFQUFFLGdCQUFrQixDQUFDO2dCQUNqRCxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUNuQixLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUVkLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLFVBQVUsQ0FBQztvQkFDekIsSUFBTSxNQUFNLEdBQUcsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxD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Q0FBQztpQkFDdEI7YUFDSjtpQkFBTTtnQkFDSCxJQUFNLEtBQUssR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssV0FBVyxFQUEzQixDQUEyQixDQUFDLENBQUM7Z0JBQ2hFLElBQUcsS0FBSyxHQUFHLENBQUMsQ0FBQyxFQUFFO29CQUNYLE9BQU8sS0FBSyxDQUFDO2lCQUNoQjthQUNKO1lBRUQsT0FBTyxLQUFLLENBQUMsQ0FBQztRQUNsQixDQUFDO1FBQ0QsS0FBSztZQUNELElBQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQ3BDLFFBQVEsR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUVqRyxPQUFPLElBQUksQ0FBQztRQUNoQixDQUFDO1FBQ0QsV0FBVztZQUNBLElBQUEsdUJBQUssQ0FBYztZQUMxQixJQUFHLEtBQUssRUFBRTtnQkFDTixZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ3BCLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQzthQUN2QjtZQUVELE9BQU8sSUFBSSxDQUFDO1FBQ2hCLENBQUM7S0FDSjtDQUNKLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiDova7mkq1cclxuICovXHJcblxyXG5pbnRlcmZhY2UgQ2Fyb3VzZWwgZXh0ZW5kcyBXeENvbXBvbmVudCB7XHJcbiAgICBkYXRhOiB7XHJcbiAgICAgICAgbGFiZWw6IEFycmF5PDE+OyAvLyDliJvlu7rmoIforrDnmoTmlbDnu4RcclxuICAgICAgICBpbmRleDogbnVtYmVyOyAvLyDlvZPliY3mmL7npLrnu4Tku7bntKLlvJVcclxuXHJcbiAgICAgICAgaXRlbXM6IFd4Q29tcG9uZW50W107IC8vIOa7muWKqOe7hOS7tlxyXG4gICAgICAgIHRpbWVyOiBudW1iZXI7IC8vIOWumuaXtuWZqGlkXHJcbiAgICAgICAgc3g6IG51bWJlcjsgLy8gdG91Y2hTdGFydCDnmoR45Z2Q5qCHXHJcbiAgICAgICAgZXg6IG51bWJlcjsgLy8gdG91Y2hFbmQg5pe255qEeOWdkOagh1xyXG4gICAgICAgIGlzTW92aW5nOiBib29sZWFuO1xyXG5cclxuICAgICAgICBpbnRlcnZhbDogbnVtYmVyOyAvLyDlrprml7blmajosIPnlKjpl7TpmpRcclxuICAgICAgICBpbml0aWFsOiBudW1iZXI7IC8vIOWIneWni+aYvuekuueahOe7hOS7tue0ouW8lVxyXG4gICAgfTtcclxuICAgIHNldEFjdGl2ZUl0ZW0obmFtZU9ySW5kZXg6IHN0cmluZyB8IG51bWJlcik6IENhcm91c2VsO1xyXG4gICAgcHJldigpOiBDYXJvdXNlbDtcclxuICAgIG5leHQoKTogQ2Fyb3VzZWw7XHJcblxyXG4gICAgX2dldEluZGV4KG5hbWVPckluZGV4OiBzdHJpbmcgfCBudW1iZXIpOiBudW1iZXIgfCB2b2lkO1xyXG4gICAgX2xvb3AoKTogQ2Fyb3VzZWw7XHJcbiAgICBfY2xlYXJUaW1lcigpOiBDYXJvdXNlbDtcclxufVxyXG5cclxuQ29tcG9uZW50PENhcm91c2VsPih7XHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgaGVpZ2h0OiB7XHJcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICAgICAgdmFsdWU6ICc1OXZ3J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaW5pdGlhbDoge1xyXG4gICAgICAgICAgICB0eXBlOiBOdW1iZXIsXHJcbiAgICAgICAgICAgIHZhbHVlOiAwXHJcbiAgICAgICAgfSxcclxuICAgICAgICBpbnRlcnZhbDoge1xyXG4gICAgICAgICAgICB0eXBlOiBOdW1iZXIsXHJcbiAgICAgICAgICAgIHZhbHVlOiAzMDAwXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGRhdGE6IHtcclxuICAgICAgICBpdGVtczogW10sXHJcbiAgICAgICAgaW5kZXg6IC0xLFxyXG4gICAgICAgIGxhYmVsOiBbXSxcclxuICAgICAgICBzeDogMCxcclxuICAgICAgICBleDogMCxcclxuICAgICAgICBpc01vdmluZzogZmFsc2UsXHJcbiAgICAgICAgdGltZXI6IDBcclxuICAgIH0sXHJcbiAgICByZWxhdGlvbnM6IHtcclxuICAgICAgICAnLi9pdGVtL2l0ZW0nOiB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdjaGlsZCcsXHJcbiAgICAgICAgICAgIGxpbmtlZCh0aGlzOiBDYXJvdXNlbCwgdGFyZ2V0OiBXeENvbXBvbmVudCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fY2xlYXJUaW1lcigpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHtpdGVtcywgaW5pdGlhbCwgaW5kZXgsIGxhYmVsfSA9IHRoaXMuZGF0YTtcclxuICAgICAgICAgICAgICAgIGl0ZW1zLnB1c2godGFyZ2V0KTtcclxuICAgICAgICAgICAgICAgIGxhYmVsLnB1c2goMSk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhLnRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYWN0aXZlID0gaW5kZXggPCAwID8gKGluaXRpYWwgPiBpdGVtcy5sZW5ndGggLSAxID8gMCA6IE1hdGgubWF4KDAsIGluaXRpYWwpKSA6IGluZGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0QWN0aXZlSXRlbShhY3RpdmUpLl9sb29wKCkuc2V0RGF0YSh7bGFiZWx9KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGRldGFjaGVkKHRoaXM6IENhcm91c2VsKSB7XHJcbiAgICAgICAgdGhpcy5fY2xlYXJUaW1lcigpO1xyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgICB0b3VjaFN0YXJ0KHt0b3VjaGVzOiBbe3BhZ2VYfV19OiBXeFRvdWNoRXZlbnQpIHtcclxuICAgICAgICAgICAgdGhpcy5kYXRhLnN4ID0gcGFnZVg7XHJcbiAgICAgICAgfSxcclxuICAgICAgICB0b3VjaE1vdmUoe3RvdWNoZXM6IFt7cGFnZVh9XX06IFd4VG91Y2hFdmVudCkge1xyXG4gICAgICAgICAgICB0aGlzLmRhdGEuZXggPSBwYWdlWDtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHRvdWNoRW5kKCkge1xyXG4gICAgICAgICAgICBjb25zdCB7c3gsIGV4LCBpdGVtczoge2xlbmd0aH0sIGlzTW92aW5nfSA9IHRoaXMuZGF0YTtcclxuXHJcbiAgICAgICAgICAgIC8vIOmhueebruaVsOS4jeWkp+S6jjIsIOaJi+WKqOa7muWKqOayoeS7gOS5iOWkquWkp+W/heimge+8jOS4jeWkhOeQhlxyXG4gICAgICAgICAgICBpZihsZW5ndGggPD0gMiB8fCBpc01vdmluZykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZihzeCA8IGV4IC0gNTApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucHJldigpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYoc3ggPiBleCArIDUwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5leHQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2V0QWN0aXZlSXRlbShuYW1lT3JJbmRleDogc3RyaW5nIHwgbnVtYmVyKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHtpdGVtcywgaW5kZXg6IHByZUluZGV4fSA9IHRoaXMuZGF0YTtcclxuXHJcbiAgICAgICAgICAgIC8vIOWwj+S6juS4pOmhueS4jemcgOimgea7muWKqFxyXG4gICAgICAgICAgICBpZihpdGVtcy5sZW5ndGggPD0gMSkge1xyXG4gICAgICAgICAgICAgICAgcHJlSW5kZXggIT09IDAgJiYgdGhpcy5zZXREYXRhKHtpbmRleDogMH0pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5fZ2V0SW5kZXgobmFtZU9ySW5kZXgpO1xyXG4gICAgICAgICAgICBpZihpbmRleCA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY29uc29sZS53YXJuKFxyXG4gICAgICAgICAgICAgICAgICAgIGDmnKrmib7liLAke1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlb2YgbmFtZU9ySW5kZXggPT09ICdudW1iZXInID8gJ+e0ouW8lScgOiAnbmFtZSdcclxuICAgICAgICAgICAgICAgICAgICB95Li6JHtuYW1lT3JJbmRleH3nmoTova7mkq3nu4Tku7ZgXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLnNldERhdGEoe2luZGV4fSk7XHJcbiAgICAgICAgICAgIGNvbnN0IG9mZnNldCA9IE1hdGguZmxvb3IoaXRlbXMubGVuZ3RoIC8gMik7XHJcbiAgICAgICAgICAgIGxldCBhcnIgPSBbLi4uaXRlbXMuc2xpY2UoaW5kZXgpLCAuLi5pdGVtcy5zbGljZSgwLCBpbmRleCldO1xyXG4gICAgICAgICAgICBhcnIgPSBbLi4uYXJyLnNsaWNlKC1vZmZzZXQpLCAuLi5hcnIuc2xpY2UoMCwgYXJyLmxlbmd0aCAtIG9mZnNldCldO1xyXG5cclxuICAgICAgICAgICAgLy8g6K6+572u5rua5Yqo5Yqo55S757uT5p2f5Zue6LCDXHJcbiAgICAgICAgICAgIC8vIDUwMDog5rua5Yqo5Yqo55S755qE5pe26Ze0XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhLmlzTW92aW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBhcnIubGVuZ3RoIDw9IDIgJiYgYXJyWzBdLnNldERhdGEoe3RyYW5zbGF0ZTogJzEwMCUnfSk7XHJcbiAgICAgICAgICAgIH0sIDUwMCk7XHJcblxyXG4gICAgICAgICAgICBhcnIuZm9yRWFjaCgodiwgaSkgPT4gdi5zZXREYXRhKHt0cmFuc2xhdGU6IGAkeyhpIC0gb2Zmc2V0KSAqIDEwMH0lYH0pICk7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YS5pc01vdmluZyA9IHRydWU7IC8vIOa7muWKqOWKqOeUu+S4reaJi+WKqOa7muWKqOaXoOaViFxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBwcmV2KCkge1xyXG4gICAgICAgICAgICBjb25zdCB7aXRlbXMsIGluZGV4fSA9IHRoaXMuZGF0YTtcclxuICAgICAgICAgICAgdGhpcy5fY2xlYXJUaW1lcigpLnNldEFjdGl2ZUl0ZW0oaW5kZXggPD0gMCA/IGl0ZW1zLmxlbmd0aCAtIDEgOiBpbmRleCAtIDEpLl9sb29wKCk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9LFxyXG4gICAgICAgIG5leHQoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHtpdGVtcywgaW5kZXh9ID0gdGhpcy5kYXRhO1xyXG4gICAgICAgICAgICB0aGlzLl9jbGVhclRpbWVyKCkuc2V0QWN0aXZlSXRlbShpbmRleCA+PSBpdGVtcy5sZW5ndGggLSAxID8gMCA6IGluZGV4ICsgMSkuX2xvb3AoKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgX2dldEluZGV4KG5hbWVPckluZGV4OiBzdHJpbmcgfCBudW1iZXIpIHtcclxuICAgICAgICAgICAgY29uc3QgaXRlbXMgPSB0aGlzLmRhdGEuaXRlbXM7XHJcbiAgICAgICAgICAgIGlmKHR5cGVvZiBuYW1lT3JJbmRleCA9PT0gJ251bWJlcicpIHtcclxuICAgICAgICAgICAgICAgIGlmKG5hbWVPckluZGV4ID49IDAgJiYgbmFtZU9ySW5kZXggPD0gaXRlbXMubGVuZ3RoIC0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuYW1lT3JJbmRleDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gaXRlbXMuZmluZEluZGV4KHYgPT4gdi5kYXRhLm5hbWUgPT09IG5hbWVPckluZGV4KTtcclxuICAgICAgICAgICAgICAgIGlmKGluZGV4ID4gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaW5kZXg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiB2b2lkIDA7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBfbG9vcCgpIHtcclxuICAgICAgICAgICAgY29uc3QgaW50ZXJ2YWwgPSB0aGlzLmRhdGEuaW50ZXJ2YWw7XHJcbiAgICAgICAgICAgIGludGVydmFsID4gMTAwICYmICh0aGlzLmRhdGEudGltZXIgPSBzZXRUaW1lb3V0KHRoaXMubmV4dC5iaW5kKHRoaXMpLCB0aGlzLmRhdGEuaW50ZXJ2YWwgKyA1MDApKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgX2NsZWFyVGltZXIoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHt0aW1lcn0gPSB0aGlzLmRhdGE7XHJcbiAgICAgICAgICAgIGlmKHRpbWVyKSB7XHJcbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodGltZXIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhLnRpbWVyID0gMDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KTtcclxuIl19