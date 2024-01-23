const input = document.querySelector("#input-num");
const circleContainer = document.querySelector("#circle-container");

const makeCircles = () => {
  if (input.value > 1000 || input.value < 1) {
    window.alert("Vennligst skriv inn et tall mellom 1 og 1000");
    return;
  }
  const circles = document.querySelectorAll(".circle");
  for (let circle of circles) {
    circle.remove();
  }
  for (let i = 1; i <= input.value; i++) {
    const circle = document.createElement("div");
    circle.classList.add("circle");
    circle.textContent = i;
    circle.style.backgroundColor = `#${Math.floor(
      Math.random() * 16777215
    ).toString(16)}`;
    circleContainer.append(circle);
  }
};
