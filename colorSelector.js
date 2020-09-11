"use strict";

const box = document.querySelector(".color");
const hex = document.querySelector(".hex");
const rgb = document.querySelector(".rgb");
const hsl = document.querySelector(".hsl");
const input = document.querySelector(".input");

document.addEventListener("DOMContentLoaded", start);

function start() {
  input.addEventListener("input", colorBox);
}

function colorBox() {
  let color = document.querySelector(".input").value;
  box.style.backgroundColor = color;

  hexFunc(color);
}

function hexFunc(color) {
  hex.textContent = "HEX:" + color;
  let dec1 = color.substring(1, 3);
  let dec2 = color.substring(3, 5);
  let dec3 = color.substring(5);

  let r = parseInt(dec1, 16);
  let g = parseInt(dec2, 16);
  let b = parseInt(dec3, 16);

  rgbFunc(r, g, b);
  hslFunc(r, g, b);
}

function rgbFunc(r, g, b) {
  rgb.textContent = "RGB:" + r + ", " + g + ", " + b;
}

function hslFunc(r, g, b) {
  r /= 255;
  g /= 255;
  b /= 255;

  let h, s, l;

  const min = Math.min(r, g, b);
  const max = Math.max(r, g, b);

  if (max === min) {
    h = 0;
  } else if (max === r) {
    h = 60 * (0 + (g - b) / (max - min));
  } else if (max === g) {
    h = 60 * (2 + (b - r) / (max - min));
  } else if (max === b) {
    h = 60 * (4 + (r - g) / (max - min));
  }

  if (h < 0) {
    h = h + 360;
  }

  l = (min + max) / 2;

  if (max === 0 || min === 1) {
    s = 0;
  } else {
    s = (max - l) / Math.min(l, 1 - l);
  }
  // multiply s and l by 100 to get the value in percent, rather than [0,1]
  s *= 100;
  l *= 100;

  hsl.textContent =
    "HSL:" +
    h.toPrecision(3) +
    ", " +
    s.toPrecision(3) +
    "%, " +
    l.toPrecision(3) +
    "%";
}
