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

Component({
    properties: {
        type: {
            type: String,
            value: 'activity'
        },
        modify: {
            type: Number,
            value: 0
        }
    },
    data: {
        list: <Array<IActive | ICommodity>>[],
        hasMore: false,
        isInit: true
    },
    methods: {
        ...listFunc,
        getMore() {
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
    },
    observers: {
        modify() {
            if (this.data.isInit) {
                this.data.isInit = false;
            } else {
                getPageData(this.data.type, 1)
                    .then(({ list, total }) => this.setData!({ list, hasMore: total > list.length }))
                    .catch(e => console.log(e.errMsg));
            }
        }
    }
});
