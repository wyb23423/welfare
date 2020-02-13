import { HOST } from '../constant/index';
import { COOKIE } from '../constant/store';

function handle<T>(
    method: 'request' | 'uploadFile',
    options: (wx.RequestOption | wx.UploadFileOption) & {notShowMsg?: boolean}
): Promise<ResponseData<T>> {
    const fail = options.fail;
    const success = options.success;

    options.url = HOST + options.url;
    options.header = { cookie: wx.getStorageSync(COOKIE), ...(options.header || {}) };

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
                    errMsg = (<ResponseData>res.data).msg;
                }

                if (errMsg && !options.notShowMsg) {
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

type Res = wx.RequestSuccessCallbackResult | wx.UploadFileSuccessCallbackResult;
function isSucess(res: Res) {
    let code = 200;
    if (res.data && !(res.data instanceof ArrayBuffer || typeof res.data === 'string')) {
        code = (<ResponseData>res.data).code;
    }

    return res.statusCode >= 200 && res.statusCode < 300 && code >= 200 && code < 300;
}

export function request<T>(options: wx.RequestOption & {notShowMsg?: boolean}) {
    return handle<T>('request', options);
}

export function uploadFile<T>(options: wx.UploadFileOption & {notShowMsg?: boolean}) {
    options.name = options.name || 'file';

    return handle<T>('uploadFile', options);
}

export function downloadFile(options: wx.DownloadFileOption): Promise<wx.DownloadFileSuccessCallbackResult> {
    const fail = options.fail;

    options.url = HOST + options.url;
    options.header = { cookie: wx.getStorageSync(COOKIE), ...(options.header || {}) };

    return new Promise((resolve, reject) => {
        options.success = (response: wx.DownloadFileSuccessCallbackResult) => {
            if (response.statusCode >= 200 && response.statusCode < 300) {
                resolve(response);
            } else {
                const errMsg = '文件下载失败';
                wx.showToast({
                    title: errMsg,
                    icon: 'none'
                });

                fail && fail({errMsg});
                reject();
            }
        };
        options.fail = (res: wx.GeneralCallbackResult) => {
            fail && fail(res);
            reject(res);
        };

        wx.downloadFile(options);
    });
}

/**
 * 保存除图片、视频以外的文件
 * @param path 路径
 * @param fileType 扩展名
 */
export function saveFile(path: string, ext: string) {
    // 根据临时路径保存文件
    const savePath = (<any>wx).env.USER_DATA_PATH + '/'+ Date.now() +'.jpg';
    wx.getFileSystemManager().saveFile({// 下载成功后保存到本地
        tempFilePath: path,
        filePath: savePath,
        success() {
            // 获取了相册的访问权限，使用 wx.saveImageToPhotosAlbum 将图片保存到相册中
            wx.saveImageToPhotosAlbum({
                filePath: savePath ,
                success: () => {
                    // 保存成功弹出提示，告知一下用户
                    wx.showModal({
                        title: '文件已保存到手机相册',
                        content: `位于tencent/MicroMsg/WeiXin下 \r\n将保存的文件重命名改为[ .${ext} ]后缀即可`,
                        confirmColor: '#0bc183',
                        confirmText: '知道了',
                        showCancel: false
                    });
                },
                fail(res) {console.log(res);}
            });
        },
        fail(res) {console.log(res);}
    });
}
