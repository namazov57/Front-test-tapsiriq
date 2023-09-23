// !Kitabxana yaratmaq
/*
Kitabxana yaratmaq ucun asagidaki kimi obketde 
kitabin adini muellifini ve qiymetini yazmaq lazimdi
*/
let kitab1 = {
  ad: "Cinayət və cəza",
  muellif: "Fyodor  Dostoyevski",
  qiymet: 5,
  ref: "1.3.Ref",
};
let kitab2 = {
  ad: "Qürur və qərəz",
  muellif: "Ceyn Ostin",
  qiymet: 9,
  ref: "3.4 Ref",
};
let kitab3 = { ad: "Yad", muellif: "Alber Kamyu", qiymet: 3, ref: "5.5 RƏF" };
let kitab4 = {
  ad: "Anna Karenina",
  muellif: " Lev Tolstoy",
  qiymet: 4.5,
  ref: "4.2.Ref",
};
let kitab5 = {
  ad: "Qəzəb salxımları",
  muellif: "Con Steynbek",
  qiymet: 6.8,
  ref: "2.3.Ref",
};

let kitablar = [kitab1, kitab2, kitab3, kitab4, kitab5]; //?Kitablar deye massiv yaratdim yuxardaki obeyktin icindekileri bir massivde saxladim

// Kitaxanadaki kimi reflere salmaq isteyirike kitablari asagidaki ki yazmaq lazimdi
// Setir ve sutunlari olsun
// Asagidaki 5 setr ve 5 denede sutun yaratdim yeniki 25 dene kitab saxlama qabiliyetine malikdi

let ref11 = { kod: "1.1.Ref", gostermek: false }; //ref 11 sutun:1,setr:1 demekdir.Sonra ise obyektin icindeki kod:"1.1.Ref" kitabin olduqu yer,gostermeye ise heleki false yazdimki gorsenmesin
let ref12 = { kod: "1.2.Ref", gostermek: false };
let ref13 = { kod: "1.3.Ref", gostermek: false };
let ref14 = { kod: "1.4.Ref", gostermek: false };
let ref15 = { kod: "1.5.Ref", gostermek: false };

let ref21 = { kod: "2.1.Ref", gostermek: false };
let ref22 = { kod: "2.2.Ref", gostermek: false };
let ref23 = { kod: "2.3.Ref", gostermek: false };
let ref24 = { kod: "2.4.Ref", gostermek: false };
let ref25 = { kod: "2.5.Ref", gostermek: false };

let ref31 = { kod: "3.1.Ref", gostermek: false };
let ref32 = { kod: "3.2.Ref", gostermek: false };
let ref33 = { kod: "3.3.Ref", gostermek: false };
let ref34 = { kod: "3.4.Ref", gostermek: false };
let ref35 = { kod: "3.5.Ref", gostermek: false };

let ref41 = { kod: "4.1.Ref", gostermek: false };
let ref42 = { kod: "4.2.Ref", gostermek: false };
let ref43 = { kod: "4.3.Ref", gostermek: false };
let ref44 = { kod: "4.4.Ref", gostermek: false };
let ref45 = { kod: "4.5.Ref", gostermek: false };yaratmaq

let ref51 = { kod: "5.1.Ref", gostermek: false };
let ref52 = { kod: "5.2.Ref", gostermek: false };
let ref53 = { kod: "5.3.Ref", gostermek: false };
let ref54 = { kod: "5.4.Ref", gostermek: false };
let ref55 = { kod: "5.5.Ref", gostermek: false };

let refler = [
  //Masiv yaratdim  burda ve massiv icerisinde massiv yaratmaq olur
  [ref51, ref52, ref53, ref54, ref55], //Massivin icerisinde birdenede massiv yaratdim ve yuradaki refleri yazdim massive
  [ref41, ref42, ref43, ref44, ref45],
  [ref31, ref32, ref33, ref34, ref35],
  [ref21, ref22, ref23, ref24, ref25],
  [ref11, ref12, ref13, ref14, ref15],
];

function yaratmaq() {
  //Burda method yaradim her yerde istifade ede bilmeyim ucun
console.clear();
  let setir = ""; //Sonra ise yeniden bos  yaratsin
  for (let i = 0; i < refler.length; i++) {
    //Dovr qurdum  ki 5 defe dovr etsin
    for (let j = 0; j < 5; j++) {
      //Burdada 5 defe dovr etsin ve umumilikde 25 defe dovr edecek butu  kitablari cixardacaq
      setir += "|" + (refler[i][j].gostermek ? refler[i][j].kod : "---") + ""; //Her sefer setr yananda i ile j ni yazdirsin eger trudusa yox false disa --- yazdirsin,bu kodun icindeki ? isaresi true sa demekdir javascripde sual veririr
    }
    console.log(setir); //5 5 yazdiracaq ve umumilikde 25 dene ref olacaq
    console.log("--------------------");
    setir = ""; //Setirleri yazdirsin ekrana
  }
}
function kodTap(kitabAd) {
  let refKod = null;
  kitablar.forEach(function (kitab) {
    if (kitab.ad.toUpperCase().includes(kitabAd.toUpperCase(), 0)) {
      refKod = kitab.ref;
    }
  });

  return refKod;
}
function refGostermek(refKodu) {
  for (let i = 0; i < refler.length; i++) {
    for (let j = 0; j < 5; j++) {
    
      if (refler[i][j].kod == refKodu) {
       
        refler[i][j].gostermek = true;
        
        break;
      }
    }
  }
}


let kitabAd = prompt("Zehmet olmasa kitab adi daxil edin.");
let refKod = kodTap(kitabAd);

if (refKod != null) {
 

  refGostermek(refKod);

  yaratmaq();

 
 
} else {
  alert("Daxil etdiyiniz kitab kitabxanada yoxdu.");
}
