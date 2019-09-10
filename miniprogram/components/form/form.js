"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
Component(({
    externalClasses: ['custom-class'],
    properties: {
        rules: {
            type: Object,
            value: {}
        },
        model: {
            type: Object,
            value: {}
        },
        labelwidth: {
            type: String,
            value: 'auto'
        },
        inline: {
            type: Boolean,
            value: false
        }
    },
    data: {
        fileds: {},
        labelWidth: 0,
        originModel: {},
        id: 0
    },
    attached: function () {
        this.data.originModel = this.data.model;
    },
    relations: {
        '../form_item/form_item': {
            type: 'child',
            linked: function (target) {
                var _a;
                this.data.fileds[target.data.prop || '__default__'] = target;
                var rules = this.data.rules[target.data.prop];
                if (rules) {
                    if (Array.isArray(rules)) {
                        (_a = target.data.rules).push.apply(_a, rules);
                    }
                    else {
                        target.data.rules.push(rules);
                    }
                    target.setData({ rules: target.data.rules });
                }
            },
            unlinked: function (target) {
                delete this.data.fileds[target.data.prop];
            }
        }
    },
    observers: {
        labelWidth: function (val) {
            if (this.data.labelwidth === 'auto') {
                this.data.fileds.forEach(function (wx) { return wx.setData({ labelwidth: val + 'px' }); });
            }
        }
    },
    methods: {
        valid: function () {
            var _this = this;
            var keys = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                keys[_i] = arguments[_i];
            }
            if (keys.length === 0) {
                keys = Object.keys(this.data.fileds);
            }
            return Promise.all(keys.map(function (k) {
                var filed = _this.data.fileds[k];
                if (filed) {
                    return filed.valid(_this.data.model[filed.data.prop]);
                }
                return true;
            }));
        },
        reset: function () {
            Object.values(this.data.fileds).forEach(function (v) { return v.setData({ errMsg: '' }); });
            this.triggerEvent('reset', this.data.originModel, {});
        }
    }
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZvcm0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFnQkEsU0FBUyxDQUFPLENBQUM7SUFDYixlQUFlLEVBQUUsQ0FBQyxjQUFjLENBQUM7SUFDakMsVUFBVSxFQUFFO1FBQ1IsS0FBSyxFQUFFO1lBQ0gsSUFBSSxFQUFFLE1BQU07WUFDWixLQUFLLEVBQXFDLEVBQUU7U0FDL0M7UUFDRCxLQUFLLEVBQUU7WUFDSCxJQUFJLEVBQUUsTUFBTTtZQUNaLEtBQUssRUFBRSxFQUFFO1NBQ1o7UUFDRCxVQUFVLEVBQUU7WUFDUixJQUFJLEVBQUUsTUFBTTtZQUNaLEtBQUssRUFBRSxNQUFNO1NBQ2hCO1FBQ0QsTUFBTSxFQUFFO1lBQ0osSUFBSSxFQUFFLE9BQU87WUFDYixLQUFLLEVBQUUsS0FBSztTQUNmO0tBQ0o7SUFDRCxJQUFJLEVBQUU7UUFDRixNQUFNLEVBQWdDLEVBQUU7UUFDeEMsVUFBVSxFQUFFLENBQUM7UUFDYixXQUFXLEVBQUUsRUFBRTtRQUNmLEVBQUUsRUFBRSxDQUFDO0tBQ1I7SUFDRCxRQUFRO1FBQ0osSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDNUMsQ0FBQztJQUNELFNBQVMsRUFBRTtRQUNQLHdCQUF3QixFQUFFO1lBQ3RCLElBQUksRUFBRSxPQUFPO1lBQ2IsTUFBTSxZQUFDLE1BQU07O2dCQUNULElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLGFBQWEsQ0FBQyxHQUFHLE1BQU0sQ0FBQztnQkFFN0QsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDaEQsSUFBSSxLQUFLLEVBQUU7b0JBQ1AsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO3dCQUN0QixDQUFBLEtBQUEsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUEsQ0FBQyxJQUFJLFdBQUksS0FBSyxFQUFFO3FCQUNwQzt5QkFBTTt3QkFDSCxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7cUJBQ2pDO29CQUVELE1BQU0sQ0FBQyxPQUFRLENBQUMsRUFBRSxLQUFLLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO2lCQUNqRDtZQUNMLENBQUM7WUFDRCxRQUFRLFlBQUMsTUFBTTtnQkFDWCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDOUMsQ0FBQztTQUNKO0tBQ0o7SUFDRCxTQUFTLEVBQUU7UUFDUCxVQUFVLFlBQUMsR0FBVztZQUNsQixJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxLQUFLLE1BQU0sRUFBRTtnQkFDakMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFVBQUMsRUFBZSxJQUFLLE9BQUEsRUFBRSxDQUFDLE9BQVEsQ0FBQyxFQUFFLFVBQVUsRUFBRSxHQUFHLEdBQUcsSUFBSSxFQUFFLENBQUMsRUFBdkMsQ0FBdUMsQ0FBQyxDQUFDO2FBQzFGO1FBQ0wsQ0FBQztLQUNKO0lBQ0QsT0FBTyxFQUFFO1FBQ0wsS0FBSztZQUFMLGlCQWFDO1lBYkssY0FBaUI7aUJBQWpCLFVBQWlCLEVBQWpCLHFCQUFpQixFQUFqQixJQUFpQjtnQkFBakIseUJBQWlCOztZQUNuQixJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO2dCQUNuQixJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQ3hDO1lBRUQsT0FBTyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBQSxDQUFDO2dCQUN6QixJQUFNLEtBQUssR0FBYSxLQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDNUMsSUFBSSxLQUFLLEVBQUU7b0JBQ1AsT0FBTyxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztpQkFDeEQ7Z0JBRUQsT0FBTyxJQUFJLENBQUM7WUFDaEIsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNSLENBQUM7UUFDRCxLQUFLO1lBQ1ksTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBRSxDQUFDLE9BQU8sQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxPQUFRLENBQUMsRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBMUIsQ0FBMEIsQ0FBQyxDQUFDO1lBQ3ZGLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQzFELENBQUM7S0FDSjtDQUNKLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRm9ybUl0ZW0gfSBmcm9tICcuLi9mb3JtX2l0ZW0vZm9ybV9pdGVtJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUnVsZSB7XHJcbiAgICByZXF1aXJlZD86IGJvb2xlYW47XHJcbiAgICBtaW4/OiBudW1iZXI7XHJcbiAgICBtYXg/OiBudW1iZXI7XHJcbiAgICByZWdleHA/OiBzdHJpbmc7XHJcbiAgICBmdW5jPzogKHZhbHVlOiBzdHJpbmcgfCBudW1iZXIpID0+IHN0cmluZyB8IGJvb2xlYW4gfCB2b2lkIHwgUHJvbWlzZTxzdHJpbmcgfCBib29sZWFuIHwgdm9pZD47XHJcbiAgICBtZXNzYWdlPzogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEZvcm0gZXh0ZW5kcyBXeENvbXBvbmVudCB7XHJcbiAgICB2YWxpZCguLi5rZXlzOiBzdHJpbmdbXSk6IFByb21pc2U8dHJ1ZT47XHJcbiAgICByZXNldCgpOiB2b2lkO1xyXG59XHJcblxyXG5Db21wb25lbnQ8Rm9ybT4oKHtcclxuICAgIGV4dGVybmFsQ2xhc3NlczogWydjdXN0b20tY2xhc3MnXSxcclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBydWxlczoge1xyXG4gICAgICAgICAgICB0eXBlOiBPYmplY3QsXHJcbiAgICAgICAgICAgIHZhbHVlOiA8eyBbcHJvcDogc3RyaW5nXTogUnVsZSB8IFJ1bGVbXSB9Pnt9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBtb2RlbDoge1xyXG4gICAgICAgICAgICB0eXBlOiBPYmplY3QsXHJcbiAgICAgICAgICAgIHZhbHVlOiB7fVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbGFiZWx3aWR0aDoge1xyXG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgICAgIHZhbHVlOiAnYXV0bydcclxuICAgICAgICB9LFxyXG4gICAgICAgIGlubGluZToge1xyXG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxyXG4gICAgICAgICAgICB2YWx1ZTogZmFsc2VcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgZGF0YToge1xyXG4gICAgICAgIGZpbGVkczogPHsgW2s6IHN0cmluZ106IFd4Q29tcG9uZW50IH0+e30sXHJcbiAgICAgICAgbGFiZWxXaWR0aDogMCxcclxuICAgICAgICBvcmlnaW5Nb2RlbDoge30sXHJcbiAgICAgICAgaWQ6IDBcclxuICAgIH0sXHJcbiAgICBhdHRhY2hlZCgpIHtcclxuICAgICAgICB0aGlzLmRhdGEub3JpZ2luTW9kZWwgPSB0aGlzLmRhdGEubW9kZWw7XHJcbiAgICB9LFxyXG4gICAgcmVsYXRpb25zOiB7XHJcbiAgICAgICAgJy4uL2Zvcm1faXRlbS9mb3JtX2l0ZW0nOiB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdjaGlsZCcsXHJcbiAgICAgICAgICAgIGxpbmtlZCh0YXJnZXQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGF0YS5maWxlZHNbdGFyZ2V0LmRhdGEucHJvcCB8fCAnX19kZWZhdWx0X18nXSA9IHRhcmdldDtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBydWxlcyA9IHRoaXMuZGF0YS5ydWxlc1t0YXJnZXQuZGF0YS5wcm9wXTtcclxuICAgICAgICAgICAgICAgIGlmIChydWxlcykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHJ1bGVzKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQuZGF0YS5ydWxlcy5wdXNoKC4uLnJ1bGVzKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQuZGF0YS5ydWxlcy5wdXNoKHJ1bGVzKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldC5zZXREYXRhISh7IHJ1bGVzOiB0YXJnZXQuZGF0YS5ydWxlcyB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdW5saW5rZWQodGFyZ2V0KSB7XHJcbiAgICAgICAgICAgICAgICBkZWxldGUgdGhpcy5kYXRhLmZpbGVkc1t0YXJnZXQuZGF0YS5wcm9wXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBvYnNlcnZlcnM6IHtcclxuICAgICAgICBsYWJlbFdpZHRoKHZhbDogbnVtYmVyKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRhdGEubGFiZWx3aWR0aCA9PT0gJ2F1dG8nKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGEuZmlsZWRzLmZvckVhY2goKHd4OiBXeENvbXBvbmVudCkgPT4gd3guc2V0RGF0YSEoeyBsYWJlbHdpZHRoOiB2YWwgKyAncHgnIH0pKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgdmFsaWQoLi4ua2V5czogc3RyaW5nW10pIHtcclxuICAgICAgICAgICAgaWYgKGtleXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBrZXlzID0gT2JqZWN0LmtleXModGhpcy5kYXRhLmZpbGVkcyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLmFsbChrZXlzLm1hcChrID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGZpbGVkOiBGb3JtSXRlbSA9IHRoaXMuZGF0YS5maWxlZHNba107XHJcbiAgICAgICAgICAgICAgICBpZiAoZmlsZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmlsZWQudmFsaWQodGhpcy5kYXRhLm1vZGVsW2ZpbGVkLmRhdGEucHJvcF0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICByZXNldCgpIHtcclxuICAgICAgICAgICAgKDxGb3JtSXRlbVtdPk9iamVjdC52YWx1ZXModGhpcy5kYXRhLmZpbGVkcykpLmZvckVhY2godiA9PiB2LnNldERhdGEhKHsgZXJyTXNnOiAnJyB9KSk7XHJcbiAgICAgICAgICAgIHRoaXMudHJpZ2dlckV2ZW50KCdyZXNldCcsIHRoaXMuZGF0YS5vcmlnaW5Nb2RlbCwge30pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSkpO1xyXG4iXX0=