/**
 * 商品上架
 */
import ProjectFormBehavior, { ProjectForm, ProjectFormData } from '../../../behavior/project_form';
import { uploadFile, request } from '../../../utils/http';

interface GoodsForm extends ProjectForm {
    data: ProjectFormData & {oldImg: string};
    add(): Promise<void>;
    modify(): void;
}

Component<GoodsForm>({
    behaviors: [ProjectFormBehavior],
    data: {
        form: {
            name: '',
            integral: '',
            credit: '',
            details: '',
            time: [],
            img: ''
        },
        timeRule: {
            min: 2,
            message: '兑换时间需选择两个时间点'
        },
        oldImg: ''
    },
    ready() {
        const pages: any[] = getCurrentPages();
        const options = pages[pages.length - 1].options;
        if(options && options.id) {
            request<ICommodity>({url: '/api/commodity/' + options.id})
                .then(({ data }) => {

                    this.setData({
                        form: {
                            ...data,
                            time: [+data.origination, +data.finish]
                        },
                        oldImg: data.img
                    });
                });

            wx.setNavigationBarTitle({title: '编辑商品'});
        }
    },
    methods: {
        async add() {
            try {
                await uploadFile({
                    url: '/api/commodity',
                    filePath: this.data.form.img,
                    name: 'file',
                    formData: {
                        ...this.data.form,
                        origination: this.data.form.time[0],
                        finish: this.data.form.time[1]
                    }
                });
            } catch(e) {
                return;
            }

            wx.showToast({ title: '添加成功' });
            this.data.formEl && this.data.formEl.reset();
        },
        modify() {
            console.log(this.data.form);
        },
        _submit() {
            this.data.oldImg ? this.modify() : this.add();
        },
        _parseValue(value: string, name: string) {
            if (['credit', 'integral', 'size'].includes(name)) {
                return isNaN(+value) ? '' : +value;
            }

            return value;
        }
    }
});
