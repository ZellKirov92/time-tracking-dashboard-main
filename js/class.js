import {data} from "./data/data.js"
 export class Activity {
    constructor(title, daily, weekly, monthly, dailyPrevious, weeklyPrevious, monthlyPrevious) {
        this.title = title
        this.daily = daily
        this.weekly = weekly
        this.monthly = monthly
        this.dailyPrevious = dailyPrevious;
        this.weeklyPrevious = weeklyPrevious;
        this.monthlyPrevious = monthlyPrevious;
    }
}

export const activities = data.map(item => new Activity(
    item.title,
    item.timeframes.daily.current,
    item.timeframes.weekly.current,
    item.timeframes.monthly.current,
    item.timeframes.daily.previous,
    item.timeframes.weekly.previous,
    item.timeframes.monthly.previous
));