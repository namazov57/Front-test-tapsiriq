/*
!Array lerde foreach dovrunu qurmaq
?Massivlerde foreach isdedilir esases

todo: Istesek for ilede massivleri tekrarlara sala bilerik ancaq hemise efektiv olmur

*/
// let arr=[]; //Bos bir massiv yaratdim
// let arr1=new Array("Nicat","Vaqif","Kenan"); //Bu sekildede new array deyerek icerisine deyer vermeklede yaratmaq olur

// console.log(arr1);

// arr[0]="Nicat"; //Bu qaydada bos massivin icerisisine deyer vermek mumkundur
// arr[1]="Vaqif"; //Bu qaydada bos massivin icerisisine deyer vermek mumkundur
// console.log(arr);
// console.log(typeof arr); //Massivlerin type lari object ti

// arr1[0]="Nicat";  //Bu qaydada da deyer vere bilerik
// arr1[1]="Vaqif"; //Bu qaydada da deyer vere bilerik
// console.log( arr1);
// console.log(typeof arr1); //Massivlerin type lari object ti

let adlar = ["Nicat", "Vaqif", "Kenan", "Samir"]; //Burda massiv yaratdim ve icerisine deyer verdim

adlar.forEach(function (ad) {
  //foreach ile console yazdirmaq ucun bu qayda yazilir
  // foreach icinde method yaradib icine deyer verib console da hemen deyiseni cagiraraq foreach dan istifade olunur
  console.log(ad); //Bu sekilde console da gorsenir
});
console.log("----------");
for (let i = 0; i < adlar.length; i++) {
  //<= olmaz massivlerde cunki indeksi 0 dan basladiqi ucun
  //For ilede yazmaq mumkundur
  console.log(adlar[i]);
}
console.log("------------");
let saygac = 0; //saygac yaradiriq while da
while (saygac < adlar.length) {
  //Bu sekilde while yardiriq
  console.log(adlar[saygac]); //Console yazdiririq massivin saygaclarini

  saygac++; //Sonra ise her sefer tekrarlananda 1 artirsinki sonsuz dovr olmasin
}
