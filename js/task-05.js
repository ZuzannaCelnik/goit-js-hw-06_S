const input1 = document.querySelector("#name-input");
const output1 = document.querySelector("#name-output");
input1.addEventListener("input", (event) => {
  output1.textContent = event.currentTarget.value;
  if (!event.currentTarget.value) {
    output1.textContent = "Anonymous";
  }
});