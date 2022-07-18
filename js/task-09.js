function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const bodyColor = document.querySelector("body");
const takeColor = document.querySelector(".color");
const takeBackground = document.querySelector(".change-color");
takeBackground.addEventListener("click", () => {
    bodyColor.style.backgroundColor = getRandomHexColor();
    takeColor.textContent = getRandomHexColor();
});