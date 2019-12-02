"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var upload_1 = require("../../../components/upload/upload");
Component({
    properties: {
        hidden: {
            type: Boolean,
            value: false
        }
    },
    data: {
        imgs: new Array(5).fill('/public/images/23.jpg'),
        isDouble: true
    },
    methods: {
        remove: function (_a) {
            var index = _a.currentTarget.dataset.index;
            this._setImgs(index);
        },
        add: function () {
            upload_1.chooseImage().then(this._setImgs.bind(this)).catch(console.log);
        },
        _setImgs: function (srcOrIndex) {
            var imgs = this.data.imgs;
            typeof srcOrIndex === 'number' ? imgs.splice(srcOrIndex, 1) : imgs.push(srcOrIndex);
            this.setData({ imgs: imgs, isDouble: !(imgs.length % 2) });
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRfc2Nyb2xsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYWRfc2Nyb2xsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsNERBQWdFO0FBU2hFLFNBQVMsQ0FBVTtJQUNmLFVBQVUsRUFBRTtRQUNSLE1BQU0sRUFBRTtZQUNKLElBQUksRUFBRSxPQUFPO1lBQ2IsS0FBSyxFQUFFLEtBQUs7U0FDZjtLQUNKO0lBQ0QsSUFBSSxFQUFFO1FBQ0YsSUFBSSxFQUFFLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQztRQUNoRCxRQUFRLEVBQUUsSUFBSTtLQUNqQjtJQUNELE9BQU8sRUFBRTtRQUNMLE1BQU0sWUFBQyxFQUE4QztnQkFBbkIsc0NBQUs7WUFJbkMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN6QixDQUFDO1FBQ0QsR0FBRztZQUNDLG9CQUFXLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3BFLENBQUM7UUFDRCxRQUFRLFlBQUMsVUFBMkI7WUFDaEMsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7WUFDNUIsT0FBTyxVQUFVLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUNwRixJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUMsSUFBSSxNQUFBLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztRQUN2RCxDQUFDO0tBQ0o7Q0FDSixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjaG9vc2VJbWFnZSB9IGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvdXBsb2FkL3VwbG9hZCc7XHJcblxyXG5pbnRlcmZhY2UgQWRJbmRleCBleHRlbmRzIFd4Q29tcG9uZW50IHtcclxuICAgIGRhdGE6IHtcclxuICAgICAgICBpbWdzOiBzdHJpbmdbXTtcclxuICAgIH07XHJcbiAgICBfc2V0SW1ncyhzcmNPckluZGV4OiBzdHJpbmcgfCBudW1iZXIpOiB2b2lkO1xyXG59XHJcblxyXG5Db21wb25lbnQ8QWRJbmRleD4oe1xyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIGhpZGRlbjoge1xyXG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxyXG4gICAgICAgICAgICB2YWx1ZTogZmFsc2VcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgZGF0YToge1xyXG4gICAgICAgIGltZ3M6IG5ldyBBcnJheSg1KS5maWxsKCcvcHVibGljL2ltYWdlcy8yMy5qcGcnKSxcclxuICAgICAgICBpc0RvdWJsZTogdHJ1ZVxyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgICByZW1vdmUoe2N1cnJlbnRUYXJnZXQ6IHtkYXRhc2V0OiB7aW5kZXh9fX06IEJhc2VFdmVudCkge1xyXG4gICAgICAgICAgICAvLyBpZihpbmRleCA9PT0gdGhpcy5kYXRhLmltZ3MubGVuZ3RoIC0gMSkge1xyXG4gICAgICAgICAgICAvLyAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgIHRoaXMuX3NldEltZ3MoaW5kZXgpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYWRkKCkge1xyXG4gICAgICAgICAgICBjaG9vc2VJbWFnZSgpLnRoZW4odGhpcy5fc2V0SW1ncy5iaW5kKHRoaXMpKS5jYXRjaChjb25zb2xlLmxvZyk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBfc2V0SW1ncyhzcmNPckluZGV4OiBzdHJpbmcgfCBudW1iZXIpIHtcclxuICAgICAgICAgICAgY29uc3QgaW1ncyA9IHRoaXMuZGF0YS5pbWdzO1xyXG4gICAgICAgICAgICB0eXBlb2Ygc3JjT3JJbmRleCA9PT0gJ251bWJlcicgPyBpbWdzLnNwbGljZShzcmNPckluZGV4LCAxKSA6IGltZ3MucHVzaChzcmNPckluZGV4KTtcclxuICAgICAgICAgICAgdGhpcy5zZXREYXRhKHtpbWdzLCBpc0RvdWJsZTogIShpbWdzLmxlbmd0aCAlIDIpfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KTtcclxuIl19