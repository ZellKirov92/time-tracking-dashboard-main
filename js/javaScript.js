import { updateTitles ,updateDaily, updateWeekly, updateMonthly } from "./class.js";
import { displayDaily, displayWeekly, displayMonthly } from "./function.js";
window.onload = function() {
    updateTitles();
    updateDaily();
    displayDaily();
  };

document.getElementById("button_daily").addEventListener("click", (ev) => {
    updateDaily();
    displayDaily();
});

document.getElementById("button_weekly").addEventListener("click", (ev) => {
    ev.preventDefault();
    updateWeekly();
    displayWeekly();
});

document.getElementById("button_monthly").addEventListener("click", (ev) => {
    ev.preventDefault();
    updateMonthly();
    displayMonthly();
});