import { chooseImage } from '../../../components/upload/upload';

interface AdIndex extends WxComponent {
    data: {
        imgs: string[];
    };
    _setImgs(srcOrIndex: string | number): void;
}

Component<AdIndex>({
    properties: {
        hidden: {
            type: Boolean,
            value: false
        }
    },
    data: {
        imgs: [],
        isDouble: true
    },
    methods: {
        remove({currentTarget: {dataset: {index}}}: BaseEvent) {
            // if(index === this.data.imgs.length - 1) {
            //     return;
            // }
            this._setImgs(index);
        },
        add() {
            chooseImage().then(this._setImgs.bind(this)).catch(console.log);
        },
        _setImgs(srcOrIndex: string | number) {
            const imgs = this.data.imgs;
            typeof srcOrIndex === 'number' ? imgs.splice(srcOrIndex, 1) : imgs.push(srcOrIndex);
            this.setData({imgs, isDouble: !(imgs.length % 2)});
        }
    }
});
