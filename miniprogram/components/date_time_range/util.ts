/**
 * 时间范围选择器组件
 * 工具函数
 */

type DateTimeKey = 'year' | 'month' | 'day' | 'hours' | 'minutes' | 'seconds';

// 根据布局字符串获取各项选项数据
export function getLayoutData(layout: string, time?: number) {
    const layoutData: string[][] = [];
    const argObj = getArgObj(time);

    layout.split(',').forEach(v => {
        const key = <DateTimeKey>v.trim();
        const arg = argObj[key];
        if (arg) {
            layoutData.push(createDateArr(<number>arg[0], <string>arg[1], <number | undefined>arg[2]));
            delete argObj[key];
        }
    });

    return layoutData;
}

// 根据时间戳计算各项选中索引
export function calcSelIndex(layoutData: string[][], time?: number) {
    const date: Date = time ? new Date(time) : new Date();

    return layoutData.map(v => {
        return v.findIndex(item => {
            const [, num, unit] = <string[]>item.match(/(\d+)([^\d]){1}/);
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

export function formatTime(layout: string, timeStamp?: number) {
    if (!timeStamp) {
        return ''
    }
    const date = new Date(timeStamp);

    const dateArr = [];
    if (layout.includes('year')) {
        dateArr.push(date.getFullYear());
    }
    if (layout.includes('month')) {
        dateArr.push(fixed2Len(date.getMonth() + 1));
    }
    if (layout.includes('day')) {
        dateArr.push(fixed2Len(date.getDate()));
    }

    const timeArr = [];
    if (layout.includes('hours')) {
        timeArr.push(fixed2Len(date.getHours()));
    }
    if (layout.includes('minutes')) {
        timeArr.push(fixed2Len(date.getMinutes()));
    }
    if (layout.includes('seconds')) {
        timeArr.push(fixed2Len(date.getSeconds()));
    }

    return `${dateArr.join('/')} ${timeArr.join(':')}`.trim();
}


function createDateArr(count: number, unit: string, start: number = 1) {
    return new Array(count).fill(start).map((v, i) => fixed2Len(v + i) + unit);
}

function fixed2Len(num: number) {
    return num.toString().padStart(2, '0');
}

function getArgObj(time?: number) {
    const date = time ? new Date(time) : new Date();
    const year = date.getFullYear();

    return {
        year: [20, '年', year - 9],
        month: [12, '月'],
        day: [new Date(year, date.getMonth() + 1, 0).getDate(), '日'],
        hours: [24, '时', 0],
        minutes: [60, '分', 0],
        seconds: [60, '秒', 0]
    }
}