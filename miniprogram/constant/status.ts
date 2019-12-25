
/**
 * 商品状态
 * @prop AUDITING: 审核中
 * @prop NORMAL: 正常
 * @prop SOLD_OUT: 下架
 * @prop CLOSE: 审核未通过
 */
export enum GOODS_STATUS {
    AUDITING = 0,
    NORMAL = 1,
    SOLD_OUT = 2,
    CLOSE = 3
}

/**
 * 活动状态
 * @prop PREPARE: 准备中
 * @prop PROGRESS: 正在进行
 * @prop COMPLETE: 已完成
 * @prop AUDITING: 审核中
 * @prop CLOSE: 审核未通过
 */
export enum ACTIVITY_STATUS {
    PREPARE = 0,
    PROGRESS = 1,
    COMPLETE = 2,
    AUDITING = 3,
    CLOSE = 4
}

/**
 * 参加活动状态
 * @prop AUDITING: 报名审核中
 * @prop AWAIT: 待参加
 * @prop QUIT: 已退出
 * @prop EVALUATE: 待评价
 * @prop COMPLETE: 已完成
 * @prop REFUSE: 报名被拒绝
 * @prop JOINING: 已签到, 正在参加
 */
export enum SIGN_STATUS {
    AUDITING = 0,
    AWAIT = 1,
    QUIT = 2,
    EVALUATE = 3,
    COMPLETE = 4,
    REFUSE = 5,
    JOINING = 6
}

/**
 * 商家状态
 * @prop NORMAL: 普通商家
 * @prop COMMUNITY: 社区认证
 * @prop OFFICIAL: 官方认证
 * @prop BANNED: 被封禁
 * @prop REFUSE: 审核未通过
 */
export enum BUSINESS_STATUS {
    NORMAL = 0,
    COMMUNITY = 1,
    OFFICIAL = 2,
    BANNED = 3,
    REFUSE = 4
}
