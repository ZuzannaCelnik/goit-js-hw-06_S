let counterValue = 0;
const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');
const valueElement = document.getElementById('value');

valueElement.innerHTML = counterValue;

const decrement = () => {
    counterValue--;
    valueElement.innerHTML = counterValue;
};
const increment = () => {
    counterValue++;
    valueElement.innerHTML = counterValue;
}
decrementButton.addEventListener("click", decrement);
incrementButton.addEventListener("click", increment);
