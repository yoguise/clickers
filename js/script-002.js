function initSquares(n, target)
{
  for (let i = 0; i < n * n; ++i)
  {
    target.insertAdjacentHTML('afterbegin', '<div class="square"></div>');
  }
}

const viewWrapper = document.getElementById('wrapper');
const nSquares = 10;
initSquares(nSquares, viewWrapper);

const squares = document.getElementById('wrapper').children;
const clicker = document.getElementById('clicker');
let counter = 0;
clicker.addEventListener('click', () =>
{
  if (counter < nSquares * nSquares)
  {
    squares[counter].classList.toggle('fill');
  }
  ++counter;
});
