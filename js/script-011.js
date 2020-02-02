const viewCounter = document.getElementById('counter');
const viewFish = document.getElementById('fish');

const minLeft = 0;
const maxLeft = 560;
const minTop = 0;
const maxTop = 360;
const position =
{
  left: randomInt(minLeft, maxLeft)
};

let inMotion = false;
function updatePosition()
{
  if (counter > 0 && inMotion === false)
  {
    inMotion = true;

    const left = randomInt(minLeft, maxLeft);
    const top = randomInt(minTop, maxTop);
    const time = randomInt(1000, 2000);

    viewFish.style.transitionDuration = time + 'ms';
    if (left > position.left)
    {
      viewFish.style.transform = 'translateX(' + left + 'px) translateY(' + top + 'px) scaleX(-1)';
    }
    else
    {
      viewFish.style.transform = 'translateX(' + left + 'px) translateY(' + top + 'px) scaleX(1)';
    }
    position.left = left;

    setTimeout(()=>
    {
      inMotion = false;
      --counter;
      viewCounter.innerHTML = counter;

      updatePosition();
    }, time);
  }
}

const clicker = document.getElementById('clicker');
let counter = 0;
clicker.addEventListener('click', () =>
{
  ++counter;
  viewCounter.innerHTML = counter;

  updatePosition();
});
