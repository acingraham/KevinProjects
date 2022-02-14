const soundEffects = require('node-sound-effects');

// Function that sleeps for however many milliseconds are passed in
function sleep(milliseconds) {
    return new Promise(r => setTimeout(r, milliseconds));
}

(async () => {

    // Don't worry too much about this code. It just prints from 10 to 0 with a 1 second pause between each number.
    for (let i = 5; i >= 0; i--) {
       console.log(i);
       await sleep(1000);
    }

    // We're using https://github.com/entozoon/node-sound-effects to play the alert sound
    soundEffects.play('upload');
})();
