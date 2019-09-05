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
                        wx.setStorageSync('username', res.data.data.username);
                    }
                })
                    .catch(console.log);
            }
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEscUNBQXVDO0FBR3ZDLEdBQUcsQ0FBQztJQUNGLFFBQVE7UUFFTixFQUFFLENBQUMsS0FBSyxDQUFDO1lBQ1AsT0FBTyxFQUFFLFVBQUMsRUFBUTtvQkFBTixjQUFJO2dCQUNkLGNBQU8sQ0FBQztvQkFDTixHQUFHLEVBQUUsWUFBWTtvQkFDakIsTUFBTSxFQUFFLE1BQU07b0JBQ2QsSUFBSSxFQUFFLEVBQUUsSUFBSSxNQUFBLEVBQUU7b0JBQ2QsT0FBTyxZQUFDLEdBQUc7d0JBQ1QsSUFBSSxHQUFHLENBQUMsTUFBTSxFQUFFOzRCQUNkLElBQUksWUFBWSxJQUFJLEdBQUcsQ0FBQyxNQUFNLEVBQUU7Z0NBQzlCLEVBQUUsQ0FBQyxjQUFjLENBQUMsUUFBUSxFQUFRLEdBQUcsQ0FBQyxNQUFPLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQzs2QkFDOUQ7aUNBQU0sSUFBSSxZQUFZLElBQUksR0FBRyxDQUFDLE1BQU0sRUFBRTtnQ0FDckMsRUFBRSxDQUFDLGNBQWMsQ0FBQyxRQUFRLEVBQVEsR0FBRyxDQUFDLE1BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDOzZCQUM5RDt5QkFDRjt3QkFFRCxFQUFFLENBQUMsY0FBYyxDQUFDLFVBQVUsRUFBaUIsR0FBRyxDQUFDLElBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7b0JBQ3hFLENBQUM7aUJBQ0YsQ0FBQztxQkFDQyxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3hCLENBQUM7U0FDRixDQUFDLENBQUM7SUFDTCxDQUFDO0NBQ0YsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVxdWVzdCB9IGZyb20gJy4vdXRpbHMvaHR0cCc7XG5cbi8vIGFwcC50c1xuQXBwKHtcbiAgb25MYXVuY2goKSB7XG4gICAgLy8g55m75b2VXG4gICAgd3gubG9naW4oe1xuICAgICAgc3VjY2VzczogKHsgY29kZSB9KSA9PiB7XG4gICAgICAgIHJlcXVlc3Qoe1xuICAgICAgICAgIHVybDogJy9hcGkvbG9naW4nLFxuICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgIGRhdGE6IHsgY29kZSB9LFxuICAgICAgICAgIHN1Y2Nlc3MocmVzKSB7XG4gICAgICAgICAgICBpZiAocmVzLmhlYWRlcikge1xuICAgICAgICAgICAgICBpZiAoJ1NldC1Db29raWUnIGluIHJlcy5oZWFkZXIpIHtcbiAgICAgICAgICAgICAgICB3eC5zZXRTdG9yYWdlU3luYygnY29va2llJywgKDxhbnk+cmVzLmhlYWRlcilbJ1NldC1Db29raWUnXSk7XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoJ3NldC1jb29raWUnIGluIHJlcy5oZWFkZXIpIHtcbiAgICAgICAgICAgICAgICB3eC5zZXRTdG9yYWdlU3luYygnY29va2llJywgKDxhbnk+cmVzLmhlYWRlcilbJ3NldC1jb29raWUnXSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgd3guc2V0U3RvcmFnZVN5bmMoJ3VzZXJuYW1lJywgKDxSZXNwb2Vuc0RhdGE+cmVzLmRhdGEpLmRhdGEudXNlcm5hbWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgICAuY2F0Y2goY29uc29sZS5sb2cpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59KTtcbiJdfQ==