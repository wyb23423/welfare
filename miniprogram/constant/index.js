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
    Authentication[Authentication["auditing"] = 3] = "auditing";
})(Authentication = exports.Authentication || (exports.Authentication = {}));
exports.AUTHENTICATION = (_a = {},
    _a[Authentication.none] = '未认证',
    _a[Authentication.commodity] = '社区认证',
    _a[Authentication.official] = '官方认证',
    _a);
exports.HOST = 'https://www.cdjcsq.cn:8080';
exports.COMPRESS_SIZE = 300;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSxJQUFZLFlBS1g7QUFMRCxXQUFZLFlBQVk7SUFDcEIsNkRBQWUsQ0FBQTtJQUNmLHFEQUFXLENBQUE7SUFDWCx1REFBWSxDQUFBO0lBQ1osMkRBQWMsQ0FBQTtBQUNsQixDQUFDLEVBTFcsWUFBWSxHQUFaLG9CQUFZLEtBQVosb0JBQVksUUFLdkI7QUFHRCxJQUFZLGNBS1g7QUFMRCxXQUFZLGNBQWM7SUFDdEIsbURBQVEsQ0FBQTtJQUNSLDZEQUFhLENBQUE7SUFDYiwyREFBWSxDQUFBO0lBQ1osMkRBQVksQ0FBQTtBQUNoQixDQUFDLEVBTFcsY0FBYyxHQUFkLHNCQUFjLEtBQWQsc0JBQWMsUUFLekI7QUFFWSxRQUFBLGNBQWM7SUFDdkIsR0FBQyxjQUFjLENBQUMsSUFBSSxJQUFHLEtBQUs7SUFDNUIsR0FBQyxjQUFjLENBQUMsU0FBUyxJQUFHLE1BQU07SUFDbEMsR0FBQyxjQUFjLENBQUMsUUFBUSxJQUFHLE1BQU07UUFDbkM7QUFFVyxRQUFBLElBQUksR0FBRyw0QkFBNEIsQ0FBQztBQUNwQyxRQUFBLGFBQWEsR0FBRyxHQUFHLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyDmtLvliqjnirbmgIFcclxuZXhwb3J0IGVudW0gQWN0aXZlU3RhdHVzIHtcclxuICAgIHByZXBhcmF0aW9uID0gMCwgLy8g5YeG5aSH5LitXHJcbiAgICBvbmdvaW5nID0gMSwgLy8g6L+b6KGM5LitXHJcbiAgICBjb21wbGV0ZSA9IDIsIC8vIOW3sumhuuWIqeWujOaIkFxyXG4gICAgYWNjaWRlbnRhbCA9IDMgLy8g5oSP5aSW5Lit5q2iXHJcbn1cclxuXHJcbi8vIOiupOivgeexu+Wei1xyXG5leHBvcnQgZW51bSBBdXRoZW50aWNhdGlvbiB7XHJcbiAgICBub25lID0gMCwgLy8g5pyq6K6k6K+BXHJcbiAgICBjb21tb2RpdHkgPSAxLCAvLyDnpL7ljLrorqTor4FcclxuICAgIG9mZmljaWFsID0gMiwgLy8g5a6Y5pa56K6k6K+BXHJcbiAgICBhdWRpdGluZyA9IDMgLy8g5a6h5qC45LitXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBBVVRIRU5USUNBVElPTiA9IHtcclxuICAgIFtBdXRoZW50aWNhdGlvbi5ub25lXTogJ+acquiupOivgScsXHJcbiAgICBbQXV0aGVudGljYXRpb24uY29tbW9kaXR5XTogJ+ekvuWMuuiupOivgScsXHJcbiAgICBbQXV0aGVudGljYXRpb24ub2ZmaWNpYWxdOiAn5a6Y5pa56K6k6K+BJ1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IEhPU1QgPSAnaHR0cHM6Ly93d3cuY2RqY3NxLmNuOjgwODAnOyAvLyAnaHR0cDovLzE5Mi4xNjguMS4xMjg6ODA4MCc7IOivt+axguWfn+WQjVxyXG5leHBvcnQgY29uc3QgQ09NUFJFU1NfU0laRSA9IDMwMDtcclxuIl19