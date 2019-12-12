"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var upload_1 = require("../../../components/upload/upload");
var http_1 = require("../../../utils/http");
var index_1 = require("../../../constant/index");
Component({
    properties: {
        hidden: {
            type: Boolean,
            value: false
        }
    },
    data: {
        ads: [],
        isDouble: true
    },
    attached: function () {
        var _this = this;
        http_1.request({ url: '/api/ad/getCarouse' })
            .then(function (_a) {
            var data = _a.data;
            return _this.setData({ ads: data });
        })
            .catch(console.log);
    },
    methods: {
        remove: function (_a) {
            var _this = this;
            var index = _a.currentTarget.dataset.index;
            wx.showModal({
                content: '删除该广告?',
                success: function (_a) {
                    var confirm = _a.confirm;
                    if (confirm) {
                        var ads_1 = _this.data.ads;
                        http_1.request({
                            url: '/api/ad/remove',
                            data: { id: ads_1[index].id }
                        })
                            .then(function () {
                            wx.showToast({ title: '删除成功' });
                            ads_1.splice(index, 1);
                            _this.setData({ ads: ads_1 });
                        })
                            .catch(console.log);
                    }
                }
            });
        },
        add: function () {
            var _this = this;
            upload_1.chooseImage()
                .then(function (src) {
                return http_1.request({
                    url: '/api/ad',
                    method: 'PUT',
                    data: {
                        img: src,
                        url: '',
                        type: index_1.AD_TYPE.INDEX
                    }
                })
                    .then(function (_a) {
                    var id = _a.data;
                    return _this.data.ads.push({ img: src, id: id, url: '' });
                });
            })
                .then(function () { return _this.setData(_this.data); })
                .then(function () { return wx.showToast({ title: '添加成功' }); })
                .catch(console.log);
        },
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRfc2Nyb2xsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYWRfc2Nyb2xsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsNERBQWdFO0FBQ2hFLDRDQUE4QztBQUM5QyxpREFBa0Q7QUFVbEQsU0FBUyxDQUFVO0lBQ2YsVUFBVSxFQUFFO1FBQ1IsTUFBTSxFQUFFO1lBQ0osSUFBSSxFQUFFLE9BQU87WUFDYixLQUFLLEVBQUUsS0FBSztTQUNmO0tBQ0o7SUFDRCxJQUFJLEVBQUU7UUFDRixHQUFHLEVBQVksRUFBRTtRQUNqQixRQUFRLEVBQUUsSUFBSTtLQUNqQjtJQUNELFFBQVE7UUFBUixpQkFJQztRQUhHLGNBQU8sQ0FBUSxFQUFDLEdBQUcsRUFBRSxvQkFBb0IsRUFBQyxDQUFDO2FBQ3RDLElBQUksQ0FBQyxVQUFDLEVBQU07Z0JBQUwsY0FBSTtZQUFNLE9BQUEsS0FBSSxDQUFDLE9BQU8sQ0FBQyxFQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUMsQ0FBQztRQUF6QixDQUF5QixDQUFDO2FBQzNDLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUNELE9BQU8sRUFBRTtRQUNMLE1BQU0sWUFBQyxFQUE4QztZQUFyRCxpQkFtQkM7Z0JBbkJpQyxzQ0FBSztZQUNuQyxFQUFFLENBQUMsU0FBUyxDQUFDO2dCQUNULE9BQU8sRUFBRSxRQUFRO2dCQUNqQixPQUFPLEVBQUUsVUFBQyxFQUFTO3dCQUFSLG9CQUFPO29CQUNkLElBQUcsT0FBTyxFQUFFO3dCQUNSLElBQU0sS0FBRyxHQUFHLEtBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO3dCQUMxQixjQUFPLENBQUM7NEJBQ0osR0FBRyxFQUFFLGdCQUFnQjs0QkFDckIsSUFBSSxFQUFFLEVBQUMsRUFBRSxFQUFFLEtBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLEVBQUM7eUJBQzVCLENBQUM7NkJBQ0csSUFBSSxDQUFDOzRCQUNGLEVBQUUsQ0FBQyxTQUFTLENBQUMsRUFBQyxLQUFLLEVBQUUsTUFBTSxFQUFDLENBQUMsQ0FBQzs0QkFDOUIsS0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7NEJBQ3JCLEtBQUksQ0FBQyxPQUFPLENBQUMsRUFBQyxHQUFHLE9BQUEsRUFBQyxDQUFDLENBQUM7d0JBQ3hCLENBQUMsQ0FBQzs2QkFDRCxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO3FCQUMzQjtnQkFDTCxDQUFDO2FBQ0osQ0FBQyxDQUFDO1FBQ1AsQ0FBQztRQUNELEdBQUc7WUFBSCxpQkFpQkM7WUFoQkcsb0JBQVcsRUFBRTtpQkFDUixJQUFJLENBQUMsVUFBQyxHQUFHO2dCQUNOLE9BQUEsY0FBTyxDQUFTO29CQUNaLEdBQUcsRUFBRSxTQUFTO29CQUNkLE1BQU0sRUFBRSxLQUFLO29CQUNiLElBQUksRUFBRTt3QkFDRixHQUFHLEVBQUUsR0FBRzt3QkFDUixHQUFHLEVBQUUsRUFBRTt3QkFDUCxJQUFJLEVBQUUsZUFBTyxDQUFDLEtBQUs7cUJBQ3RCO2lCQUNKLENBQUM7cUJBQ0QsSUFBSSxDQUFDLFVBQUMsRUFBVTt3QkFBVCxZQUFRO29CQUFNLE9BQUEsS0FBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLElBQUEsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFDLENBQUM7Z0JBQTNDLENBQTJDLENBQUM7WUFUbEUsQ0FTa0UsQ0FDckU7aUJBQ0EsSUFBSSxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsT0FBTyxDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsRUFBdkIsQ0FBdUIsQ0FBQztpQkFDbkMsSUFBSSxDQUFDLGNBQU0sT0FBQSxFQUFFLENBQUMsU0FBUyxDQUFDLEVBQUMsS0FBSyxFQUFFLE1BQU0sRUFBQyxDQUFDLEVBQTdCLENBQTZCLENBQUM7aUJBQ3pDLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDNUIsQ0FBQztLQUNKO0NBQ0osQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY2hvb3NlSW1hZ2UgfSBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL3VwbG9hZC91cGxvYWQnO1xyXG5pbXBvcnQgeyByZXF1ZXN0IH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvaHR0cCc7XHJcbmltcG9ydCB7IEFEX1RZUEUgfSBmcm9tICcuLi8uLi8uLi9jb25zdGFudC9pbmRleCc7XHJcblxyXG50eXBlIEFESXRlbSA9IFBpY2s8SUFELCAnaW1nJyB8ICdpZCcgfCAndXJsJz47XHJcblxyXG5pbnRlcmZhY2UgQWRJbmRleCBleHRlbmRzIFd4Q29tcG9uZW50IHtcclxuICAgIGRhdGE6IHtcclxuICAgICAgICBhZHM6IEFESXRlbVtdO1xyXG4gICAgfTtcclxufVxyXG5cclxuQ29tcG9uZW50PEFkSW5kZXg+KHtcclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBoaWRkZW46IHtcclxuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcclxuICAgICAgICAgICAgdmFsdWU6IGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGRhdGE6IHtcclxuICAgICAgICBhZHM6IDxBREl0ZW1bXT5bXSxcclxuICAgICAgICBpc0RvdWJsZTogdHJ1ZVxyXG4gICAgfSxcclxuICAgIGF0dGFjaGVkKCkge1xyXG4gICAgICAgIHJlcXVlc3Q8SUFEW10+KHt1cmw6ICcvYXBpL2FkL2dldENhcm91c2UnfSlcclxuICAgICAgICAgICAgLnRoZW4oKHtkYXRhfSkgPT4gdGhpcy5zZXREYXRhKHthZHM6IGRhdGF9KSlcclxuICAgICAgICAgICAgLmNhdGNoKGNvbnNvbGUubG9nKTtcclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgcmVtb3ZlKHtjdXJyZW50VGFyZ2V0OiB7ZGF0YXNldDoge2luZGV4fX19OiBCYXNlRXZlbnQpIHtcclxuICAgICAgICAgICAgd3guc2hvd01vZGFsKHtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICfliKDpmaTor6Xlub/lkYo/JyxcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6ICh7Y29uZmlybX0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZihjb25maXJtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGFkcyA9IHRoaXMuZGF0YS5hZHM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVlc3Qoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiAnL2FwaS9hZC9yZW1vdmUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge2lkOiBhZHNbaW5kZXhdLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7dGl0bGU6ICfliKDpmaTmiJDlip8nfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXREYXRhKHthZHN9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY2F0Y2goY29uc29sZS5sb2cpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBhZGQoKSB7XHJcbiAgICAgICAgICAgIGNob29zZUltYWdlKClcclxuICAgICAgICAgICAgICAgIC50aGVuKChzcmMpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWVzdDxudW1iZXI+KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiAnL2FwaS9hZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BVVCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltZzogc3JjLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IEFEX1RZUEUuSU5ERVhcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHtkYXRhOiBpZH0pID0+IHRoaXMuZGF0YS5hZHMucHVzaCh7aW1nOiBzcmMsIGlkLCB1cmw6ICcnfSkpXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB0aGlzLnNldERhdGEodGhpcy5kYXRhKSlcclxuICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHd4LnNob3dUb2FzdCh7dGl0bGU6ICfmt7vliqDmiJDlip8nfSkpXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goY29uc29sZS5sb2cpO1xyXG4gICAgICAgIH0sXHJcbiAgICB9XHJcbn0pO1xyXG4iXX0=