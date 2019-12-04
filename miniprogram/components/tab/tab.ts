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
                this.data.items.push(target);
                this.data.tabItems.push(target.data.name);
            }
        }
    },
    ready(this: Tab) {
        this.displayChildren();
        this.setData({tabItems: this.data.tabItems});
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
