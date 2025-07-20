function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.body;
const changeColorButton = document.querySelector('button.change-color');
const colorSpan = document.querySelector('span.color');

changeColorButton.addEventListener('click', () => {
  const randomColor = getRandomHexColor();
  
  body.style.backgroundColor = randomColor;
  
  colorSpan.textContent = randomColor;
});