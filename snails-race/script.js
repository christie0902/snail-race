document.addEventListener("DOMContentLoaded", () => {
  moveSnail();
});

const snail = document.querySelector(".snail");

let snailPositionX = 0;
let intervalID;
const speed = 10;

const moveSnail = () => {
  intervalID = setInterval(() => {
    snailPositionX += (40 * speed) / 1000;
    snail.style.left = `${snailPositionX}px`;
    if (snailPositionX > 800) {
      clearInterval(intervalID);
    }
  }, 40);
};
