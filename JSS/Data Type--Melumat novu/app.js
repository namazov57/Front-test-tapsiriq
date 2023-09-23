
// ? Data Type yeniki Melumat novleri demekdir

/*
Asagidaki novleri var:
1 ci String
2 ci Number
3 cu Boolean
4 cu Null
5 ci Underfined
6 ci Object
7 ci Function
*/ 
//String type
let ad="Nicat"; // String yazilisda deyer dirnaqlardan istifade olunur ve dirnaqin icinde reqemde istifade etmek olur reqemde string olur
console.log(ad); // Ad deyisenin novunu gormek ucun logun icinde deyisenin qabaqina typeoff yazmaq lazimdi

//Number type
let a=22.5;
console.log(typeof a); // Novunu gormek ucun bu qayda yazilir typeof deyisenin

// let b="30";
// let c="27";
// console.log(b+c); // Burda topla emeliyyatini yerine yetirmez cunki type string di buna fiki vermek lazimdi

let b=30;
let c=27;
console.log(b+c); // Bu sekilde olsa topla emelliyatini yerine yetirir cunki number di type 

let yas="Yasiniz:" +25;
console.log(yas); // Bele olanda string ile number i yan yana getirir

//Boolean:ture ve ya false demekdir menasi.Ya ture gelir yadaki false

console.log(5>6); // boolean false alir burda
console.log(5<6); // boolean true alir burda
// Null type
let z =null; // bos deyer demekdir ancaq sonra deyer vermek olur
// z=12; //bu qaydada yazilanda artiq icerisine 12 deyerini verdim

console.log(z);

//Underfined type

let r; //Bu sekilde olsa UNDERFINED olur deyisen yardilib ancaq her hansi deyer yoxdu demekdir
console.log(r); 
//Asagidaki type lar yuxardakilardan ferqlenir bunlar --REFERANS-- type deyilir

//OBJECT type

let insan ={
    ad:"Nicat",
    soyad:"Namazov", //Bu qaydada yazilirsa type object di
    yas :25
}
console.log(insan);

let say =[1,2,3,4,5,6,7,8,9];
console.log(say); //ARRAY larda Object novundedi yadda qalsin

// FUNCTION type

let func =function(){
    console.log("Salam Millet"); // Bu qaydada olanda ise function type olur
}
console.log(func);
func();








