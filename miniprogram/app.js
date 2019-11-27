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
                        console.log(authentication, 333333333333333);
                    }
                })
                    .catch(console.log);
            }
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEscUNBQXVDO0FBQ3ZDLDBDQUEwRTtBQUcxRSxHQUFHLENBQUM7SUFDRixRQUFRO1FBRU4sRUFBRSxDQUFDLEtBQUssQ0FBQztZQUNQLE9BQU8sRUFBRSxVQUFDLEVBQVE7b0JBQU4sY0FBSTtnQkFDZCxjQUFPLENBQUM7b0JBQ04sR0FBRyxFQUFFLFlBQVk7b0JBQ2pCLE1BQU0sRUFBRSxNQUFNO29CQUNkLElBQUksRUFBRSxFQUFFLElBQUksTUFBQSxFQUFFO29CQUNkLE9BQU8sWUFBQyxHQUFHO3dCQUNULElBQUksR0FBRyxDQUFDLE1BQU0sRUFBRTs0QkFDZCxJQUFJLFlBQVksSUFBSSxHQUFHLENBQUMsTUFBTSxFQUFFO2dDQUM5QixFQUFFLENBQUMsY0FBYyxDQUFDLGNBQU0sRUFBUSxHQUFHLENBQUMsTUFBTyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7NkJBQzVEO2lDQUFNLElBQUksWUFBWSxJQUFJLEdBQUcsQ0FBQyxNQUFNLEVBQUU7Z0NBQ3JDLEVBQUUsQ0FBQyxjQUFjLENBQUMsY0FBTSxFQUFRLEdBQUcsQ0FBQyxNQUFPLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQzs2QkFDNUQ7eUJBQ0Y7d0JBRUQsSUFBTSxJQUFJLEdBQWtCLEdBQUcsQ0FBQyxJQUFLLENBQUMsSUFBSSxDQUFDO3dCQUNuQyxJQUFBLHlDQUFjLENBQXNCO3dCQUU1QyxFQUFFLENBQUMsY0FBYyxDQUFDLGlCQUFTLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO3dCQUM1QyxFQUFFLENBQUMsY0FBYyxDQUFDLDJCQUFtQixFQUFFLGNBQWMsQ0FBQyxDQUFDO3dCQUV2RCxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxlQUFlLENBQUMsQ0FBQztvQkFXL0MsQ0FBQztpQkFDRixDQUFDO3FCQUNDLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDeEIsQ0FBQztTQUNGLENBQUMsQ0FBQztJQUNMLENBQUM7Q0FDRixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZXF1ZXN0IH0gZnJvbSAnLi91dGlscy9odHRwJztcclxuaW1wb3J0IHsgQ09PS0lFLCBVU0VSX05BTUUsIFVTRVJfQVVUSEVOVElDQVRJT04gfSBmcm9tICcuL2NvbnN0YW50L3N0b3JlJztcclxuXHJcbi8vIGFwcC50c1xyXG5BcHAoe1xyXG4gIG9uTGF1bmNoKCkge1xyXG4gICAgLy8g55m75b2VXHJcbiAgICB3eC5sb2dpbih7XHJcbiAgICAgIHN1Y2Nlc3M6ICh7IGNvZGUgfSkgPT4ge1xyXG4gICAgICAgIHJlcXVlc3Qoe1xyXG4gICAgICAgICAgdXJsOiAnL2FwaS9sb2dpbicsXHJcbiAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgIGRhdGE6IHsgY29kZSB9LFxyXG4gICAgICAgICAgc3VjY2VzcyhyZXMpIHtcclxuICAgICAgICAgICAgaWYgKHJlcy5oZWFkZXIpIHtcclxuICAgICAgICAgICAgICBpZiAoJ1NldC1Db29raWUnIGluIHJlcy5oZWFkZXIpIHtcclxuICAgICAgICAgICAgICAgIHd4LnNldFN0b3JhZ2VTeW5jKENPT0tJRSwgKDxhbnk+cmVzLmhlYWRlcilbJ1NldC1Db29raWUnXSk7XHJcbiAgICAgICAgICAgICAgfSBlbHNlIGlmICgnc2V0LWNvb2tpZScgaW4gcmVzLmhlYWRlcikge1xyXG4gICAgICAgICAgICAgICAgd3guc2V0U3RvcmFnZVN5bmMoQ09PS0lFLCAoPGFueT5yZXMuaGVhZGVyKVsnc2V0LWNvb2tpZSddKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSAoPFJlc3BvZW5zRGF0YT5yZXMuZGF0YSkuZGF0YTtcclxuICAgICAgICAgICAgY29uc3QgeyBhdXRoZW50aWNhdGlvbiB9ID0gPElVc2VyPmRhdGEudXNlcjtcclxuXHJcbiAgICAgICAgICAgIHd4LnNldFN0b3JhZ2VTeW5jKFVTRVJfTkFNRSwgZGF0YS51c2VybmFtZSk7XHJcbiAgICAgICAgICAgIHd4LnNldFN0b3JhZ2VTeW5jKFVTRVJfQVVUSEVOVElDQVRJT04sIGF1dGhlbnRpY2F0aW9uKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGF1dGhlbnRpY2F0aW9uLCAzMzMzMzMzMzMzMzMzMzMpO1xyXG4gICAgICAgICAgICAvLyBpZiAoIXJlYWxOYW1lKSB7XHJcbiAgICAgICAgICAgIC8vICAgd3guc2hvd01vZGFsKHtcclxuICAgICAgICAgICAgLy8gICAgIHRpdGxlOiAn5a6M5ZaE5Liq5Lq65L+h5oGvJyxcclxuICAgICAgICAgICAgLy8gICAgIGNvbnRlbnQ6ICflsI/nqIvluo/pnIDopoHmgqjnmoTpg6jliIbkuKrkurrkv6Hmga8sIOivt+WujOWWhOS4quS6uuS/oeaBrycsXHJcbiAgICAgICAgICAgIC8vICAgICBzaG93Q2FuY2VsOiBmYWxzZSxcclxuICAgICAgICAgICAgLy8gICAgIGNvbXBsZXRlKCkge1xyXG4gICAgICAgICAgICAvLyAgICAgICB3eC5yZWRpcmVjdFRvKHsgdXJsOiAnL3BhZ2VzL3BlcnNvbi9pbmZvL2luZm8/bm90R2V0SW5mbz0xJyB9KTtcclxuICAgICAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAgICAgLy8gICB9KTtcclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgICAuY2F0Y2goY29uc29sZS5sb2cpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbn0pO1xyXG4iXX0=