"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var project_form_1 = require("../../../behavior/project_form");
var http_1 = require("../../../utils/http");
Component({
    behaviors: [project_form_1.default],
    data: {
        form: {
            name: '',
            phone: '',
            detail: '',
            address: '',
            img: ''
        },
        telRule: {
            regexp: '^1[3456789]\\d{9}$',
            message: '无效电话号码'
        }
    },
    methods: {
        _submit: function () {
            http_1.uploadFile({
                url: '/api/merchant',
                name: 'file',
                filePath: this.data.form.img,
                formData: this.data.form
            })
                .then(function () { return wx.showToast({ title: '入驻成功' }); })
                .catch(console.log);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGxlZF9pbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNldHRsZWRfaW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFHQSwrREFBaUU7QUFDakUsNENBQWlEO0FBRWpELFNBQVMsQ0FBQztJQUNOLFNBQVMsRUFBRSxDQUFDLHNCQUFtQixDQUFDO0lBQ2hDLElBQUksRUFBRTtRQUNGLElBQUksRUFBRTtZQUNGLElBQUksRUFBRSxFQUFFO1lBQ1IsS0FBSyxFQUFFLEVBQUU7WUFDVCxNQUFNLEVBQUUsRUFBRTtZQUNWLE9BQU8sRUFBRSxFQUFFO1lBQ1gsR0FBRyxFQUFFLEVBQUU7U0FDVjtRQUNELE9BQU8sRUFBRTtZQUNMLE1BQU0sRUFBRSxvQkFBb0I7WUFDNUIsT0FBTyxFQUFFLFFBQVE7U0FDcEI7S0FDSjtJQUNELE9BQU8sRUFBRTtRQUNMLE9BQU87WUFDSCxpQkFBVSxDQUFDO2dCQUNQLEdBQUcsRUFBRSxlQUFlO2dCQUNwQixJQUFJLEVBQUUsTUFBTTtnQkFDWixRQUFRLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRztnQkFDNUIsUUFBUSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSTthQUMzQixDQUFDO2lCQUNHLElBQUksQ0FBQyxjQUFNLE9BQUEsRUFBRSxDQUFDLFNBQVMsQ0FBQyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUEvQixDQUErQixDQUFDO2lCQUMzQyxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzVCLENBQUM7S0FDSjtDQUNKLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiDllYblrrblhaXpqbtcclxuICovXHJcbmltcG9ydCBQcm9qZWN0Rm9ybUJlaGF2aW9yIGZyb20gJy4uLy4uLy4uL2JlaGF2aW9yL3Byb2plY3RfZm9ybSc7XHJcbmltcG9ydCB7IHVwbG9hZEZpbGUgfSBmcm9tICcuLi8uLi8uLi91dGlscy9odHRwJztcclxuXHJcbkNvbXBvbmVudCh7XHJcbiAgICBiZWhhdmlvcnM6IFtQcm9qZWN0Rm9ybUJlaGF2aW9yXSxcclxuICAgIGRhdGE6IHtcclxuICAgICAgICBmb3JtOiB7XHJcbiAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICBwaG9uZTogJycsXHJcbiAgICAgICAgICAgIGRldGFpbDogJycsXHJcbiAgICAgICAgICAgIGFkZHJlc3M6ICcnLFxyXG4gICAgICAgICAgICBpbWc6ICcnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB0ZWxSdWxlOiB7XHJcbiAgICAgICAgICAgIHJlZ2V4cDogJ14xWzM0NTY3ODldXFxcXGR7OX0kJyxcclxuICAgICAgICAgICAgbWVzc2FnZTogJ+aXoOaViOeUteivneWPt+eggSdcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICAgIF9zdWJtaXQoKSB7XHJcbiAgICAgICAgICAgIHVwbG9hZEZpbGUoe1xyXG4gICAgICAgICAgICAgICAgdXJsOiAnL2FwaS9tZXJjaGFudCcsXHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnZmlsZScsXHJcbiAgICAgICAgICAgICAgICBmaWxlUGF0aDogdGhpcy5kYXRhLmZvcm0uaW1nLFxyXG4gICAgICAgICAgICAgICAgZm9ybURhdGE6IHRoaXMuZGF0YS5mb3JtXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB3eC5zaG93VG9hc3QoeyB0aXRsZTogJ+WFpempu+aIkOWKnycgfSkpXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goY29uc29sZS5sb2cpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSk7XHJcbiJdfQ==