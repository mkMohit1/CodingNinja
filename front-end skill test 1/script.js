// list of all global variable and also common tag element which requires later
var hour = document.getElementsByClassName("hour");
var minutes = document.getElementsByClassName("minut");
var seconds = document.getElementsByClassName("seconds");

// reset, stop start are used when user click anyone the button
var reset = document.getElementById("reset");
var stop = document.getElementById("stop");
var start = document.getElementById("start");

var hr = 0, mm = 0, sec = 0;
var started = false;
let inter; // inter us used for interval funtion and interval function is define in start listner

// update Display function will update the valu of tage element or stopwatch on display as per the button select
function updateDispaly() {
    hour[0].innerText = parseInt(hr) < 10 ? "0" + hr : hr;
    minutes[0].innerText = parseInt(mm) < 10 ? "0" + mm : mm;
    seconds[0].innerText = parseInt(sec) < 10 ? "0" + sec : sec;
}
updateDispaly();// first time display it may not be requires because we have already set static value in html

// reset handler is used to reset the stopwatch and sets it value as 00:00:00
reset.addEventListener("click", function () {
    clearInterval(inter);
    hr = 0;
    mm = 0;
    sec = 0;
    updateDispaly();
    start.removeAttribute("disabled");
    stop.setAttribute("disabled", true);
});
// stop handler will stop the stopwatch where it was
stop.addEventListener("click", function () {
    clearInterval(inter);
    updateDispaly();
    start.removeAttribute("disabled");
    stop.setAttribute("disabled", true);
});
// start handler will start the stopwatch when it click and then it will disable. disable will remove either stopwatch stop or reset.
start.addEventListener("click", function () {
    inter = setInterval(function () {
        //console.log(sec, mm);
        if (sec == 60) {
            console.log(sec, mm);
            mm = mm + 1;
            sec = 0;
        }
        if (mm == 60) {
            hr = hr + 1;
            mm = 0;
        }
        updateDispaly();
        sec++;
    }, 1000);
    start.setAttribute("disabled", true);
    stop.removeAttribute("disabled");
})