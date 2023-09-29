// GLOBALS
const displayTime = document.getElementById('display-timer');
const smileFace = document.getElementById('smile');
let newMargin = 10;

// console.log(displayTime);
let timeRemaining = 30;
displayTime.innerText = timeRemaining + " minutes";

// function to display remaining time on screen
function timer() {
    // when timeRemaing === 0 then alert posture check
    for (let i = 30; i >= 0; i--) {
        setTimeout(() => {
            timeRemaining = timeRemaining - 1;
            displayTime.innerText = timeRemaining + 1 + " minutes";
            // console.log("tick: " + (timeRemaining + 1));
            
            if (timeRemaining + 1 <= 0) {
                alert("Posture Check!\nStraighten your back!\nRoll those shoulders!");
            }
            newMargin += 10
            smileFace.style.marginTop = newMargin + "px";
            // quick note for future reference, the * i ensures that the timeout function works per iteration.
        }, 60000 * i);

    }
}

timer();