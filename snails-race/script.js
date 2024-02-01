import { Snail } from "./snail.js";

const snailRacers = [
  { name: "Bung bia", speed: 10, color: "green" },
  { name: "Lala", speed: 20, color: "orange" },
  { name: "Boba", speed: 12, color: "yellow" },
];

snailRacers.forEach ((snailRacer) => {
  const racer = new Snail (snailRacer.name, snailRacer.speed, snailRacer.color);
})
