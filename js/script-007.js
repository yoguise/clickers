const viewText = document.getElementById('text');
const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam porttitor gravida nibh in luctus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In elementum arcu pulvinar, interdum quam ut, iaculis nulla. Sed in leo dui. Fusce tempus ultricies faucibus. Vivamus aliquam, magna id suscipit suscipit, tellus leo sollicitudin lorem, id elementum mauris velit eget urna. Nullam iaculis, dolor id gravida suscipit, leo est accumsan lacus, at commodo est orci iaculis libero. Vivamus non nibh non mauris fringilla lobortis non et justo.';

const letters = [];
function initLetters()
{
  for (let i = 0; i < text.length; ++i)
  {
    letters.push(
    {
      letter: text[i],
      isHit: false
    });
  }
}
initLetters();

function hitLetter()
{
  const at = randomInt(0, text.length - 1);
  let isHit = false;

  // Find first !isHit letter from [at, letters.length>
  for (let i = at; i < letters.length; ++i)
  {
    if (letters[i].isHit === false)
    {
      letters[i].isHit = true;
      isHit = true;
      break;
    }
  }
  // If it didn't find !isHit letter from second half of range, find from first half
  // Find first !isHit letter from [0, at>
  if (!isHit)
  {
    for (let i = 0; i < at; ++i)
    {
      if (letters[i].isHit === false)
      {
        letters[i].isHit = true;
        break;
      }
    }
  }
}

function updateText()
{
  let str = '';

  // Find black and white substrings
  for (let i = 0; i < letters.length; )
  {
    let j = i + 1;
    for ( ; j < letters.length; ++j)
    {
      if (letters[i].isHit !== letters[j].isHit)
      {
        break;
      }
    }

    if (letters[i].isHit === false)
    {
      str += text.slice(i, j);
    }
    else
    {
      str += '<span class="color-black">' + text.slice(i, j) + '</span>';
    }

    i = j;
  }

  viewText.innerHTML = str;
}

const clicker = document.getElementById('clicker');
let counter = 0;
clicker.addEventListener('click', () =>
{
  if (counter < text.length)
  {
    hitLetter();
    updateText();
  }
  ++counter;
});
