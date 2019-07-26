"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var input_1 = require("../../behavior/input");
var computed = require("miniprogram-computed");
Component({
    behaviors: [input_1.default, computed],
    externalClasses: ['custom-class', 'label-class', 'input-class'],
    properties: {
        confirmType: {
            type: String,
            value: 'done'
        },
        type: {
            type: String,
            value: ''
        },
        maxlength: {
            type: Number,
            value: 140
        }
    },
    attached: function () {
        var type = this.data.type;
        var currType = ['number', 'idcard', 'digit'].indexOf(type) > -1 ? type : 'text';
        if (type === 'email') {
            this.data.rules.push({
                id: 'email',
                regexp: /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/,
                message: '无效的电子邮件'
            });
        }
        else if (type === 'tel') {
            this.data.rules.push({
                id: 'tel',
                regexp: /^1[3456789]\d{9}$/,
                message: '无效手机号'
            });
            currType = 'number';
        }
        this.setData({ currType: currType });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbnB1dC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUlBLDhDQUFpRDtBQUNqRCwrQ0FBaUQ7QUFFakQsU0FBUyxDQUFDO0lBQ04sU0FBUyxFQUFFLENBQUMsZUFBYSxFQUFFLFFBQVEsQ0FBQztJQUNwQyxlQUFlLEVBQUUsQ0FBQyxjQUFjLEVBQUUsYUFBYSxFQUFFLGFBQWEsQ0FBQztJQUMvRCxVQUFVLEVBQUU7UUFDUixXQUFXLEVBQUU7WUFDVCxJQUFJLEVBQUUsTUFBTTtZQUNaLEtBQUssRUFBRSxNQUFNO1NBQ2hCO1FBQ0QsSUFBSSxFQUFFO1lBQ0YsSUFBSSxFQUFFLE1BQU07WUFDWixLQUFLLEVBQUUsRUFBRTtTQUNaO1FBQ0QsU0FBUyxFQUFFO1lBQ1AsSUFBSSxFQUFFLE1BQU07WUFDWixLQUFLLEVBQUUsR0FBRztTQUNiO0tBQ0o7SUFDRCxRQUFRO1FBQ0osSUFBTSxJQUFJLEdBQVcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDcEMsSUFBSSxRQUFRLEdBQVcsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7UUFFeEYsSUFBSSxJQUFJLEtBQUssT0FBTyxFQUFFO1lBQ2xCLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztnQkFDakIsRUFBRSxFQUFFLE9BQU87Z0JBQ1gsTUFBTSxFQUFFLDBEQUEwRDtnQkFDbEUsT0FBTyxFQUFFLFNBQVM7YUFDckIsQ0FBQyxDQUFDO1NBQ047YUFBTSxJQUFJLElBQUksS0FBSyxLQUFLLEVBQUU7WUFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO2dCQUNqQixFQUFFLEVBQUUsS0FBSztnQkFDVCxNQUFNLEVBQUUsbUJBQW1CO2dCQUMzQixPQUFPLEVBQUUsT0FBTzthQUNuQixDQUFDLENBQUM7WUFDSCxRQUFRLEdBQUcsUUFBUSxDQUFDO1NBQ3ZCO1FBRUQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLFFBQVEsVUFBQSxFQUFFLENBQUMsQ0FBQztJQUMvQixDQUFDO0NBQ0osQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIOihqOWNlee7hOS7tiwg5LiN5pSv5oyB5Yqo5oCB5pS55Y+YdHlwZVxyXG4gKi9cclxuXHJcbmltcG9ydCBpbnB1dEJlaGF2aW9yIGZyb20gJy4uLy4uL2JlaGF2aW9yL2lucHV0JztcclxuaW1wb3J0ICogYXMgY29tcHV0ZWQgZnJvbSAnbWluaXByb2dyYW0tY29tcHV0ZWQnO1xyXG5cclxuQ29tcG9uZW50KHtcclxuICAgIGJlaGF2aW9yczogW2lucHV0QmVoYXZpb3IsIGNvbXB1dGVkXSxcclxuICAgIGV4dGVybmFsQ2xhc3NlczogWydjdXN0b20tY2xhc3MnLCAnbGFiZWwtY2xhc3MnLCAnaW5wdXQtY2xhc3MnXSxcclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBjb25maXJtVHlwZToge1xyXG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgICAgIHZhbHVlOiAnZG9uZSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHR5cGU6IHtcclxuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgICAgICB2YWx1ZTogJydcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1heGxlbmd0aDoge1xyXG4gICAgICAgICAgICB0eXBlOiBOdW1iZXIsXHJcbiAgICAgICAgICAgIHZhbHVlOiAxNDBcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgYXR0YWNoZWQoKSB7XHJcbiAgICAgICAgY29uc3QgdHlwZTogc3RyaW5nID0gdGhpcy5kYXRhLnR5cGU7XHJcbiAgICAgICAgbGV0IGN1cnJUeXBlOiBzdHJpbmcgPSBbJ251bWJlcicsICdpZGNhcmQnLCAnZGlnaXQnXS5pbmRleE9mKHR5cGUpID4gLTEgPyB0eXBlIDogJ3RleHQnO1xyXG5cclxuICAgICAgICBpZiAodHlwZSA9PT0gJ2VtYWlsJykge1xyXG4gICAgICAgICAgICB0aGlzLmRhdGEucnVsZXMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBpZDogJ2VtYWlsJyxcclxuICAgICAgICAgICAgICAgIHJlZ2V4cDogL14oW2EtekEtWl18WzAtOV0pKFxcd3xcXC0pK0BbYS16QS1aMC05XStcXC4oW2EtekEtWl17Miw0fSkkLyxcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICfml6DmlYjnmoTnlLXlrZDpgq7ku7YnXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ3RlbCcpIHtcclxuICAgICAgICAgICAgdGhpcy5kYXRhLnJ1bGVzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgaWQ6ICd0ZWwnLFxyXG4gICAgICAgICAgICAgICAgcmVnZXhwOiAvXjFbMzQ1Njc4OV1cXGR7OX0kLyxcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICfml6DmlYjmiYvmnLrlj7cnXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBjdXJyVHlwZSA9ICdudW1iZXInO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5zZXREYXRhKHsgY3VyclR5cGUgfSk7XHJcbiAgICB9XHJcbn0pIl19