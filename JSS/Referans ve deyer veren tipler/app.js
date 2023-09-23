// ! Referans ve deyer veren tipler haqqinda
// ?1. deyer tipler ilkel tiplerdi yeniki primitiv
/*
.string
.number
.boolean
.underfined
.null
.symbol
bunlar hamisi ilkel yeniki primitiv tiplerdi
deyer veren tiplerdi


*/

let ad = "Nicat";
console.log(typeof ad); //!Burda ilkeldi yeniki primitiv tipdi

// ?2.Referans tipler ilkel olmayan tiplerdi
/*
.array
.obyekt
.function
bunlar ilkel olmayan referans tiplerdi



*/
let arr = [1, 2, 3, 4, 5]; //!Bunlar refarans tiplerdi
console.log(arr);
let obyekt = {
  ad: "Nicat",
  soyad: "Namazov", //!Bunlarda refarans tiplerdi
  yas: 26,
};
console.log(obyekt);
console.log("-----------");

let a = 57;
let b = a;
console.log("a:" + a);
console.log("b:" + a);
console.log("----------");
b = 100;
console.log("a:" + a);
console.log("b:" + b);
/*
Deyer tiplerde men b nin qiymetini deyisdim ancaq bu evvelki koda tesir gostermedi
yeniki deyerini deyisdim ve console 100 olaraq cixardim ancaq refaran tiplerde beke olmur
Deyer tipler ramin steak bolmesinde olur

*/

let arr1 = [1, 2, 3, 4, 5];
let arr3 = [1, 2, 3, 4, 5];
let arr2 = arr1;
if (arr1 == arr3) {
  //Baxanda goruruk ki beraberdi ancaq if serti ilke yoxluyanda bize cavabda beraber deyil yazir sebebi ramda ferqli yerde olur ve buna gorede referans tipler deyirler
  console.log("Beraberdi");
} else {
  console.log("Beraber deyil");
}
console.log(arr1); //Bu qaydada ekran yazdiririq ve problem yaratmir
console.log(arr2);
console.log("----------");
let arr4 = [1, 2, 3, 4];
let arr5 = arr4;

arr5.push(57);
console.log(arr4);
console.log(arr5);
/*
Referans tiplerde arr5 men deyer verdim  ancaq gedib arr4 dede tesir gosterdi bu ona gore referans da sayilir
ancaq deyer tipinde b ye verdiyim qiymet gedib  a ya tesir gostermemisdi arasindaki ferqler bunlardi
Referans tipde loruca desek eyni yere baxirlar birinin basina ne gelse digerlerinede tesir gosterir



*/
