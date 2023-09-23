// ? Switch keysler nedir
/*
Switch keysler if else ye oxsayir,ancaq onun qeder cox istifade olunmur
Qurulusu bu curdur:
switch(deyerini yazirsan){

    case 1:
        break;
    case 2:
        break;
    case 3:
        break;
    default:
        break;

}
verdiyiniz deyer 1 e duserse 1 case icindeki isdeyir yox eger 3 e duserse 3 cu isdeyir bunlarin
hec birine dusmese onda default isdiyir eyni iflerdeki kimi yeni if isdemesede sonunda else isdediyi kimi




*/
// let a = prompt(
//   "Zehmet olmasa bir reqem daxil edin ve reqem 1 ile 5 arasinda olsun:"
// );
// switch (a) {
//   case "1":
//     alert("Shamkir");
//     break; //! Burda break istifade etmesek 2 ci case deki koduda isdedecek qisacasi ise break harda varsa orani isdedir ve dayanir,yoxdusa hec birinde break hamisini isdedir
//   case "2":
//     alert("Ganja");
//     break;
//   case "3":
//     alert("Baku");
//     break;
//   case "4":
//     alert("Qabala");
//     break;
//   case "5":
//     alert("Lankaran");
//     break;
//   default:
//     alert("Duzgun reqem daxil edin!");
//     break;
// }
/*
Demeli bu kodda istifadeciden bir deyer aldim ve ona 1-5 arasinda daxil etmesini istedim
ve istifadeci 1-5 arasinda reqem qaxil ederse switch in case leri isdemeye basdadi yox eger 1-5 den ferqli reqem dail etdise onda default isdedi
istifadeci 1 qeyd etdise SHAMKIR cixdi ekrana 3 daxil etdise BAKU bu qeder sade


*/
let a = "\r\n";

let b =
  "1-Bazaretesi" +
  a +
  "2-Cersenbe axsami" +
  a +
  "3-Cersenbe " +
  a +
  "4-Cume axsami" +
  a +
  "5-Cume" +
  a +
  "6-Senbe" +
  a +
  "7-Bazar" +
  a +
  "Yuxardaki heftenin gunlerinin birini secin reqemle.";

let c = prompt(b);
switch (c) {
  case "1":
    alert("Bazarertesi");
    break;
  case "2":
    alert("Cersenbe axsami");
    break;
  case "3":
    alert("Cersenbe");
    break;
  case "4":
    alert("Cume axsami");
    break;
  case "5":
    alert("Cume");
    break;
  case "6":
    alert("Senbe");
    break;
  case "7":
    alert("Bazar");
    break;
  default:
    alert("Zehmet olmasa duzgun daxil edin reqemi");
    break;
}
// ! burdaki kodlada heftenin gunlerini yazdiq switch key lerle cox is gormek olur.
