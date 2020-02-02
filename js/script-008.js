const viewCircle = document.getElementById('circle');
const viewPlus = document.getElementById('plus');

const viewCounter = document.getElementById('counter');
const viewPerSecond = document.getElementById('per-second');

const clicker = document.getElementById('clicker');
let counter = 0;
let perSecond = 0;
let isSecondPassed = false;
clicker.addEventListener('click', () =>
{
  viewCircle.style.transform = 'rotate(' + (counter % 360) + 'deg)';
  viewPlus.style.transform = 'rotate(' + (-counter % 360) + 'deg)';

  ++counter;
  viewCounter.innerHTML = counter;

  ++perSecond;
  if (!isSecondPassed)
  {
    isSecondPassed = true;
    setTimeout(() =>
    {
      isSecondPassed = false;
      viewPerSecond.innerHTML = perSecond;
      perSecond = 0;
    }, 1000);
  }
});
