interface Base {
    id: number,
    created: number, // 创建时间
    updated: number, // 更新时间
}

declare interface ICommodity extends Base {
    authentication: number, // 认证
    credit: number, // 拥有兑换权限需要的最低信用积分
    details: string, // 详情,
    finish: number, // 商品结束兑换的时间
    origination: number, // 商品开启兑换的时间
    img: string,
    integral: number, // 兑换商品需要的公益积分
    name: string,
    size: number, // 剩余数量
    userId: number // 创建者id
    isCollected: boolean;
    isHeat: boolean;
}

declare interface IActive extends Base {
    authentication: number, // 认证
    details: string, // 详情
    finish: number, // 结束时间
    origination: number, // 活动开始时间
    img: string,
    integral: number, // 完成后获取的公益积分
    intro: string, // 简介
    location: string, // 活动地址
    money: number,
    name: string,
    size: number, // 活动人数
    status: number, // 活动状态
    userId: number // 创建者id
}

declare interface RespoensData<T> {
    code: number;
    data: T;
    msg: string;
    ok: boolean;
}

declare interface PageData<T> {
    list: T[],
    size: number;
    total: number;
}
