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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc3RhbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb25zdGFudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSxJQUFZLFlBS1g7QUFMRCxXQUFZLFlBQVk7SUFDcEIsNkRBQWUsQ0FBQTtJQUNmLHFEQUFXLENBQUE7SUFDWCx1REFBWSxDQUFBO0lBQ1osMkRBQWMsQ0FBQTtBQUNsQixDQUFDLEVBTFcsWUFBWSxHQUFaLG9CQUFZLEtBQVosb0JBQVksUUFLdkI7QUFHRCxJQUFZLGNBSVg7QUFKRCxXQUFZLGNBQWM7SUFDdEIsbURBQVEsQ0FBQTtJQUNSLDZEQUFhLENBQUE7SUFDYiwyREFBWSxDQUFBO0FBQ2hCLENBQUMsRUFKVyxjQUFjLEdBQWQsc0JBQWMsS0FBZCxzQkFBYyxRQUl6QjtBQUVZLFFBQUEsY0FBYztJQUN2QixHQUFDLGNBQWMsQ0FBQyxJQUFJLElBQUcsS0FBSztJQUM1QixHQUFDLGNBQWMsQ0FBQyxTQUFTLElBQUcsTUFBTTtJQUNsQyxHQUFDLGNBQWMsQ0FBQyxRQUFRLElBQUcsTUFBTTtRQUNwQztBQUVZLFFBQUEsSUFBSSxHQUFHLHNCQUFzQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8g5rS75Yqo54q25oCBXHJcbmV4cG9ydCBlbnVtIEFjdGl2ZVN0YXR1cyB7XHJcbiAgICBwcmVwYXJhdGlvbiA9IDAsIC8vIOWHhuWkh+S4rVxyXG4gICAgb25nb2luZyA9IDEsIC8vIOi/m+ihjOS4rVxyXG4gICAgY29tcGxldGUgPSAyLCAvLyDlt7LpobrliKnlrozmiJBcclxuICAgIGFjY2lkZW50YWwgPSAzIC8vIOaEj+WkluS4reatolxyXG59XHJcblxyXG4vLyDorqTor4HnsbvlnotcclxuZXhwb3J0IGVudW0gQXV0aGVudGljYXRpb24ge1xyXG4gICAgbm9uZSA9IDAsIC8vIOacquiupOivgVxyXG4gICAgY29tbW9kaXR5ID0gMSwgLy8g56S+5Yy66K6k6K+BXHJcbiAgICBvZmZpY2lhbCA9IDIgLy8g5a6Y5pa56K6k6K+BXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBBVVRIRU5USUNBVElPTiA9IHtcclxuICAgIFtBdXRoZW50aWNhdGlvbi5ub25lXTogJ+acquiupOivgScsXHJcbiAgICBbQXV0aGVudGljYXRpb24uY29tbW9kaXR5XTogJ+ekvuWMuuiupOivgScsXHJcbiAgICBbQXV0aGVudGljYXRpb24ub2ZmaWNpYWxdOiAn5a6Y5pa56K6k6K+BJ1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgSE9TVCA9ICdodHRwOi8vMTkyLjE2OC4xLjE0NSc7IC8vIOivt+axguWfn+WQjVxyXG4iXX0=