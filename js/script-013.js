const viewCounter = document.getElementById('counter');

const clicker = document.getElementById('clicker');
let counter = 0;
clicker.addEventListener('click', () =>
{
  ++counter;

  if (counter === 11)
  {
    counter = 0;
  }

  viewCounter.innerHTML = counter;
});
