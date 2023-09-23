/* 
JavaScriptde 3 dene acar sozden istifade olunur bunlar asagidakilardir:
1 ci--Let
2 ci--Var
3 cu--Const


SCOPE-Menasi -ehate dairesi- demekdir
3 nov anlayisi vardirdi:
1 ci--Global Scope:Kodun her yerinde istifade etmek olur
2 ci--Function Scope
3 cu--Block Scope
*/

var number = 57; // ! Acar soz burda --var--deyisen--number--=-operator-deyer de-5-dir
console.log(number);

// JavaScriptde hemise deyisenen istifade olunur

var a = 5; //! Bu şəkildə istifadə olunan kod-- Global Scope dur ve kodun istenilen yerinde cagiraraq istifade etmek olur

while (a <= 1) {
  // var a = 5; // ! Bu sekil  olsa Global Scope olmur!
}
if (true) {
  console.log(a);
}
function method() {
  console.log(a);
}
method();

// Function Scope
function name1() {
  var hesab = 12;
  console.log(hesab); //! Deyiseni methodun icinde verilbse onu methodun icinde cagirmaq lazimdi
}
// console.log(hesab); //! bu qayda olsa-ERROR- alirsan
name1();

// Block Scope
function name2() {
  //! Function Scope
  if (true) {
    var b = 8; //! Bu qaydada yazilsa Block Scopdur ve qiraqdan cagirmaq olmur
    console.log(b);
  }
  // while (ture) {    //!Burdaki if,while,for,do while icinde deyisen yazanda Block Scope olur

  // }
  // for (let i = 0; i <=10; i++) {

  // }
  // do {

  // } while (ture);
}
name2(); // Method yaradanda mutleq methoddan qiraqda cagirmaq lazimdi
