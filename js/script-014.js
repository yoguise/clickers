const viewCircle = document.getElementById('circle');

const clicker = document.getElementById('clicker');
let counter = 0;
let leftRight = true;
clicker.addEventListener('click', () =>
{
  if (leftRight)
  {
    counter += 10;
  }
  else
  {
    counter -= 10;
  }

  viewCircle.style.transform = 'translateX(' + counter + 'px)';

  if (counter === 0 || counter === 310)
  {
    leftRight = !leftRight;
  }
});
