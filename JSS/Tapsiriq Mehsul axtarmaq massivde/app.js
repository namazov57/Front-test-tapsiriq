// !Massivlerde istifadeci daxil etsin ve hemin mehsul bizde varmi bunu yaradacam
/*
Istediyiniz satis sayitini axtaris bolmesine girim her hansi mehsulu axtaranda cixirsa
eyni qaydada mende burda yaradacam ve mehsul varsa gostersin yoxdusa
stokda yoxdu istifadeciye bildirsin


*/
// ! Asagida masinlarimizi yaradiriq ve ona ad kataqoriya ve qiymeti teyin edirik
let mehsul1 = {
  ad: "Kia-Rio",
  kataqoriya: "Sedan",
  qiymeti: 12.999,
};
let mehsul2 = {
  ad: "BMW-F30",
  kataqoriya: "Sedan",
  qiymeti: 32.499,
};
let mehsul3 = {
  ad: "Lada-2107",
  kataqoriya: "Sedan",
  qiymeti: 6.599,
};
let mehsul4 = {
  ad: "Lada-2115",
  kataqoriya: "Sedan",
  qiymeti: 7999,
};
let mehsul5 = {
  ad: "Tayota-Prius",
  kataqoriya: "Sedan",
  qiymeti: 14.759,
};
let mehsul6 = {
  ad: "Tayota-Camry",
  kataqoriya: "Sedan",
  qiymeti: 38.599,
};
let mehsul7 = {
  ad: "BMW-F10",
  kataqoriya: "Sedan",
  qiymeti: 56.999,
};

let a = prompt("Zehmet olmasa axtardigniz masinin adini daxil edin."); //?Istifadeciden sorusuq burda
let mehsular = [mehsul1, mehsul2, mehsul3, mehsul4, mehsul5, mehsul6, mehsul7]; //!Yuxarda yazdiqlarimizi burda massive veririk

let secilmis = []; //Bos massiv yaradirir burda ki istifadeci daxil edende duz olsa gelib bura dussun ve gostersin
secilmisMehsul(mehsular); //Methodlari cagiriram burda
secilmisleriGoster(secilmis); //Methodlari cagiriram burda

function secilmisMehsul(mehsular) {
  //Methodu yaradira burda
  mehsular.forEach(function (mehsul) {
    //Dovr etdirmek ucun foreach saliram

    if ((cavab = mehsul.ad.toUpperCase().includes(a.toUpperCase()))) {
      //Sert yaziram burda ki istifadeci daxil edende boyuk kicik herf olmasin eynilesdirsin yazinida istifadeci daxil etdiyinide
      cavab = secilmis.push(mehsul); //Burda ise daxil edirem push methodu nile secilmisdere
    }
  });
}

function secilmisleriGoster(mehsular) {
  //Methodu yaradira burda
  mehsular.forEach(function (mehsul) {
    //Dovr etdirmek ucun foreach saliram
    console.log(
      "Stokda olan mehsullar:" +
        "Markasi~" +
        mehsul.ad +
        ",Tipi~" +
        mehsul.kataqoriya +
        ",Qiymeti~" +
        mehsul.qiymeti +
        "=AZN"
    ); //Eger ustu uste duserse yazdiqi melumat bizdede varsa ekrana cixartsin hemin mehsullari
    
  });
}
