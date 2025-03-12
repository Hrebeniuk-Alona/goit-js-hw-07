const textInput = document.querySelector("#name-input");
const userName = document.querySelector("#name-output");

textInput.addEventListener("input", handleInput)

function handleInput(event) {
    let name = event.target.value.trim();
    if (name === "") {
        userName.textContent= "Anonymous";
    } else {
        userName.textContent = name
    }
}


const title = document.querySelector("h1");
title.style.fontWeight = "600";
title.style.fontSize = "24px";
title.style.color = "#2e2f42";
textInput.style.minWidth = "360px";
textInput.style.height = "40px";

