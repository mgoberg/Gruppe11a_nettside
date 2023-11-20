"use strict";
//Sirkel
const funksjoner = {
  sirkel: function (x, y, radius, farge, navn) {
    var canvas = document.getElementById(navn);
    var sirkel = canvas.getContext("2d");

    sirkel.beginPath();
    sirkel.arc(x, y, radius, 0, 2 * Math.PI);
    sirkel.stroke();
    sirkel.fillStyle = farge;
    sirkel.fill();
  },

  firkant: function (x, y, lengde, bredde, rotering, farge, navn) {
    var canvas = document.getElementById(navn);
    var firkant = canvas.getContext("2d");
    firkant.beginPath();
    firkant.rect(x, y, lengde, bredde);
    firkant.stroke();
    firkant.fillStyle = farge;
    firkant.fill();
  },

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

// Bruk funksjonen med koordinater og ønsket farge
export default funksjoner;
//Rektangel

//Stjerne
