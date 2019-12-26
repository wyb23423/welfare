// 认证类型
export enum Authentication {
    none = 0, // 未认证
    commodity = 1, // 社区认证
    official = 2, // 官方认证
    auditing = 3 // 审核中
}

export const AUTHENTICATION = {
    [Authentication.none]: '未认证',
    [Authentication.commodity]: '社区认证',
    [Authentication.official]: '官方认证'
};

export const HOST = 'http://192.168.1.168:8080'; // 'https://www.cdjcsq.cn:8080'; // 请求域名
export const COMPRESS_SIZE = 300;

export enum AD_TYPE {
    INDEX = 0,
    ACTIVITY = 1,
    GOODS = 2,
    PERSON = 3
}
