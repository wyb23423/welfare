/**
 * 活动/商品列表
 */

import * as listFunc from '../../template/list_item/list_item';
import { request } from '../../utils/http';
import { parseData } from '../../utils/util';

export interface ListComponent extends WxComponent {
    getMore(): void;
    getPageData(page?: number): Promise<{
        list: Array<IActive | ICommodity>;
        total: number;
    }>;
}

Component<ListComponent>({
    properties: {
        isGoods: {
            type: Number,
            value: 0
        }
    },
    data: {
        list: <Array<IActive | ICommodity>>[],
        hasMore: false
    },
    pageLifetimes: {
        show(this: ListComponent) {
            this.getPageData()
                .then(({ list, total }) => this.setData!({ list, hasMore: total > list.length }))
                .catch(e => console.log(e.errMsg));
        }
    },
    methods: {
        ...listFunc,
        search(e: IAnyObject) {
            console.log(e.detail.value);
        },

        // ================================================
        getMore() {
            if (!this.data.hasMore) {
                return;
            }

            this.getPageData(Math.ceil(this.data.list.length / 8) + 1)
                .then(({ list, total }) => {
                    const tempList = list.concat(this.data.list);
                    this.setData!({
                        list: tempList,
                        hasMore: total > tempList.length
                    });
                })
                .catch(e => console.log(e.errMsg));
        },
        async getPageData(page: number = 1) {
            const { data: { list, total } } = await (request<PageData<IActive | ICommodity>>({
                url: `/api/${this.data.isGoods ? 'commodity' : 'activity' }/pagingQuery`,
                data: {
                    currentPage: page,
                    pageSize: 8
                }
            }));

            return ({ list: (<Array<IActive | ICommodity>>list.map(parseData)), total });
        },
    }
});
