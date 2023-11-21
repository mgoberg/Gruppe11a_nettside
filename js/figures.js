"use strict";
//Lager en const for alle funksjonene sånn at man kan pakke den opp og sende den til andre javascript filer.
const funksjoner = {
  //Her har vi laget en funksjon for å lage en sirkel.
  sirkel: function (x, y, radius, farge, navn) {
    var canvas = document.getElementById(navn);
    var sirkel = canvas.getContext("2d");

    sirkel.beginPath();
    sirkel.arc(x, y, radius, 0, 2 * Math.PI);
    sirkel.stroke();
    sirkel.fillStyle = farge;
    sirkel.fill();
  },
  // Her har vi laget en funksjon for å lage firkant / rektangel.
  firkant: function (x, y, lengde, bredde, rotering, farge, navn) {
    var canvas = document.getElementById(navn);
    var firkant = canvas.getContext("2d");
    firkant.beginPath();
    firkant.rect(x, y, lengde, bredde);
    firkant.stroke();
    firkant.fillStyle = farge;
    firkant.fill();
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
    var canvas = document.getElementById(navn);
    var trekant = canvas.getContext("2d");

    trekant.beginPath();
    trekant.moveTo(x, y);
    trekant.lineTo(x1, y1);
    trekant.lineTo(x2, y2);
    trekant.fillStyle = farge;
    trekant.fill();
  },
  // Denne funksjoner danner en sirkel som tar lengde og bredde, slik at vi kan lage en ellipse.
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
    var canvas = document.getElementById(navn);
    var ellipse = canvas.getContext("2d");

    ellipse.beginPath();
    ellipse.ellipse(
      x,
      y,
      vertikalRaidus,
      horisontalRadius,
      rotasjon,
      startvinkel,
      2 * Math.PI
    );
    ellipse.stroke();
    ellipse.fillStyle = farge;
    ellipse.fill();
  },
};

// Eksporterer funksjonene fra konstanten.
export default funksjoner;
