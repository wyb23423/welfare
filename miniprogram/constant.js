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
exports.HOST = 'http://192.168.1.145';
function parseData(v) {
    v.authentication = Reflect.get(exports.AUTHENTICATION, v.authentication) || '未认证';
    v.img = '/public/images/23.jpg';
    return v;
}
exports.parseData = parseData;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc3RhbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb25zdGFudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSxJQUFZLFlBS1g7QUFMRCxXQUFZLFlBQVk7SUFDcEIsNkRBQWUsQ0FBQTtJQUNmLHFEQUFXLENBQUE7SUFDWCx1REFBWSxDQUFBO0lBQ1osMkRBQWMsQ0FBQTtBQUNsQixDQUFDLEVBTFcsWUFBWSxHQUFaLG9CQUFZLEtBQVosb0JBQVksUUFLdkI7QUFHRCxJQUFZLGNBSVg7QUFKRCxXQUFZLGNBQWM7SUFDdEIsbURBQVEsQ0FBQTtJQUNSLDZEQUFhLENBQUE7SUFDYiwyREFBWSxDQUFBO0FBQ2hCLENBQUMsRUFKVyxjQUFjLEdBQWQsc0JBQWMsS0FBZCxzQkFBYyxRQUl6QjtBQUVZLFFBQUEsY0FBYztJQUN2QixHQUFDLGNBQWMsQ0FBQyxJQUFJLElBQUcsS0FBSztJQUM1QixHQUFDLGNBQWMsQ0FBQyxTQUFTLElBQUcsTUFBTTtJQUNsQyxHQUFDLGNBQWMsQ0FBQyxRQUFRLElBQUcsTUFBTTtRQUNuQztBQUVXLFFBQUEsSUFBSSxHQUFHLHNCQUFzQixDQUFDO0FBRTNDLFNBQWdCLFNBQVMsQ0FBQyxDQUF1QjtJQUM3QyxDQUFDLENBQUMsY0FBYyxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0JBQWMsRUFBRSxDQUFDLENBQUMsY0FBYyxDQUFDLElBQUksS0FBSyxDQUFDO0lBQzFFLENBQUMsQ0FBQyxHQUFHLEdBQUcsdUJBQXVCLENBQUM7SUFFaEMsT0FBTyxDQUFDLENBQUM7QUFDYixDQUFDO0FBTEQsOEJBS0MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyDmtLvliqjnirbmgIFcclxuZXhwb3J0IGVudW0gQWN0aXZlU3RhdHVzIHtcclxuICAgIHByZXBhcmF0aW9uID0gMCwgLy8g5YeG5aSH5LitXHJcbiAgICBvbmdvaW5nID0gMSwgLy8g6L+b6KGM5LitXHJcbiAgICBjb21wbGV0ZSA9IDIsIC8vIOW3sumhuuWIqeWujOaIkFxyXG4gICAgYWNjaWRlbnRhbCA9IDMgLy8g5oSP5aSW5Lit5q2iXHJcbn1cclxuXHJcbi8vIOiupOivgeexu+Wei1xyXG5leHBvcnQgZW51bSBBdXRoZW50aWNhdGlvbiB7XHJcbiAgICBub25lID0gMCwgLy8g5pyq6K6k6K+BXHJcbiAgICBjb21tb2RpdHkgPSAxLCAvLyDnpL7ljLrorqTor4FcclxuICAgIG9mZmljaWFsID0gMiAvLyDlrpjmlrnorqTor4FcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEFVVEhFTlRJQ0FUSU9OID0ge1xyXG4gICAgW0F1dGhlbnRpY2F0aW9uLm5vbmVdOiAn5pyq6K6k6K+BJyxcclxuICAgIFtBdXRoZW50aWNhdGlvbi5jb21tb2RpdHldOiAn56S+5Yy66K6k6K+BJyxcclxuICAgIFtBdXRoZW50aWNhdGlvbi5vZmZpY2lhbF06ICflrpjmlrnorqTor4EnXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgSE9TVCA9ICdodHRwOi8vMTkyLjE2OC4xLjE0NSc7IC8vIOivt+axguWfn+WQjVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlRGF0YSh2OiBJQ29tbW9kaXR5IHwgSUFjdGl2ZSkge1xyXG4gICAgdi5hdXRoZW50aWNhdGlvbiA9IFJlZmxlY3QuZ2V0KEFVVEhFTlRJQ0FUSU9OLCB2LmF1dGhlbnRpY2F0aW9uKSB8fCAn5pyq6K6k6K+BJztcclxuICAgIHYuaW1nID0gJy9wdWJsaWMvaW1hZ2VzLzIzLmpwZyc7XHJcblxyXG4gICAgcmV0dXJuIHY7XHJcbn1cclxuIl19