'use strict';

const koirat = [];
for (let i = 0; i < 6; i++) {
  koirat.push(prompt(`Anna ${i + 1}. koiran nimi: `));
}

koirat.sort().reverse();

for (let i = 0; i < koirat.length; i++) {
  document.getElementById('kohde').innerHTML += `<li>${koirat[i]}</li>`;
}