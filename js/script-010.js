const viewCounter = document.getElementById('counter');

const viewMessage = document.getElementById('message');
const messagesA =
[
  'Nice one.', 'Nice two.', 'Nice three.', 'Nice four.', 'Nice five.', 'Nice six.', 'Nice seven.', 'Nice eight.', 'Nice nine.', 'You are on fire!',
];

const clicker = document.getElementById('clicker');
let counter = 0;
clicker.addEventListener('click', () =>
{
  if (counter < 10)
  {
    viewMessage.innerHTML = messagesA[counter];
  }
  else if (counter === 20)
  {
    viewMessage.innerHTML = 'Keep it up.';
  }
  else if (counter === 30)
  {
    viewMessage.innerHTML = 'Almost...';
  }
  else if (counter === 35)
  {
    viewMessage.innerHTML = 'Almost th...';
  }
  else if (counter === 40)
  {
    viewMessage.innerHTML = 'Almost there.';
  }
  else if (counter === 50)
  {
    viewMessage.innerHTML = 'Awesome virtual job!';
  }

  ++counter;
  viewCounter.innerHTML = counter;
});
