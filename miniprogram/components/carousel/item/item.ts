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
        translate: '0%'
    }
});
