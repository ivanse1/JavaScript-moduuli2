'use strict';

function check(nimi) {
  for (let ehdokas of ehdokkaat) {
    if (ehdokas.nimi == nimi) {
      ehdokas.votes++;
      return false;
    }
  }
  return true;
}

let määrä = prompt('Anna ehdokkaiden lukumäärä: ');
const ehdokkaat = [];
for (let i = 0; i < määrä; i++) {
  let nimi = prompt(`Anna ${i + 1}. ehdokkaan nimi: `);
  ehdokkaat.push({'nimi': nimi, 'votes': 0});
}

määrä = prompt('Anna äänestäjien lukumäärä: ');
for (let i = 0; i < määrä; i++) {
  let nimi = prompt('Anna ehdokkaan nimi: ');
  if (nimi != '') {
    while (check(nimi)) {
      nimi = prompt('Tämä nimi ei ole luettelossa. Anna ehdokkaan nimi: ');
    }
  }
}

ehdokkaat.sort((a, b) => {
   return b.votes - a.votes;
});
console.log(`Voittaja on ${ehdokkaat[0].nimi}: ${ehdokkaat[0].votes} ääntä.`)
console.log('tulokset: ')
for (let i=0; i<ehdokkaat.length; i++){
  console.log(`${ehdokkaat[i].nimi}: ${ehdokkaat[i].votes} ääntä.`)
}