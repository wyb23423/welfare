
/**
 * 商品状态
 * @enum AUDITING: 审核中
 * @enum NORMAL: 正常
 * @enum SOLD_OUT: 下架
 * @enum CLOSE: 审核未通过
 */
export enum GOODS_STATUS {
    AUDITING = 0,
    NORMAL = 1,
    SOLD_OUT = 2,
    CLOSE = 3
}

/**
 * 活动状态
 * @enum PREPARE: 准备中
 * @enum PROGRESS: 正在进行
 * @enum COMPLETE: 已完成
 * @enum AUDITING: 审核中
 * @enum CLOSE: 审核未通过
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
 * @enum AUDITING: 报名审核中
 * @enum AWAIT: 待参加
 * @enum QUIT: 已退出
 * @enum EVALUATE: 待评价
 * @enum COMPLETE: 已完成
 * @enum REFUSE: 报名被拒绝
 */
export enum SIGN_STATUS {
    AUDITING = 0,
    AWAIT = 1,
    QUIT = 2,
    EVALUATE = 3,
    COMPLETE = 4,
    REFUSE = 5
}
