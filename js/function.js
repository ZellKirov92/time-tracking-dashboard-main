const dailyDisplay = document.getElementsByClassName("display_daily");
const weeklyDisplay = document.getElementsByClassName("display_weekly");
const monthlyDisplay = document.getElementsByClassName("display_monthly");
export function displayDaily () {
    for(let i = 0; i < weeklyDisplay.length; i++) {
        weeklyDisplay[i].style.display = "none";
    }
    for(let i = 0; i < monthlyDisplay.length; i++) {
        monthlyDisplay[i].style.display = "none";
    }
    for(let i = 0; i < dailyDisplay.length; i++) {
        dailyDisplay[i].style.display = "";
    }
}


export function displayWeekly () {;
    for(let i = 0; i < dailyDisplay.length; i++) {
        dailyDisplay[i].style.display = "none";
    }
    for(let i = 0; i < monthlyDisplay.length; i++) {
        monthlyDisplay[i].style.display = "none";
    }
    for(let i = 0; i < weeklyDisplay.length; i++) {
        weeklyDisplay[i].style.display = "";
    }
}

export function displayMonthly () {
    for(let i = 0; i < dailyDisplay.length; i++) {
        dailyDisplay[i].style.display = "none";
    }
    for(let i = 0; i < weeklyDisplay.length; i++) {
        weeklyDisplay[i].style.display = "none";
    }
    for(let i = 0; i < monthlyDisplay.length; i++) {
        monthlyDisplay[i].style.display = "";
    }
}