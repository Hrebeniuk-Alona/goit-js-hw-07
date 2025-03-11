const form = document.querySelector(".login-form");
form.addEventListener("submit", handleSubmit)

function handleSubmit(event) {
    event.preventDefault();
    const elements = event.target.elements;
    const email = elements.email.value.trim();
    const password = elements.password.value.trim(); 
    if (email === "" || password=== "") {
        alert('All form fields must be filled in')
    }
    const info = {
        email: email,
        password: password
    }
    console.log(info);
   
    form.reset()
}

form.style.display = "flex";
form.style.flexWrap = "wrap";
form.style.flexDirection = "column";
form.style.alignItems = "baseline";
form.style.gap = "20px";
form.style.maxWidth = "360px";
form.style.margin = "24px";


