/*
clock app
*/

// initialization basic variables
init();

// add event handlers
// step one: implementing a twenty-four hour clock to the 'btn-full' button
document.querySelector('.btn-full').addEventListener('click', () => { 
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();
    const printTime = hours + ':' + minutes + ':' + seconds;
    document.querySelector('.clock-0-panel').style.display = 'initial';
    document.querySelector('.clock-1-panel').style.display = 'none';
    document.getElementById('time-0').textContent = printTime;
});


// step two: implementing a tweleve-hour clock function to the 'btn-full' button
document.querySelector('.btn-half').addEventListener('click', () => {
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();
    const footer = (hours <= 12) ? 'AM' : 'PM';
    const printTime2 = hours + ':' + minutes + ':' + seconds + footer;
    document.querySelector('.clock-1-panel').style.display = 'initial';
    document.querySelector('.clock-0-panel').style.display = 'none';
    //document.querySelector('.clock-1-panel').style.display = 'initial';
    document.getElementById('time-1').textContent = printTime2;
    // if (hours > 12) {
    //     document.write(hours + ':' + minutes + ':' + seconds + 'PM');
    // } else {
    //     document.write(hours + ':' + minutes + ':' + seconds + 'AM');
    // }
});

// step four: connecting with the stop watch

// step three: initialization
// creating a game initialization function
document.querySelector('.btn-new').addEventListener('click', init);
// const init = () => {
function init() {
    document.querySelector('.clock-0-panel').style.display = 'initial';
    document.querySelector('.clock-1-panel').style.display = 'none';
}