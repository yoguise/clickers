const viewText = document.getElementById('text');

const clicker = document.getElementById('clicker');
let counter = 0;
let onOff = true;
clicker.addEventListener('click', () =>
{
  if (onOff)
  {
    ++counter;
  }
  else
  {
    --counter;
  }

  viewText.style.color = 'rgba(23, 43, 77,.' + counter + ')';

  if (counter === 0 || counter === 9)
  {
    onOff = !onOff;
  }
});
