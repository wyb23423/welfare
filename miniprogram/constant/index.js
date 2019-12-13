"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _a;
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
var AD_TYPE;
(function (AD_TYPE) {
    AD_TYPE[AD_TYPE["INDEX"] = 0] = "INDEX";
    AD_TYPE[AD_TYPE["ACTIVITY"] = 1] = "ACTIVITY";
    AD_TYPE[AD_TYPE["GOODS"] = 2] = "GOODS";
    AD_TYPE[AD_TYPE["PERSON"] = 3] = "PERSON";
})(AD_TYPE = exports.AD_TYPE || (exports.AD_TYPE = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSxJQUFZLGNBS1g7QUFMRCxXQUFZLGNBQWM7SUFDdEIsbURBQVEsQ0FBQTtJQUNSLDZEQUFhLENBQUE7SUFDYiwyREFBWSxDQUFBO0lBQ1osMkRBQVksQ0FBQTtBQUNoQixDQUFDLEVBTFcsY0FBYyxHQUFkLHNCQUFjLEtBQWQsc0JBQWMsUUFLekI7QUFFWSxRQUFBLGNBQWM7SUFDdkIsR0FBQyxjQUFjLENBQUMsSUFBSSxJQUFHLEtBQUs7SUFDNUIsR0FBQyxjQUFjLENBQUMsU0FBUyxJQUFHLE1BQU07SUFDbEMsR0FBQyxjQUFjLENBQUMsUUFBUSxJQUFHLE1BQU07UUFDbkM7QUFFVyxRQUFBLElBQUksR0FBRyw0QkFBNEIsQ0FBQztBQUNwQyxRQUFBLGFBQWEsR0FBRyxHQUFHLENBQUM7QUFFakMsSUFBWSxPQUtYO0FBTEQsV0FBWSxPQUFPO0lBQ2YsdUNBQVMsQ0FBQTtJQUNULDZDQUFZLENBQUE7SUFDWix1Q0FBUyxDQUFBO0lBQ1QseUNBQVUsQ0FBQTtBQUNkLENBQUMsRUFMVyxPQUFPLEdBQVAsZUFBTyxLQUFQLGVBQU8sUUFLbEIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyDorqTor4HnsbvlnotcclxuZXhwb3J0IGVudW0gQXV0aGVudGljYXRpb24ge1xyXG4gICAgbm9uZSA9IDAsIC8vIOacquiupOivgVxyXG4gICAgY29tbW9kaXR5ID0gMSwgLy8g56S+5Yy66K6k6K+BXHJcbiAgICBvZmZpY2lhbCA9IDIsIC8vIOWumOaWueiupOivgVxyXG4gICAgYXVkaXRpbmcgPSAzIC8vIOWuoeaguOS4rVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQVVUSEVOVElDQVRJT04gPSB7XHJcbiAgICBbQXV0aGVudGljYXRpb24ubm9uZV06ICfmnKrorqTor4EnLFxyXG4gICAgW0F1dGhlbnRpY2F0aW9uLmNvbW1vZGl0eV06ICfnpL7ljLrorqTor4EnLFxyXG4gICAgW0F1dGhlbnRpY2F0aW9uLm9mZmljaWFsXTogJ+WumOaWueiupOivgSdcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBIT1NUID0gJ2h0dHBzOi8vd3d3LmNkamNzcS5jbjo4MDgwJzsgLy8gJ2h0dHA6Ly8xOTIuMTY4LjEuMTI4OjgwODAnOyAvLyAgIOivt+axguWfn+WQjVxyXG5leHBvcnQgY29uc3QgQ09NUFJFU1NfU0laRSA9IDMwMDtcclxuXHJcbmV4cG9ydCBlbnVtIEFEX1RZUEUge1xyXG4gICAgSU5ERVggPSAwLFxyXG4gICAgQUNUSVZJVFkgPSAxLFxyXG4gICAgR09PRFMgPSAyLFxyXG4gICAgUEVSU09OID0gM1xyXG59XHJcbiJdfQ==