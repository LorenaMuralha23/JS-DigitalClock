  //function that controls the clock
  function clock(){
    var date = new Date();
    var hr = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();

    //fixing the layout 
    if(hr<10){
        hr="0"+hr;
    }
    if(min<10){
        min = "0"+min;
    }
    if(sec < 10){
        sec = "0"+sec;
    }

    var hours = hr+":"+min+":"+sec;
    document.getElementById("digClock").value=hours;
}

var tempo=setInterval(clock, 1000); //update the hour per 1sec (1000ms)
