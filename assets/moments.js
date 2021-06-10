//add current day of the week and the date w/out the year from Moment
var dayWeek = moment().format("dddd, MMM Do")
$("#currentDay").text(dayWeek);

function saveText(){
    //console.log("clicked")
}

$("button").on("click", saveText)

if (window.localStorage) {
    var mytextarea = document.getElementById("mytextarea");
    mytextarea.value = localStorage.getItem ("textarea");

    mytextarea.addEventListener("input", function() {
        localStorage.setItem("textarea, mytextarea.value");

    })

}