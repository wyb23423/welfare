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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEscUNBQXVDO0FBR3ZDLEdBQUcsQ0FBQztJQUNGLFFBQVE7UUFFTixFQUFFLENBQUMsS0FBSyxDQUFDO1lBQ1AsT0FBTyxFQUFFLFVBQUMsRUFBUTtvQkFBTixjQUFJO2dCQUNkLGNBQU8sQ0FBQztvQkFDTixHQUFHLEVBQUUsWUFBWTtvQkFDakIsTUFBTSxFQUFFLE1BQU07b0JBQ2QsSUFBSSxFQUFFLEVBQUUsSUFBSSxNQUFBLEVBQUU7b0JBQ2QsT0FBTyxZQUFDLEdBQUc7d0JBQ1QsSUFBSSxHQUFHLENBQUMsTUFBTSxFQUFFOzRCQUNkLElBQUksWUFBWSxJQUFJLEdBQUcsQ0FBQyxNQUFNLEVBQUU7Z0NBQzlCLEVBQUUsQ0FBQyxjQUFjLENBQUMsUUFBUSxFQUFRLEdBQUcsQ0FBQyxNQUFPLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQzs2QkFDOUQ7aUNBQU0sSUFBSSxZQUFZLElBQUksR0FBRyxDQUFDLE1BQU0sRUFBRTtnQ0FDckMsRUFBRSxDQUFDLGNBQWMsQ0FBQyxRQUFRLEVBQVEsR0FBRyxDQUFDLE1BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDOzZCQUM5RDt5QkFDRjt3QkFFRCxJQUFNLElBQUksR0FBa0IsR0FBRyxDQUFDLElBQUssQ0FBQyxJQUFJLENBQUM7d0JBQzNDLEVBQUUsQ0FBQyxjQUFjLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQzt3QkFDN0MsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFOzRCQUN2QixFQUFFLENBQUMsU0FBUyxDQUFDO2dDQUNYLEtBQUssRUFBRSxRQUFRO2dDQUNmLE9BQU8sRUFBRSx3QkFBd0I7Z0NBQ2pDLFVBQVUsRUFBRSxLQUFLO2dDQUNqQixRQUFRO29DQUNOLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxHQUFHLEVBQUUsc0NBQXNDLEVBQUUsQ0FBQyxDQUFDO2dDQUMvRCxDQUFDOzZCQUNGLENBQUMsQ0FBQzt5QkFDSjtvQkFDSCxDQUFDO2lCQUNGLENBQUM7cUJBQ0MsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUN4QixDQUFDO1NBQ0YsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztDQUNGLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlcXVlc3QgfSBmcm9tICcuL3V0aWxzL2h0dHAnO1xuXG4vLyBhcHAudHNcbkFwcCh7XG4gIG9uTGF1bmNoKCkge1xuICAgIC8vIOeZu+W9lVxuICAgIHd4LmxvZ2luKHtcbiAgICAgIHN1Y2Nlc3M6ICh7IGNvZGUgfSkgPT4ge1xuICAgICAgICByZXF1ZXN0KHtcbiAgICAgICAgICB1cmw6ICcvYXBpL2xvZ2luJyxcbiAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICBkYXRhOiB7IGNvZGUgfSxcbiAgICAgICAgICBzdWNjZXNzKHJlcykge1xuICAgICAgICAgICAgaWYgKHJlcy5oZWFkZXIpIHtcbiAgICAgICAgICAgICAgaWYgKCdTZXQtQ29va2llJyBpbiByZXMuaGVhZGVyKSB7XG4gICAgICAgICAgICAgICAgd3guc2V0U3RvcmFnZVN5bmMoJ2Nvb2tpZScsICg8YW55PnJlcy5oZWFkZXIpWydTZXQtQ29va2llJ10pO1xuICAgICAgICAgICAgICB9IGVsc2UgaWYgKCdzZXQtY29va2llJyBpbiByZXMuaGVhZGVyKSB7XG4gICAgICAgICAgICAgICAgd3guc2V0U3RvcmFnZVN5bmMoJ2Nvb2tpZScsICg8YW55PnJlcy5oZWFkZXIpWydzZXQtY29va2llJ10pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSAoPFJlc3BvZW5zRGF0YT5yZXMuZGF0YSkuZGF0YTtcbiAgICAgICAgICAgIHd4LnNldFN0b3JhZ2VTeW5jKCd1c2VybmFtZScsIGRhdGEudXNlcm5hbWUpO1xuICAgICAgICAgICAgaWYgKCFkYXRhLnVzZXIucmVhbE5hbWUpIHtcbiAgICAgICAgICAgICAgd3guc2hvd01vZGFsKHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ+WujOWWhOS4quS6uuS/oeaBrycsXG4gICAgICAgICAgICAgICAgY29udGVudDogJ+Wwj+eoi+W6j+mcgOimgeaCqOeahOmDqOWIhuS4quS6uuS/oeaBrywg6K+35a6M5ZaE5Liq5Lq65L+h5oGvJyxcbiAgICAgICAgICAgICAgICBzaG93Q2FuY2VsOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBjb21wbGV0ZSgpIHtcbiAgICAgICAgICAgICAgICAgIHd4LnJlTGF1bmNoKHsgdXJsOiAnL3BhZ2VzL3BlcnNvbi9pbmZvL2luZm8/bm90R2V0SW5mbz0xJyB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgICAuY2F0Y2goY29uc29sZS5sb2cpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59KTtcbiJdfQ==