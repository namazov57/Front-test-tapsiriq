//! Üçrəqəmli ədəd onun rəqəmlərinin üçüncü dərəcədən cəmi özünə bərabər olarsa, Armstronq ədədi adlanır.
//! Məsələn, 153 = 1^3 + 5^3 + 3^3 Armstronq ədədidir. a-dan b-yə qədər bütün Armstronq ədədlərini çap edin.

let a = prompt("Reqem daxil edin");
let cem = 0;

for (let i = 0; i < a.length; i++) { //! a nin uzunlugu qeder dovr etsin
  let b = a.charAt(i); //! CharAt dan istifade ederek indexsini getiririk 0 incini
  cem += b * b * b;  //! Burda ise her defe b nin getirdiyi indexs leri bir birine vurub cem deyiseninin ustune gelir 3 defe ederik dovru
}
if (Number(a) == cem) { //! burda da number ceviririk
  alert("Armstrong ededir:" + cem);
} else {
  alert("Armstrong eded deyil:" + cem);
}
