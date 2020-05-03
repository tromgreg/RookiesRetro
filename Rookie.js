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
        
        var eventInput = $("textarea[data-value='" + click + "']");
        var eventInputVal = eventInput.val();
        localStorage.setItem(click, eventInputVal);
    });
    

    let timeStorage = ["8", "9", "10", "11", "12", "13", "14", "15", "16", "17"];
        console.log(timeStorage);
        
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