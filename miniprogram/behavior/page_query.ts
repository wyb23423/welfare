import { request } from '../utils/http';
import { parseData } from '../utils/util';

export interface ListComponent extends WxComponent {
    reflash(): void;
    onShow(): void;
    getMore(): void;
    getPageData(page?: number): Promise<{
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
        }
    },
    methods: {
        reflash() {
            this.data.list.length > 1 ? this.onShow() : this.setData({list: []});
        },
        onShow() {
            this.getPageData()
                .then(({ list, total }) => this.setData!({ list, hasMore: total > list.length }))
                .catch(e => console.log(e.errMsg));
        },
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
            if(!this.data.url) {
                return Promise.reject({errMsg: '请求路径错误'});
            }

            const {currentPage, pageSize} = this.data.dataConfig;
            const { data: { list, total } } = await (request<PageData<any>>({
                url: this.data.url,
                data: {
                    [currentPage]: page,
                    [pageSize]: 8
                }
            }));
            return ({ list: (<any[]>list.map(parseData)), total });
        },
    }
});
