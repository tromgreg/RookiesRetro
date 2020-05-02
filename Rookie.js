$(document).ready(function () {
        
    var m = moment();
    var currentTime = m.format('MMMM Do YYYY, h:mm:ss a');
    var currentDate = m.format("MMM Do YYYY");
    var currentHour = moment().hours();
    console.log('current hour: ', currentHour)
    
    $("#currentDay").text(currentTime);

    //cannot figure out i use (this)
    $(".nes-btn").on("click", function () {
        console.log("button");
        var click = $(this).attr("data-value");
        
        var eventInput = $(click).val("nes-textarea");
        console.log(eventInput);
        localStorage.setItem(click, eventInput);
    });

    let timeStorage = ["#8am", "#9am", "#10am", "#11pm", "#12pm", "#1pm", "#2pm", "#3pm", "#4pm", "#5pm"];

    for (let i = 0; i < timeStorage.length; i++){
        let savedEvent = $('.nes-textarea')
        console.log('localStorage loop');
        $(timeStorage[i]).val(localStorage.getItem(timeStorage[i]));
    };

    //function timeStyle(){
    //     for (let i = 6; i < 18; i++){
             
    //         let hour = '#' + i;
    //         let scheduleHour = parseInt($(hour).attr("id"));
    //         $(hour).removeClass();
    //         if (
    //             scheduleHour > currentHour) {
    //             $(hour).attr("class", "row future");
    //         }
    //         else if (
    //             scheduleHour === currentHour) {
    //             $(hour).attr("class", "row present");
    //         }
    //         else if (
    //             scheduleHour < currentHour) {
    //             $(hour).attr("class", "row past");
    //         }
    //     };
    // }
    // timeStyle();
});    