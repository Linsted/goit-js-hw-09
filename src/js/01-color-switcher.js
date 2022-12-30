function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
    buttonStart: document.querySelector('button[data-start]'),
    buttonStop: document.querySelector('button[data-stop]'),
    body: document.querySelector('body'),
}

const TIME_INTERVAL = 1000;
let ourIntervalId = null;

refs.buttonStart.addEventListener('click', changeBodycolor)
refs.buttonStop.addEventListener('click', stopChangeColor)


function changeBodycolor() { 
    ourIntervalId = setInterval(randomColor, TIME_INTERVAL)
    refs.buttonStart.disabled = true;
};
function randomColor() {
    refs.body.style.backgroundColor = getRandomHexColor()
    }

function stopChangeColor() {
    refs.body.style.backgroundColor = 'white'
    clearInterval(ourIntervalId)
    refs.buttonStart.disabled = false;
}

console.log(1);
