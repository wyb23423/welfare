interface Base<T = number> {
    id: T;
    created: number; // 创建时间
    updated: number; // 更新时间
}
interface ActiveCommodity {
    attended?: number;
    sign: number;
    index: number;
    originImg: string;
    isCollected: boolean;
    merchant: IMerchant;
}

declare interface ICommodity extends Base, ActiveCommodity {
    authentication: number; // 认证
    credit: number; // 拥有兑换权限需要的最低信用积分
    details: string; // 详情;
    finish: number; // 商品结束兑换的时间
    origination: number; // 商品开启兑换的时间
    img: string;
    integral: number; // 兑换商品需要的公益积分
    name: string;
    size: number; // 数量
    userId: number // 创建者id
    isCollected: boolean;
    isHeat: boolean;
    liked: boolean;
}

declare interface IActive extends Base, ActiveCommodity {
    authentication: number; // 认证
    credit: number; // 拥有参加权限需要的最低信用积分
    details: string; // 详情
    finish: number; // 结束时间
    origination: number; // 活动开始时间
    img: string;
    integral: number; // 完成后获取的公益积分
    intro: string; // 简介
    location: string; // 活动地址
    money: number;
    name: string;
    size: number; // 活动人数
    status: number; // 活动状态
    userId: number // 创建者id
    liked: boolean;
}

declare interface IMerchant extends Base {
    address: string;
    authentication: number;
    img: string;
    name: string;
    phone: string;
    userId: string;
    liked: boolean;
}

declare interface IUser extends Base<string> {
    authentication: number;
    credit: number;
    integral: number;
    status: number; // 账号状态
    realName: string;
    idCard: string;
    phone: string;
    email: string;
    adress: string;
}

// ======================================
declare interface IMerchant {
    index: number;
    originImg: string;
    isCollected: boolean;

    // ==============
    size?: number;
    attended?: number;
    sign?: number;
}

declare interface RespoensData<T = any> {
    code: number;
    data: T;
    msg: string;
    ok: boolean;
}

declare interface PageData<T = any> {
    list: T[];
    size: number;
    total: number;
}
