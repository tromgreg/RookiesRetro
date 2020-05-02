$('#date-today h6').text(moment().format('dddd') + ", " + moment().format('MMMM Do YYYY, H:mm:ss a'));

let workDay = {
    "8 AM": "",
    "9 AM": "",
    "10 AM": "",
    "11 AM": "",
    "12 PM": "",
    "1 PM": "",
    "2 PM": "",
    "3 PM": "",
    "4 PM": "",
    "5 PM": "",
  };


$(document).ready(function(){
    if(!localStorage.getItem('workDay')){
        updateCalendarTasks (workDay);
    }else{
        updateCalendarTasks (JSON.parse(localStorage.getItem('workDay')));
    }
})



$(".nes-btn").click(function(){
    console.log('click is registered');
    var value = $(this).closest('.nes-container').find("textarea").val();
    console.log('value: ',value);
    var hourString = $(this).siblings("div").text();

    saveSchedule(hourString, value);
});

function hourNumberFromHourString(hourString) {
    switch(hourString) {
        case "8 AM": return 8;
        case "9 AM": return 9;
        case "10 AM": return 10;
        case "11 AM": return 11;
        case "12 PM": return 12;
        case "1 PM": return 13;
        case "2 PM": return 14;
        case "3 PM": return 15;
        case "4 PM": return 16;
        case "5 PM": return 17;
    }
  }

  function loadCorrectDataSet(){
    result =localStorage.getItem('workDay')
    return (result ? result : workDay);

  }
  
  function initializeLocalStorage() {
      localStorage.setItem('workDay', JSON.stringify(workDay));
  };

function saveToLocalStorage(dayObject) {
    localStorage.setItem('workDay', JSON.stringify(dayObject));
}

function saveSchedule(hourString, val){
    if(!localStorage.getItem('workDay')){
        initializeLocalStorage();
    }
    
    let value = 
    let workHours = JSON.parse(localStorage.getItem('workDay'))
    workHours[hourString] = value

    saveToLocalStorage(workHours);
}

function updateCalendarTasks(dayObject) {
    $("#calendar-row").each(function(index) {
        let res = $(this).closest('.nes-container');
        $(this).find("textarea").text(dayObject[res.text()]);
    })
}    