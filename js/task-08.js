const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const email = form.elements.email.value;
  const password = form.elements.password.value;
  
  if (email === "" || password === "") {
    return alert("Please fill in all the fields!");
  } else {
    const saveFormData = {
        Email: `${email}`,
        Password: `${password}`,
    };
    console.log(saveFormData);
  }

  form.reset();
}
