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
        },
        userId: 1
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBU0EsR0FBRyxDQUFTO0lBQ1YsUUFBUTtRQUFSLGlCQTRCQztRQTFCQyxFQUFFLENBQUMsS0FBSyxDQUFDO1lBQ1AsT0FBTyxZQUFDLEdBQUc7Z0JBQ1QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUVuQixDQUFDO1NBQ0YsQ0FBQyxDQUFDO1FBR0gsRUFBRSxDQUFDLFVBQVUsQ0FBQztZQUNaLE9BQU8sRUFBRSxVQUFDLEVBQWU7b0JBQWIsNEJBQVc7Z0JBQ3JCLElBQUksV0FBVyxDQUFDLGdCQUFnQixDQUFDLEVBQUU7b0JBRWpDLEVBQUUsQ0FBQyxXQUFXLENBQUM7d0JBQ2IsT0FBTyxFQUFFLFVBQUEsR0FBRzs0QkFFVixLQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUMsUUFBUSxDQUFDOzRCQUd4QyxJQUFJLEtBQUksQ0FBQyxxQkFBcUIsRUFBRTtnQ0FDOUIsS0FBSSxDQUFDLHFCQUFxQixDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQzs2QkFDMUM7d0JBQ0gsQ0FBQztxQkFDRixDQUFDLENBQUM7aUJBQ0o7WUFDSCxDQUFDO1NBQ0YsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNELFVBQVUsRUFBRTtRQUNWLFFBQVEsRUFBRTtZQUNSLFFBQVEsRUFBRSxTQUFTO1lBQ25CLFNBQVMsRUFBRSx1QkFBdUI7WUFDbEMsSUFBSSxFQUFFLElBQUk7WUFDVixPQUFPLEVBQUUsSUFBSTtZQUNiLE1BQU0sRUFBRSxDQUFDO1lBQ1QsUUFBUSxFQUFFLElBQUk7WUFDZCxRQUFRLEVBQUUsSUFBSTtTQUNmO1FBQ0QsTUFBTSxFQUFFLENBQUM7S0FDVjtDQUNGLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGFwcC50c1xuZXhwb3J0IGludGVyZmFjZSBJTXlBcHAge1xuICBnbG9iYWxEYXRhOiB7XG4gICAgdXNlckluZm86IHd4LlVzZXJJbmZvLFxuICAgIHVzZXJJZDogbnVtYmVyXG4gIH07XG4gIHVzZXJJbmZvUmVhZHlDYWxsYmFjaz8ocmVzOiB3eC5Vc2VySW5mbyk6IHZvaWQ7XG59XG5cbkFwcDxJTXlBcHA+KHtcbiAgb25MYXVuY2goKSB7XG4gICAgLy8g55m75b2VXG4gICAgd3gubG9naW4oe1xuICAgICAgc3VjY2VzcyhyZXMpIHtcbiAgICAgICAgY29uc29sZS5sb2cocmVzKTtcbiAgICAgICAgLy8g5Y+R6YCBIF9yZXMuY29kZSDliLDlkI7lj7DmjaLlj5Ygb3BlbklkLCBzZXNzaW9uS2V5LCB1bmlvbklkXG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyDojrflj5bnlKjmiLfkv6Hmga9cbiAgICB3eC5nZXRTZXR0aW5nKHtcbiAgICAgIHN1Y2Nlc3M6ICh7IGF1dGhTZXR0aW5nIH0pID0+IHtcbiAgICAgICAgaWYgKGF1dGhTZXR0aW5nWydzY29wZS51c2VySW5mbyddKSB7XG4gICAgICAgICAgLy8g5bey57uP5o6I5p2D77yM5Y+v5Lul55u05o6l6LCD55SoIGdldFVzZXJJbmZvIOiOt+WPluWktOWDj+aYteensO+8jOS4jeS8muW8ueahhlxuICAgICAgICAgIHd4LmdldFVzZXJJbmZvKHtcbiAgICAgICAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7XG4gICAgICAgICAgICAgIC8vIOWPr+S7peWwhiByZXMg5Y+R6YCB57uZ5ZCO5Y+w6Kej56CB5Ye6IHVuaW9uSWRcbiAgICAgICAgICAgICAgdGhpcy5nbG9iYWxEYXRhLnVzZXJJbmZvID0gcmVzLnVzZXJJbmZvO1xuICAgICAgICAgICAgICAvLyDnlLHkuo4gZ2V0VXNlckluZm8g5piv572R57uc6K+35rGC77yM5Y+v6IO95Lya5ZyoIFBhZ2Uub25Mb2FkIOS5i+WQjuaJjei/lOWbnlxuICAgICAgICAgICAgICAvLyDmiYDku6XmraTlpITliqDlhaUgY2FsbGJhY2sg5Lul6Ziy5q2i6L+Z56eN5oOF5Ya1XG4gICAgICAgICAgICAgIGlmICh0aGlzLnVzZXJJbmZvUmVhZHlDYWxsYmFjaykge1xuICAgICAgICAgICAgICAgIHRoaXMudXNlckluZm9SZWFkeUNhbGxiYWNrKHJlcy51c2VySW5mbyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9LFxuICBnbG9iYWxEYXRhOiB7XG4gICAgdXNlckluZm86IHtcbiAgICAgIG5pY2tOYW1lOiAn5byg5LiJ5p2O5Zub546L5LqM6bq7JyxcbiAgICAgIGF2YXRhclVybDogJy9wdWJsaWMvaW1hZ2VzLzIzLmpwZycsXG4gICAgICBjaXR5OiAn5oiQ6YO9JyxcbiAgICAgIGNvdW50cnk6ICfkuK3lm70nLFxuICAgICAgZ2VuZGVyOiAyLFxuICAgICAgbGFuZ3VhZ2U6ICdlbicsXG4gICAgICBwcm92aW5jZTogJ+Wbm+W3nSdcbiAgICB9LFxuICAgIHVzZXJJZDogMVxuICB9XG59KTtcbiJdfQ==