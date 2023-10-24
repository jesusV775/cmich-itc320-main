"use strict";

let ftemp = 0;

ftemp = parseFloat(prompt("Enter Farenheit temperature"));
do{

if (ftemp > 212 || ftemp < -100){
    alert("You entered " + ftemp + ".\nEntry must range from -100 to +212.");
    exit();
}

const ctemp = ((ftemp - 32) * (5/9)).toFixed(1);

document.write(`<p>${ftemp} F = ${ctemp} C</p>`);

ftemp = parseFloat(prompt("Enter Farenheit temperature")).toFixed(1);
}
while(ftemp != 999);
