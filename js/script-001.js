const viewCounter = document.getElementById('counter');
let counter = 0;

const clicker = document.getElementById('clicker');
clicker.addEventListener('click', () =>
{
  ++counter;
  viewCounter.innerHTML = counter;
});
