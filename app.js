var displayTime = document.querySelector("#display-time");
var sec = 00;
var min = 00;
var hour = 00;
var onOrOff;
displayTime.innerHTML = "00 : 00 : 00";
function stopWatch(){
    ++sec
    if(sec == 60){
        sec = 0;
        ++min;
        if(min === 60){
            min = 0;
            ++hour
        }
    }
    var s = sec < 10 ? "0" + sec : sec ;
    var m = min < 10 ? "0" + min : min ;
    var h = hour < 10 ? "0" + hour : hour ;

    displayTime.innerHTML = h + " : " + m + " : " + s;
}

function startWatch(){
    onOrOff =   setInterval(stopWatch , 1000)
}

function pauseWatch(){
    clearInterval(onOrOff)
}

function resetWatch(){
    clearInterval(onOrOff)
    sec = 0;
    min = 0;
    hour = 0;
    displayTime.innerHTML = "00 : 00 : 00";
}