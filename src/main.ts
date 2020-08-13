import "./lib/bruhs.js"; // setup bruh count
import { getBeg, getBark } from "./molly.js";

const target = document.getElementById("click")! as HTMLFieldSetElement;
target.style.backgroundImage = `url("${getBeg()}")`;
const aud = new Audio("assets/bruh.mp3");
target.addEventListener("click", () => {
  aud.play();
  aud.currentTime = 0;
  bruhs++;
  target.style.backgroundImage = `url("${getBark()}")`;
  aud.addEventListener("ended", () => {
    target.style.backgroundImage = `url("${getBeg()}")`;
  });
});


// Load buildings
import './buildings/fat.js'
