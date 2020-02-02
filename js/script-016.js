const viewLoader = document.getElementById('loader');
const viewTimer = document.getElementById('timer');
const viewPercent = document.getElementById('percent');

let timer = 210;
let loader = 0;

const clicker = document.getElementById('clicker');
clicker.addEventListener('click', () =>
{
  if (loader < 98)
  {
    loader += 2;
    timer -= 4;

    viewLoader.style.transform = 'translateX(' + (loader * 4) + 'px)';
    viewPercent.innerHTML = loader + '%';
  }
  else
  {
    timer += 7;
  }

  if (timer < 60)
  {
    viewTimer.innerHTML = timer + 's';
  }
  else
  {
    viewTimer.innerHTML = Math.floor(timer / 60) + 'm ' + (timer % 60) + 's';
  }
});
