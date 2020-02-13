/**
 * 商品列表
 */
import PageQuery, { ListComponent } from '../../../behavior/page_query';
import { GOODS_STATUS } from '../../../constant/status';
import { updateStatus, deleteGoods } from '../../../utils/util';

Component<ListComponent>({
    behaviors: [PageQuery],
    data:{
        url: '/api/commodity/pagingQuery',
        all: true,
        NORMAL: GOODS_STATUS.NORMAL
    },
    ready(this: ListComponent) {
        this.showHandler();
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
