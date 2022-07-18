
const form = document.querySelector(".login-form");
form.addEventListener("submit", dataLogin);
function dataLogin(event) {
  event.preventDefault();
  const email = form.elements[0].value;
  const password = form.elements[1].value;
  if (email === "" || password === "") {
      alert("Uzupełnij wszystkie pola aby przejść dalej");
  }
  obj.email = email;
  obj.password = password;
  console.log(obj);
  form.reset();
};