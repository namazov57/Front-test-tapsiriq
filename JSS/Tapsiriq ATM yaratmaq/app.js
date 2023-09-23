// ? Bonkamat yaratmaq ucun neleri etmeliyik
/*
1-Balans gorsensin
2-Pul cekmek
3-Pul daxil etsin
4-Cixis
Bu sadaladiqlarimiz ATM aiddir
*/

let s = "\r\n";
let p = 1000;

let ekran =
  "1-Balans" +
  s +
  "2-Pul cekmek" +
  s +
  "3-Pul daxil etmek" +
  s +
  "4-Cixis" +
  s +
  "Zehmet olmasa 1-4 arasinda reqem daxil edin";
// prompt(ekran);
/*
Kodun bu hisesine kimi ekranda alt alt yazilsin 
Balansi ozumuz teyin etdik
Sonra ise ekrana cixmaq istediyimiz yazilari yazdiq


*/ 

let sec = prompt(ekran);

switch (sec) {
  case "1":
    alert("Balansiniz:" + p);
    prompt(ekran);
    break;
  case "2":
    let cix = Number(prompt("Meblegi dagil edin:"));
    if (cix < p) {
      alert("Tebrikler..." + s + "Balansiniz:" + (p - cix));
    } else {
      alert("Balansiniz kifayet qeder deyil:" + p);
      prompt(ekran);
    }
    break;
  case "3":
    let dax = Number(prompt("Yuklemek istediyiniz meblegi daxil edin:"));
    alert("Hazirki balansiniz:" + (dax + p));
    prompt(ekran);
    break;
  case "4":
    confirm("Cixis etmek istediyinize eminsiniz?");
    break;
  default:
    alert("1-4 arasinda reqem daxil edin...");
    prompt(ekran);
    break;
}

/*
SWITCH ile ise sertler yazdiq yeniki bele deyim 1 yazilanda bu cixsin
2 yazilanda bunlar cixsin bu qeder sade daha yaxsi yazmaqda olardi sadece sade yazmaq istedim.
*/