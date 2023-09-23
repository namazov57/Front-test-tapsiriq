/*
Methodlar tekrarlarin  qarsisini almaq ucun istifade edilir
yeniki kodu 1 defe yazib 10 defe cagirmaq olur hem vaxta qenaet edib hemdeki kodun daha oxunaqli ve seliqeli olur

Paremtirsiz ve geriye deyer dondurmuyen method yazmaq

mehtodlar esas function sonra ise methoda ad veririk misal ucun hesablar yazib icerisinde kodu yaziriq
sonra ise methoddan colde cagiririq
*/
// function ad() { //Misal ucun ad in ici bos olanda parametrsiz methoddur bu
//     console.log("Nicat");
// }
// //? Asagida 5 defe methodu cagirdim ve console da 5 defe yazildi
// ad();
// ad();
// ad();
// ad();
// ad();
let a = 5;
let b = 6;
let c = a * b; // methoddan qiraqda deyisen yaradiriq
function vurma() {
  console.log(c); //Methoddan qiraqda yaranan deyiseni methodun icinde yaziriq ve methoddan colde cagirir methodun adinni ve nece defe cagirsaq o qederde tekar yazir
}
vurma();
vurma();
