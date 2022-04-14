setInterval(setclock, 1000)

var secondsHand = document.querySelector(".second");
var muniteHand = document.querySelector(".munite");
var hourHand = document.querySelector(".hour");
var dateElement = document.querySelector(".currentdate")


const option ={ weekday: "short", month : "short", day: "numeric"};
const  currentDatee = new Date();
dateElement.innerHTML = currentDatee.toLocaleDateString("en-US", option)



function setclock(){
    const  currentDate = new Date();
    const secondsRatio = currentDate.getSeconds() / 60;
    const  munitesRatio = (secondsRatio + currentDate.getMinutes()) / 60;
    const  hoursratio = (munitesRatio + currentDate.getHours()) / 12;
 
    rotation(secondsHand, secondsRatio);
    rotation(muniteHand, munitesRatio);
    rotation(hourHand, hoursratio);

}


function rotation(element, rotationRatio){
    element.style.setProperty("--rotation", rotationRatio * 360)
}

setclock()