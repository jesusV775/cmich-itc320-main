"use strict";

const region1 = [1540, 1130, 1580, 1105];
const region2 = [2010, 1168, 2305, 4102];
const region3 = [2450, 1847, 2710, 2391];
const region4 = [1845, 1491, 1284, 1575];
const region5 = [2120, 1767, 1599, 3888];

const quar1Sales = region1[0] + region2[0] + region3[0] + region4[0] + region5[0];
const quar2Sales = region1[1] + region2[1] + region3[1] + region4[1] + region5[1];
const quar3Sales = region1[2] + region2[2] + region3[2] + region4[2] + region5[2];
const quar4Sales = region1[3] + region2[3] + region3[3] + region4[3] + region5[3];

const reg1Sales = region1[0] + region1[1] + region1[2] + region1[3];
const reg2Sales = region2[0] + region2[1] + region2[2] + region2[3];
const reg3Sales = region3[0] + region3[1] + region3[2] + region3[3];
const reg4Sales = region4[0] + region4[1] + region4[2] + region4[3];
const reg5Sales = region5[0] + region5[1] + region5[2] + region5[3];

const totalSales = reg1Sales + reg2Sales + reg3Sales + reg4Sales+ reg5Sales;

document.write(`<h2>Sales By Quarter</h2>`);
document.write(`<p>Q1: $${quar1Sales}</p>`);
document.write(`<p>Q2: $${quar2Sales}</p>`);
document.write(`<p>Q3: $${quar3Sales}</p>`);
document.write(`<p>Q4: $${quar4Sales}</p><br>`);

document.write(`<h2>Sales By Region</h2>`);
document.write(`<p>Region 1: $${reg1Sales}</p>`);
document.write(`<p>Region 2: $${reg2Sales}</p>`);
document.write(`<p>Region 3: $${reg3Sales}</p>`);
document.write(`<p>Region 4: $${reg4Sales}</p>`);
document.write(`<p>Region 5: $${reg5Sales}</p><br>`);

document.write(`<h2>Total Sales</h2>`);
document.write(`<p>$${totalSales}</p>`);
