/**
 * 活动/商品列表
 */

import * as listFunc from '../../template/list_item/list_item';
import { request } from '../../utils/http';
import { parseData } from '../../utils/util';

async function getPageData(type: string, page: number) {
    const { data: { list, total } } = await (request<PageData<IActive | ICommodity>>({
        url: `/api/${type === 'activity' ? type : 'commodity'}/pagingQuery`,
        data: {
            currentPage: page,
            pageSize: 10
        }
    }));

    return ({ list: (<Array<IActive | ICommodity>>list.map(parseData)), total });
}

export interface ListComponent extends WxComponent {
    getMore(): void;
}

Component({
    properties: {
        type: {
            type: String,
            value: 'activity'
        }
    },
    data: {
        list: <Array<IActive | ICommodity>>[],
        hasMore: false
    },
    pageLifetimes: {
        show() {
            getPageData(this.data.type, 1)
                .then(({ list, total }) => this.setData!({ list, hasMore: total > list.length }))
                .catch(e => console.log(e.errMsg));
        }
    },
    methods: {
        ...listFunc,
        getMore() {
            if (!this.data.hasMore) {
                return;
            }

            getPageData(this.data.type, Math.ceil(this.data.list.length / 10) + 1)
                .then(({ list, total }) => {
                    const tempList = list.concat(this.data.list);
                    this.setData!({
                        list: tempList,
                        hasMore: total > tempList.length
                    });
                })
                .catch(e => console.log(e.errMsg));
        },
        search(e: IAnyObject) {
            console.log(e.detail.value);
        }
    }
});
