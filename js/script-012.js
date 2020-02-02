const viewWrapper = document.getElementById('wrapper');

const nBlocks = 100;
const blockHits = [];
function initBuildingBlocks(target, n)
{
  for (let i = 0; i < n; ++i)
  {
    target.insertAdjacentHTML('afterbegin', '<div class="building-block"></div>');

    blockHits.push(false);
  }
}
initBuildingBlocks(viewWrapper, nBlocks);
const blocks = viewWrapper.children;

function hitBlock()
{
  let i = randomInt(0, nBlocks - 1);
  while (blockHits[i] === true)
  {
    i = randomInt(0, nBlocks - 1);
  }
  blockHits[i] = true;

  blocks[i].classList.toggle('hidden');
}

const clicker = document.getElementById('clicker');
let counter = 0;
clicker.addEventListener('click', () =>
{
  if (counter < nBlocks)
  {
    hitBlock();
  }
  ++counter;
});
