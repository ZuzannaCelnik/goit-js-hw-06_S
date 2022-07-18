const inputSize = document.querySelector('#font-size-control');
const text = document.querySelector('#text');
inputSize.addEventListener('input', onFontSizeChange);
function onFontSizeChange() {
    text.style.fontSize = `${inputSize.value}px`;
}