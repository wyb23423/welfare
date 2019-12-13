import { request } from '../utils/http';
import { parseData } from '../utils/util';

export interface ListComponent extends WxComponent {
    reflash(isDel?: boolean): void;
    onShow(): void;
    getMore(): void;
    getPageData(page?: number, size?: number): Promise<{
        list: Array<IActive | ICommodity>;
        total: number;
    }>;
}

export default Behavior<ListComponent>({
    data: {
        list: <any[]>[],
        hasMore: false,
        dataConfig: {
            currentPage: 'currentPage',
            pageSize: 'pageSize'
        },
        all: false,
        url: ''
    },
    methods: {
        reflash(isDel: boolean = true) {
            if(isDel && this.data.list.length <= 1) {
                this.setData({list: []});
            } else {
                this.onShow();
            }
        },
        onShow() {
            this.getPageData(1, this.data.list.length || 8)
                .then(({ list, total }) => this.setData!({ list, hasMore: total > list.length }))
                .catch(e => console.log(e.errMsg));
        },
        getMore() {
            if (!this.data.hasMore) {
                return;
            }

            const dataList = this.data.list;
            this.getPageData(Math.ceil(dataList.length / 8) + 1)
                .then(({ list, total }) => {
                    const tempList = dataList.concat(list);
                    this.setData!({
                        list: tempList,
                        hasMore: total > tempList.length
                    });
                })
                .catch(e => console.log(e.errMsg));
        },
        async getPageData(page: number = 1, size: number = 8) {
            const {url, all} = this.data;
            if(!url) {
                return Promise.reject({errMsg: '请求路径错误'});
            }

            const {currentPage, pageSize} = this.data.dataConfig;
            const { data: { list, total } } = await (request<PageData<any>>({
                url,
                data: {
                    all,
                    [currentPage]: page,
                    [pageSize]: size
                }
            }));
            return ({ list: (<any[]>list.map(parseData)), total });
        },
    }
});
