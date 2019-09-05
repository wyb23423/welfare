"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _a;
var ActiveStatus;
(function (ActiveStatus) {
    ActiveStatus[ActiveStatus["preparation"] = 0] = "preparation";
    ActiveStatus[ActiveStatus["ongoing"] = 1] = "ongoing";
    ActiveStatus[ActiveStatus["complete"] = 2] = "complete";
    ActiveStatus[ActiveStatus["accidental"] = 3] = "accidental";
})(ActiveStatus = exports.ActiveStatus || (exports.ActiveStatus = {}));
var Authentication;
(function (Authentication) {
    Authentication[Authentication["none"] = 0] = "none";
    Authentication[Authentication["commodity"] = 1] = "commodity";
    Authentication[Authentication["official"] = 2] = "official";
})(Authentication = exports.Authentication || (exports.Authentication = {}));
exports.AUTHENTICATION = (_a = {},
    _a[Authentication.none] = '未认证',
    _a[Authentication.commodity] = '社区认证',
    _a[Authentication.official] = '官方认证',
    _a);
exports.HOST = 'http://192.168.1.171:8080';
function parseData(v) {
    v.authentication = Reflect.get(exports.AUTHENTICATION, v.authentication) || '未认证';
    v.img = '/public/images/23.jpg';
    v.sign = v.sign || 0;
    v.size = v.size || 0;
    return v;
}
exports.parseData = parseData;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc3RhbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb25zdGFudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSxJQUFZLFlBS1g7QUFMRCxXQUFZLFlBQVk7SUFDcEIsNkRBQWUsQ0FBQTtJQUNmLHFEQUFXLENBQUE7SUFDWCx1REFBWSxDQUFBO0lBQ1osMkRBQWMsQ0FBQTtBQUNsQixDQUFDLEVBTFcsWUFBWSxHQUFaLG9CQUFZLEtBQVosb0JBQVksUUFLdkI7QUFHRCxJQUFZLGNBSVg7QUFKRCxXQUFZLGNBQWM7SUFDdEIsbURBQVEsQ0FBQTtJQUNSLDZEQUFhLENBQUE7SUFDYiwyREFBWSxDQUFBO0FBQ2hCLENBQUMsRUFKVyxjQUFjLEdBQWQsc0JBQWMsS0FBZCxzQkFBYyxRQUl6QjtBQUVZLFFBQUEsY0FBYztJQUN2QixHQUFDLGNBQWMsQ0FBQyxJQUFJLElBQUcsS0FBSztJQUM1QixHQUFDLGNBQWMsQ0FBQyxTQUFTLElBQUcsTUFBTTtJQUNsQyxHQUFDLGNBQWMsQ0FBQyxRQUFRLElBQUcsTUFBTTtRQUNuQztBQUVXLFFBQUEsSUFBSSxHQUFHLDJCQUEyQixDQUFDO0FBRWhELFNBQWdCLFNBQVMsQ0FBQyxDQUF1QjtJQUM3QyxDQUFDLENBQUMsY0FBYyxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0JBQWMsRUFBRSxDQUFDLENBQUMsY0FBYyxDQUFDLElBQUksS0FBSyxDQUFDO0lBQzFFLENBQUMsQ0FBQyxHQUFHLEdBQUcsdUJBQXVCLENBQUM7SUFDMUIsQ0FBRSxDQUFDLElBQUksR0FBUyxDQUFFLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQztJQUNuQyxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDO0lBRXJCLE9BQU8sQ0FBQyxDQUFDO0FBQ2IsQ0FBQztBQVBELDhCQU9DIiwic291cmNlc0NvbnRlbnQiOlsiLy8g5rS75Yqo54q25oCBXHJcbmV4cG9ydCBlbnVtIEFjdGl2ZVN0YXR1cyB7XHJcbiAgICBwcmVwYXJhdGlvbiA9IDAsIC8vIOWHhuWkh+S4rVxyXG4gICAgb25nb2luZyA9IDEsIC8vIOi/m+ihjOS4rVxyXG4gICAgY29tcGxldGUgPSAyLCAvLyDlt7LpobrliKnlrozmiJBcclxuICAgIGFjY2lkZW50YWwgPSAzIC8vIOaEj+WkluS4reatolxyXG59XHJcblxyXG4vLyDorqTor4HnsbvlnotcclxuZXhwb3J0IGVudW0gQXV0aGVudGljYXRpb24ge1xyXG4gICAgbm9uZSA9IDAsIC8vIOacquiupOivgVxyXG4gICAgY29tbW9kaXR5ID0gMSwgLy8g56S+5Yy66K6k6K+BXHJcbiAgICBvZmZpY2lhbCA9IDIgLy8g5a6Y5pa56K6k6K+BXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBBVVRIRU5USUNBVElPTiA9IHtcclxuICAgIFtBdXRoZW50aWNhdGlvbi5ub25lXTogJ+acquiupOivgScsXHJcbiAgICBbQXV0aGVudGljYXRpb24uY29tbW9kaXR5XTogJ+ekvuWMuuiupOivgScsXHJcbiAgICBbQXV0aGVudGljYXRpb24ub2ZmaWNpYWxdOiAn5a6Y5pa56K6k6K+BJ1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IEhPU1QgPSAnaHR0cDovLzE5Mi4xNjguMS4xNzE6ODA4MCc7IC8vIOivt+axguWfn+WQjVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlRGF0YSh2OiBJQ29tbW9kaXR5IHwgSUFjdGl2ZSkge1xyXG4gICAgdi5hdXRoZW50aWNhdGlvbiA9IFJlZmxlY3QuZ2V0KEFVVEhFTlRJQ0FUSU9OLCB2LmF1dGhlbnRpY2F0aW9uKSB8fCAn5pyq6K6k6K+BJztcclxuICAgIHYuaW1nID0gJy9wdWJsaWMvaW1hZ2VzLzIzLmpwZyc7XHJcbiAgICAoPGFueT52KS5zaWduID0gKDxhbnk+dikuc2lnbiB8fCAwO1xyXG4gICAgdi5zaXplID0gdi5zaXplIHx8IDA7XHJcblxyXG4gICAgcmV0dXJuIHY7XHJcbn1cclxuIl19