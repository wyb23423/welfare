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
                        wx.setStorageSync(store_1.USER_AUTHENTICATION, authentication);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEscUNBQXVDO0FBQ3ZDLDBDQUEwRTtBQUcxRSxHQUFHLENBQUM7SUFDRixRQUFRO1FBRU4sRUFBRSxDQUFDLEtBQUssQ0FBQztZQUNQLE9BQU8sRUFBRSxVQUFDLEVBQVE7b0JBQU4sY0FBSTtnQkFDZCxjQUFPLENBQUM7b0JBQ04sR0FBRyxFQUFFLFlBQVk7b0JBQ2pCLE1BQU0sRUFBRSxNQUFNO29CQUNkLElBQUksRUFBRSxFQUFFLElBQUksTUFBQSxFQUFFO29CQUNkLE9BQU8sWUFBQyxHQUFHO3dCQUNULElBQUksR0FBRyxDQUFDLE1BQU0sRUFBRTs0QkFDZCxJQUFJLFlBQVksSUFBSSxHQUFHLENBQUMsTUFBTSxFQUFFO2dDQUM5QixFQUFFLENBQUMsY0FBYyxDQUFDLGNBQU0sRUFBUSxHQUFHLENBQUMsTUFBTyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7NkJBQzVEO2lDQUFNLElBQUksWUFBWSxJQUFJLEdBQUcsQ0FBQyxNQUFNLEVBQUU7Z0NBQ3JDLEVBQUUsQ0FBQyxjQUFjLENBQUMsY0FBTSxFQUFRLEdBQUcsQ0FBQyxNQUFPLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQzs2QkFDNUQ7eUJBQ0Y7d0JBRUQsSUFBTSxJQUFJLEdBQWtCLEdBQUcsQ0FBQyxJQUFLLENBQUMsSUFBSSxDQUFDO3dCQUNyQyxJQUFBLGNBQStDLEVBQTdDLHNCQUFRLEVBQUUsa0NBQW1DLENBQUM7d0JBRXRELEVBQUUsQ0FBQyxjQUFjLENBQUMsaUJBQVMsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7d0JBQzVDLEVBQUUsQ0FBQyxjQUFjLENBQUMsMkJBQW1CLEVBQUUsY0FBYyxDQUFDLENBQUM7d0JBRXZELElBQUksQ0FBQyxRQUFRLEVBQUU7NEJBQ2IsRUFBRSxDQUFDLFNBQVMsQ0FBQztnQ0FDWCxLQUFLLEVBQUUsUUFBUTtnQ0FDZixPQUFPLEVBQUUsd0JBQXdCO2dDQUNqQyxVQUFVLEVBQUUsS0FBSztnQ0FDakIsUUFBUTtvQ0FDTixFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsR0FBRyxFQUFFLHNDQUFzQyxFQUFFLENBQUMsQ0FBQztnQ0FDL0QsQ0FBQzs2QkFDRixDQUFDLENBQUM7eUJBQ0o7b0JBQ0gsQ0FBQztpQkFDRixDQUFDO3FCQUNDLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDeEIsQ0FBQztTQUNGLENBQUMsQ0FBQztJQUNMLENBQUM7Q0FDRixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZXF1ZXN0IH0gZnJvbSAnLi91dGlscy9odHRwJztcclxuaW1wb3J0IHsgQ09PS0lFLCBVU0VSX05BTUUsIFVTRVJfQVVUSEVOVElDQVRJT04gfSBmcm9tICcuL2NvbnN0YW50L3N0b3JlJztcclxuXHJcbi8vIGFwcC50c1xyXG5BcHAoe1xyXG4gIG9uTGF1bmNoKCkge1xyXG4gICAgLy8g55m75b2VXHJcbiAgICB3eC5sb2dpbih7XHJcbiAgICAgIHN1Y2Nlc3M6ICh7IGNvZGUgfSkgPT4ge1xyXG4gICAgICAgIHJlcXVlc3Qoe1xyXG4gICAgICAgICAgdXJsOiAnL2FwaS9sb2dpbicsXHJcbiAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgIGRhdGE6IHsgY29kZSB9LFxyXG4gICAgICAgICAgc3VjY2VzcyhyZXMpIHtcclxuICAgICAgICAgICAgaWYgKHJlcy5oZWFkZXIpIHtcclxuICAgICAgICAgICAgICBpZiAoJ1NldC1Db29raWUnIGluIHJlcy5oZWFkZXIpIHtcclxuICAgICAgICAgICAgICAgIHd4LnNldFN0b3JhZ2VTeW5jKENPT0tJRSwgKDxhbnk+cmVzLmhlYWRlcilbJ1NldC1Db29raWUnXSk7XHJcbiAgICAgICAgICAgICAgfSBlbHNlIGlmICgnc2V0LWNvb2tpZScgaW4gcmVzLmhlYWRlcikge1xyXG4gICAgICAgICAgICAgICAgd3guc2V0U3RvcmFnZVN5bmMoQ09PS0lFLCAoPGFueT5yZXMuaGVhZGVyKVsnc2V0LWNvb2tpZSddKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSAoPFJlc3BvZW5zRGF0YT5yZXMuZGF0YSkuZGF0YTtcclxuICAgICAgICAgICAgY29uc3QgeyByZWFsTmFtZSwgYXV0aGVudGljYXRpb24gfSA9IDxJVXNlcj5kYXRhLnVzZXI7XHJcblxyXG4gICAgICAgICAgICB3eC5zZXRTdG9yYWdlU3luYyhVU0VSX05BTUUsIGRhdGEudXNlcm5hbWUpO1xyXG4gICAgICAgICAgICB3eC5zZXRTdG9yYWdlU3luYyhVU0VSX0FVVEhFTlRJQ0FUSU9OLCBhdXRoZW50aWNhdGlvbik7XHJcblxyXG4gICAgICAgICAgICBpZiAoIXJlYWxOYW1lKSB7XHJcbiAgICAgICAgICAgICAgd3guc2hvd01vZGFsKHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAn5a6M5ZaE5Liq5Lq65L+h5oGvJyxcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICflsI/nqIvluo/pnIDopoHmgqjnmoTpg6jliIbkuKrkurrkv6Hmga8sIOivt+WujOWWhOS4quS6uuS/oeaBrycsXHJcbiAgICAgICAgICAgICAgICBzaG93Q2FuY2VsOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGNvbXBsZXRlKCkge1xyXG4gICAgICAgICAgICAgICAgICB3eC5yZUxhdW5jaCh7IHVybDogJy9wYWdlcy9wZXJzb24vaW5mby9pbmZvP25vdEdldEluZm89MScgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgICAgLmNhdGNoKGNvbnNvbGUubG9nKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59KTtcclxuIl19