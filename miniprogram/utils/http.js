"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var constant_1 = require("../constant");
var store_1 = require("../constant/store");
function handle(method, options) {
    var fail = options.fail;
    var success = options.success;
    options.url = constant_1.HOST + options.url;
    options.header = __assign({ cookie: wx.getStorageSync(store_1.COOKIE) }, (options.header || {}));
    return new Promise(function (resolve, reject) {
        options.success = function (res) {
            if (typeof res.data === 'string') {
                res.data = JSON.parse(res.data);
            }
            if (isSucess(res)) {
                success && success(res);
                resolve(res.data);
            }
            else {
                var errMsg = '';
                if (!(res.data instanceof ArrayBuffer || typeof res.data === 'string')) {
                    errMsg = res.data.msg;
                }
                if (errMsg) {
                    wx.showToast({
                        title: errMsg,
                        icon: 'none'
                    });
                }
                fail && fail({ errMsg: errMsg });
                reject({ errMsg: errMsg });
            }
        };
        options.fail = function (res) {
            fail && fail(res);
            reject(res);
        };
        wx[method](options);
    });
}
function isSucess(res) {
    var code = 200;
    if (!(res.data instanceof ArrayBuffer || typeof res.data === 'string')) {
        code = res.data.code;
    }
    return res.statusCode >= 200 && res.statusCode < 300 && code >= 200 && code < 300;
}
function request(options) {
    return handle('request', options);
}
exports.request = request;
function uploadFile(options) {
    options.name = options.name || 'file';
    return handle('uploadFile', options);
}
exports.uploadFile = uploadFile;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImh0dHAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLHdDQUFtQztBQUNuQywyQ0FBMkM7QUFFM0MsU0FBUyxNQUFNLENBQ1gsTUFBZ0MsRUFDaEMsT0FBK0M7SUFFL0MsSUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQztJQUMxQixJQUFNLE9BQU8sR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDO0lBRWhDLE9BQU8sQ0FBQyxHQUFHLEdBQUcsZUFBSSxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUM7SUFDakMsT0FBTyxDQUFDLE1BQU0sY0FBSyxNQUFNLEVBQUUsRUFBRSxDQUFDLGNBQWMsQ0FBQyxjQUFNLENBQUMsSUFBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLElBQUksRUFBRSxDQUFDLENBQUUsQ0FBQztJQUVsRixPQUFPLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07UUFDL0IsT0FBTyxDQUFDLE9BQU8sR0FBRyxVQUFDLEdBQVE7WUFDdkIsSUFBSSxPQUFPLEdBQUcsQ0FBQyxJQUFJLEtBQUssUUFBUSxFQUFFO2dCQUM5QixHQUFHLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ25DO1lBRUQsSUFBSSxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQ2YsT0FBTyxJQUFJLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDeEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUNyQjtpQkFBTTtnQkFDSCxJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUM7Z0JBQ2hCLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLFlBQVksV0FBVyxJQUFJLE9BQU8sR0FBRyxDQUFDLElBQUksS0FBSyxRQUFRLENBQUMsRUFBRTtvQkFDcEUsTUFBTSxHQUFrQixHQUFHLENBQUMsSUFBSyxDQUFDLEdBQUcsQ0FBQztpQkFDekM7Z0JBRUQsSUFBSSxNQUFNLEVBQUU7b0JBQ1IsRUFBRSxDQUFDLFNBQVMsQ0FBQzt3QkFDVCxLQUFLLEVBQUUsTUFBTTt3QkFDYixJQUFJLEVBQUUsTUFBTTtxQkFDZixDQUFDLENBQUM7aUJBQ047Z0JBRUQsSUFBSSxJQUFJLElBQUksQ0FBQyxFQUFFLE1BQU0sUUFBQSxFQUFFLENBQUMsQ0FBQztnQkFDekIsTUFBTSxDQUFDLEVBQUUsTUFBTSxRQUFBLEVBQUUsQ0FBQyxDQUFDO2FBQ3RCO1FBQ0wsQ0FBQyxDQUFDO1FBQ0YsT0FBTyxDQUFDLElBQUksR0FBRyxVQUFDLEdBQTZCO1lBQ3pDLElBQUksSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDbEIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2hCLENBQUMsQ0FBQztRQUVGLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBTSxPQUFPLENBQUMsQ0FBQztJQUM3QixDQUFDLENBQUMsQ0FBQztBQUNQLENBQUM7QUFFRCxTQUFTLFFBQVEsQ0FBQyxHQUF5RTtJQUN2RixJQUFJLElBQUksR0FBRyxHQUFHLENBQUM7SUFDZixJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxZQUFZLFdBQVcsSUFBSSxPQUFPLEdBQUcsQ0FBQyxJQUFJLEtBQUssUUFBUSxDQUFDLEVBQUU7UUFDcEUsSUFBSSxHQUFrQixHQUFHLENBQUMsSUFBSyxDQUFDLElBQUksQ0FBQztLQUN4QztJQUVELE9BQU8sR0FBRyxDQUFDLFVBQVUsSUFBSSxHQUFHLElBQUksR0FBRyxDQUFDLFVBQVUsR0FBRyxHQUFHLElBQUksSUFBSSxJQUFJLEdBQUcsSUFBSSxJQUFJLEdBQUcsR0FBRyxDQUFDO0FBQ3RGLENBQUM7QUFFRCxTQUFnQixPQUFPLENBQUksT0FBeUI7SUFDaEQsT0FBTyxNQUFNLENBQUksU0FBUyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQ3pDLENBQUM7QUFGRCwwQkFFQztBQUVELFNBQWdCLFVBQVUsQ0FBSSxPQUE0QjtJQUN0RCxPQUFPLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQyxJQUFJLElBQUksTUFBTSxDQUFDO0lBRXRDLE9BQU8sTUFBTSxDQUFJLFlBQVksRUFBRSxPQUFPLENBQUMsQ0FBQztBQUM1QyxDQUFDO0FBSkQsZ0NBSUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIT1NUIH0gZnJvbSAnLi4vY29uc3RhbnQnO1xyXG5pbXBvcnQgeyBDT09LSUUgfSBmcm9tICcuLi9jb25zdGFudC9zdG9yZSc7XHJcblxyXG5mdW5jdGlvbiBoYW5kbGU8VD4oXHJcbiAgICBtZXRob2Q6ICdyZXF1ZXN0JyB8ICd1cGxvYWRGaWxlJyxcclxuICAgIG9wdGlvbnM6IHd4LlJlcXVlc3RPcHRpb24gfCB3eC5VcGxvYWRGaWxlT3B0aW9uXHJcbik6IFByb21pc2U8UmVzcG9lbnNEYXRhPFQ+PiB7XHJcbiAgICBjb25zdCBmYWlsID0gb3B0aW9ucy5mYWlsO1xyXG4gICAgY29uc3Qgc3VjY2VzcyA9IG9wdGlvbnMuc3VjY2VzcztcclxuXHJcbiAgICBvcHRpb25zLnVybCA9IEhPU1QgKyBvcHRpb25zLnVybDtcclxuICAgIG9wdGlvbnMuaGVhZGVyID0geyBjb29raWU6IHd4LmdldFN0b3JhZ2VTeW5jKENPT0tJRSksIC4uLihvcHRpb25zLmhlYWRlciB8fCB7fSkgfTtcclxuXHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgIG9wdGlvbnMuc3VjY2VzcyA9IChyZXM6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHJlcy5kYXRhID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgICAgICAgcmVzLmRhdGEgPSBKU09OLnBhcnNlKHJlcy5kYXRhKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGlzU3VjZXNzKHJlcykpIHtcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3MgJiYgc3VjY2VzcyhyZXMpO1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZShyZXMuZGF0YSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZXJyTXNnID0gJyc7XHJcbiAgICAgICAgICAgICAgICBpZiAoIShyZXMuZGF0YSBpbnN0YW5jZW9mIEFycmF5QnVmZmVyIHx8IHR5cGVvZiByZXMuZGF0YSA9PT0gJ3N0cmluZycpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZXJyTXNnID0gKDxSZXNwb2Vuc0RhdGE+cmVzLmRhdGEpLm1zZztcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoZXJyTXNnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IGVyck1zZyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogJ25vbmUnXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgZmFpbCAmJiBmYWlsKHsgZXJyTXNnIH0pO1xyXG4gICAgICAgICAgICAgICAgcmVqZWN0KHsgZXJyTXNnIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBvcHRpb25zLmZhaWwgPSAocmVzOiB3eC5HZW5lcmFsQ2FsbGJhY2tSZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgZmFpbCAmJiBmYWlsKHJlcyk7XHJcbiAgICAgICAgICAgIHJlamVjdChyZXMpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHd4W21ldGhvZF0oPGFueT5vcHRpb25zKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc1N1Y2VzcyhyZXM6IHd4LlJlcXVlc3RTdWNjZXNzQ2FsbGJhY2tSZXN1bHQgfCB3eC5VcGxvYWRGaWxlU3VjY2Vzc0NhbGxiYWNrUmVzdWx0KSB7XHJcbiAgICBsZXQgY29kZSA9IDIwMDtcclxuICAgIGlmICghKHJlcy5kYXRhIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIgfHwgdHlwZW9mIHJlcy5kYXRhID09PSAnc3RyaW5nJykpIHtcclxuICAgICAgICBjb2RlID0gKDxSZXNwb2Vuc0RhdGE+cmVzLmRhdGEpLmNvZGU7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXNDb2RlID49IDIwMCAmJiByZXMuc3RhdHVzQ29kZSA8IDMwMCAmJiBjb2RlID49IDIwMCAmJiBjb2RlIDwgMzAwO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVxdWVzdDxUPihvcHRpb25zOiB3eC5SZXF1ZXN0T3B0aW9uKSB7XHJcbiAgICByZXR1cm4gaGFuZGxlPFQ+KCdyZXF1ZXN0Jywgb3B0aW9ucyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1cGxvYWRGaWxlPFQ+KG9wdGlvbnM6IHd4LlVwbG9hZEZpbGVPcHRpb24pIHtcclxuICAgIG9wdGlvbnMubmFtZSA9IG9wdGlvbnMubmFtZSB8fCAnZmlsZSc7XHJcblxyXG4gICAgcmV0dXJuIGhhbmRsZTxUPigndXBsb2FkRmlsZScsIG9wdGlvbnMpO1xyXG59XHJcbiJdfQ==