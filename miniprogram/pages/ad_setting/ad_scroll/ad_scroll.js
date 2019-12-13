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
                    data: { img: src, url: '', type: index_1.AD_TYPE.INDEX },
                    header: { 'Content-type': 'application/x-www-form-urlencoded' }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRfc2Nyb2xsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYWRfc2Nyb2xsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsNERBQWdFO0FBQ2hFLDRDQUE4QztBQUM5QyxpREFBa0Q7QUFVbEQsU0FBUyxDQUFVO0lBQ2YsVUFBVSxFQUFFO1FBQ1IsTUFBTSxFQUFFO1lBQ0osSUFBSSxFQUFFLE9BQU87WUFDYixLQUFLLEVBQUUsS0FBSztTQUNmO0tBQ0o7SUFDRCxJQUFJLEVBQUU7UUFDRixHQUFHLEVBQVksRUFBRTtRQUNqQixRQUFRLEVBQUUsSUFBSTtLQUNqQjtJQUNELFFBQVE7UUFBUixpQkFJQztRQUhHLGNBQU8sQ0FBUSxFQUFDLEdBQUcsRUFBRSxvQkFBb0IsRUFBQyxDQUFDO2FBQ3RDLElBQUksQ0FBQyxVQUFDLEVBQU07Z0JBQUwsY0FBSTtZQUFNLE9BQUEsS0FBSSxDQUFDLE9BQU8sQ0FBQyxFQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUMsQ0FBQztRQUF6QixDQUF5QixDQUFDO2FBQzNDLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUNELE9BQU8sRUFBRTtRQUNMLE1BQU0sWUFBQyxFQUE4QztZQUFyRCxpQkFtQkM7Z0JBbkJpQyxzQ0FBSztZQUNuQyxFQUFFLENBQUMsU0FBUyxDQUFDO2dCQUNULE9BQU8sRUFBRSxRQUFRO2dCQUNqQixPQUFPLEVBQUUsVUFBQyxFQUFTO3dCQUFSLG9CQUFPO29CQUNkLElBQUcsT0FBTyxFQUFFO3dCQUNSLElBQU0sS0FBRyxHQUFHLEtBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO3dCQUMxQixjQUFPLENBQUM7NEJBQ0osR0FBRyxFQUFFLGdCQUFnQjs0QkFDckIsSUFBSSxFQUFFLEVBQUMsRUFBRSxFQUFFLEtBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLEVBQUM7eUJBQzVCLENBQUM7NkJBQ0csSUFBSSxDQUFDOzRCQUNGLEVBQUUsQ0FBQyxTQUFTLENBQUMsRUFBQyxLQUFLLEVBQUUsTUFBTSxFQUFDLENBQUMsQ0FBQzs0QkFDOUIsS0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7NEJBQ3JCLEtBQUksQ0FBQyxPQUFPLENBQUMsRUFBQyxHQUFHLE9BQUEsRUFBQyxDQUFDLENBQUM7d0JBQ3hCLENBQUMsQ0FBQzs2QkFDRCxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO3FCQUMzQjtnQkFDTCxDQUFDO2FBQ0osQ0FBQyxDQUFDO1FBQ1AsQ0FBQztRQUNELEdBQUc7WUFBSCxpQkFjQztZQWJHLG9CQUFXLEVBQUU7aUJBQ1IsSUFBSSxDQUFDLFVBQUMsR0FBRztnQkFDTixPQUFBLGNBQU8sQ0FBUztvQkFDWixHQUFHLEVBQUUsU0FBUztvQkFDZCxNQUFNLEVBQUUsS0FBSztvQkFDYixJQUFJLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLGVBQU8sQ0FBQyxLQUFLLEVBQUU7b0JBQ2hELE1BQU0sRUFBRSxFQUFFLGNBQWMsRUFBRSxtQ0FBbUMsRUFBRTtpQkFDbEUsQ0FBQztxQkFDRCxJQUFJLENBQUMsVUFBQyxFQUFVO3dCQUFULFlBQVE7b0JBQU0sT0FBQSxLQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsSUFBQSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUMsQ0FBQztnQkFBM0MsQ0FBMkMsQ0FBQztZQU5sRSxDQU1rRSxDQUNyRTtpQkFDQSxJQUFJLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxPQUFPLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxFQUF2QixDQUF1QixDQUFDO2lCQUNuQyxJQUFJLENBQUMsY0FBTSxPQUFBLEVBQUUsQ0FBQyxTQUFTLENBQUMsRUFBQyxLQUFLLEVBQUUsTUFBTSxFQUFDLENBQUMsRUFBN0IsQ0FBNkIsQ0FBQztpQkFDekMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM1QixDQUFDO0tBQ0o7Q0FDSixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjaG9vc2VJbWFnZSB9IGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvdXBsb2FkL3VwbG9hZCc7XHJcbmltcG9ydCB7IHJlcXVlc3QgfSBmcm9tICcuLi8uLi8uLi91dGlscy9odHRwJztcclxuaW1wb3J0IHsgQURfVFlQRSB9IGZyb20gJy4uLy4uLy4uL2NvbnN0YW50L2luZGV4JztcclxuXHJcbnR5cGUgQURJdGVtID0gUGljazxJQUQsICdpbWcnIHwgJ2lkJyB8ICd1cmwnPjtcclxuXHJcbmludGVyZmFjZSBBZEluZGV4IGV4dGVuZHMgV3hDb21wb25lbnQge1xyXG4gICAgZGF0YToge1xyXG4gICAgICAgIGFkczogQURJdGVtW107XHJcbiAgICB9O1xyXG59XHJcblxyXG5Db21wb25lbnQ8QWRJbmRleD4oe1xyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIGhpZGRlbjoge1xyXG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxyXG4gICAgICAgICAgICB2YWx1ZTogZmFsc2VcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgZGF0YToge1xyXG4gICAgICAgIGFkczogPEFESXRlbVtdPltdLFxyXG4gICAgICAgIGlzRG91YmxlOiB0cnVlXHJcbiAgICB9LFxyXG4gICAgYXR0YWNoZWQoKSB7XHJcbiAgICAgICAgcmVxdWVzdDxJQURbXT4oe3VybDogJy9hcGkvYWQvZ2V0Q2Fyb3VzZSd9KVxyXG4gICAgICAgICAgICAudGhlbigoe2RhdGF9KSA9PiB0aGlzLnNldERhdGEoe2FkczogZGF0YX0pKVxyXG4gICAgICAgICAgICAuY2F0Y2goY29uc29sZS5sb2cpO1xyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgICByZW1vdmUoe2N1cnJlbnRUYXJnZXQ6IHtkYXRhc2V0OiB7aW5kZXh9fX06IEJhc2VFdmVudCkge1xyXG4gICAgICAgICAgICB3eC5zaG93TW9kYWwoe1xyXG4gICAgICAgICAgICAgICAgY29udGVudDogJ+WIoOmZpOivpeW5v+WRij8nLFxyXG4gICAgICAgICAgICAgICAgc3VjY2VzczogKHtjb25maXJtfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKGNvbmZpcm0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYWRzID0gdGhpcy5kYXRhLmFkcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWVzdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6ICcvYXBpL2FkL3JlbW92ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7aWQ6IGFkc1tpbmRleF0uaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd3guc2hvd1RvYXN0KHt0aXRsZTogJ+WIoOmZpOaIkOWKnyd9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZHMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldERhdGEoe2Fkc30pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaChjb25zb2xlLmxvZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGFkZCgpIHtcclxuICAgICAgICAgICAgY2hvb3NlSW1hZ2UoKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKHNyYykgPT5cclxuICAgICAgICAgICAgICAgICAgICByZXF1ZXN0PG51bWJlcj4oe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6ICcvYXBpL2FkJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnUFVUJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogeyBpbWc6IHNyYywgdXJsOiAnJywgdHlwZTogQURfVFlQRS5JTkRFWCB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXI6IHsgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnIH1cclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKCh7ZGF0YTogaWR9KSA9PiB0aGlzLmRhdGEuYWRzLnB1c2goe2ltZzogc3JjLCBpZCwgdXJsOiAnJ30pKVxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4gdGhpcy5zZXREYXRhKHRoaXMuZGF0YSkpXHJcbiAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB3eC5zaG93VG9hc3Qoe3RpdGxlOiAn5re75Yqg5oiQ5YqfJ30pKVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKGNvbnNvbGUubG9nKTtcclxuICAgICAgICB9LFxyXG4gICAgfVxyXG59KTtcclxuIl19