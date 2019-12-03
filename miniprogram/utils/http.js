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
var index_1 = require("../constant/index");
var store_1 = require("../constant/store");
function handle(method, options) {
    var fail = options.fail;
    var success = options.success;
    options.url = index_1.HOST + options.url;
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
                if (errMsg && !options.notShowMsg) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImh0dHAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLDJDQUF5QztBQUN6QywyQ0FBMkM7QUFFM0MsU0FBUyxNQUFNLENBQ1gsTUFBZ0MsRUFDaEMsT0FBMEU7SUFFMUUsSUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQztJQUMxQixJQUFNLE9BQU8sR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDO0lBRWhDLE9BQU8sQ0FBQyxHQUFHLEdBQUcsWUFBSSxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUM7SUFDakMsT0FBTyxDQUFDLE1BQU0sY0FBSyxNQUFNLEVBQUUsRUFBRSxDQUFDLGNBQWMsQ0FBQyxjQUFNLENBQUMsSUFBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLElBQUksRUFBRSxDQUFDLENBQUUsQ0FBQztJQUVsRixPQUFPLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07UUFDL0IsT0FBTyxDQUFDLE9BQU8sR0FBRyxVQUFDLEdBQVE7WUFDdkIsSUFBSSxPQUFPLEdBQUcsQ0FBQyxJQUFJLEtBQUssUUFBUSxFQUFFO2dCQUM5QixHQUFHLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ25DO1lBRUQsSUFBSSxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQ2YsT0FBTyxJQUFJLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDeEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUNyQjtpQkFBTTtnQkFDSCxJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUM7Z0JBQ2hCLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLFlBQVksV0FBVyxJQUFJLE9BQU8sR0FBRyxDQUFDLElBQUksS0FBSyxRQUFRLENBQUMsRUFBRTtvQkFDcEUsTUFBTSxHQUFrQixHQUFHLENBQUMsSUFBSyxDQUFDLEdBQUcsQ0FBQztpQkFDekM7Z0JBRUQsSUFBSSxNQUFNLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFO29CQUMvQixFQUFFLENBQUMsU0FBUyxDQUFDO3dCQUNULEtBQUssRUFBRSxNQUFNO3dCQUNiLElBQUksRUFBRSxNQUFNO3FCQUNmLENBQUMsQ0FBQztpQkFDTjtnQkFFRCxJQUFJLElBQUksSUFBSSxDQUFDLEVBQUUsTUFBTSxRQUFBLEVBQUUsQ0FBQyxDQUFDO2dCQUN6QixNQUFNLENBQUMsRUFBRSxNQUFNLFFBQUEsRUFBRSxDQUFDLENBQUM7YUFDdEI7UUFDTCxDQUFDLENBQUM7UUFDRixPQUFPLENBQUMsSUFBSSxHQUFHLFVBQUMsR0FBNkI7WUFDekMsSUFBSSxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNsQixNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDaEIsQ0FBQyxDQUFDO1FBRUYsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFNLE9BQU8sQ0FBQyxDQUFDO0lBQzdCLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQztBQUVELFNBQVMsUUFBUSxDQUFDLEdBQXlFO0lBQ3ZGLElBQUksSUFBSSxHQUFHLEdBQUcsQ0FBQztJQUNmLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLFlBQVksV0FBVyxJQUFJLE9BQU8sR0FBRyxDQUFDLElBQUksS0FBSyxRQUFRLENBQUMsRUFBRTtRQUNwRSxJQUFJLEdBQWtCLEdBQUcsQ0FBQyxJQUFLLENBQUMsSUFBSSxDQUFDO0tBQ3hDO0lBRUQsT0FBTyxHQUFHLENBQUMsVUFBVSxJQUFJLEdBQUcsSUFBSSxHQUFHLENBQUMsVUFBVSxHQUFHLEdBQUcsSUFBSSxJQUFJLElBQUksR0FBRyxJQUFJLElBQUksR0FBRyxHQUFHLENBQUM7QUFDdEYsQ0FBQztBQUVELFNBQWdCLE9BQU8sQ0FBSSxPQUFrRDtJQUN6RSxPQUFPLE1BQU0sQ0FBSSxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDekMsQ0FBQztBQUZELDBCQUVDO0FBRUQsU0FBZ0IsVUFBVSxDQUFJLE9BQXFEO0lBQy9FLE9BQU8sQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLElBQUksSUFBSSxNQUFNLENBQUM7SUFFdEMsT0FBTyxNQUFNLENBQUksWUFBWSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQzVDLENBQUM7QUFKRCxnQ0FJQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEhPU1QgfSBmcm9tICcuLi9jb25zdGFudC9pbmRleCc7XHJcbmltcG9ydCB7IENPT0tJRSB9IGZyb20gJy4uL2NvbnN0YW50L3N0b3JlJztcclxuXHJcbmZ1bmN0aW9uIGhhbmRsZTxUPihcclxuICAgIG1ldGhvZDogJ3JlcXVlc3QnIHwgJ3VwbG9hZEZpbGUnLFxyXG4gICAgb3B0aW9uczogKHd4LlJlcXVlc3RPcHRpb24gfCB3eC5VcGxvYWRGaWxlT3B0aW9uKSAmIHtub3RTaG93TXNnPzogYm9vbGVhbn1cclxuKTogUHJvbWlzZTxSZXNwb2Vuc0RhdGE8VD4+IHtcclxuICAgIGNvbnN0IGZhaWwgPSBvcHRpb25zLmZhaWw7XHJcbiAgICBjb25zdCBzdWNjZXNzID0gb3B0aW9ucy5zdWNjZXNzO1xyXG5cclxuICAgIG9wdGlvbnMudXJsID0gSE9TVCArIG9wdGlvbnMudXJsO1xyXG4gICAgb3B0aW9ucy5oZWFkZXIgPSB7IGNvb2tpZTogd3guZ2V0U3RvcmFnZVN5bmMoQ09PS0lFKSwgLi4uKG9wdGlvbnMuaGVhZGVyIHx8IHt9KSB9O1xyXG5cclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgb3B0aW9ucy5zdWNjZXNzID0gKHJlczogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgcmVzLmRhdGEgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgICAgICByZXMuZGF0YSA9IEpTT04ucGFyc2UocmVzLmRhdGEpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoaXNTdWNlc3MocmVzKSkge1xyXG4gICAgICAgICAgICAgICAgc3VjY2VzcyAmJiBzdWNjZXNzKHJlcyk7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKHJlcy5kYXRhKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGxldCBlcnJNc2cgPSAnJztcclxuICAgICAgICAgICAgICAgIGlmICghKHJlcy5kYXRhIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIgfHwgdHlwZW9mIHJlcy5kYXRhID09PSAnc3RyaW5nJykpIHtcclxuICAgICAgICAgICAgICAgICAgICBlcnJNc2cgPSAoPFJlc3BvZW5zRGF0YT5yZXMuZGF0YSkubXNnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChlcnJNc2cgJiYgIW9wdGlvbnMubm90U2hvd01zZykge1xyXG4gICAgICAgICAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBlcnJNc2csXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb246ICdub25lJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGZhaWwgJiYgZmFpbCh7IGVyck1zZyB9KTtcclxuICAgICAgICAgICAgICAgIHJlamVjdCh7IGVyck1zZyB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgb3B0aW9ucy5mYWlsID0gKHJlczogd3guR2VuZXJhbENhbGxiYWNrUmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgIGZhaWwgJiYgZmFpbChyZXMpO1xyXG4gICAgICAgICAgICByZWplY3QocmVzKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB3eFttZXRob2RdKDxhbnk+b3B0aW9ucyk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gaXNTdWNlc3MocmVzOiB3eC5SZXF1ZXN0U3VjY2Vzc0NhbGxiYWNrUmVzdWx0IHwgd3guVXBsb2FkRmlsZVN1Y2Nlc3NDYWxsYmFja1Jlc3VsdCkge1xyXG4gICAgbGV0IGNvZGUgPSAyMDA7XHJcbiAgICBpZiAoIShyZXMuZGF0YSBpbnN0YW5jZW9mIEFycmF5QnVmZmVyIHx8IHR5cGVvZiByZXMuZGF0YSA9PT0gJ3N0cmluZycpKSB7XHJcbiAgICAgICAgY29kZSA9ICg8UmVzcG9lbnNEYXRhPnJlcy5kYXRhKS5jb2RlO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByZXMuc3RhdHVzQ29kZSA+PSAyMDAgJiYgcmVzLnN0YXR1c0NvZGUgPCAzMDAgJiYgY29kZSA+PSAyMDAgJiYgY29kZSA8IDMwMDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlcXVlc3Q8VD4ob3B0aW9uczogd3guUmVxdWVzdE9wdGlvbiAmIHtub3RTaG93TXNnPzogYm9vbGVhbn0pIHtcclxuICAgIHJldHVybiBoYW5kbGU8VD4oJ3JlcXVlc3QnLCBvcHRpb25zKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVwbG9hZEZpbGU8VD4ob3B0aW9uczogd3guVXBsb2FkRmlsZU9wdGlvbiAmIHtub3RTaG93TXNnPzogYm9vbGVhbn0pIHtcclxuICAgIG9wdGlvbnMubmFtZSA9IG9wdGlvbnMubmFtZSB8fCAnZmlsZSc7XHJcblxyXG4gICAgcmV0dXJuIGhhbmRsZTxUPigndXBsb2FkRmlsZScsIG9wdGlvbnMpO1xyXG59XHJcbiJdfQ==