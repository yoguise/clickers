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
  if (counter < nSquares)
  {
    squares[counter * nSquares + counter].classList.toggle('fill');

    for (let i = counter - 1; i >= 0; --i)
    {
      squares[i * nSquares + counter].classList.toggle('fill');
    }
    for (let j = counter - 1; j >= 0; --j)
    {
      squares[counter * nSquares + j].classList.toggle('fill');
    }
  }
  ++counter;
});
