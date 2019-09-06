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
function handle(method, options) {
    var fail = options.fail;
    var success = options.success;
    options.url = constant_1.HOST + options.url;
    options.header = __assign({ cookie: wx.getStorageSync('cookie') }, (options.header || {}));
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
    return handle('uploadFile', options);
}
exports.uploadFile = uploadFile;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImh0dHAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLHdDQUFtQztBQUVuQyxTQUFTLE1BQU0sQ0FDWCxNQUFnQyxFQUNoQyxPQUErQztJQUUvQyxJQUFNLElBQUksR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDO0lBQzFCLElBQU0sT0FBTyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUM7SUFFaEMsT0FBTyxDQUFDLEdBQUcsR0FBRyxlQUFJLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQztJQUNqQyxPQUFPLENBQUMsTUFBTSxjQUFLLE1BQU0sRUFBRSxFQUFFLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxJQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sSUFBSSxFQUFFLENBQUMsQ0FBRSxDQUFDO0lBRXBGLE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTtRQUMvQixPQUFPLENBQUMsT0FBTyxHQUFHLFVBQUMsR0FBUTtZQUN2QixJQUFJLE9BQU8sR0FBRyxDQUFDLElBQUksS0FBSyxRQUFRLEVBQUU7Z0JBQzlCLEdBQUcsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDbkM7WUFFRCxJQUFJLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDZixPQUFPLElBQUksT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ3JCO2lCQUFNO2dCQUNILElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQztnQkFDaEIsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksWUFBWSxXQUFXLElBQUksT0FBTyxHQUFHLENBQUMsSUFBSSxLQUFLLFFBQVEsQ0FBQyxFQUFFO29CQUNwRSxNQUFNLEdBQWtCLEdBQUcsQ0FBQyxJQUFLLENBQUMsR0FBRyxDQUFDO2lCQUN6QztnQkFFRCxJQUFJLE1BQU0sRUFBRTtvQkFDUixFQUFFLENBQUMsU0FBUyxDQUFDO3dCQUNULEtBQUssRUFBRSxNQUFNO3dCQUNiLElBQUksRUFBRSxNQUFNO3FCQUNmLENBQUMsQ0FBQztpQkFDTjtnQkFFRCxJQUFJLElBQUksSUFBSSxDQUFDLEVBQUUsTUFBTSxRQUFBLEVBQUUsQ0FBQyxDQUFDO2dCQUN6QixNQUFNLENBQUMsRUFBRSxNQUFNLFFBQUEsRUFBRSxDQUFDLENBQUM7YUFDdEI7UUFDTCxDQUFDLENBQUM7UUFDRixPQUFPLENBQUMsSUFBSSxHQUFHLFVBQUMsR0FBNkI7WUFDekMsSUFBSSxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNsQixNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDaEIsQ0FBQyxDQUFDO1FBRUYsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFNLE9BQU8sQ0FBQyxDQUFDO0lBQzdCLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQztBQUVELFNBQVMsUUFBUSxDQUFDLEdBQXlFO0lBQ3ZGLElBQUksSUFBSSxHQUFHLEdBQUcsQ0FBQztJQUNmLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLFlBQVksV0FBVyxJQUFJLE9BQU8sR0FBRyxDQUFDLElBQUksS0FBSyxRQUFRLENBQUMsRUFBRTtRQUNwRSxJQUFJLEdBQWtCLEdBQUcsQ0FBQyxJQUFLLENBQUMsSUFBSSxDQUFDO0tBQ3hDO0lBRUQsT0FBTyxHQUFHLENBQUMsVUFBVSxJQUFJLEdBQUcsSUFBSSxHQUFHLENBQUMsVUFBVSxHQUFHLEdBQUcsSUFBSSxJQUFJLElBQUksR0FBRyxJQUFJLElBQUksR0FBRyxHQUFHLENBQUM7QUFDdEYsQ0FBQztBQUVELFNBQWdCLE9BQU8sQ0FBSSxPQUF5QjtJQUNoRCxPQUFPLE1BQU0sQ0FBSSxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDekMsQ0FBQztBQUZELDBCQUVDO0FBRUQsU0FBZ0IsVUFBVSxDQUFJLE9BQTRCO0lBQ3RELE9BQU8sTUFBTSxDQUFJLFlBQVksRUFBRSxPQUFPLENBQUMsQ0FBQztBQUM1QyxDQUFDO0FBRkQsZ0NBRUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIT1NUIH0gZnJvbSAnLi4vY29uc3RhbnQnO1xyXG5cclxuZnVuY3Rpb24gaGFuZGxlPFQ+KFxyXG4gICAgbWV0aG9kOiAncmVxdWVzdCcgfCAndXBsb2FkRmlsZScsXHJcbiAgICBvcHRpb25zOiB3eC5SZXF1ZXN0T3B0aW9uIHwgd3guVXBsb2FkRmlsZU9wdGlvblxyXG4pOiBQcm9taXNlPFJlc3BvZW5zRGF0YTxUPj4ge1xyXG4gICAgY29uc3QgZmFpbCA9IG9wdGlvbnMuZmFpbDtcclxuICAgIGNvbnN0IHN1Y2Nlc3MgPSBvcHRpb25zLnN1Y2Nlc3M7XHJcblxyXG4gICAgb3B0aW9ucy51cmwgPSBIT1NUICsgb3B0aW9ucy51cmw7XHJcbiAgICBvcHRpb25zLmhlYWRlciA9IHsgY29va2llOiB3eC5nZXRTdG9yYWdlU3luYygnY29va2llJyksIC4uLihvcHRpb25zLmhlYWRlciB8fCB7fSkgfTtcclxuXHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgIG9wdGlvbnMuc3VjY2VzcyA9IChyZXM6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHJlcy5kYXRhID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgICAgICAgcmVzLmRhdGEgPSBKU09OLnBhcnNlKHJlcy5kYXRhKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGlzU3VjZXNzKHJlcykpIHtcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3MgJiYgc3VjY2VzcyhyZXMpO1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZShyZXMuZGF0YSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZXJyTXNnID0gJyc7XHJcbiAgICAgICAgICAgICAgICBpZiAoIShyZXMuZGF0YSBpbnN0YW5jZW9mIEFycmF5QnVmZmVyIHx8IHR5cGVvZiByZXMuZGF0YSA9PT0gJ3N0cmluZycpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZXJyTXNnID0gKDxSZXNwb2Vuc0RhdGE+cmVzLmRhdGEpLm1zZztcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoZXJyTXNnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IGVyck1zZyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogJ25vbmUnXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgZmFpbCAmJiBmYWlsKHsgZXJyTXNnIH0pO1xyXG4gICAgICAgICAgICAgICAgcmVqZWN0KHsgZXJyTXNnIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBvcHRpb25zLmZhaWwgPSAocmVzOiB3eC5HZW5lcmFsQ2FsbGJhY2tSZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgZmFpbCAmJiBmYWlsKHJlcyk7XHJcbiAgICAgICAgICAgIHJlamVjdChyZXMpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHd4W21ldGhvZF0oPGFueT5vcHRpb25zKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc1N1Y2VzcyhyZXM6IHd4LlJlcXVlc3RTdWNjZXNzQ2FsbGJhY2tSZXN1bHQgfCB3eC5VcGxvYWRGaWxlU3VjY2Vzc0NhbGxiYWNrUmVzdWx0KSB7XHJcbiAgICBsZXQgY29kZSA9IDIwMDtcclxuICAgIGlmICghKHJlcy5kYXRhIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIgfHwgdHlwZW9mIHJlcy5kYXRhID09PSAnc3RyaW5nJykpIHtcclxuICAgICAgICBjb2RlID0gKDxSZXNwb2Vuc0RhdGE+cmVzLmRhdGEpLmNvZGU7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXNDb2RlID49IDIwMCAmJiByZXMuc3RhdHVzQ29kZSA8IDMwMCAmJiBjb2RlID49IDIwMCAmJiBjb2RlIDwgMzAwO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVxdWVzdDxUPihvcHRpb25zOiB3eC5SZXF1ZXN0T3B0aW9uKSB7XHJcbiAgICByZXR1cm4gaGFuZGxlPFQ+KCdyZXF1ZXN0Jywgb3B0aW9ucyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1cGxvYWRGaWxlPFQ+KG9wdGlvbnM6IHd4LlVwbG9hZEZpbGVPcHRpb24pIHtcclxuICAgIHJldHVybiBoYW5kbGU8VD4oJ3VwbG9hZEZpbGUnLCBvcHRpb25zKTtcclxufVxyXG4iXX0=