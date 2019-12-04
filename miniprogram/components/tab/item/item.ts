export interface TabItem extends WxComponent {
    data: {
        name: string;
        hidden: boolean;
    };
    display(hidden: boolean): void;
}

Component<TabItem>({
    properties: {
        name: {
            type: String,
            value: ''
        }
    },
    data: {hidden: true},
    relations: {'../tab': {type: 'parent'}},
    methods: {
        display(hidden: boolean) {
            if(this.data.hidden !== hidden) {
                this.setData({hidden});
            }
        }
    }
});
