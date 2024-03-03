import { activities } from "./class.js";


export function updateTitles() {
const titleElements = document.getElementsByClassName('title_Activity');

for (let i = 0; i < titleElements.length; i++) {
    titleElements[i].textContent = activities[i].title;
}
}

export function updateData (currentData, previousData) {
    const currentElements = document.getElementsByClassName('current');
    const previousElements = document.getElementsByClassName('previous');
    for (let i = 0; i < activities.length; i++) {
        currentElements[i].textContent = activities[i][currentData] + "hrs";
        previousElements[i].textContent = "Previous - " + activities[i][previousData] + "hrs";
    }
}