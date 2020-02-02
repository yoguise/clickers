const viewCounter = document.getElementById('counter');

const minSize = 18;
const maxSize = 60;
let size = minSize;

const clicker = document.getElementById('clicker');
let counter = 0;
let upDown = true;
clicker.addEventListener('click', () =>
{
  ++counter;
  viewCounter.innerHTML = counter;

  if (upDown)
  {

    size += 2;
  }
  else
  {
    size -= 2;
  }
  viewCounter.style.fontSize = size + 'px';

  if (size === maxSize || size === minSize)
  {
    upDown = !upDown
  }
});
