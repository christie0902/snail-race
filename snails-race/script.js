import { Snail } from "./snail.js";

// const snailRacers = [
//   { name: "Bung bia", speed: 10, color: "green" },
//   { name: "Lala", speed: 20, color: "orange" },
//   { name: "Boba", speed: 12, color: "yellow" },
// ];

const loadData = async () => {
  const response = await fetch('https://classes.codingbootcamp.cz/assets/classes/api/snails.php?number=3');
  const data = await response.json();
  createRacerArr(data);
}

const createRacerArr = (data) => {
  data.forEach ((snailRacer) => {
  const racer = new Snail (snailRacer.name, snailRacer.velocity, snailRacer.color);
})
}

loadData()