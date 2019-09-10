/**
 * 修改个人信息
 */
import { request } from '../../../utils/http';
import ProjectFormBehavior from '../../../behavior/project_form';


function getIdCardRule() {
    const common = String.raw`((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}`;

    const str15 = String.raw`(\d{7}${common})`;
    const str18 = String.raw`(\d{5}[1-9]\d{3}${common}([0-9]|X))`;

    return `^[1-9](${str15}|${str18})$`;
}

Component({
    behaviors: [ProjectFormBehavior],
    data: {
        form: {
            code: ''
        },
        rules: {
            idCard: [{
                regexp: getIdCardRule(),
                message: '无效身份证号'
            }],
            phone: [{
                regexp: '^1[3456789]\\d{9}$',
                message: '无效电话号码'
            }],
            email: [{
                regexp: /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/,
                message: '无效的电子邮件'
            }]
        },
        canGetCode: true,
        codeBtnText: '获取验证码',
        notGetInfo: false
    },
    attached() {
        const page = getCurrentPages<IAnyObject, any>().pop();
        if (!(page && page.route === 'pages/person/info/info')) {
            return wx.showModal({
                title: '非法访问',
                content: '路由参数错误，即将返回主页',
                showCancel: false,
                complete() {
                    wx.reLaunch({ url: '/pages/index/index' });
                }
            });
        }

        if (!(page.options && page.options.notGetInfo)) {
            request<IUser>({ url: '/api/user' })
                .then(({ data }) => {
                    this.setData!(
                        ['address', 'idCard', 'phone', 'realName', 'email']
                            .reduce(
                                (form, k) => {
                                    form[`form.${k}`] = (<IAnyObject>data)[k];
                                    return form;
                                },
                                <IAnyObject>{}
                            )
                    );
                })
                .then(console.log);
        } else {
            this.data.notGetInfo = true;
        }
    },
    methods: {
        getCode() {
            console.log('getCode');
        },
        _submit() {
            request({
                url: '/api/user',
                method: 'POST',
                data: this.data.form
            })
                .then(() => new Promise(resolve => {
                    wx.showToast({
                        title: '修改个人信息成功',
                        complete: () => resolve(this.data.notGetInfo)
                    });
                }))
                .then(notGetInfo => notGetInfo && wx.reLaunch({ url: '/pages/index/index' }))
                .catch(console.log);

            this.setData!({ 'form.code': '' });
        }
    }
});
