// ! Sade ve mureekeb edeleri hesablamaq ucun asagidakilari etmek lazimdi
/*
Sade ededler ozune ve 1 e bolunen ededlere deyilir qaliqsiz!
Murekkeb ededler ise 2 ve daha cox bolunen edelere deyilir qaliqsiz!


*/
let a = Number(prompt("Zehmet olmasa reqem daxil edin:"));
let cavab = true;

for (let i = 2; i <= Math.floor(a / 2); i++) {
  //! Bu qaydadda yazilir for un icinde
  if (a % i == 0) {
    //! Bura if serti yaziram ki a nin modunu al yeniki 0 olsun qaliqi

    cavab = false; //! Cavab false olsa onda murekkeb ededir
  }
}
if (cavab) {
  //! Bunu fordan colde yazmaq lazimdiki kodu tekrar size gostermesin
  alert(a + "--Sade ededdir");
} else {
  alert(a + "--Murekkeb ededir");
}
