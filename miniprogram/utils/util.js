"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../constant/index");
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
    v.authentication = Reflect.get(index_1.AUTHENTICATION, v.authentication) || '未认证';
    v.originImg = v.img;
    v.img = v.img + '?thumb=true';
    v.sign = v.attended || v.sign || 0;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInV0aWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyQ0FBbUQ7QUFFbkQsU0FBZ0IsVUFBVSxDQUFDLElBQVU7SUFDbkMsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ2hDLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDbEMsSUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQzNCLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUM3QixJQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFFakMsT0FBTyxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUMzRyxDQUFDO0FBUkQsZ0NBUUM7QUFLRCxTQUFnQixVQUFVLENBQUMsSUFBWTtJQUNyQyxJQUFNLElBQUksR0FBRyxlQUFlLEVBQW1CLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDdEQsSUFBSSxDQUFDLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssSUFBSSxDQUFDLEVBQUU7UUFDbEMsT0FBTyxFQUFFLENBQUMsU0FBUyxDQUFDO1lBQ2xCLEtBQUssRUFBRSxNQUFNO1lBQ2IsT0FBTyxFQUFFLGVBQWU7WUFDeEIsVUFBVSxFQUFFLEtBQUs7WUFDakIsUUFBUTtnQkFDTixFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsR0FBRyxFQUFFLG9CQUFvQixFQUFFLENBQUMsQ0FBQztZQUM3QyxDQUFDO1NBQ0YsQ0FBQyxDQUFDO0tBQ0o7SUFFRCxPQUFPLElBQUksQ0FBQyxPQUFPLElBQUksRUFBRSxDQUFDO0FBQzVCLENBQUM7QUFkRCxnQ0FjQztBQU9ELFNBQWdCLFNBQVMsQ0FBNkMsQ0FBSSxFQUFFLENBQWE7SUFBYixrQkFBQSxFQUFBLEtBQWE7SUFDdkYsQ0FBQyxDQUFDLGNBQWMsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFjLEVBQUUsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxJQUFJLEtBQUssQ0FBQztJQUUxRSxDQUFDLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUM7SUFDcEIsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLGFBQWEsQ0FBQztJQUM5QixDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxRQUFRLElBQUksQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUM7SUFDbkMsQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQztJQUNyQixDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztJQUNaLENBQUMsQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7SUFFMUIsT0FBTyxDQUFDLENBQUM7QUFDWCxDQUFDO0FBWEQsOEJBV0M7QUFFRCxTQUFTLFlBQVksQ0FBQyxDQUFTO0lBQzdCLElBQU0sR0FBRyxHQUFHLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUN6QixPQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO0FBQ2xDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBVVRIRU5USUNBVElPTiB9IGZyb20gJy4uL2NvbnN0YW50L2luZGV4JztcblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFRpbWUoZGF0ZTogRGF0ZSk6IHN0cmluZyB7XG4gIGNvbnN0IHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XG4gIGNvbnN0IG1vbnRoID0gZGF0ZS5nZXRNb250aCgpICsgMTtcbiAgY29uc3QgZGF5ID0gZGF0ZS5nZXREYXRlKCk7XG4gIGNvbnN0IGhvdXIgPSBkYXRlLmdldEhvdXJzKCk7XG4gIGNvbnN0IG1pbnV0ZSA9IGRhdGUuZ2V0TWludXRlcygpO1xuXG4gIHJldHVybiBbeWVhciwgbW9udGgsIGRheV0ubWFwKGZvcm1hdE51bWJlcikuam9pbignLycpICsgJyAnICsgW2hvdXIsIG1pbnV0ZV0ubWFwKGZvcm1hdE51bWJlcikuam9pbignOicpO1xufVxuXG4vKipcbiAqIOiOt+WPluW9k+WJjemhtemdoui3r+eUseWPguaVsFxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0T3B0aW9ucyhwYXRoOiBzdHJpbmcpIHtcbiAgY29uc3QgcGFnZSA9IGdldEN1cnJlbnRQYWdlczxJQW55T2JqZWN0LCBhbnk+KCkucG9wKCk7XG4gIGlmICghKHBhZ2UgJiYgcGFnZS5yb3V0ZSA9PT0gcGF0aCkpIHtcbiAgICByZXR1cm4gd3guc2hvd01vZGFsKHtcbiAgICAgIHRpdGxlOiAn6Z2e5rOV6K6/6ZeuJyxcbiAgICAgIGNvbnRlbnQ6ICfot6/nlLHlj4LmlbDplJnor6/vvIzljbPlsIbov5Tlm57kuLvpobUnLFxuICAgICAgc2hvd0NhbmNlbDogZmFsc2UsXG4gICAgICBjb21wbGV0ZSgpIHtcbiAgICAgICAgd3gucmVMYXVuY2goeyB1cmw6ICcvcGFnZXMvaW5kZXgvaW5kZXgnIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHBhZ2Uub3B0aW9ucyB8fCB7fTtcbn1cblxuLyoqXG4gKiDlsIbku47mnI3liqHlmajojrflj5bnmoTmlbDmja7lpITnkIbmiJDpnIDopoHnmoTmlbDmja7moLzlvI9cbiAqIEBwYXJhbSB2IOa6kOaVsOaNrlxuICogQHBhcmFtIGkg5rqQ5pWw5o2u5Zyo5pWw5o2u5YiX6KGo5Lit55qE57Si5byVXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZURhdGE8VCBleHRlbmRzIElBY3RpdmUgfCBJQ29tbW9kaXR5IHwgSU1lcmNoYW50Pih2OiBULCBpOiBudW1iZXIgPSAwKTogVCB7XG4gIHYuYXV0aGVudGljYXRpb24gPSBSZWZsZWN0LmdldChBVVRIRU5USUNBVElPTiwgdi5hdXRoZW50aWNhdGlvbikgfHwgJ+acquiupOivgSc7XG5cbiAgdi5vcmlnaW5JbWcgPSB2LmltZzsgLy8g5L+d5a2Y5Y6f5aeL5Zu+54mHXG4gIHYuaW1nID0gdi5pbWcgKyAnP3RodW1iPXRydWUnOyAvLyDojrflj5bljovnvKnlm77niYfot6/lvoRcbiAgdi5zaWduID0gdi5hdHRlbmRlZCB8fCB2LnNpZ24gfHwgMDsgLy8g6K6+572u5bey5YWR5o2iL+WPguWKoOm7mOiupOWAvFxuICB2LnNpemUgPSB2LnNpemUgfHwgMDsgLy8g6K6+572u5Y+v5YWR5o2iL+WPguWKoOm7mOiupOWAvFxuICB2LmluZGV4ID0gaTsgLy8g6K6+572u57Si5byVXG4gIHYuaXNDb2xsZWN0ZWQgPSAhIXYubGlrZWQ7IC8vIOi9rOWMluaYr+WQpuaUtuiXjy/lhbPms6jlrZfmrrXlkI0o6K+l5a2X5q615piv5YmN56uv5a6M5oiQ5ZCO5pyN5Yqh56uv5omN5Zyo6L+U5Zue5pWw5o2u5Lit5re75Yqg55qEKVxuXG4gIHJldHVybiB2O1xufVxuXG5mdW5jdGlvbiBmb3JtYXROdW1iZXIobjogbnVtYmVyKSB7XG4gIGNvbnN0IHN0ciA9IG4udG9TdHJpbmcoKTtcbiAgcmV0dXJuIHN0clsxXSA/IHN0ciA6ICcwJyArIHN0cjtcbn1cbiJdfQ==