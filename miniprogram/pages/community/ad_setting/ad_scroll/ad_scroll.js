"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var upload_1 = require("../../../../components/upload/upload");
var http_1 = require("../../../../utils/http");
var index_1 = require("../../../../constant/index");
var util_1 = require("../../../../utils/util");
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
                .then(function (src) { return util_1.upload(src, ''); })
                .then(function (src) { return http_1.request({
                url: '/api/ad',
                method: 'PUT',
                data: { img: src, url: '', type: index_1.AD_TYPE.INDEX },
                header: { 'Content-type': 'application/x-www-form-urlencoded' }
            })
                .then(function (_a) {
                var id = _a.data;
                return _this.data.ads.push({ img: src, id: id, url: '' });
            }); })
                .then(function () { return _this.setData(_this.data); })
                .then(function () { return wx.showToast({ title: '添加成功' }); })
                .catch(console.log);
        },
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRfc2Nyb2xsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYWRfc2Nyb2xsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsK0RBQW1FO0FBQ25FLCtDQUFpRDtBQUNqRCxvREFBcUQ7QUFDckQsK0NBQWdEO0FBVWhELFNBQVMsQ0FBVTtJQUNmLFVBQVUsRUFBRTtRQUNSLE1BQU0sRUFBRTtZQUNKLElBQUksRUFBRSxPQUFPO1lBQ2IsS0FBSyxFQUFFLEtBQUs7U0FDZjtLQUNKO0lBQ0QsSUFBSSxFQUFFO1FBQ0YsR0FBRyxFQUFZLEVBQUU7UUFDakIsUUFBUSxFQUFFLElBQUk7S0FDakI7SUFDRCxRQUFRO1FBQVIsaUJBSUM7UUFIRyxjQUFPLENBQVEsRUFBQyxHQUFHLEVBQUUsb0JBQW9CLEVBQUMsQ0FBQzthQUN0QyxJQUFJLENBQUMsVUFBQyxFQUFNO2dCQUFMLGNBQUk7WUFBTSxPQUFBLEtBQUksQ0FBQyxPQUFPLENBQUMsRUFBQyxHQUFHLEVBQUUsSUFBSSxFQUFDLENBQUM7UUFBekIsQ0FBeUIsQ0FBQzthQUMzQyxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFDRCxPQUFPLEVBQUU7UUFDTCxNQUFNLFlBQUMsRUFBOEM7WUFBckQsaUJBbUJDO2dCQW5CaUMsc0NBQUs7WUFDbkMsRUFBRSxDQUFDLFNBQVMsQ0FBQztnQkFDVCxPQUFPLEVBQUUsUUFBUTtnQkFDakIsT0FBTyxFQUFFLFVBQUMsRUFBUzt3QkFBUixvQkFBTztvQkFDZCxJQUFHLE9BQU8sRUFBRTt3QkFDUixJQUFNLEtBQUcsR0FBRyxLQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQzt3QkFDMUIsY0FBTyxDQUFDOzRCQUNKLEdBQUcsRUFBRSxnQkFBZ0I7NEJBQ3JCLElBQUksRUFBRSxFQUFDLEVBQUUsRUFBRSxLQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxFQUFDO3lCQUM1QixDQUFDOzZCQUNHLElBQUksQ0FBQzs0QkFDRixFQUFFLENBQUMsU0FBUyxDQUFDLEVBQUMsS0FBSyxFQUFFLE1BQU0sRUFBQyxDQUFDLENBQUM7NEJBQzlCLEtBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDOzRCQUNyQixLQUFJLENBQUMsT0FBTyxDQUFDLEVBQUMsR0FBRyxPQUFBLEVBQUMsQ0FBQyxDQUFDO3dCQUN4QixDQUFDLENBQUM7NkJBQ0QsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztxQkFDM0I7Z0JBQ0wsQ0FBQzthQUNKLENBQUMsQ0FBQztRQUNQLENBQUM7UUFDRCxHQUFHO1lBQUgsaUJBYUM7WUFaRyxvQkFBVyxFQUFFO2lCQUNSLElBQUksQ0FBQyxVQUFDLEdBQUcsSUFBSyxPQUFBLGFBQU0sQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQWYsQ0FBZSxDQUFDO2lCQUM5QixJQUFJLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxjQUFPLENBQVM7Z0JBQ3pCLEdBQUcsRUFBRSxTQUFTO2dCQUNkLE1BQU0sRUFBRSxLQUFLO2dCQUNiLElBQUksRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsZUFBTyxDQUFDLEtBQUssRUFBRTtnQkFDaEQsTUFBTSxFQUFFLEVBQUUsY0FBYyxFQUFFLG1DQUFtQyxFQUFFO2FBQ2xFLENBQUM7aUJBQ0QsSUFBSSxDQUFDLFVBQUMsRUFBVTtvQkFBVCxZQUFRO2dCQUFNLE9BQUEsS0FBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLElBQUEsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFDLENBQUM7WUFBM0MsQ0FBMkMsQ0FBQyxFQU5yRCxDQU1xRCxDQUFDO2lCQUNsRSxJQUFJLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxPQUFPLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxFQUF2QixDQUF1QixDQUFDO2lCQUNuQyxJQUFJLENBQUMsY0FBTSxPQUFBLEVBQUUsQ0FBQyxTQUFTLENBQUMsRUFBQyxLQUFLLEVBQUUsTUFBTSxFQUFDLENBQUMsRUFBN0IsQ0FBNkIsQ0FBQztpQkFDekMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM1QixDQUFDO0tBQ0o7Q0FDSixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjaG9vc2VJbWFnZSB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvdXBsb2FkL3VwbG9hZCc7XHJcbmltcG9ydCB7IHJlcXVlc3QgfSBmcm9tICcuLi8uLi8uLi8uLi91dGlscy9odHRwJztcclxuaW1wb3J0IHsgQURfVFlQRSB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbnN0YW50L2luZGV4JztcclxuaW1wb3J0IHsgdXBsb2FkIH0gZnJvbSAnLi4vLi4vLi4vLi4vdXRpbHMvdXRpbCc7XHJcblxyXG50eXBlIEFESXRlbSA9IFBpY2s8SUFELCAnaW1nJyB8ICdpZCcgfCAndXJsJz47XHJcblxyXG5pbnRlcmZhY2UgQWRJbmRleCBleHRlbmRzIFd4Q29tcG9uZW50IHtcclxuICAgIGRhdGE6IHtcclxuICAgICAgICBhZHM6IEFESXRlbVtdO1xyXG4gICAgfTtcclxufVxyXG5cclxuQ29tcG9uZW50PEFkSW5kZXg+KHtcclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBoaWRkZW46IHtcclxuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcclxuICAgICAgICAgICAgdmFsdWU6IGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGRhdGE6IHtcclxuICAgICAgICBhZHM6IDxBREl0ZW1bXT5bXSxcclxuICAgICAgICBpc0RvdWJsZTogdHJ1ZVxyXG4gICAgfSxcclxuICAgIGF0dGFjaGVkKCkge1xyXG4gICAgICAgIHJlcXVlc3Q8SUFEW10+KHt1cmw6ICcvYXBpL2FkL2dldENhcm91c2UnfSlcclxuICAgICAgICAgICAgLnRoZW4oKHtkYXRhfSkgPT4gdGhpcy5zZXREYXRhKHthZHM6IGRhdGF9KSlcclxuICAgICAgICAgICAgLmNhdGNoKGNvbnNvbGUubG9nKTtcclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgcmVtb3ZlKHtjdXJyZW50VGFyZ2V0OiB7ZGF0YXNldDoge2luZGV4fX19OiBCYXNlRXZlbnQpIHtcclxuICAgICAgICAgICAgd3guc2hvd01vZGFsKHtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICfliKDpmaTor6Xlub/lkYo/JyxcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6ICh7Y29uZmlybX0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZihjb25maXJtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGFkcyA9IHRoaXMuZGF0YS5hZHM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVlc3Qoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiAnL2FwaS9hZC9yZW1vdmUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge2lkOiBhZHNbaW5kZXhdLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7dGl0bGU6ICfliKDpmaTmiJDlip8nfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXREYXRhKHthZHN9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY2F0Y2goY29uc29sZS5sb2cpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBhZGQoKSB7XHJcbiAgICAgICAgICAgIGNob29zZUltYWdlKClcclxuICAgICAgICAgICAgICAgIC50aGVuKChzcmMpID0+IHVwbG9hZChzcmMsICcnKSlcclxuICAgICAgICAgICAgICAgIC50aGVuKHNyYyA9PiByZXF1ZXN0PG51bWJlcj4oe1xyXG4gICAgICAgICAgICAgICAgICAgIHVybDogJy9hcGkvYWQnLFxyXG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BVVCcsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogeyBpbWc6IHNyYywgdXJsOiAnJywgdHlwZTogQURfVFlQRS5JTkRFWCB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcjogeyAnQ29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC50aGVuKCh7ZGF0YTogaWR9KSA9PiB0aGlzLmRhdGEuYWRzLnB1c2goe2ltZzogc3JjLCBpZCwgdXJsOiAnJ30pKSlcclxuICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHRoaXMuc2V0RGF0YSh0aGlzLmRhdGEpKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4gd3guc2hvd1RvYXN0KHt0aXRsZTogJ+a3u+WKoOaIkOWKnyd9KSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaChjb25zb2xlLmxvZyk7XHJcbiAgICAgICAgfSxcclxuICAgIH1cclxufSk7XHJcbiJdfQ==