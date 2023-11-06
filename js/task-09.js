function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const colorButton = document.querySelector('.change-color');
const colorText = document.querySelector('.color');

function changeBackgroundColor() {
  const randomColor = getRandomHexColor();
  document.body.style.backgroundColor = randomColor;
  colorText.textContent = randomColor;
}

colorButton.addEventListener('click', changeBackgroundColor);