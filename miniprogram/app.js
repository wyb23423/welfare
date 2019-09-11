"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("./utils/http");
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
                                wx.setStorageSync('cookie', res.header['Set-Cookie']);
                            }
                            else if ('set-cookie' in res.header) {
                                wx.setStorageSync('cookie', res.header['set-cookie']);
                            }
                        }
                        var data = res.data.data;
                        wx.setStorageSync('username', data.username);
                        if (!data.user.realName) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEscUNBQXVDO0FBR3ZDLEdBQUcsQ0FBQztJQUNGLFFBQVE7UUFFTixFQUFFLENBQUMsS0FBSyxDQUFDO1lBQ1AsT0FBTyxFQUFFLFVBQUMsRUFBUTtvQkFBTixjQUFJO2dCQUNkLGNBQU8sQ0FBQztvQkFDTixHQUFHLEVBQUUsWUFBWTtvQkFDakIsTUFBTSxFQUFFLE1BQU07b0JBQ2QsSUFBSSxFQUFFLEVBQUUsSUFBSSxNQUFBLEVBQUU7b0JBQ2QsT0FBTyxZQUFDLEdBQUc7d0JBQ1QsSUFBSSxHQUFHLENBQUMsTUFBTSxFQUFFOzRCQUNkLElBQUksWUFBWSxJQUFJLEdBQUcsQ0FBQyxNQUFNLEVBQUU7Z0NBQzlCLEVBQUUsQ0FBQyxjQUFjLENBQUMsUUFBUSxFQUFRLEdBQUcsQ0FBQyxNQUFPLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQzs2QkFDOUQ7aUNBQU0sSUFBSSxZQUFZLElBQUksR0FBRyxDQUFDLE1BQU0sRUFBRTtnQ0FDckMsRUFBRSxDQUFDLGNBQWMsQ0FBQyxRQUFRLEVBQVEsR0FBRyxDQUFDLE1BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDOzZCQUM5RDt5QkFDRjt3QkFFRCxJQUFNLElBQUksR0FBa0IsR0FBRyxDQUFDLElBQUssQ0FBQyxJQUFJLENBQUM7d0JBQzNDLEVBQUUsQ0FBQyxjQUFjLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQzt3QkFDN0MsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFOzRCQUN2QixFQUFFLENBQUMsU0FBUyxDQUFDO2dDQUNYLEtBQUssRUFBRSxRQUFRO2dDQUNmLE9BQU8sRUFBRSx3QkFBd0I7Z0NBQ2pDLFVBQVUsRUFBRSxLQUFLO2dDQUNqQixRQUFRO29DQUNOLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxHQUFHLEVBQUUsc0NBQXNDLEVBQUUsQ0FBQyxDQUFDO2dDQUMvRCxDQUFDOzZCQUNGLENBQUMsQ0FBQzt5QkFDSjtvQkFDSCxDQUFDO2lCQUNGLENBQUM7cUJBQ0MsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUN4QixDQUFDO1NBQ0YsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztDQUNGLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlcXVlc3QgfSBmcm9tICcuL3V0aWxzL2h0dHAnO1xyXG5cclxuLy8gYXBwLnRzXHJcbkFwcCh7XHJcbiAgb25MYXVuY2goKSB7XHJcbiAgICAvLyDnmbvlvZVcclxuICAgIHd4LmxvZ2luKHtcclxuICAgICAgc3VjY2VzczogKHsgY29kZSB9KSA9PiB7XHJcbiAgICAgICAgcmVxdWVzdCh7XHJcbiAgICAgICAgICB1cmw6ICcvYXBpL2xvZ2luJyxcclxuICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgZGF0YTogeyBjb2RlIH0sXHJcbiAgICAgICAgICBzdWNjZXNzKHJlcykge1xyXG4gICAgICAgICAgICBpZiAocmVzLmhlYWRlcikge1xyXG4gICAgICAgICAgICAgIGlmICgnU2V0LUNvb2tpZScgaW4gcmVzLmhlYWRlcikge1xyXG4gICAgICAgICAgICAgICAgd3guc2V0U3RvcmFnZVN5bmMoJ2Nvb2tpZScsICg8YW55PnJlcy5oZWFkZXIpWydTZXQtQ29va2llJ10pO1xyXG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoJ3NldC1jb29raWUnIGluIHJlcy5oZWFkZXIpIHtcclxuICAgICAgICAgICAgICAgIHd4LnNldFN0b3JhZ2VTeW5jKCdjb29raWUnLCAoPGFueT5yZXMuaGVhZGVyKVsnc2V0LWNvb2tpZSddKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSAoPFJlc3BvZW5zRGF0YT5yZXMuZGF0YSkuZGF0YTtcclxuICAgICAgICAgICAgd3guc2V0U3RvcmFnZVN5bmMoJ3VzZXJuYW1lJywgZGF0YS51c2VybmFtZSk7XHJcbiAgICAgICAgICAgIGlmICghZGF0YS51c2VyLnJlYWxOYW1lKSB7XHJcbiAgICAgICAgICAgICAgd3guc2hvd01vZGFsKHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAn5a6M5ZaE5Liq5Lq65L+h5oGvJyxcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICflsI/nqIvluo/pnIDopoHmgqjnmoTpg6jliIbkuKrkurrkv6Hmga8sIOivt+WujOWWhOS4quS6uuS/oeaBrycsXHJcbiAgICAgICAgICAgICAgICBzaG93Q2FuY2VsOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGNvbXBsZXRlKCkge1xyXG4gICAgICAgICAgICAgICAgICB3eC5yZUxhdW5jaCh7IHVybDogJy9wYWdlcy9wZXJzb24vaW5mby9pbmZvP25vdEdldEluZm89MScgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgICAgLmNhdGNoKGNvbnNvbGUubG9nKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59KTtcclxuIl19