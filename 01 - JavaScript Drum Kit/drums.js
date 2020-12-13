const buttons = document.querySelectorAll('.key');
let keyPressed = document.querySelector(`.key[data-key="0"]`);

function keyPress(e) {
    // Grab the audio by the data attribute that
    // matches the key pressed
    audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    //if no audio, stop the function
    if (!audio) {
        return;
    }
    //rewind audio to the start to allow
    //quick pressses. We don't have to wait for
    //the previous audio to finish
    audio.currentTime= 0;
    //play the audio
    audio.play();

    // Grab the button by the data attribute that
    // matches the key pressed
    keyPressed = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    keyPressed.classList.add('playing');
};

//function to remove class
function removeClass() {
    this.classList.remove('playing');
};

// Listen for a keyup on the window
window.addEventListener('keyup', keyPress);

//listen for transitionend on each key
//we could use setTimeOut within the keyPress function
//but this can easily get out of sync with the
 //css transtion timing
buttons.forEach(key => key.addEventListener('transitionend', removeClass));

