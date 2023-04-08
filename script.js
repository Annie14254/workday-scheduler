
$(function () {

  // div to attach the dynamically created elements to
  var mainDiv = $(".container-lg")

  // variable for the current hour (24-hour format)
  var currentTimeHour = dayjs().format("H")
  console.log(currentTimeHour)

  // create an array of objects of times 9am - 5pm then use a for loop to dynamically create the elements
  // each object contains the div title, the hour value in 24-hour time, and the id for local storage
  // use an if else statement to set background colors

  var times = [
    {
    scheduleTime : "9am", 
    timeValue : 9,
    id : "hour-9"
    }
    ,
    {
    scheduleTime : "10am", 
    timeValue : 10,
    id : "hour-10"
    }
    ,
    {
    scheduleTime : "11am", 
    timeValue : 11,
    id : "hour-11"
    }
    ,
    {
    scheduleTime : "12pm", 
    timeValue : 12,
    id : "hour-12"
    }
    ,
    {
    scheduleTime : "1pm", 
    timeValue : 13,
    id : "hour-13"
    }
    ,
    {
      scheduleTime : "2pm", 
      timeValue : 14,
      id : "hour-14"
    }
    ,
    {
      scheduleTime : "3pm", 
      timeValue : 15,
      id : "hour-15"
    }
    ,
    {
      scheduleTime : "4pm", 
      timeValue : 16,
      id : "hour-16"
    }
    ,
    {
      scheduleTime : "5pm", 
      timeValue : 17,
      id : "hour-17"
    }
    ,
    {
      scheduleTime : "6pm", 
      timeValue : 18,
      id : "hour-18"
    }
    ,
  
  ]

  // time values start at 9 and go to 18 in 24-hour time
  var timeValue = 9
  function generateTimeBlocks(){
    for (var i = 0; i < times.length; i++){

      // the primary div that determines time block, with the id of "hour-x"
      var rowDiv = $("<div>")
      rowDiv.addClass("row time-block")
      rowDiv.attr("id", times[i].id)

      // the div that contains the name of the current hour, e.g. 9am
      var scheduleTimesDiv = $("<div>")
      scheduleTimesDiv.addClass("col-2 col-md-1 hour text-center py-3")
      scheduleTimesDiv.text(times[i].scheduleTime)

      // changeable text area, will be saved to local storage on button press
      var textArea = $("<textarea>")
      textArea.addClass("col-8 col-md-10 description")
      textArea.attr("rows", "3")

      // actual save button for the text area
      var saveButtonDiv = $("<button>")
      saveButtonDiv.addClass("btn saveBtn col-2 col-md-1")
      saveButtonDiv.attr("id", "save-button")
      saveButtonDiv.attr("aria-label", "save")

      var iTag = $("<i>")
      iTag.addClass("fas fa-save")
      iTag.attr("aria-hidden", "true")

      // colors primary div based on the hour values compared to the current hour
      if(times[i].timeValue < currentTimeHour) {
        rowDiv.addClass("past")
      } else if (times[i].timeValue == currentTimeHour) {
        rowDiv.addClass("present")
      } else if (times[i].timeValue > currentTimeHour) {
        rowDiv.addClass("future")
      }

      // appends each div to the page
      mainDiv.append(rowDiv)

      rowDiv.append(scheduleTimesDiv, textArea, saveButtonDiv)
      saveButtonDiv.append(iTag)

      // adding event listener to button to save to local storage
      saveButtonDiv.on("click", function(e){
        e.preventDefault();
        var textAreaValue =  $(this).siblings(".description").val()
        
        var parentID = $(this).parent().attr("id")
        
        localStorage.setItem(parentID, textAreaValue)
      })

      // pulling info from local environment for each hour block
      // this is one of the least efficient things I have ever written, even though it works
      // try to make more efficient later

        $("#hour-9 .description").val(localStorage.getItem("hour-9"))
        $("#hour-10 .description").val(localStorage.getItem("hour-10"))
        $("#hour-11 .description").val(localStorage.getItem("hour-11"))
        $("#hour-12 .description").val(localStorage.getItem("hour-12"))
        $("#hour-13 .description").val(localStorage.getItem("hour-13"))
        $("#hour-14 .description").val(localStorage.getItem("hour-14"))
        $("#hour-15 .description").val(localStorage.getItem("hour-15"))
        $("#hour-16 .description").val(localStorage.getItem("hour-16"))
        $("#hour-17 .description").val(localStorage.getItem("hour-17"))
        $("#hour-18 .description").val(localStorage.getItem("hour-18"))

    }
  }



  generateTimeBlocks();



  // displays the current date in the header of the page

  var currentDay = dayjs()
  $('#currentDay').text(currentDay.format("dddd, MMM D, YYYY"))


});
