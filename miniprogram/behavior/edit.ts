import { request, uploadFile } from '../utils/http';
import { ProjectForm, ProjectFormData } from './project_form';

interface EditFormBehavior extends ProjectForm {
    data: ProjectFormData & {oldImg: string; isGoods: boolean};
    add(): Promise<void>;
    modify(): void;
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
        async add() {
            const {form, isGoods, formEl} = this.data;
            try {
                await uploadFile({
                    url: `/api/${isGoods ? 'commodity' : 'activity'}`,
                    filePath: form.img,
                    name: 'file',
                    formData: form
                });
            } catch(e) {
                return;
            }

            wx.showToast({ title: '添加成功' });
            formEl && formEl.reset();
        },
        modify() {
            // TODO 调用接口修改数据
            console.log(this.data.form);
        },
        _submit() {
            this.data.oldImg ? this.modify() : this.add();
        },
        _parseValue(value: string, name: string) {
            if (['size', 'integral', 'credit'].includes(name)) {
                return isNaN(+value) ? '' : +value;
            }

            return value;
        }
    }
});
