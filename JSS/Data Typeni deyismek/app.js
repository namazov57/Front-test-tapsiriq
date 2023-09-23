
// ? Data Type larin typelarini deyismek yeniki tipini deyismek

 /*
 Data type novleri:
 strings
 numbers
 booleans
 underfined
 null
 -----------
 birde umumilesmis novu:
 object ve function

 
 */
// ! Asagida stringi numbere deyismek
// let a=5;
// let b="10";
// console.log(a+b); //Burda yapisdirir cunki biri numberdi biri ise string ona gore yan yana yapisdirir
// let c=Number(b); // Bu qaydada stringi numbere deyisdik
// console.log(a+c); 
//    let a=10;
//    let b=parseInt("15.908"); //parseInt yazaraqda numbere deyise bilerik stringi
//    let c=parseFloat("28.9609"); //parseFloat ise misal ucun 1.5 ve ya 10.7 ni ekra cixardir ancaq parseInt ise 1 ve ya 10 cixacaq arasindaki ferq budu
//    console.log(a+b+c);
//    console.log(a+b+c);
// ! Asagida numberi strine deyismek

// let a=57;
// let b=String(43); //Qabaqina string yazib moterizenin icine almaq lazimdi reqemi onda stringe deyisir type

// console.log(a+b);

let a=7;
let b=(3).toString(); //?Birde bu sekilde stringe deyismek olur type
console.log(a+b);

let cavab=String(true);
console.log(cavab);
console.log(typeof cavab); // bu sekilde boolean olmu string olur type cunki string yazaraq deyismisem

let s=Number("A");
console.log(s);
console.log( typeof s); //! Bu sekilde yazanda numbere type cevirir ancaq ki console nan cixir cuni number gore bilmir datanin olduqunu gorur numbere cevirir ancaq ekrana yazdira bilmir herif olduqu ucun

// ! Arraylarida yeniki masivvleride deyisemek olur type ini

let arr =[1,2,3,4,5,6,7,8];
console.log(typeof arr);

let arr1 =String([1,2,3,4,5,6,7,8]);
console.log(typeof arr1);

let arr2 =Number([1,2,3,4,5,6,7,8]); //! ancaq icindekileri yazdirmaz ekranan NAN yazdirir type ini ise deyisir
console.log(typeof arr2);

// ! Arraylari yuxarda yazdiqim kimi string ve number deyismek mumkundur typelarini






     