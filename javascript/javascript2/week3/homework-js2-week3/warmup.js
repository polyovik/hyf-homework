/* 1 */
window.onload = function () {
    setTimeout(function () {
        console.log('Called after 2.5 seconds');
    }, 2500)
}

/* 2 */
function myTimer(delay, stringToLog){
    setTimeout ( () =>{
        console.log(stringToLog)
    }, delay*1000)
}

/* 3 */
const button = document.getElementsByClassName('click')[0];

function toDelayOnButtonClick() {
    setTimeout(function () {
      console.log('Called after 5 seconds');
    }, 5000);
  }

  button.onclick = toDelayOnButtonClick

/* 4 */
const earthLogger = () => {console.log("Earth")};
const saturnLogger = () => {console.log("Saturn")};
function  planetLogFunction (func) {
    func();
}
planetLogFunction(earthLogger);  
planetLogFunction(saturnLogger);

/* 5 */
function getLocation() { 
    navigator.geolocation.getCurrentPosition(function(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    displayLocation(latitude, longitude) 
  });
}

function displayLocation(latitude, longitude) {
    const latitudeText = document.getElementsByClassName("latitude")[0];
    const longitudeText = document.getElementsByClassName("longitude")[0];
    latitudeText.innerHTML = `Your latitude is ${latitude}`;
    longitudeText.innerHTML = `Your latitude is ${longitude}`;
}
/* getLocation() */

/* 7 */
function runAfterDelay(delay,callback){
    setTimeout(callback,delay*1000)
}

runAfterDelay(4,function(){
    console.log('should log after 4 seconds');
})


/* 8 */
window.ondblclick = () => {
   console.log("double click!")
} 



/* 9 */
function logFunnyJoke(){
    console.log("Funny Joke");
  }

  function logBadJoke(){
    console.log ("Bad joke");
  }

/**
 * 
 * @param {boolean} shouldTellFunnyJoke 
 */
const jokeCreator = (shouldTellFunnyJoke, logFunnyJoke, logBadJoke) => shouldTellFunnyJoke ? logFunnyJoke() : logBadJoke();

jokeCreator(true, logFunnyJoke, logBadJoke)

