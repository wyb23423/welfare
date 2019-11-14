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
exports.HOST = 'https://www.cdjcsq.cn:8080';
exports.COMPRESS_SIZE = 300;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSxJQUFZLFlBS1g7QUFMRCxXQUFZLFlBQVk7SUFDcEIsNkRBQWUsQ0FBQTtJQUNmLHFEQUFXLENBQUE7SUFDWCx1REFBWSxDQUFBO0lBQ1osMkRBQWMsQ0FBQTtBQUNsQixDQUFDLEVBTFcsWUFBWSxHQUFaLG9CQUFZLEtBQVosb0JBQVksUUFLdkI7QUFHRCxJQUFZLGNBSVg7QUFKRCxXQUFZLGNBQWM7SUFDdEIsbURBQVEsQ0FBQTtJQUNSLDZEQUFhLENBQUE7SUFDYiwyREFBWSxDQUFBO0FBQ2hCLENBQUMsRUFKVyxjQUFjLEdBQWQsc0JBQWMsS0FBZCxzQkFBYyxRQUl6QjtBQUVZLFFBQUEsY0FBYztJQUN2QixHQUFDLGNBQWMsQ0FBQyxJQUFJLElBQUcsS0FBSztJQUM1QixHQUFDLGNBQWMsQ0FBQyxTQUFTLElBQUcsTUFBTTtJQUNsQyxHQUFDLGNBQWMsQ0FBQyxRQUFRLElBQUcsTUFBTTtRQUNuQztBQUVXLFFBQUEsSUFBSSxHQUFHLDRCQUE0QixDQUFDO0FBQ3BDLFFBQUEsYUFBYSxHQUFHLEdBQUcsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIOa0u+WKqOeKtuaAgVxyXG5leHBvcnQgZW51bSBBY3RpdmVTdGF0dXMge1xyXG4gICAgcHJlcGFyYXRpb24gPSAwLCAvLyDlh4blpIfkuK1cclxuICAgIG9uZ29pbmcgPSAxLCAvLyDov5vooYzkuK1cclxuICAgIGNvbXBsZXRlID0gMiwgLy8g5bey6aG65Yip5a6M5oiQXHJcbiAgICBhY2NpZGVudGFsID0gMyAvLyDmhI/lpJbkuK3mraJcclxufVxyXG5cclxuLy8g6K6k6K+B57G75Z6LXHJcbmV4cG9ydCBlbnVtIEF1dGhlbnRpY2F0aW9uIHtcclxuICAgIG5vbmUgPSAwLCAvLyDmnKrorqTor4FcclxuICAgIGNvbW1vZGl0eSA9IDEsIC8vIOekvuWMuuiupOivgVxyXG4gICAgb2ZmaWNpYWwgPSAyIC8vIOWumOaWueiupOivgVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQVVUSEVOVElDQVRJT04gPSB7XHJcbiAgICBbQXV0aGVudGljYXRpb24ubm9uZV06ICfmnKrorqTor4EnLFxyXG4gICAgW0F1dGhlbnRpY2F0aW9uLmNvbW1vZGl0eV06ICfnpL7ljLrorqTor4EnLFxyXG4gICAgW0F1dGhlbnRpY2F0aW9uLm9mZmljaWFsXTogJ+WumOaWueiupOivgSdcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBIT1NUID0gJ2h0dHBzOi8vd3d3LmNkamNzcS5jbjo4MDgwJzsgLy8g6K+35rGC5Z+f5ZCNXHJcbmV4cG9ydCBjb25zdCBDT01QUkVTU19TSVpFID0gMzAwO1xyXG4iXX0=