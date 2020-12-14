//Select the clock hands
const hour = document.querySelector('.hour-hand');
const min = document.querySelector('.min-hand');
const sec = document.querySelector('.second-hand');

//Grab the timer
const timer = document.querySelector('h2 > span');
//Set the timer to 0
let timerTotal = 0;

function setDegs() {
    //Create a new date object to get time values from
    const date = new Date();


    //Create a variable for Hour/Min/Sec
    const currentHour = date.getHours();
    const currentMin = date.getMinutes();
    const currentSec = date.getSeconds();
    
    // Convert the current hour into degrees, then offset by 90px
    const hourDegs = ((currentHour / 12) * 360) + 90;
    //Update the hour hand div transform
    hour.style.transform = `rotate(${hourDegs}deg)`;

    // Same as with the hour hand
    const minDegs = ((currentMin / 60) * 360) + 90;
    min.style.transform = `rotate(${minDegs}deg)`;

    // Same as with the hour hand
    const secDegs = ((currentSec / 60) * 360) + 90;
    sec.style.transform = `rotate(${secDegs}deg)`;

    //add 1 to the timer each time the function is ran and
    //update the textcontent
    timerTotal ++;
    timer.textContent = timerTotal;

}

setInterval(setDegs, 1000);



