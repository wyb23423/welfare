/**
 * 我的商品
 */

import PageQuery, {ListComponent} from '../../../behavior/page_query';
import { GOODS_STATUS } from '../../../constant/status';
import { updateStatus, deleteGoods } from '../../../utils/util';

Component<ListComponent>({
    behaviors: [PageQuery],
    data: {
        url: '/api/commodity/my',
        STATUS: {
            AUDITING: GOODS_STATUS.AUDITING,
            NORMAL: GOODS_STATUS.NORMAL,
            SOLD_OUT: GOODS_STATUS.SOLD_OUT,
            CLOSE: GOODS_STATUS.CLOSE
        }
    },
    pageLifetimes: {
        show(this: ListComponent) {
            this.onShow();
        }
    },
    methods: {
        updateStatus({target: {dataset: {index}}}: BaseEvent<{index: number}>) {
            updateStatus(this, index);
        },
        delete({target: {dataset: {index}}}: BaseEvent<{index: number}>) {
            deleteGoods(this, index);
        }
    }
});


