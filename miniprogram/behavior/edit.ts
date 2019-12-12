import { request, uploadFile } from '../utils/http';
import { ProjectForm, ProjectFormData } from './project_form';
import { upload } from '../utils/util';

interface EditFormBehavior extends ProjectForm {
    data: ProjectFormData & {oldImg: string; isGoods: boolean};
    add(data: ICommodity): Promise<void>;
    modify(data: ICommodity): Promise<void>;
}

export default Behavior<EditFormBehavior>({
    data: {
        oldImg: '',
        isGoods: true,
        form: {
            name: '',
            intro: '',
            details: '',
            size: '',
            location: '',
            img: '',
            credit: '',
            integral: '',
            origination: -1,
            finish: -1
        }
    },
    ready() {
        const pages: any[] = getCurrentPages();
        const options = pages[pages.length - 1].options;
        if(options && options.id) {
            const isGoods = this.data.isGoods;
            request<ICommodity>({url: `/api/${isGoods ? 'commodity' : 'activity'}/${options.id}`})
                .then(({ data }) => {
                    delete data.merchant;
                    this.setData({
                        form: {
                            ...data,
                            origination: +data.origination,
                            finish: +data.finish
                        },
                        oldImg: data.img
                    });
                })
                .catch(() => wx.navigateBack({delta: 1}));

            wx.setNavigationBarTitle({
                title: '编辑' + (isGoods ? '商品' : '活动')
            });
        }
    },
    methods: {
        async add(data: ICommodity) {
            const {isGoods} = this.data;
            try {
                await request({
                    url: `/api/${isGoods ? 'commodity' : 'activity'}`,
                    data,
                    method: 'PUT'
                });
            } catch(e) {
                return;
            }

            wx.showToast({ title: '申请成功' });
        },
        async modify(data: ICommodity) {
            const {isGoods} = this.data;
            try {
                await request({
                    url: `/api/${isGoods ? 'commodity' : 'activity'}`,
                    data,
                    method: 'POST'
                });
            } catch(e) {
                return;
            }

            wx.showToast({ title: '修改成功' });
        },
        _submit() {
            const {oldImg, form, formEl} = this.data;
            upload(form.img, oldImg)
                .then(img => {
                    const data = <ICommodity>{...form, img};
                    return oldImg ? this.modify(data) : this.add(data);
                })
                .then(() => formEl && formEl.reset())
                .catch(console.log);
        },
        _parseValue(value: string, name: string) {
            if (['size', 'integral', 'credit'].includes(name)) {
                return isNaN(+value) ? '' : +value;
            }

            return value;
        }
    }
});
