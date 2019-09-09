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
    options.name = options.name || 'file';
    return handle('uploadFile', options);
}
exports.uploadFile = uploadFile;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImh0dHAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLHdDQUFtQztBQUVuQyxTQUFTLE1BQU0sQ0FDWCxNQUFnQyxFQUNoQyxPQUErQztJQUUvQyxJQUFNLElBQUksR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDO0lBQzFCLElBQU0sT0FBTyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUM7SUFFaEMsT0FBTyxDQUFDLEdBQUcsR0FBRyxlQUFJLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQztJQUNqQyxPQUFPLENBQUMsTUFBTSxjQUFLLE1BQU0sRUFBRSxFQUFFLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxJQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sSUFBSSxFQUFFLENBQUMsQ0FBRSxDQUFDO0lBRXBGLE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTtRQUMvQixPQUFPLENBQUMsT0FBTyxHQUFHLFVBQUMsR0FBUTtZQUN2QixJQUFJLE9BQU8sR0FBRyxDQUFDLElBQUksS0FBSyxRQUFRLEVBQUU7Z0JBQzlCLEdBQUcsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDbkM7WUFFRCxJQUFJLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDZixPQUFPLElBQUksT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ3JCO2lCQUFNO2dCQUNILElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQztnQkFDaEIsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksWUFBWSxXQUFXLElBQUksT0FBTyxHQUFHLENBQUMsSUFBSSxLQUFLLFFBQVEsQ0FBQyxFQUFFO29CQUNwRSxNQUFNLEdBQWtCLEdBQUcsQ0FBQyxJQUFLLENBQUMsR0FBRyxDQUFDO2lCQUN6QztnQkFFRCxJQUFJLE1BQU0sRUFBRTtvQkFDUixFQUFFLENBQUMsU0FBUyxDQUFDO3dCQUNULEtBQUssRUFBRSxNQUFNO3dCQUNiLElBQUksRUFBRSxNQUFNO3FCQUNmLENBQUMsQ0FBQztpQkFDTjtnQkFFRCxJQUFJLElBQUksSUFBSSxDQUFDLEVBQUUsTUFBTSxRQUFBLEVBQUUsQ0FBQyxDQUFDO2dCQUN6QixNQUFNLENBQUMsRUFBRSxNQUFNLFFBQUEsRUFBRSxDQUFDLENBQUM7YUFDdEI7UUFDTCxDQUFDLENBQUM7UUFDRixPQUFPLENBQUMsSUFBSSxHQUFHLFVBQUMsR0FBNkI7WUFDekMsSUFBSSxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNsQixNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDaEIsQ0FBQyxDQUFDO1FBRUYsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFNLE9BQU8sQ0FBQyxDQUFDO0lBQzdCLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQztBQUVELFNBQVMsUUFBUSxDQUFDLEdBQXlFO0lBQ3ZGLElBQUksSUFBSSxHQUFHLEdBQUcsQ0FBQztJQUNmLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLFlBQVksV0FBVyxJQUFJLE9BQU8sR0FBRyxDQUFDLElBQUksS0FBSyxRQUFRLENBQUMsRUFBRTtRQUNwRSxJQUFJLEdBQWtCLEdBQUcsQ0FBQyxJQUFLLENBQUMsSUFBSSxDQUFDO0tBQ3hDO0lBRUQsT0FBTyxHQUFHLENBQUMsVUFBVSxJQUFJLEdBQUcsSUFBSSxHQUFHLENBQUMsVUFBVSxHQUFHLEdBQUcsSUFBSSxJQUFJLElBQUksR0FBRyxJQUFJLElBQUksR0FBRyxHQUFHLENBQUM7QUFDdEYsQ0FBQztBQUVELFNBQWdCLE9BQU8sQ0FBSSxPQUF5QjtJQUNoRCxPQUFPLE1BQU0sQ0FBSSxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDekMsQ0FBQztBQUZELDBCQUVDO0FBRUQsU0FBZ0IsVUFBVSxDQUFJLE9BQTRCO0lBQ3RELE9BQU8sQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLElBQUksSUFBSSxNQUFNLENBQUM7SUFFdEMsT0FBTyxNQUFNLENBQUksWUFBWSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQzVDLENBQUM7QUFKRCxnQ0FJQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEhPU1QgfSBmcm9tICcuLi9jb25zdGFudCc7XHJcblxyXG5mdW5jdGlvbiBoYW5kbGU8VD4oXHJcbiAgICBtZXRob2Q6ICdyZXF1ZXN0JyB8ICd1cGxvYWRGaWxlJyxcclxuICAgIG9wdGlvbnM6IHd4LlJlcXVlc3RPcHRpb24gfCB3eC5VcGxvYWRGaWxlT3B0aW9uXHJcbik6IFByb21pc2U8UmVzcG9lbnNEYXRhPFQ+PiB7XHJcbiAgICBjb25zdCBmYWlsID0gb3B0aW9ucy5mYWlsO1xyXG4gICAgY29uc3Qgc3VjY2VzcyA9IG9wdGlvbnMuc3VjY2VzcztcclxuXHJcbiAgICBvcHRpb25zLnVybCA9IEhPU1QgKyBvcHRpb25zLnVybDtcclxuICAgIG9wdGlvbnMuaGVhZGVyID0geyBjb29raWU6IHd4LmdldFN0b3JhZ2VTeW5jKCdjb29raWUnKSwgLi4uKG9wdGlvbnMuaGVhZGVyIHx8IHt9KSB9O1xyXG5cclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgb3B0aW9ucy5zdWNjZXNzID0gKHJlczogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgcmVzLmRhdGEgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgICAgICByZXMuZGF0YSA9IEpTT04ucGFyc2UocmVzLmRhdGEpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoaXNTdWNlc3MocmVzKSkge1xyXG4gICAgICAgICAgICAgICAgc3VjY2VzcyAmJiBzdWNjZXNzKHJlcyk7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKHJlcy5kYXRhKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGxldCBlcnJNc2cgPSAnJztcclxuICAgICAgICAgICAgICAgIGlmICghKHJlcy5kYXRhIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIgfHwgdHlwZW9mIHJlcy5kYXRhID09PSAnc3RyaW5nJykpIHtcclxuICAgICAgICAgICAgICAgICAgICBlcnJNc2cgPSAoPFJlc3BvZW5zRGF0YT5yZXMuZGF0YSkubXNnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChlcnJNc2cpIHtcclxuICAgICAgICAgICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogZXJyTXNnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uOiAnbm9uZSdcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBmYWlsICYmIGZhaWwoeyBlcnJNc2cgfSk7XHJcbiAgICAgICAgICAgICAgICByZWplY3QoeyBlcnJNc2cgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIG9wdGlvbnMuZmFpbCA9IChyZXM6IHd4LkdlbmVyYWxDYWxsYmFja1Jlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICBmYWlsICYmIGZhaWwocmVzKTtcclxuICAgICAgICAgICAgcmVqZWN0KHJlcyk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgd3hbbWV0aG9kXSg8YW55Pm9wdGlvbnMpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzU3VjZXNzKHJlczogd3guUmVxdWVzdFN1Y2Nlc3NDYWxsYmFja1Jlc3VsdCB8IHd4LlVwbG9hZEZpbGVTdWNjZXNzQ2FsbGJhY2tSZXN1bHQpIHtcclxuICAgIGxldCBjb2RlID0gMjAwO1xyXG4gICAgaWYgKCEocmVzLmRhdGEgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlciB8fCB0eXBlb2YgcmVzLmRhdGEgPT09ICdzdHJpbmcnKSkge1xyXG4gICAgICAgIGNvZGUgPSAoPFJlc3BvZW5zRGF0YT5yZXMuZGF0YSkuY29kZTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcmVzLnN0YXR1c0NvZGUgPj0gMjAwICYmIHJlcy5zdGF0dXNDb2RlIDwgMzAwICYmIGNvZGUgPj0gMjAwICYmIGNvZGUgPCAzMDA7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZXF1ZXN0PFQ+KG9wdGlvbnM6IHd4LlJlcXVlc3RPcHRpb24pIHtcclxuICAgIHJldHVybiBoYW5kbGU8VD4oJ3JlcXVlc3QnLCBvcHRpb25zKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVwbG9hZEZpbGU8VD4ob3B0aW9uczogd3guVXBsb2FkRmlsZU9wdGlvbikge1xyXG4gICAgb3B0aW9ucy5uYW1lID0gb3B0aW9ucy5uYW1lIHx8ICdmaWxlJztcclxuXHJcbiAgICByZXR1cm4gaGFuZGxlPFQ+KCd1cGxvYWRGaWxlJywgb3B0aW9ucyk7XHJcbn1cclxuIl19