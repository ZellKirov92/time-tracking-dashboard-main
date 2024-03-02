import { updateTitles, updateData } from "./function.js";

window.onload = function() {
    updateTitles();
    updateData('daily', 'dailyPrevious');
};

document.getElementById("button_daily").addEventListener("click", (ev) => {
    updateData('daily', 'dailyPrevious');
});

document.getElementById("button_weekly").addEventListener("click", (ev) => {
    ev.preventDefault();
    updateData('weekly', 'weeklyPrevious');
});

document.getElementById("button_monthly").addEventListener("click", (ev) => {
    ev.preventDefault();
    updateData('monthly', 'monthlyPrevious');
});

