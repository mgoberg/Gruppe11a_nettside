"use strict";
//Lager en const for alle funksjonene sånn at man kan pakke den opp og sende den til andre javascript filer.
const funksjoner = {
  //Her har vi laget en funksjon for å lage en sirkel.
  sirkel: function (x, y, radius, farge, navn) {
    var canvas = document.getElementById(navn); // Canvas ID på gruppemedlemmet
    var sirkel = canvas.getContext("2d"); // 2d rendering

    sirkel.beginPath(); // Starter tegningen
    sirkel.arc(x, y, radius, 0, 2 * Math.PI); // Tegner sirkel
    sirkel.stroke(); // Sort outline
    sirkel.fillStyle = farge; //Fyll farge
    sirkel.fill(); // Fyller med fargen.
  },
  // Her har vi laget en funksjon for å lage firkant / rektangel.
  firkant: function (x, y, lengde, bredde, rotering, farge, navn) {
    var canvas = document.getElementById(navn); // Canvas ID på gruppemedlemmet
    var firkant = canvas.getContext("2d"); // 2d rendering
    firkant.beginPath(); // Starter tegningen
    firkant.rect(x, y, lengde, bredde); // Posisjon og dimensjonene til et rektangel
    firkant.stroke(); // Sort outline
    firkant.fillStyle = farge; //Fyll farge
    firkant.fill(); // Fyller med fargen.
  },
  firkantSVG: function (x, y, bredde, høyde, outline, farge, navn) {
    const svgNS = "https://www.w3.org/2000/svg";
    const firkantSVG = document.createElementNS(svgNS, "navn");
    firkantSVG.setAttribute("x", x);
    firkantSVG.setAttribute("y", y);
    firkantSVG.setAttribute("width", bredde);
    firkantSVG.setAttribute("height", høyde);
    firkantSVG.setAttribute("stroke", outline);
    firkantSVG.setAttribute("fill", farge);
    const svgCanvas = document.getElementById(navn);
    return firkantSVG;
  },
  // Her har vi laget en funksjon for å lage trekant.
  trekant: function (x, y, x1, y1, x2, y2, farge, navn) {
    var canvas = document.getElementById(navn); // Canvas ID på gruppemedlemmet
    var trekant = canvas.getContext("2d"); // 2d rendering

    trekant.beginPath(); // Starter tegningen
    trekant.moveTo(x, y); // Sub path for å lage flere streker
    trekant.lineTo(x1, y1); // Tegner strek fra x og y til x1 og y1
    trekant.lineTo(x2, y2); // Tegner strek fra x1 og y1 til x2 og y2
    trekant.stroke(); // Sort outline
    trekant.fillStyle = farge; //Fyll farge
    trekant.fill(); // Fyller med fargen.
  },
  // Denne funksjoner danner en sirkel som tar lengde og bredde, slik at vi kan lage en ellipse.
  // Denne funksjonen tar litt mange inputs, så den blir formattert litt rart av prettier extention.
  ellipse: function (
    x,
    y,
    vertikalRaidus,
    horisontalRadius,
    rotasjon,
    startvinkel,
    farge,
    navn
  ) {
    var canvas = document.getElementById(navn); // Canvas ID på gruppemedlemmet
    var ellipse = canvas.getContext("2d"); // 2d rendering

    ellipse.beginPath(); // Starter tegningen
    ellipse.ellipse(
      x,
      y,
      vertikalRaidus,
      horisontalRadius,
      rotasjon,
      startvinkel,
      2 * Math.PI
    ); // Her tegner vi sirkel med en x og en y verdi i lengde og bredde, så vi kan lage en oval.
    ellipse.stroke(); // Sort outline
    ellipse.fillStyle = farge; //Fyll farge
    ellipse.fill(); // Fyller med fargen.
  },
};

// Eksporterer funksjonene fra konstanten som heter funksjoner.
export default funksjoner;
