//add current day of the week and the date w/out the year from Moment
var dayWeek = today.format("dddd, MMM Do")
$("#currentDay").text(dayWeek);

function saveText(){
    console.log("clicked")
}

$("button").on("click", saveText)