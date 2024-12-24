/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let buttongeneratecardhtml = document.getElementById("btngencard");
  let buttonflipcardhtml = document.getElementById("flipcard");
  let naipehtml = document.getElementById("naipe");
  let applySizeButton = document.getElementById("applySize");
  let cardWidthInput = document.getElementById("cardWidth");
  let cardHeightInput = document.getElementById("cardHeight");

  buttonflipcardhtml.addEventListener("click", () => {
    naipehtml.classList.toggle("flipcard");
  });

  applySizeButton.addEventListener("click", () => {
    let newWidth = cardWidthInput.value;
    let newHeight = cardHeightInput.value;

    // Si se ingresan valores válidos, aplicarlos al estilo de la carta
    if (newWidth && newHeight) {
      naipehtml.style.width = newWidth + "px";
      naipehtml.style.height = newHeight + "px";
    }
  });

  buttongeneratecardhtml.addEventListener("click", () => {
    const palos = [`♦`, `♥`, `♠`, `♣`];
    const values = [
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "j",
      "q",
      "k",
      "a"
    ];

    let cornerdivtophtml = document.querySelector("#cornerdivtop");
    let cornerspantophtml = document.querySelector("#cornerspantop");
    let cornerspanbothtml = document.querySelector("#cornerspanbot");
    let cornerdivbothtml = document.querySelector("#cornerdivbot");
    let midspannumberhtml = document.querySelector("#midspannumber");
    let randomPalo =
      palos[Math.floor(Math.floor(Math.random() * palos.length))];
    let randomvalue =
      values[Math.floor(Math.floor(Math.random() * values.length))];
    cornerspantophtml.textContent = `${randomPalo}`;
    cornerspanbothtml.textContent = `${randomPalo}`;
    midspannumberhtml.textContent = `${randomvalue}`;
    if (randomPalo === "♥" || randomPalo === "♦") {
      cornerdivbothtml.classList.add("cornerred");
      cornerdivtophtml.classList.add("cornerred");
    }
  });
};
