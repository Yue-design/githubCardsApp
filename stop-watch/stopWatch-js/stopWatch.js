// Initialize the variables
let seconds = 0;
let minutes = 0;

let displaySeconds = 0;
let displayMinutes = 0;

let running = false;
let interval = '';

let view = () => {
  seconds++;
  if (seconds/60 === 1) {
    seconds = 0;
    minutes++;
  };
  if (seconds < 10) {
    displaySeconds = '0' + seconds.toString();
  } else {
    displaySeconds = seconds;
  };
  if (minutes < 10) {
    displayMinutes = '0' + minutes.toString();
  } else {
    displayMinutes = minutes;
  };
  document.getElementById('display').innerHTML = displayMinutes + ":" + displaySeconds;
};

const update = () => {
  if (running === false) {
    interval = window.setInterval(view, 1000);
    document.getElementById('handler').innerHTML = 'Stop';
    running = true;
  } else {
    window.clearInterval(interval);
    document.getElementById('handler').innerHTML = 'Start';
    running = false;
  }
};