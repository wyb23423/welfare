// 活动状态
export enum ActiveStatus {
    preparation = 0, // 准备中
    ongoing = 1, // 进行中
    complete = 2, // 已顺利完成
    accidental = 3 // 意外中止
}

// 认证类型
export enum Authentication {
    none = 0, // 未认证
    commodity = 1, // 社区认证
    official = 2 // 官方认证
}

export const AUTHENTICATION = {
    [Authentication.none]: '未认证',
    [Authentication.commodity]: '社区认证',
    [Authentication.official]: '官方认证'
}

export const HOST = 'http://192.168.1.145'; // 请求域名
