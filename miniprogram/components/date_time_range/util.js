"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getLayoutData(layout, time) {
    var layoutData = [];
    var argObj = getArgObj(time);
    layout.split(',').forEach(function (v) {
        var key = v.trim();
        var arg = argObj[key];
        if (arg) {
            layoutData.push(createDateArr(arg[0], arg[1], arg[2]));
            delete argObj[key];
        }
    });
    return layoutData;
}
exports.getLayoutData = getLayoutData;
function calcSelIndex(layoutData, time) {
    var date = time ? new Date(time) : new Date();
    return layoutData.map(function (v) {
        return v.findIndex(function (item) {
            var _a = item.match(/(\d+)([^\d]){1}/), num = _a[1], unit = _a[2];
            switch (unit) {
                case '年':
                    return +num === date.getFullYear();
                case '月':
                    return +num === date.getMonth() + 1;
                case '日':
                    return +num === date.getDate();
                case '时':
                    return +num === date.getHours();
                case '分':
                    return +num === date.getMinutes();
                case '秒':
                    return +num === date.getSeconds();
                default: return true;
            }
        });
    });
}
exports.calcSelIndex = calcSelIndex;
function formatTime(layout, timeStamp) {
    if (!timeStamp) {
        return '';
    }
    var date = new Date(timeStamp);
    var dateArr = [];
    if (layout.includes('year')) {
        dateArr.push(date.getFullYear());
    }
    if (layout.includes('month')) {
        dateArr.push(fixed2Len(date.getMonth() + 1));
    }
    if (layout.includes('day')) {
        dateArr.push(fixed2Len(date.getDate()));
    }
    var timeArr = [];
    if (layout.includes('hours')) {
        timeArr.push(fixed2Len(date.getHours()));
    }
    if (layout.includes('minutes')) {
        timeArr.push(fixed2Len(date.getMinutes()));
    }
    if (layout.includes('seconds')) {
        timeArr.push(fixed2Len(date.getSeconds()));
    }
    return (dateArr.join('/') + " " + timeArr.join(':')).trim();
}
exports.formatTime = formatTime;
function createDateArr(count, unit, start) {
    if (start === void 0) { start = 1; }
    return new Array(count).fill(start).map(function (v, i) { return fixed2Len(v + i) + unit; });
}
function fixed2Len(num) {
    return num.toString().padStart(2, '0');
}
function getArgObj(time) {
    var date = time ? new Date(time) : new Date();
    var year = date.getFullYear();
    return {
        year: [20, '年', year - 9],
        month: [12, '月'],
        day: [new Date(year, date.getMonth() + 1, 0).getDate(), '日'],
        hours: [24, '时', 0],
        minutes: [60, '分', 0],
        seconds: [60, '秒', 0]
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInV0aWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFRQSxTQUFnQixhQUFhLENBQUMsTUFBYyxFQUFFLElBQWE7SUFDdkQsSUFBTSxVQUFVLEdBQWUsRUFBRSxDQUFDO0lBQ2xDLElBQU0sTUFBTSxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUUvQixNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFBLENBQUM7UUFDdkIsSUFBTSxHQUFHLEdBQWdCLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNsQyxJQUFNLEdBQUcsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDeEIsSUFBSSxHQUFHLEVBQUU7WUFDTCxVQUFVLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBUyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQVUsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFzQixHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzNGLE9BQU8sTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ3RCO0lBQ0wsQ0FBQyxDQUFDLENBQUM7SUFFSCxPQUFPLFVBQVUsQ0FBQztBQUN0QixDQUFDO0FBZEQsc0NBY0M7QUFHRCxTQUFnQixZQUFZLENBQUMsVUFBc0IsRUFBRSxJQUFhO0lBQzlELElBQU0sSUFBSSxHQUFTLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxFQUFFLENBQUM7SUFFdEQsT0FBTyxVQUFVLENBQUMsR0FBRyxDQUFDLFVBQUEsQ0FBQztRQUNuQixPQUFPLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQSxJQUFJO1lBQ2IsSUFBQSxrQ0FBdUQsRUFBcEQsV0FBRyxFQUFFLFlBQStDLENBQUM7WUFDOUQsUUFBUSxJQUFJLEVBQUU7Z0JBQ1YsS0FB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QUMsQ0FBQztBQUMvRSxDQUFDO0FBRUQsU0FBUyxTQUFTLENBQUMsR0FBVztJQUMxQixPQUFPLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0FBQzNDLENBQUM7QUFFRCxTQUFTLFNBQVMsQ0FBQyxJQUFhO0lBQzVCLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxFQUFFLENBQUM7SUFDaEQsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBRWhDLE9BQU87UUFDSCxJQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUUsR0FBRyxFQUFFLElBQUksR0FBRyxDQUFDLENBQUM7UUFDekIsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQztRQUNoQixHQUFHLEVBQUUsQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRSxHQUFHLENBQUM7UUFDNUQsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFDbkIsT0FBTyxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFDckIsT0FBTyxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7S0FDeEIsQ0FBQTtBQUNMLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICog5pe26Ze06IyD5Zu06YCJ5oup5Zmo57uE5Lu2XHJcbiAqIOW3peWFt+WHveaVsFxyXG4gKi9cclxuXHJcbnR5cGUgRGF0ZVRpbWVLZXkgPSAneWVhcicgfCAnbW9udGgnIHwgJ2RheScgfCAnaG91cnMnIHwgJ21pbnV0ZXMnIHwgJ3NlY29uZHMnO1xyXG5cclxuLy8g5qC55o2u5biD5bGA5a2X56ym5Liy6I635Y+W5ZCE6aG56YCJ6aG55pWw5o2uXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRMYXlvdXREYXRhKGxheW91dDogc3RyaW5nLCB0aW1lPzogbnVtYmVyKSB7XHJcbiAgICBjb25zdCBsYXlvdXREYXRhOiBzdHJpbmdbXVtdID0gW107XHJcbiAgICBjb25zdCBhcmdPYmogPSBnZXRBcmdPYmoodGltZSk7XHJcblxyXG4gICAgbGF5b3V0LnNwbGl0KCcsJykuZm9yRWFjaCh2ID0+IHtcclxuICAgICAgICBjb25zdCBrZXkgPSA8RGF0ZVRpbWVLZXk+di50cmltKCk7XHJcbiAgICAgICAgY29uc3QgYXJnID0gYXJnT2JqW2tleV07XHJcbiAgICAgICAgaWYgKGFyZykge1xyXG4gICAgICAgICAgICBsYXlvdXREYXRhLnB1c2goY3JlYXRlRGF0ZUFycig8bnVtYmVyPmFyZ1swXSwgPHN0cmluZz5hcmdbMV0sIDxudW1iZXIgfCB1bmRlZmluZWQ+YXJnWzJdKSk7XHJcbiAgICAgICAgICAgIGRlbGV0ZSBhcmdPYmpba2V5XTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gbGF5b3V0RGF0YTtcclxufVxyXG5cclxuLy8g5qC55o2u5pe26Ze05oiz6K6h566X5ZCE6aG56YCJ5Lit57Si5byVXHJcbmV4cG9ydCBmdW5jdGlvbiBjYWxjU2VsSW5kZXgobGF5b3V0RGF0YTogc3RyaW5nW11bXSwgdGltZT86IG51bWJlcikge1xyXG4gICAgY29uc3QgZGF0ZTogRGF0ZSA9IHRpbWUgPyBuZXcgRGF0ZSh0aW1lKSA6IG5ldyBEYXRlKCk7XHJcblxyXG4gICAgcmV0dXJuIGxheW91dERhdGEubWFwKHYgPT4ge1xyXG4gICAgICAgIHJldHVybiB2LmZpbmRJbmRleChpdGVtID0+IHtcclxuICAgICAgICAgICAgY29uc3QgWywgbnVtLCB1bml0XSA9IDxzdHJpbmdbXT5pdGVtLm1hdGNoKC8oXFxkKykoW15cXGRdKXsxfS8pO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKHVuaXQpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgJ+W5tCc6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICtudW0gPT09IGRhdGUuZ2V0RnVsbFllYXIoKTtcclxuICAgICAgICAgICAgICAgIGNhc2UgJ+aciCc6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICtudW0gPT09IGRhdGUuZ2V0TW9udGgoKSArIDE7XHJcbiAgICAgICAgICAgICAgICBjYXNlICfml6UnOlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiArbnVtID09PSBkYXRlLmdldERhdGUoKTtcclxuICAgICAgICAgICAgICAgIGNhc2UgJ+aXtic6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICtudW0gPT09IGRhdGUuZ2V0SG91cnMoKTtcclxuICAgICAgICAgICAgICAgIGNhc2UgJ+WIhic6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICtudW0gPT09IGRhdGUuZ2V0TWludXRlcygpO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAn56eSJzpcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gK251bSA9PT0gZGF0ZS5nZXRTZWNvbmRzKCk7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRUaW1lKGxheW91dDogc3RyaW5nLCB0aW1lU3RhbXA/OiBudW1iZXIpIHtcclxuICAgIGlmICghdGltZVN0YW1wKSB7XHJcbiAgICAgICAgcmV0dXJuICcnXHJcbiAgICB9XHJcbiAgICBjb25zdCBkYXRlID0gbmV3IERhdGUodGltZVN0YW1wKTtcclxuXHJcbiAgICBjb25zdCBkYXRlQXJyID0gW107XHJcbiAgICBpZiAobGF5b3V0LmluY2x1ZGVzKCd5ZWFyJykpIHtcclxuICAgICAgICBkYXRlQXJyLnB1c2goZGF0ZS5nZXRGdWxsWWVhcigpKTtcclxuICAgIH1cclxuICAgIGlmIChsYXlvdXQuaW5jbHVkZXMoJ21vbnRoJykpIHtcclxuICAgICAgICBkYXRlQXJyLnB1c2goZml4ZWQyTGVuKGRhdGUuZ2V0TW9udGgoKSArIDEpKTtcclxuICAgIH1cclxuICAgIGlmIChsYXlvdXQuaW5jbHVkZXMoJ2RheScpKSB7XHJcbiAgICAgICAgZGF0ZUFyci5wdXNoKGZpeGVkMkxlbihkYXRlLmdldERhdGUoKSkpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHRpbWVBcnIgPSBbXTtcclxuICAgIGlmIChsYXlvdXQuaW5jbHVkZXMoJ2hvdXJzJykpIHtcclxuICAgICAgICB0aW1lQXJyLnB1c2goZml4ZWQyTGVuKGRhdGUuZ2V0SG91cnMoKSkpO1xyXG4gICAgfVxyXG4gICAgaWYgKGxheW91dC5pbmNsdWRlcygnbWludXRlcycpKSB7XHJcbiAgICAgICAgdGltZUFyci5wdXNoKGZpeGVkMkxlbihkYXRlLmdldE1pbnV0ZXMoKSkpO1xyXG4gICAgfVxyXG4gICAgaWYgKGxheW91dC5pbmNsdWRlcygnc2Vjb25kcycpKSB7XHJcbiAgICAgICAgdGltZUFyci5wdXNoKGZpeGVkMkxlbihkYXRlLmdldFNlY29uZHMoKSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBgJHtkYXRlQXJyLmpvaW4oJy8nKX0gJHt0aW1lQXJyLmpvaW4oJzonKX1gLnRyaW0oKTtcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZURhdGVBcnIoY291bnQ6IG51bWJlciwgdW5pdDogc3RyaW5nLCBzdGFydDogbnVtYmVyID0gMSkge1xyXG4gICAgcmV0dXJuIG5ldyBBcnJheShjb3VudCkuZmlsbChzdGFydCkubWFwKCh2LCBpKSA9PiBmaXhlZDJMZW4odiArIGkpICsgdW5pdCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZpeGVkMkxlbihudW06IG51bWJlcikge1xyXG4gICAgcmV0dXJuIG51bS50b1N0cmluZygpLnBhZFN0YXJ0KDIsICcwJyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEFyZ09iaih0aW1lPzogbnVtYmVyKSB7XHJcbiAgICBjb25zdCBkYXRlID0gdGltZSA/IG5ldyBEYXRlKHRpbWUpIDogbmV3IERhdGUoKTtcclxuICAgIGNvbnN0IHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB5ZWFyOiBbMjAsICflubQnLCB5ZWFyIC0gOV0sXHJcbiAgICAgICAgbW9udGg6IFsxMiwgJ+aciCddLFxyXG4gICAgICAgIGRheTogW25ldyBEYXRlKHllYXIsIGRhdGUuZ2V0TW9udGgoKSArIDEsIDApLmdldERhdGUoKSwgJ+aXpSddLFxyXG4gICAgICAgIGhvdXJzOiBbMjQsICfml7YnLCAwXSxcclxuICAgICAgICBtaW51dGVzOiBbNjAsICfliIYnLCAwXSxcclxuICAgICAgICBzZWNvbmRzOiBbNjAsICfnp5InLCAwXVxyXG4gICAgfVxyXG59Il19