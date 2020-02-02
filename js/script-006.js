const viewText = document.getElementById('text');
const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam porttitor gravida nibh in luctus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In elementum arcu pulvinar, interdum quam ut, iaculis nulla. Sed in leo dui. Fusce tempus ultricies faucibus. Vivamus aliquam, magna id suscipit suscipit, tellus leo sollicitudin lorem, id elementum mauris velit eget urna. Nullam iaculis, dolor id gravida suscipit, leo est accumsan lacus, at commodo est orci iaculis libero. Vivamus non nibh non mauris fringilla lobortis non et justo.';

const clicker = document.getElementById('clicker');
let counter = 0;
clicker.addEventListener('click', () =>
{
  if (counter < text.length)
  {
    viewText.innerHTML =
      text.slice(0, text.length - counter - 1) +
      '<span class="color-black">' +
      text.slice(text.length - counter - 1, text.length) +
      '</span>';
  }
  ++counter;
});
