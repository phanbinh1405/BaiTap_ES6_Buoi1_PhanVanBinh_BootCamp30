const colorList = [
  'pallet',
  'viridian',
  'pewter',
  'cerulean',
  'vermillion',
  'lavender',
  'celadon',
  'saffron',
  'fuschia',
  'cinnabar',
];

renderButton = () => {
  const colorContainer = document.querySelector('#colorContainer');
  let html = colorList
    .map((color, i) => {
      return `<button onclick="changeHouseColor('${color}')" class='color-button ${color} ${i === 0 ? 'active' : ''}'></button>`;
    })
    .join('');

  colorContainer.innerHTML = html;
};

window.changeHouseColor = (color) => {
  const houseElement = document.querySelector('#house');
  const buttonListEle = document.querySelectorAll('.color-button');

  houseElement.className = `house ${color}`;
  buttonListEle.forEach((button) => {
    if (button.classList.contains(color)) {
      button.classList.add('active');
    } else {
      button.classList.remove('active');
    }
  });
};

window.addEventListener('load', () => {
  renderButton();
});
