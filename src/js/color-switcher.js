const bodyEl = document.querySelector('body');
const startBtnEl = document.querySelector('button[data-action="start"]');
const stopBtnEl = document.querySelector('button[data-action="stop"]');
stopBtnEl.disabled = true;

const colors = ['#FFFFFF', '#2196F3', '#4CAF50', '#FF9800', '#009688', '#795548'];
let intervalId = null;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

startBtnEl.addEventListener('click', onStartBtnClickHandler);
stopBtnEl.addEventListener('click', onStopBtnClickHandler);

function onStartBtnClickHandler() {
  intervalId = setInterval(() => {
    bodyEl.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length - 1)];
  }, 1000);
  startBtnEl.disabled = true;
  stopBtnEl.disabled = false;
}

function onStopBtnClickHandler() {
  clearInterval(intervalId);
  startBtnEl.disabled = false;
  stopBtnEl.disabled = true;
}
