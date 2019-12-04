"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
Component({
    data: {
        tabIndex: 0,
        tabItems: [],
        items: []
    },
    relations: {
        './item/item': {
            type: 'child',
            linked: function (target) {
                this.data.items.push(target);
                this.data.tabItems.push(target.data.name);
            }
        }
    },
    ready: function () {
        var _this = this;
        this.displayChildren();
        setTimeout(function () { return _this.setData({ tabItems: _this.data.tabItems }); }, 100);
    },
    methods: {
        switchTab: function (_a) {
            var tab = _a.target.dataset.tab;
            if (this.data.tabIndex !== tab) {
                this.setData({ tabIndex: tab });
                this.displayChildren(tab);
            }
        },
        displayChildren: function (index) {
            if (index === void 0) { index = 0; }
            this.data.items.forEach(function (v, i) { return v.display(i !== index); });
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidGFiLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBV0EsU0FBUyxDQUFNO0lBQ1gsSUFBSSxFQUFFO1FBQ0YsUUFBUSxFQUFFLENBQUM7UUFDWCxRQUFRLEVBQUUsRUFBRTtRQUNaLEtBQUssRUFBYSxFQUFFO0tBQ3ZCO0lBQ0QsU0FBUyxFQUFFO1FBQ1AsYUFBYSxFQUFFO1lBQ1gsSUFBSSxFQUFFLE9BQU87WUFDYixNQUFNLFlBQUMsTUFBZTtnQkFDbEIsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUM3QixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUM5QyxDQUFDO1NBQ0o7S0FDSjtJQUNELEtBQUs7UUFBTCxpQkFHQztRQUZHLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN2QixVQUFVLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxPQUFPLENBQUMsRUFBQyxRQUFRLEVBQUUsS0FBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUMsQ0FBQyxFQUE1QyxDQUE0QyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ3hFLENBQUM7SUFDRCxPQUFPLEVBQUU7UUFDTCxTQUFTLFlBQUMsRUFBcUM7Z0JBQWpCLDJCQUFHO1lBQzdCLElBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEtBQUssR0FBRyxFQUFFO2dCQUMzQixJQUFJLENBQUMsT0FBUSxDQUFDLEVBQUMsUUFBUSxFQUFFLEdBQUcsRUFBQyxDQUFDLENBQUM7Z0JBQy9CLElBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDN0I7UUFDTCxDQUFDO1FBQ0QsZUFBZSxZQUFDLEtBQWlCO1lBQWpCLHNCQUFBLEVBQUEsU0FBaUI7WUFDN0IsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSyxPQUFBLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLEtBQUssQ0FBQyxFQUF0QixDQUFzQixDQUFDLENBQUM7UUFDOUQsQ0FBQztLQUNKO0NBQ0osQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGFiSXRlbSB9IGZyb20gJy4vaXRlbS9pdGVtJztcclxuXHJcbmludGVyZmFjZSBUYWIgZXh0ZW5kcyBXeENvbXBvbmVudCB7XHJcbiAgICBkYXRhOiB7XHJcbiAgICAgICAgdGFiSW5kZXg6IG51bWJlcixcclxuICAgICAgICB0YWJJdGVtczogc3RyaW5nW10sXHJcbiAgICAgICAgaXRlbXM6IFRhYkl0ZW1bXVxyXG4gICAgfTtcclxuICAgIGRpc3BsYXlDaGlsZHJlbihpbmRleD86IG51bWJlcik6IHZvaWQ7XHJcbn1cclxuXHJcbkNvbXBvbmVudDxUYWI+KHtcclxuICAgIGRhdGE6IHtcclxuICAgICAgICB0YWJJbmRleDogMCxcclxuICAgICAgICB0YWJJdGVtczogW10sXHJcbiAgICAgICAgaXRlbXM6IDxUYWJJdGVtW10+W11cclxuICAgIH0sXHJcbiAgICByZWxhdGlvbnM6IHtcclxuICAgICAgICAnLi9pdGVtL2l0ZW0nOiB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdjaGlsZCcsXHJcbiAgICAgICAgICAgIGxpbmtlZCh0YXJnZXQ6IFRhYkl0ZW0pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGF0YS5pdGVtcy5wdXNoKHRhcmdldCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGEudGFiSXRlbXMucHVzaCh0YXJnZXQuZGF0YS5uYW1lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICByZWFkeSh0aGlzOiBUYWIpIHtcclxuICAgICAgICB0aGlzLmRpc3BsYXlDaGlsZHJlbigpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5zZXREYXRhKHt0YWJJdGVtczogdGhpcy5kYXRhLnRhYkl0ZW1zfSksIDEwMCk7XHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICAgIHN3aXRjaFRhYih7dGFyZ2V0OiB7ZGF0YXNldDoge3RhYn19fTogQmFzZUV2ZW50KSB7XHJcbiAgICAgICAgICAgIGlmKHRoaXMuZGF0YS50YWJJbmRleCAhPT0gdGFiKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldERhdGEhKHt0YWJJbmRleDogdGFifSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRpc3BsYXlDaGlsZHJlbih0YWIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBkaXNwbGF5Q2hpbGRyZW4oaW5kZXg6IG51bWJlciA9IDApIHtcclxuICAgICAgICAgICAgdGhpcy5kYXRhLml0ZW1zLmZvckVhY2goKHYsIGkpID0+IHYuZGlzcGxheShpICE9PSBpbmRleCkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSk7XHJcbiJdfQ==