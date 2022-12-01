"use strict";

// ZATVORENICI
const zatvorenici = [];
for (let i = 1; i <= 100; i++) {
  zatvorenici.push(i);
}
// console.log(zatvorenici);

//  KUTIJE
const kutije = [];
for (let i = 1; i <= 100; i++) {
  kutije.push(i);
}
// console.log(kutije);

// Provera
// for (let i = 0; i < 100; i++) {
//   if (kutije[i] === zatvorenici[i]) {
//     // console.log(`Sve je kul`, i);
//   } else console.log(`greska na mestu ${i}`);
// }

// MESANJE BROJEVA
const mjesanjeBrojeva = (array) => {
  for (let i = array.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
};
mjesanjeBrojeva(kutije);
console.log(kutije);
let isalivecounter = 0;
let i = 0;
let b = 0;
let uspeh = 0;
let neuspeh = 0;
let uspesniPokusaji = 0;
let neuspesniPokusaji = 0;

for (let t = 0; t < 1000; t++) {
  mjesanjeBrojeva(kutije);
  let isalive = true;
  for (let z = 0; z < 100; z++) {
    if (zatvorenici[z] === kutije[z]) {
      uspeh++;
      //   console
      //     .log
      //    ( `Zatvorenik ${zatvorenici[z]} pronasao je svoj broj iz prvog pokusaja!`);
    } else {
      b = z;
      i = 0;
      while (i < 50 && zatvorenici[z] != kutije[b]) {
        i++;
        b = kutije[b] - 1;
        // console.log(`Zatvorenik ${zatvorenici[z]} nije nasao svoj broj ${b} u ${i} pokusaju.`);
        if (zatvorenici[z] === kutije[b]) {
          uspeh++;
          // console.log( `Zatvorenik ${zatvorenici[z]} nasao je svoj broj iz ${i} pokusaja!`);
        } else if (i === 50 && zatvorenici[z] != kutije[b]) {
          neuspeh++;
          isalive = false;
          //console.log(`Zatvorenik ${zatvorenici[z]} nije pronasao svoj broj ni nakon ${i}. pokusaja`);
        }
        //console.log(zatvorenici[z], " zatvorenik", kutije[b], "kutije" )
      }
    }
  }
  //   console.log(
  //     `Pokusaj br. ${t + 1}: Uspesnih:(${uspeh} ---- Neuspesnih(${neuspeh}))`
  //   );
  uspeh > neuspeh ? uspesniPokusaji++ : neuspesniPokusaji++;
  uspeh = 0;
  neuspeh = 0;
  if (isalive == true) {
    isalivecounter++;
  }
}
// console.log(uspeh, neuspeh);
console.log((100 * isalivecounter) / 1000, "%");
console.log(uspesniPokusaji, neuspesniPokusaji);
console.log(isalivecounter);
