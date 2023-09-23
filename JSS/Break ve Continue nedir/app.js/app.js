/*
Break in menasi kodun axira kimi davam etmemesini isteyende istifade edirik kodun dayandirmaq istesek ora break yazasaq break dan sonra gelen kod isdemir
Continue ise break dan ferqli olaraq davam etmek ucun istifade olunur kodlardan
Continue ise 1 denesini yazmaz yerde qalanlarini yazdirir

*/
let saygac = 0;
while (saygac <= 10) {
  saygac++;

  if (saygac > 10) {
    //! Burda kod 10 da daxil olmaqla isdeyir ve sonra break yazmisam deye dayanir
    break;
  }
  if (saygac == 4) {
    //! Bu kodda ise Continue yazmisam deye 4 den basqa yerde qalanini yazir ekrana
    continue;
  }
  console.log(saygac);
}
