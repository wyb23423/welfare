"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var status_1 = require("../../../../constant/status");
var http = require("../../../../utils/http");
Page({
    id: 0,
    data: {
        auditing: [],
        join: [],
        refuse: [],
        STATUS: {
            AUDITING: status_1.SIGN_STATUS.AUDITING,
            AWAIT: status_1.SIGN_STATUS.AWAIT,
            JOINING: status_1.SIGN_STATUS.JOINING,
            REFUSE: status_1.SIGN_STATUS.REFUSE
        },
        canSign: false,
        canPaint: false,
        loading: false
    },
    onLoad: function (query) {
        var _this = this;
        var activityId = this.id = +query.id;
        var status = +query.status;
        this.setData({
            canSign: status === status_1.ACTIVITY_STATUS.PROGRESS,
            canPaint: status !== status_1.ACTIVITY_STATUS.CLOSE && status !== status_1.ACTIVITY_STATUS.AUDITING
        });
        http.request({
            url: '/api/activity/participation/auditList',
            data: { activityId: activityId }
        })
            .then(function (_a) {
            var list = _a.data;
            var auditing = [];
            var refuse = [];
            var join = [];
            list.forEach(function (v) {
                switch (v.status) {
                    case status_1.SIGN_STATUS.AUDITING:
                        auditing.push(v);
                        break;
                    case status_1.SIGN_STATUS.REFUSE:
                        refuse.push(v);
                        break;
                    case status_1.SIGN_STATUS.AWAIT:
                    case status_1.SIGN_STATUS.JOINING:
                        join.push(v);
                        break;
                    default: break;
                }
            });
            _this.setData({ refuse: refuse, auditing: auditing, join: join });
        })
            .catch(console.log);
    },
    doSign: function (_a) {
        var _this = this;
        var index = _a.currentTarget.dataset.index;
        var item = this.data.join[index];
        if (!item) {
            return;
        }
        wx.showModal({
            title: item.name,
            content: '活动签到确认',
            success: function (_a) {
                var confirm = _a.confirm;
                if (!confirm) {
                    return;
                }
                http.request({
                    url: '/api/activity/participation/signIn',
                    data: {
                        activityId: _this.id,
                        user: item.userId
                    }
                })
                    .then(function () {
                    var _a;
                    return _this.setData((_a = {},
                        _a["join[" + index + "].status"] = status_1.SIGN_STATUS.JOINING,
                        _a));
                })
                    .then(function () { return wx.showToast({ title: '签到成功' }); })
                    .catch(console.log);
            }
        });
    },
    paint: function () {
        var _this = this;
        this.setData({ loading: true });
        http.downloadFile({ url: '/api/activity/download?id=' + this.id })
            .then(function (_a) {
            var tempFilePath = _a.tempFilePath;
            return http.saveFile(tempFilePath, 'xlsx');
        })
            .catch(console.log)
            .finally(function () { return _this.setData({ loading: false }); });
    },
    doAuit: function (e) {
        var _this = this;
        var isOk = !!e.target.dataset.ok;
        var index = e.currentTarget.dataset.index;
        wx.showModal({
            title: this.data.auditing[index].name,
            content: (!isOk ? '拒绝' : '同意') + '该用户参加该活动?',
            success: function (_a) {
                var confirm = _a.confirm;
                return confirm && _this._doAuit(isOk, index);
            }
        });
    },
    _doAuit: function (isOk, index) {
        var _this = this;
        var _a = this.data, auditing = _a.auditing, refuse = _a.refuse, join = _a.join;
        http.request({
            url: '/api/activity/participation/audit',
            data: {
                flag: isOk,
                activityId: this.id,
                userId: auditing[index].userId
            }
        })
            .then(function () {
            wx.showToast({ title: '操作成功' });
            var item = auditing.splice(index, 1)[0];
            item.status = isOk ? status_1.SIGN_STATUS.AWAIT : status_1.SIGN_STATUS.REFUSE;
            (isOk ? join : refuse).push(item);
            _this.setData({ auditing: auditing, join: join, refuse: refuse });
        })
            .catch(console.log);
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNpZ24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzREFBMkU7QUFDM0UsNkNBQStDO0FBVS9DLElBQUksQ0FBQztJQUNELEVBQUUsRUFBRSxDQUFDO0lBQ0wsSUFBSSxFQUFFO1FBQ0YsUUFBUSxFQUFZLEVBQUU7UUFDdEIsSUFBSSxFQUFZLEVBQUU7UUFDbEIsTUFBTSxFQUFZLEVBQUU7UUFDcEIsTUFBTSxFQUFFO1lBQ0osUUFBUSxFQUFFLG9CQUFXLENBQUMsUUFBUTtZQUM5QixLQUFLLEVBQUUsb0JBQVcsQ0FBQyxLQUFLO1lBQ3hCLE9BQU8sRUFBRSxvQkFBVyxDQUFDLE9BQU87WUFDNUIsTUFBTSxFQUFFLG9CQUFXLENBQUMsTUFBTTtTQUM3QjtRQUNELE9BQU8sRUFBRSxLQUFLO1FBQ2QsUUFBUSxFQUFFLEtBQUs7UUFDZixPQUFPLEVBQUUsS0FBSztLQUNqQjtJQUNELE1BQU0sWUFBQyxLQUFtQztRQUExQyxpQkFvQ0M7UUFuQ0csSUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUM7UUFFdkMsSUFBTSxNQUFNLEdBQUcsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDO1FBQzdCLElBQUksQ0FBQyxPQUFRLENBQUM7WUFDVixPQUFPLEVBQUUsTUFBTSxLQUFLLHdCQUFlLENBQUMsUUFBUTtZQUM1QyxRQUFRLEVBQUUsTUFBTSxLQUFLLHdCQUFlLENBQUMsS0FBSyxJQUFJLE1BQU0sS0FBSyx3QkFBZSxDQUFDLFFBQVE7U0FDcEYsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLE9BQU8sQ0FBVztZQUNuQixHQUFHLEVBQUUsdUNBQXVDO1lBQzVDLElBQUksRUFBRSxFQUFFLFVBQVUsWUFBQSxFQUFFO1NBQ3ZCLENBQUM7YUFDRyxJQUFJLENBQUMsVUFBQyxFQUFZO2dCQUFYLGNBQVU7WUFDZCxJQUFNLFFBQVEsR0FBYSxF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TSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsb0JBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLG9CQUFXLENBQUMsTUFBTSxDQUFDO1lBQzVELENBQUMsSUFBSSxDQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNuQyxLQUFJLENBQUMsT0FBUSxDQUFDLEVBQUMsUUFBUSxVQUFBLEVBQUUsSUFBSSxNQUFBLEVBQUUsTUFBTSxRQUFBLEVBQUMsQ0FBQyxDQUFDO1FBQzVDLENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDeEIsQ0FBQztDQUNKLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNJR05fU1RBVFVTLCBBQ1RJVklUWV9TVEFUVVMgfSBmcm9tICcuLi8uLi8uLi8uLi9jb25zdGFudC9zdGF0dXMnO1xyXG5pbXBvcnQgKiBhcyBodHRwIGZyb20gJy4uLy4uLy4uLy4uL3V0aWxzL2h0dHAnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBFbkluZm8ge1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgcGhvbmU6IHN0cmluZztcclxuICAgIHVzZXJJZDogc3RyaW5nO1xyXG4gICAgbWFpbDogc3RyaW5nO1xyXG4gICAgc3RhdHVzOiBTSUdOX1NUQVRVUztcclxufVxyXG5cclxuUGFnZSh7XHJcbiAgICBpZDogMCxcclxuICAgIGRhdGE6IHtcclxuICAgICAgICBhdWRpdGluZzogPEVuSW5mb1tdPltdLCAvLyDlvoXlrqHmoLhcclxuICAgICAgICBqb2luOiA8RW5JbmZvW10+W10sIC8vIOWPguWKoOiAheWIl+ihqFxyXG4gICAgICAgIHJlZnVzZTogPEVuSW5mb1tdPltdLCAvLyDlt7Lmi5Lnu51cclxuICAgICAgICBTVEFUVVM6IHtcclxuICAgICAgICAgICAgQVVESVRJTkc6IFNJR05fU1RBVFVTLkFVRElUSU5HLFxyXG4gICAgICAgICAgICBBV0FJVDogU0lHTl9TVEFUVVMuQVdBSVQsXHJcbiAgICAgICAgICAgIEpPSU5JTkc6IFNJR05fU1RBVFVTLkpPSU5JTkcsXHJcbiAgICAgICAgICAgIFJFRlVTRTogU0lHTl9TVEFUVVMuUkVGVVNFXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjYW5TaWduOiBmYWxzZSxcclxuICAgICAgICBjYW5QYWludDogZmFsc2UsXHJcbiAgICAgICAgbG9hZGluZzogZmFsc2VcclxuICAgIH0sXHJcbiAgICBvbkxvYWQocXVlcnk6IHtpZDogc3RyaW5nLCBzdGF0dXM6IHN0cmluZ30pIHtcclxuICAgICAgICBjb25zdCBhY3Rpdml0eUlkID0gdGhpcy5pZCA9ICtxdWVyeS5pZDtcclxuXHJcbiAgICAgICAgY29uc3Qgc3RhdHVzID0gK3F1ZXJ5LnN0YXR1cztcclxuICAgICAgICB0aGlzLnNldERhdGEhKHtcclxuICAgICAgICAgICAgY2FuU2lnbjogc3RhdHVzID09PSBBQ1RJVklUWV9TVEFUVVMuUFJPR1JFU1MsXHJcbiAgICAgICAgICAgIGNhblBhaW50OiBzdGF0dXMgIT09IEFDVElWSVRZX1NUQVRVUy5DTE9TRSAmJiBzdGF0dXMgIT09IEFDVElWSVRZX1NUQVRVUy5BVURJVElOR1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGh0dHAucmVxdWVzdDxFbkluZm9bXT4oe1xyXG4gICAgICAgICAgICB1cmw6ICcvYXBpL2FjdGl2aXR5L3BhcnRpY2lwYXRpb24vYXVkaXRMaXN0JyxcclxuICAgICAgICAgICAgZGF0YTogeyBhY3Rpdml0eUlkIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbigoe2RhdGE6IGxpc3R9KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBhdWRpdGluZzogRW5JbmZvW10gPSBbXTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlZnVzZTogRW5JbmZvW10gPSBbXTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGpvaW46IEVuSW5mb1tdID0gW107XHJcblxyXG4gICAgICAgICAgICAgICAgbGlzdC5mb3JFYWNoKHYgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCh2LnN0YXR1cykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFNJR05fU1RBVFVTLkFVRElUSU5HOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXVkaXRpbmcucHVzaCh2KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFNJR05fU1RBVFVTLlJFRlVTRTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZnVzZS5wdXNoKHYpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgU0lHTl9TVEFUVVMuQVdBSVQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgU0lHTl9TVEFUVVMuSk9JTklORzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGpvaW4ucHVzaCh2KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OiBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldERhdGEhKHtyZWZ1c2UsIGF1ZGl0aW5nLCBqb2lufSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChjb25zb2xlLmxvZyk7XHJcbiAgICB9LFxyXG4gICAgLy8g562+5YiwXHJcbiAgICBkb1NpZ24oe2N1cnJlbnRUYXJnZXQ6IHtkYXRhc2V0OiB7aW5kZXh9fX06IEJhc2VFdmVudDx7aW5kZXg6IG51bWJlcn0+KSB7XHJcbiAgICAgICAgY29uc3QgaXRlbSA9IHRoaXMuZGF0YS5qb2luW2luZGV4XTtcclxuICAgICAgICBpZighaXRlbSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB3eC5zaG93TW9kYWwoe1xyXG4gICAgICAgICAgICB0aXRsZTogaXRlbS5uYW1lLFxyXG4gICAgICAgICAgICBjb250ZW50OiAn5rS75Yqo562+5Yiw56Gu6K6kJyxcclxuICAgICAgICAgICAgc3VjY2VzczogKHtjb25maXJtfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYoIWNvbmZpcm0pIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaHR0cC5yZXF1ZXN0KHtcclxuICAgICAgICAgICAgICAgICAgICB1cmw6ICcvYXBpL2FjdGl2aXR5L3BhcnRpY2lwYXRpb24vc2lnbkluJyxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2aXR5SWQ6IHRoaXMuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXI6IGl0ZW0udXNlcklkXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHRoaXMuc2V0RGF0YSEoe1xyXG4gICAgICAgICAgICAgICAgICAgIFtgam9pblske2luZGV4fV0uc3RhdHVzYF06IFNJR05fU1RBVFVTLkpPSU5JTkdcclxuICAgICAgICAgICAgICAgIH0pKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4gd3guc2hvd1RvYXN0KHt0aXRsZTogJ+etvuWIsOaIkOWKnyd9KSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaChjb25zb2xlLmxvZyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBwYWludCgpIHtcclxuICAgICAgICB0aGlzLnNldERhdGEhKHtsb2FkaW5nOiB0cnVlfSk7XHJcbiAgICAgICAgaHR0cC5kb3dubG9hZEZpbGUoe3VybDogJy9hcGkvYWN0aXZpdHkvZG93bmxvYWQ/aWQ9JyArIHRoaXMuaWR9KVxyXG4gICAgICAgICAgICAudGhlbigoe3RlbXBGaWxlUGF0aH0pID0+IGh0dHAuc2F2ZUZpbGUodGVtcEZpbGVQYXRoLCAneGxzeCcpKVxyXG4gICAgICAgICAgICAuY2F0Y2goY29uc29sZS5sb2cpXHJcbiAgICAgICAgICAgIC5maW5hbGx5KCgpID0+IHRoaXMuc2V0RGF0YSEoe2xvYWRpbmc6IGZhbHNlfSkpO1xyXG4gICAgfSxcclxuICAgIC8vIOaKpeWQjeWuoeaguFxyXG4gICAgZG9BdWl0KGU6IEJhc2VFdmVudDx7b2s/OiBzdHJpbmd9LCB7aW5kZXg6IG51bWJlcn0+KSB7XHJcbiAgICAgICAgY29uc3QgaXNPayA9ICEhZS50YXJnZXQuZGF0YXNldC5vaztcclxuICAgICAgICBjb25zdCBpbmRleCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmluZGV4O1xyXG5cclxuICAgICAgICB3eC5zaG93TW9kYWwoe1xyXG4gICAgICAgICAgICB0aXRsZTogdGhpcy5kYXRhLmF1ZGl0aW5nW2luZGV4XS5uYW1lLFxyXG4gICAgICAgICAgICBjb250ZW50OiAoIWlzT2sgPyAn5ouS57udJyA6ICflkIzmhI8nKSArICfor6XnlKjmiLflj4LliqDor6XmtLvliqg/JyxcclxuICAgICAgICAgICAgc3VjY2VzczogKHtjb25maXJtfSkgPT4gY29uZmlybSAmJiB0aGlzLl9kb0F1aXQoaXNPaywgaW5kZXgpXHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgX2RvQXVpdChpc09rOiBib29sZWFuLCBpbmRleDogbnVtYmVyKSB7XHJcbiAgICAgICAgY29uc3Qge2F1ZGl0aW5nLCByZWZ1c2UsIGpvaW59ID0gdGhpcy5kYXRhO1xyXG5cclxuICAgICAgICBodHRwLnJlcXVlc3Qoe1xyXG4gICAgICAgICAgICB1cmw6ICcvYXBpL2FjdGl2aXR5L3BhcnRpY2lwYXRpb24vYXVkaXQnLFxyXG4gICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICBmbGFnOiBpc09rLFxyXG4gICAgICAgICAgICAgICAgYWN0aXZpdHlJZDogdGhpcy5pZCxcclxuICAgICAgICAgICAgICAgIHVzZXJJZDogYXVkaXRpbmdbaW5kZXhdLnVzZXJJZFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7dGl0bGU6ICfmk43kvZzmiJDlip8nIH0pO1xyXG4gICAgICAgICAgICBjb25zdCBpdGVtID0gYXVkaXRpbmcuc3BsaWNlKGluZGV4LCAxKVswXTtcclxuICAgICAgICAgICAgaXRlbS5zdGF0dXMgPSBpc09rID8gU0lHTl9TVEFUVVMuQVdBSVQgOiBTSUdOX1NUQVRVUy5SRUZVU0U7XHJcbiAgICAgICAgICAgIChpc09rICA/IGpvaW4gOiByZWZ1c2UpLnB1c2goaXRlbSk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0RGF0YSEoe2F1ZGl0aW5nLCBqb2luLCByZWZ1c2V9KTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChjb25zb2xlLmxvZyk7XHJcbiAgICB9XHJcbn0pO1xyXG4iXX0=