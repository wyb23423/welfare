"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
App({
    onLaunch: function () {
        var _this = this;
        wx.login({
            success: function (res) {
                console.log(res);
            }
        });
        wx.getSetting({
            success: function (_a) {
                var authSetting = _a.authSetting;
                if (authSetting['scope.userInfo']) {
                    wx.getUserInfo({
                        success: function (res) {
                            _this.globalData.userInfo = res.userInfo;
                            if (_this.userInfoReadyCallback) {
                                _this.userInfoReadyCallback(res.userInfo);
                            }
                        }
                    });
                }
            }
        });
    },
    globalData: {
        userInfo: {
            nickName: '张三李四王二麻',
            avatarUrl: '/public/images/23.jpg',
            city: '成都',
            country: '中国',
            gender: 2,
            language: 'en',
            province: '四川'
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBUUEsR0FBRyxDQUFTO0lBQ1YsUUFBUTtRQUFSLGlCQTRCQztRQTFCQyxFQUFFLENBQUMsS0FBSyxDQUFDO1lBQ1AsT0FBTyxZQUFDLEdBQUc7Z0JBQ1QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUVuQixDQUFDO1NBQ0YsQ0FBQyxDQUFDO1FBR0gsRUFBRSxDQUFDLFVBQVUsQ0FBQztZQUNaLE9BQU8sRUFBRSxVQUFDLEVBQWU7b0JBQWIsNEJBQVc7Z0JBQ3JCLElBQUksV0FBVyxDQUFDLGdCQUFnQixDQUFDLEVBQUU7b0JBRWpDLEVBQUUsQ0FBQyxXQUFXLENBQUM7d0JBQ2IsT0FBTyxFQUFFLFVBQUEsR0FBRzs0QkFFVixLQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUMsUUFBUSxDQUFDOzRCQUd4QyxJQUFJLEtBQUksQ0FBQyxxQkFBcUIsRUFBRTtnQ0FDOUIsS0FBSSxDQUFDLHFCQUFxQixDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQzs2QkFDMUM7d0JBQ0gsQ0FBQztxQkFDRixDQUFDLENBQUM7aUJBQ0o7WUFDSCxDQUFDO1NBQ0YsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNELFVBQVUsRUFBRTtRQUNWLFFBQVEsRUFBRTtZQUNSLFFBQVEsRUFBRSxTQUFTO1lBQ25CLFNBQVMsRUFBRSx1QkFBdUI7WUFDbEMsSUFBSSxFQUFFLElBQUk7WUFDVixPQUFPLEVBQUUsSUFBSTtZQUNiLE1BQU0sRUFBRSxDQUFDO1lBQ1QsUUFBUSxFQUFFLElBQUk7WUFDZCxRQUFRLEVBQUUsSUFBSTtTQUNmO0tBQ0Y7Q0FDRixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBhcHAudHNcbmV4cG9ydCBpbnRlcmZhY2UgSU15QXBwIHtcbiAgZ2xvYmFsRGF0YToge1xuICAgIHVzZXJJbmZvOiB3eC5Vc2VySW5mb1xuICB9O1xuICB1c2VySW5mb1JlYWR5Q2FsbGJhY2s/KHJlczogd3guVXNlckluZm8pOiB2b2lkO1xufVxuXG5BcHA8SU15QXBwPih7XG4gIG9uTGF1bmNoKCkge1xuICAgIC8vIOeZu+W9lVxuICAgIHd4LmxvZ2luKHtcbiAgICAgIHN1Y2Nlc3MocmVzKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XG4gICAgICAgIC8vIOWPkemAgSBfcmVzLmNvZGUg5Yiw5ZCO5Y+w5o2i5Y+WIG9wZW5JZCwgc2Vzc2lvbktleSwgdW5pb25JZFxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8g6I635Y+W55So5oi35L+h5oGvXG4gICAgd3guZ2V0U2V0dGluZyh7XG4gICAgICBzdWNjZXNzOiAoeyBhdXRoU2V0dGluZyB9KSA9PiB7XG4gICAgICAgIGlmIChhdXRoU2V0dGluZ1snc2NvcGUudXNlckluZm8nXSkge1xuICAgICAgICAgIC8vIOW3sue7j+aOiOadg++8jOWPr+S7peebtOaOpeiwg+eUqCBnZXRVc2VySW5mbyDojrflj5blpLTlg4/mmLXnp7DvvIzkuI3kvJrlvLnmoYZcbiAgICAgICAgICB3eC5nZXRVc2VySW5mbyh7XG4gICAgICAgICAgICBzdWNjZXNzOiByZXMgPT4ge1xuICAgICAgICAgICAgICAvLyDlj6/ku6XlsIYgcmVzIOWPkemAgee7meWQjuWPsOino+eggeWHuiB1bmlvbklkXG4gICAgICAgICAgICAgIHRoaXMuZ2xvYmFsRGF0YS51c2VySW5mbyA9IHJlcy51c2VySW5mbztcbiAgICAgICAgICAgICAgLy8g55Sx5LqOIGdldFVzZXJJbmZvIOaYr+e9kee7nOivt+axgu+8jOWPr+iDveS8muWcqCBQYWdlLm9uTG9hZCDkuYvlkI7miY3ov5Tlm55cbiAgICAgICAgICAgICAgLy8g5omA5Lul5q2k5aSE5Yqg5YWlIGNhbGxiYWNrIOS7pemYsuatoui/meenjeaDheWGtVxuICAgICAgICAgICAgICBpZiAodGhpcy51c2VySW5mb1JlYWR5Q2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVzZXJJbmZvUmVhZHlDYWxsYmFjayhyZXMudXNlckluZm8pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfSxcbiAgZ2xvYmFsRGF0YToge1xuICAgIHVzZXJJbmZvOiB7XG4gICAgICBuaWNrTmFtZTogJ+W8oOS4ieadjuWbm+eOi+S6jOm6uycsXG4gICAgICBhdmF0YXJVcmw6ICcvcHVibGljL2ltYWdlcy8yMy5qcGcnLFxuICAgICAgY2l0eTogJ+aIkOmDvScsXG4gICAgICBjb3VudHJ5OiAn5Lit5Zu9JyxcbiAgICAgIGdlbmRlcjogMixcbiAgICAgIGxhbmd1YWdlOiAnZW4nLFxuICAgICAgcHJvdmluY2U6ICflm5vlt50nXG4gICAgfVxuICB9XG59KTtcbiJdfQ==