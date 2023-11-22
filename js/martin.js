"use strict";
//Importerer funksjonene fra figures.js.
import funksjoner from "./figures.js";

//Produserer figuren jeg laget i Pyret i Canvas API.

// Nærmere beskrivelse av hvordan disse calles - objektet.metoden(alle parameterne);
funksjoner.firkant(110, 90, 80, 60, 45, "#d18a26", "martinCanvas");
funksjoner.firkant(115, 40, 10, 30, 45, "#a86032", "martinCanvas");
funksjoner.trekant(100, 90, 200, 90, 150, 20, "#a86032", "martinCanvas");
funksjoner.firkant(120, 100, 20, 20, 45, "white", "martinCanvas");
funksjoner.firkant(122, 102, 15, 15, 45, "#bcd6d3", "martinCanvas");
funksjoner.firkant(141, 125, 15, 30, 45, "black", "martinCanvas");
funksjoner.firkant(128, 102, 1, 15, 45, "black", "martinCanvas");
funksjoner.firkant(122, 109, 15, 1, 45, "black", "martinCanvas");

funksjoner.firkantSVG(50, 120, 100, 200, "black", "#d18a26", "martinSVG");
