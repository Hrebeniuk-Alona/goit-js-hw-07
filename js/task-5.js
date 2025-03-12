function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btn = document.querySelector(".change-color");
const body = document.querySelector("body");
const span = document.querySelector(".color");

btn.addEventListener("click", handleClick)


function handleClick(event) {
  const color =getRandomHexColor();
  body.style.backgroundColor = color;
  span.textContent = color;

}

btn.style.backgroundColor = " #4e75ff";
btn.style.border = "none";
btn.style.borderRadius= "8px";
btn.style.padding="8px 16px";
btn.style.width="148px";
btn.style.height = "40px";
btn.style.fontWeight="500";
btn.style.fontSize= "16px";
btn.style.color = "#fff";

const container = document.querySelector(".widget");
container.style.display = "flex";
container.style.alignItems= "center";
container.style.flexDirection= "column";
container.style.gap = "16px";

