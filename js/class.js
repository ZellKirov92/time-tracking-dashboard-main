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

const activities = data.map(item => new Activity(
    item.title,
    item.timeframes.daily.current,
    item.timeframes.weekly.current,
    item.timeframes.monthly.current,
    item.timeframes.daily.previous,
    item.timeframes.weekly.previous,
    item.timeframes.monthly.previous
));

export function updateTitles() {
const titleElements = document.getElementsByClassName('title_Activity');

for (let i = 0; i < titleElements.length; i++) {
    titleElements[i].textContent = activities[i].title;
}
}

export function updateDaily () {
    const dailyCurrentElements = document.getElementsByClassName('daily_current');
    const dailyPreviousElements = document.getElementsByClassName('daily_previous');
    for (let i = 0; i < activities.length; i++) {
        dailyCurrentElements[i].textContent = activities[i].daily;
        dailyPreviousElements[i].textContent = activities[i].dailyPrevious;
    }
}

export function updateWeekly () {
    const weeklyCurrentElements = document.getElementsByClassName('weekly_current');
    const weeklyPreviousElements = document.getElementsByClassName('weekly_previous');
    for(let i = 0; i < activities.length; i++) {
        weeklyCurrentElements[i].textContent = activities[i].weekly;
        weeklyPreviousElements[i].textContent = activities[i].weeklyPrevious;
    }
  }

export function updateMonthly () {
    const monthlyCurrentElements = document.getElementsByClassName('monthly_current');
    const monthlyPreviousElements = document.getElementsByClassName('monthly_previous');
    for(let i = 0; i < activities.length; i++) {
        monthlyCurrentElements[i].textContent = activities[i].monthly;
        monthlyPreviousElements[i].textContent = activities[i].monthlyPrevious;
    } 
    
}

  
  