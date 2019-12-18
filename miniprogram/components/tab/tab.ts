import { TabItem } from './item/item';

interface Tab extends WxComponent {
    data: {
        tabIndex: number,
        tabItems: string[],
        items: TabItem[]
    };
    displayChildren(index?: number): void;
}

Component<Tab>({
    data: {
        tabIndex: 0,
        tabItems: [],
        items: <TabItem[]>[]
    },
    relations: {
        './item/item': {
            type: 'child',
            linked(target: TabItem) {
                const {items, tabItems} = this.data;
                items.push(target);
                tabItems.push(target.data.name);
                this.setData({tabItems});
            }
        }
    },
    ready(this: Tab) {
        this.displayChildren();
    },
    methods: {
        switchTab({target: {dataset: {tab}}}: BaseEvent) {
            if(this.data.tabIndex !== tab) {
                this.setData!({tabIndex: tab});
                this.displayChildren(tab);
            }
        },
        displayChildren(index: number = 0) {
            this.data.items.forEach((v, i) => v.display(i !== index));
        }
    }
});
