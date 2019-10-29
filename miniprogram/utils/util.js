"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var constant_1 = require("../constant");
function formatTime(date) {
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var hour = date.getHours();
    var minute = date.getMinutes();
    return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute].map(formatNumber).join(':');
}
exports.formatTime = formatTime;
function getOptions(path) {
    var page = getCurrentPages().pop();
    if (!(page && page.route === path)) {
        return wx.showModal({
            title: '非法访问',
            content: '路由参数错误，即将返回主页',
            showCancel: false,
            complete: function () {
                wx.reLaunch({ url: '/pages/index/index' });
            }
        });
    }
    return page.options || {};
}
exports.getOptions = getOptions;
function parseData(v, i) {
    if (i === void 0) { i = 0; }
    v.authentication = Reflect.get(constant_1.AUTHENTICATION, v.authentication) || '未认证';
    v.originImg = v.img + '/false';
    v.img = getCompressImg(v.img);
    v.sign = v.sign || 0;
    v.size = v.size || 0;
    v.index = i;
    v.isCollected = !!v.liked;
    return v;
}
exports.parseData = parseData;
function formatNumber(n) {
    var str = n.toString();
    return str[1] ? str : '0' + str;
}
function getCompressImg(src) {
    return src + '/true';
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInV0aWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx3Q0FBNkM7QUFFN0MsU0FBZ0IsVUFBVSxDQUFDLElBQVU7SUFDbkMsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ2hDLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDbEMsSUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQzNCLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUM3QixJQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFFakMsT0FBTyxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUMzRyxDQUFDO0FBUkQsZ0NBUUM7QUFLRCxTQUFnQixVQUFVLENBQUMsSUFBWTtJQUNyQyxJQUFNLElBQUksR0FBRyxlQUFlLEVBQW1CLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDdEQsSUFBSSxDQUFDLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssSUFBSSxDQUFDLEVBQUU7UUFDbEMsT0FBTyxFQUFFLENBQUMsU0FBUyxDQUFDO1lBQ2xCLEtBQUssRUFBRSxNQUFNO1lBQ2IsT0FBTyxFQUFFLGVBQWU7WUFDeEIsVUFBVSxFQUFFLEtBQUs7WUFDakIsUUFBUTtnQkFDTixFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsR0FBRyxFQUFFLG9CQUFvQixFQUFFLENBQUMsQ0FBQztZQUM3QyxDQUFDO1NBQ0YsQ0FBQyxDQUFDO0tBQ0o7SUFFRCxPQUFPLElBQUksQ0FBQyxPQUFPLElBQUksRUFBRSxDQUFDO0FBQzVCLENBQUM7QUFkRCxnQ0FjQztBQU9ELFNBQWdCLFNBQVMsQ0FBNkMsQ0FBSSxFQUFFLENBQWE7SUFBYixrQkFBQSxFQUFBLEtBQWE7SUFDdkYsQ0FBQyxDQUFDLGNBQWMsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLHlCQUFjLEVBQUUsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxJQUFJLEtBQUssQ0FBQztJQUUxRSxDQUFDLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsUUFBUSxDQUFDO0lBQy9CLENBQUMsQ0FBQyxHQUFHLEdBQUcsY0FBYyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUM5QixDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDO0lBQ3JCLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUM7SUFDckIsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7SUFDWixDQUFDLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO0lBRTFCLE9BQU8sQ0FBQyxDQUFDO0FBQ1gsQ0FBQztBQVhELDhCQVdDO0FBRUQsU0FBUyxZQUFZLENBQUMsQ0FBUztJQUM3QixJQUFNLEdBQUcsR0FBRyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDekIsT0FBTyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztBQUNsQyxDQUFDO0FBRUQsU0FBUyxjQUFjLENBQUMsR0FBVztJQUNqQyxPQUFPLEdBQUcsR0FBRyxPQUFPLENBQUM7QUFPdkIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFVVEhFTlRJQ0FUSU9OIH0gZnJvbSAnLi4vY29uc3RhbnQnO1xuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0VGltZShkYXRlOiBEYXRlKTogc3RyaW5nIHtcbiAgY29uc3QgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcbiAgY29uc3QgbW9udGggPSBkYXRlLmdldE1vbnRoKCkgKyAxO1xuICBjb25zdCBkYXkgPSBkYXRlLmdldERhdGUoKTtcbiAgY29uc3QgaG91ciA9IGRhdGUuZ2V0SG91cnMoKTtcbiAgY29uc3QgbWludXRlID0gZGF0ZS5nZXRNaW51dGVzKCk7XG5cbiAgcmV0dXJuIFt5ZWFyLCBtb250aCwgZGF5XS5tYXAoZm9ybWF0TnVtYmVyKS5qb2luKCcvJykgKyAnICcgKyBbaG91ciwgbWludXRlXS5tYXAoZm9ybWF0TnVtYmVyKS5qb2luKCc6Jyk7XG59XG5cbi8qKlxuICog6I635Y+W5b2T5YmN6aG16Z2i6Lev55Sx5Y+C5pWwXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRPcHRpb25zKHBhdGg6IHN0cmluZykge1xuICBjb25zdCBwYWdlID0gZ2V0Q3VycmVudFBhZ2VzPElBbnlPYmplY3QsIGFueT4oKS5wb3AoKTtcbiAgaWYgKCEocGFnZSAmJiBwYWdlLnJvdXRlID09PSBwYXRoKSkge1xuICAgIHJldHVybiB3eC5zaG93TW9kYWwoe1xuICAgICAgdGl0bGU6ICfpnZ7ms5Xorr/pl64nLFxuICAgICAgY29udGVudDogJ+i3r+eUseWPguaVsOmUmeivr++8jOWNs+Wwhui/lOWbnuS4u+mhtScsXG4gICAgICBzaG93Q2FuY2VsOiBmYWxzZSxcbiAgICAgIGNvbXBsZXRlKCkge1xuICAgICAgICB3eC5yZUxhdW5jaCh7IHVybDogJy9wYWdlcy9pbmRleC9pbmRleCcgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gcGFnZS5vcHRpb25zIHx8IHt9O1xufVxuXG4vKipcbiAqIOWwhuS7juacjeWKoeWZqOiOt+WPlueahOaVsOaNruWkhOeQhuaIkOmcgOimgeeahOaVsOaNruagvOW8j1xuICogQHBhcmFtIHYg5rqQ5pWw5o2uXG4gKiBAcGFyYW0gaSDmupDmlbDmja7lnKjmlbDmja7liJfooajkuK3nmoTntKLlvJVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlRGF0YTxUIGV4dGVuZHMgSUFjdGl2ZSB8IElDb21tb2RpdHkgfCBJTWVyY2hhbnQ+KHY6IFQsIGk6IG51bWJlciA9IDApOiBUIHtcbiAgdi5hdXRoZW50aWNhdGlvbiA9IFJlZmxlY3QuZ2V0KEFVVEhFTlRJQ0FUSU9OLCB2LmF1dGhlbnRpY2F0aW9uKSB8fCAn5pyq6K6k6K+BJztcblxuICB2Lm9yaWdpbkltZyA9IHYuaW1nICsgJy9mYWxzZSc7IC8vIOS/neWtmOWOn+Wni+WbvueJh1xuICB2LmltZyA9IGdldENvbXByZXNzSW1nKHYuaW1nKTsgLy8g6I635Y+W5Y6L57yp5Zu+54mH6Lev5b6EXG4gIHYuc2lnbiA9IHYuc2lnbiB8fCAwOyAvLyDorr7nva7lt7LlhZHmjaIv5Y+C5Yqg6buY6K6k5YC8XG4gIHYuc2l6ZSA9IHYuc2l6ZSB8fCAwOyAvLyDorr7nva7lj6/lhZHmjaIv5Y+C5Yqg6buY6K6k5YC8XG4gIHYuaW5kZXggPSBpOyAvLyDorr7nva7ntKLlvJVcbiAgdi5pc0NvbGxlY3RlZCA9ICEhdi5saWtlZDsgLy8g6L2s5YyW5piv5ZCm5pS26JePL+WFs+azqOWtl+auteWQjSjor6XlrZfmrrXmmK/liY3nq6/lrozmiJDlkI7mnI3liqHnq6/miY3lnKjov5Tlm57mlbDmja7kuK3mt7vliqDnmoQpXG5cbiAgcmV0dXJuIHY7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdE51bWJlcihuOiBudW1iZXIpIHtcbiAgY29uc3Qgc3RyID0gbi50b1N0cmluZygpO1xuICByZXR1cm4gc3RyWzFdID8gc3RyIDogJzAnICsgc3RyO1xufVxuXG5mdW5jdGlvbiBnZXRDb21wcmVzc0ltZyhzcmM6IHN0cmluZykge1xuICByZXR1cm4gc3JjICsgJy90cnVlJztcbiAgLy8gY29uc3QgaSA9IChzcmMgfHwgJycpLmxhc3RJbmRleE9mKCcuJyk7XG4gIC8vIGlmIChpIDwgMCkge1xuICAvLyAgIHJldHVybiAnL3B1YmxpYy9pbWFnZXMvMjMuanBnJztcbiAgLy8gfVxuXG4gIC8vIHJldHVybiBgJHtzcmMuc3Vic3RyaW5nKDAsIGkpfV8ke0NPTVBSRVNTX1NJWkV9eCR7Q09NUFJFU1NfU0laRX0ke3NyYy5zdWJzdHJpbmcoaSl9YDtcbn1cbiJdfQ==