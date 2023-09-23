// ? Coxlu ifden asagidaki kimi istifade olunur:
/*
if(sert){

}
if(sert){

}
if(sert){

}
if(sert){

}
Coxlu if den butun if leri isdedir, ancaq ture olmalidirki isdedsin yeniki hansilar ture olursa onuda isdedecek




*/
// let ad=prompt("Zehmet olmasa Adinizi daxil edin:");

// let soyad=prompt("Zehmet olmasa Soyadinizi daxil edin:");
// let fin=prompt("Zehmet olmasa Fin daxil edin:");
// yoxla(ad,soyad,fin);
// function yoxla(ad,soyad, fin) {

//   if (ad != "",soyad!="") {  

//     if (fin.length == 7) {
//         alert("Tebrikler daxil oldunuz");

//     }else{
//         alert("Zehmet olmasa FIN kodunuzu duzgun yazin!");

//     }
//   }else{
//     alert("Zehmet olmasa AD ve Soyadini Yazin");

//   }

// }
let ad = prompt("Zehmet olmasa Adinizi daxil edin:");

let soyad = prompt("Zehmet olmasa Soyadinizi daxil edin:");
let fin = prompt("Zehmet olmasa Fin daxil edin:");
// yoxla1(ad,soyad,fin);
// function yoxla1(ad,soyad,fin){
//     if (ad!="",soyad!="",fin.length==7) {
//         alert("Tebrikler daxil olduz");
//     }
//     if (ad!="",soyad!="",fin.length!=7) {
//         alert("Zehmet olmasa Adinizi, Soyadiniz ve Fin  duzgun daxil edin ")
//     }

// }

yoxla2(ad, soyad, fin);
function yoxla2(ad, soyad, fin) {
  if (ad == "") {
    alert("Zehmet olmasa adinizi duzgun daxil edin!");
    return;
  }
  if (soyad == "") {
    alert("Zehmet olmasa soyadinizi duzgun daxil edin!");
    return;
  }
  if (fin.lengt != 7) {
    alert("Zehmet olmasa FIN duzgun daxil edin!");
    return;
  }
  alert("Tebrikler daxil oldunuz...");
}
