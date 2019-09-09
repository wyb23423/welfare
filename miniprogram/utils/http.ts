import { HOST } from '../constant';

function handle<T>(
    method: 'request' | 'uploadFile',
    options: wx.RequestOption | wx.UploadFileOption
): Promise<RespoensData<T>> {
    const fail = options.fail;
    const success = options.success;

    options.url = HOST + options.url;
    options.header = { cookie: wx.getStorageSync('cookie'), ...(options.header || {}) };

    return new Promise((resolve, reject) => {
        options.success = (res: any) => {
            if (typeof res.data === 'string') {
                res.data = JSON.parse(res.data);
            }

            if (isSucess(res)) {
                success && success(res);
                resolve(res.data);
            } else {
                let errMsg = '';
                if (!(res.data instanceof ArrayBuffer || typeof res.data === 'string')) {
                    errMsg = (<RespoensData>res.data).msg;
                }

                if (errMsg) {
                    wx.showToast({
                        title: errMsg,
                        icon: 'none'
                    });
                }

                fail && fail({ errMsg });
                reject({ errMsg });
            }
        };
        options.fail = (res: wx.GeneralCallbackResult) => {
            fail && fail(res);
            reject(res);
        };

        wx[method](<any>options);
    });
}

function isSucess(res: wx.RequestSuccessCallbackResult | wx.UploadFileSuccessCallbackResult) {
    let code = 200;
    if (!(res.data instanceof ArrayBuffer || typeof res.data === 'string')) {
        code = (<RespoensData>res.data).code;
    }

    return res.statusCode >= 200 && res.statusCode < 300 && code >= 200 && code < 300;
}

export function request<T>(options: wx.RequestOption) {
    return handle<T>('request', options);
}

export function uploadFile<T>(options: wx.UploadFileOption) {
    options.name = options.name || 'file';

    return handle<T>('uploadFile', options);
}
