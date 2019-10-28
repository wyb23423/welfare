"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("./utils/http");
var store_1 = require("./constant/store");
App({
    onLaunch: function () {
        wx.login({
            success: function (_a) {
                var code = _a.code;
                http_1.request({
                    url: '/api/login',
                    method: 'POST',
                    data: { code: code },
                    success: function (res) {
                        if (res.header) {
                            if ('Set-Cookie' in res.header) {
                                wx.setStorageSync(store_1.COOKIE, res.header['Set-Cookie']);
                            }
                            else if ('set-cookie' in res.header) {
                                wx.setStorageSync(store_1.COOKIE, res.header['set-cookie']);
                            }
                        }
                        var data = res.data.data;
                        var _a = data.user, realName = _a.realName, authentication = _a.authentication;
                        wx.setStorageSync(store_1.USER_NAME, data.username);
                        wx.setStorageSync(store_1.IS_BUSINESS, authentication);
                        if (!realName) {
                            wx.showModal({
                                title: '完善个人信息',
                                content: '小程序需要您的部分个人信息, 请完善个人信息',
                                showCancel: false,
                                complete: function () {
                                    wx.reLaunch({ url: '/pages/person/info/info?notGetInfo=1' });
                                }
                            });
                        }
                    }
                })
                    .catch(console.log);
            }
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEscUNBQXVDO0FBQ3ZDLDBDQUFrRTtBQUdsRSxHQUFHLENBQUM7SUFDRixRQUFRO1FBRU4sRUFBRSxDQUFDLEtBQUssQ0FBQztZQUNQLE9BQU8sRUFBRSxVQUFDLEVBQVE7b0JBQU4sY0FBSTtnQkFDZCxjQUFPLENBQUM7b0JBQ04sR0FBRyxFQUFFLFlBQVk7b0JBQ2pCLE1BQU0sRUFBRSxNQUFNO29CQUNkLElBQUksRUFBRSxFQUFFLElBQUksTUFBQSxFQUFFO29CQUNkLE9BQU8sWUFBQyxHQUFHO3dCQUNULElBQUksR0FBRyxDQUFDLE1BQU0sRUFBRTs0QkFDZCxJQUFJLFlBQVksSUFBSSxHQUFHLENBQUMsTUFBTSxFQUFFO2dDQUM5QixFQUFFLENBQUMsY0FBYyxDQUFDLGNBQU0sRUFBUSxHQUFHLENBQUMsTUFBTyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7NkJBQzVEO2lDQUFNLElBQUksWUFBWSxJQUFJLEdBQUcsQ0FBQyxNQUFNLEVBQUU7Z0NBQ3JDLEVBQUUsQ0FBQyxjQUFjLENBQUMsY0FBTSxFQUFRLEdBQUcsQ0FBQyxNQUFPLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQzs2QkFDNUQ7eUJBQ0Y7d0JBRUQsSUFBTSxJQUFJLEdBQWtCLEdBQUcsQ0FBQyxJQUFLLENBQUMsSUFBSSxDQUFDO3dCQUNyQyxJQUFBLGNBQStDLEVBQTdDLHNCQUFRLEVBQUUsa0NBQW1DLENBQUM7d0JBRXRELEVBQUUsQ0FBQyxjQUFjLENBQUMsaUJBQVMsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7d0JBQzVDLEVBQUUsQ0FBQyxjQUFjLENBQUMsbUJBQVcsRUFBRSxjQUFjLENBQUMsQ0FBQzt3QkFFL0MsSUFBSSxDQUFDLFFBQVEsRUFBRTs0QkFDYixFQUFFLENBQUMsU0FBUyxDQUFDO2dDQUNYLEtBQUssRUFBRSxRQUFRO2dDQUNmLE9BQU8sRUFBRSx3QkFBd0I7Z0NBQ2pDLFVBQVUsRUFBRSxLQUFLO2dDQUNqQixRQUFRO29DQUNOLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxHQUFHLEVBQUUsc0NBQXNDLEVBQUUsQ0FBQyxDQUFDO2dDQUMvRCxDQUFDOzZCQUNGLENBQUMsQ0FBQzt5QkFDSjtvQkFDSCxDQUFDO2lCQUNGLENBQUM7cUJBQ0MsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUN4QixDQUFDO1NBQ0YsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztDQUNGLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlcXVlc3QgfSBmcm9tICcuL3V0aWxzL2h0dHAnO1xyXG5pbXBvcnQgeyBDT09LSUUsIFVTRVJfTkFNRSwgSVNfQlVTSU5FU1MgfSBmcm9tICcuL2NvbnN0YW50L3N0b3JlJztcclxuXHJcbi8vIGFwcC50c1xyXG5BcHAoe1xyXG4gIG9uTGF1bmNoKCkge1xyXG4gICAgLy8g55m75b2VXHJcbiAgICB3eC5sb2dpbih7XHJcbiAgICAgIHN1Y2Nlc3M6ICh7IGNvZGUgfSkgPT4ge1xyXG4gICAgICAgIHJlcXVlc3Qoe1xyXG4gICAgICAgICAgdXJsOiAnL2FwaS9sb2dpbicsXHJcbiAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgIGRhdGE6IHsgY29kZSB9LFxyXG4gICAgICAgICAgc3VjY2VzcyhyZXMpIHtcclxuICAgICAgICAgICAgaWYgKHJlcy5oZWFkZXIpIHtcclxuICAgICAgICAgICAgICBpZiAoJ1NldC1Db29raWUnIGluIHJlcy5oZWFkZXIpIHtcclxuICAgICAgICAgICAgICAgIHd4LnNldFN0b3JhZ2VTeW5jKENPT0tJRSwgKDxhbnk+cmVzLmhlYWRlcilbJ1NldC1Db29raWUnXSk7XHJcbiAgICAgICAgICAgICAgfSBlbHNlIGlmICgnc2V0LWNvb2tpZScgaW4gcmVzLmhlYWRlcikge1xyXG4gICAgICAgICAgICAgICAgd3guc2V0U3RvcmFnZVN5bmMoQ09PS0lFLCAoPGFueT5yZXMuaGVhZGVyKVsnc2V0LWNvb2tpZSddKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSAoPFJlc3BvZW5zRGF0YT5yZXMuZGF0YSkuZGF0YTtcclxuICAgICAgICAgICAgY29uc3QgeyByZWFsTmFtZSwgYXV0aGVudGljYXRpb24gfSA9IDxJVXNlcj5kYXRhLnVzZXI7XHJcblxyXG4gICAgICAgICAgICB3eC5zZXRTdG9yYWdlU3luYyhVU0VSX05BTUUsIGRhdGEudXNlcm5hbWUpO1xyXG4gICAgICAgICAgICB3eC5zZXRTdG9yYWdlU3luYyhJU19CVVNJTkVTUywgYXV0aGVudGljYXRpb24pO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFyZWFsTmFtZSkge1xyXG4gICAgICAgICAgICAgIHd4LnNob3dNb2RhbCh7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ+WujOWWhOS4quS6uuS/oeaBrycsXHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiAn5bCP56iL5bqP6ZyA6KaB5oKo55qE6YOo5YiG5Liq5Lq65L+h5oGvLCDor7flrozlloTkuKrkurrkv6Hmga8nLFxyXG4gICAgICAgICAgICAgICAgc2hvd0NhbmNlbDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBjb21wbGV0ZSgpIHtcclxuICAgICAgICAgICAgICAgICAgd3gucmVMYXVuY2goeyB1cmw6ICcvcGFnZXMvcGVyc29uL2luZm8vaW5mbz9ub3RHZXRJbmZvPTEnIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAgIC5jYXRjaChjb25zb2xlLmxvZyk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufSk7XHJcbiJdfQ==