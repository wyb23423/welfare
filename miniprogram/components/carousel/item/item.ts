Component({
    properties: {
        name: {
            type: String,
            value: ''
        }
    },
    relations: {
        '../carousel': {type: 'parent'}
    },
    data: {
        translate: '0%',
        zIndex: 0
    },
    observers: {
        translate(this: WxComponent, value: string) {
            let zIndex = 0;
            if(`${value}`.startsWith('0')) {
                zIndex = 9;
            } else if(value === '-100%' || value === '100%') {
                zIndex = 8;
            }

            this.setData({zIndex});
        }
    }
});
