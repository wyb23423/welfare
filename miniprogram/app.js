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
                        var authentication = data.user.authentication;
                        wx.setStorageSync(store_1.USER_NAME, data.username);
                        wx.setStorageSync(store_1.USER_AUTHENTICATION, authentication);
                    }
                })
                    .catch(console.log);
            }
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEscUNBQXVDO0FBQ3ZDLDBDQUEwRTtBQUcxRSxHQUFHLENBQUM7SUFDRixRQUFRO1FBRU4sRUFBRSxDQUFDLEtBQUssQ0FBQztZQUNQLE9BQU8sRUFBRSxVQUFDLEVBQVE7b0JBQU4sY0FBSTtnQkFDZCxjQUFPLENBQUM7b0JBQ04sR0FBRyxFQUFFLFlBQVk7b0JBQ2pCLE1BQU0sRUFBRSxNQUFNO29CQUNkLElBQUksRUFBRSxFQUFFLElBQUksTUFBQSxFQUFFO29CQUNkLE9BQU8sWUFBQyxHQUFHO3dCQUNULElBQUksR0FBRyxDQUFDLE1BQU0sRUFBRTs0QkFDZCxJQUFJLFlBQVksSUFBSSxHQUFHLENBQUMsTUFBTSxFQUFFO2dDQUM5QixFQUFFLENBQUMsY0FBYyxDQUFDLGNBQU0sRUFBUSxHQUFHLENBQUMsTUFBTyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7NkJBQzVEO2lDQUFNLElBQUksWUFBWSxJQUFJLEdBQUcsQ0FBQyxNQUFNLEVBQUU7Z0NBQ3JDLEVBQUUsQ0FBQyxjQUFjLENBQUMsY0FBTSxFQUFRLEdBQUcsQ0FBQyxNQUFPLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQzs2QkFDNUQ7eUJBQ0Y7d0JBRUQsSUFBTSxJQUFJLEdBQWtCLEdBQUcsQ0FBQyxJQUFLLENBQUMsSUFBSSxDQUFDO3dCQUNuQyxJQUFBLHlDQUFjLENBQXNCO3dCQUU1QyxFQUFFLENBQUMsY0FBYyxDQUFDLGlCQUFTLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO3dCQUM1QyxFQUFFLENBQUMsY0FBYyxDQUFDLDJCQUFtQixFQUFFLGNBQWMsQ0FBQyxDQUFDO29CQUN6RCxDQUFDO2lCQUNGLENBQUM7cUJBQ0MsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUN4QixDQUFDO1NBQ0YsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztDQUNGLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlcXVlc3QgfSBmcm9tICcuL3V0aWxzL2h0dHAnO1xyXG5pbXBvcnQgeyBDT09LSUUsIFVTRVJfTkFNRSwgVVNFUl9BVVRIRU5USUNBVElPTiB9IGZyb20gJy4vY29uc3RhbnQvc3RvcmUnO1xyXG5cclxuLy8gYXBwLnRzXHJcbkFwcCh7XHJcbiAgb25MYXVuY2goKSB7XHJcbiAgICAvLyDnmbvlvZVcclxuICAgIHd4LmxvZ2luKHtcclxuICAgICAgc3VjY2VzczogKHsgY29kZSB9KSA9PiB7XHJcbiAgICAgICAgcmVxdWVzdCh7XHJcbiAgICAgICAgICB1cmw6ICcvYXBpL2xvZ2luJyxcclxuICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgZGF0YTogeyBjb2RlIH0sXHJcbiAgICAgICAgICBzdWNjZXNzKHJlcykge1xyXG4gICAgICAgICAgICBpZiAocmVzLmhlYWRlcikge1xyXG4gICAgICAgICAgICAgIGlmICgnU2V0LUNvb2tpZScgaW4gcmVzLmhlYWRlcikge1xyXG4gICAgICAgICAgICAgICAgd3guc2V0U3RvcmFnZVN5bmMoQ09PS0lFLCAoPGFueT5yZXMuaGVhZGVyKVsnU2V0LUNvb2tpZSddKTtcclxuICAgICAgICAgICAgICB9IGVsc2UgaWYgKCdzZXQtY29va2llJyBpbiByZXMuaGVhZGVyKSB7XHJcbiAgICAgICAgICAgICAgICB3eC5zZXRTdG9yYWdlU3luYyhDT09LSUUsICg8YW55PnJlcy5oZWFkZXIpWydzZXQtY29va2llJ10pO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgZGF0YSA9ICg8UmVzcG9lbnNEYXRhPnJlcy5kYXRhKS5kYXRhO1xyXG4gICAgICAgICAgICBjb25zdCB7IGF1dGhlbnRpY2F0aW9uIH0gPSA8SVVzZXI+ZGF0YS51c2VyO1xyXG5cclxuICAgICAgICAgICAgd3guc2V0U3RvcmFnZVN5bmMoVVNFUl9OQU1FLCBkYXRhLnVzZXJuYW1lKTtcclxuICAgICAgICAgICAgd3guc2V0U3RvcmFnZVN5bmMoVVNFUl9BVVRIRU5USUNBVElPTiwgYXV0aGVudGljYXRpb24pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgICAuY2F0Y2goY29uc29sZS5sb2cpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbn0pO1xyXG4iXX0=