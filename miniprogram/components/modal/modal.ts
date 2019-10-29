
Component({
    properties: {
        title: {
            type: String,
            value: ''
        },
        isShow: {
            type: Boolean,
            value: false
        }
    },
    methods: {
        close() {
            this.triggerEvent('close', {}, {});
        },
        none() {
            //
        }
    }
});
