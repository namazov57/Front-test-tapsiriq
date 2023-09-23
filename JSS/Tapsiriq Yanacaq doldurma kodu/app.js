// todo: Yanacaq doldurma
/*
Bunun ucun asagidakilari bilmek lazimdi:
1 ci=dizel
2 ci=benzin a92
3 cu=benzin a95
4 cu=benzin a98

Istifadeciden birinci musteri daxil etmelidiki:
1 ci=Yanacaqin hansi olduqu
2 ci=Yanacaqin nece litr olduqu
*/

let dizel = 0.80,
  benzinA92 = 1.00,
  benzinA95 = 2.00,
  benzinA98 = 2.30;
const a = "\r\n"; //! bu qayda yazilanda ekranda alt alta getiri istediyiniz sozu
const b =
  "1-Dizel:" +0.80+"$"+
  a +
  "2-A92:" +1.00+"$"+
  a +
  "3-A95:" +2.00+"$"+
  a +
  "4-A98:" +2.30+"$"+
  a +
  "Tokmek istediyiniz yanacaqi secin";
//   Yuxaridaki kod istifadeciye gosterilen koddur hansini secmek istediyini gosterir

let yanacaq = Number(prompt(b));
//! Istifadeci duzgun istifade etdiyini bilmek ucun evvelce if seti teyin etdik yox eger istifadeci gosterilen yanacaq novunden basqasini secmek isteyende istemesin kod bos yere
if (yanacaq===1 || yanacaq===2 || yanacaq===3 ) {
    let litr = Number(prompt("Nece litr almaq istediyiniz daxil edin:"));
let pul = Number(prompt("Pulunuzu daxil edin:"));

if (yanacaq === 1) {
  let yekun = dizel * litr;
  if (yekun < pul) {
    alert(
      "Yanacaq aldiz" +
        a +
        "Qalan pul:" +
        (pul - yekun) +
        "Manat" +
        a +
        "Yaxsi Yol"
    );
  } else {
    alert(
      "Pulunuz catmir tessuki:" +
        a +
        "Odenilecek mebleg:" +
        yekun +
        "Manat" +
        a +
        "Pulunuz:" +
        pul +
        "Manat" +
        a +
        "Catmiyan mebleg:" +
        (yekun - pul) +
        "Manat" +
        a +
        "Yaxsi Yol"
    );
  }
//   todo : Yuxaridaki kodu 1 defe yazib hamisinda istifade etdik birinci sertin icinde yanacaqin pulu cibimizdeki puldan az olarsa isdesin yox cox olarsa onda else dussun ve pulunuz catmir ne qeder catmadiqini gostersin
} else if (yanacaq === 2) {
  let yekun = benzinA92 * litr;
  if (yekun < pul) {
    alert(
      "Yanacaq aldiz" +
        a +
        "Qalan pul:" +
        (pul - yekun) +
        "Manat" +
        a +
        "Yaxsi Yol"
    );
  } else {
    alert(
      "Pulunuz catmir tessuki:" +
        a +
        "Odenilecek mebleg:" +
        yekun +
        "Manat" +
        a +
        "Pulunuz:" +
        pul +
        "Manat" +
        a +
        "Catmiyan mebleg:" +
        (yekun - pul) +
        "Manat" +
        a +
        "Yaxsi Yol"
    );
  }
} else if (yanacaq === 3) {
  let yekun = benzinA95 * litr;
  if (yekun < pul) {
    alert(
      "Yanacaq aldiz" +
        a +
        "Qalan pul:" +
        (pul - yekun) +
        "Manat" +
        a +
        "Yaxsi Yol"
    );
  } else {
    alert(
      "Pulunuz catmir tessuki:" +
        a +
        "Odenilecek mebleg:" +
        yekun +
        "Manat" +
        a +
        "Pulunuz:" +
        pul +
        "Manat" +
        a +
        "Catmiyan mebleg:" +
        (yekun - pul) +
        "Manat" +
        a +
        "Yaxsi Yol"
    );
  }
} else if (yanacaq === 4) {
  let yekun = benzinA98 * litr;
  if (yekun < pul) {
    alert(
      "Yanacaq aldiz" +
        a +
        "Qalan pul:" +
        (pul - yekun) +
        "Manat" +
        a +
        "Yaxsi Yol"
    );
  } else {
    alert(
      "Pulunuz catmir tessuki:" +
        a +
        "Odenilecek mebleg:" +
        yekun +
        "Manat" +
        a +
        "Pulunuz:" +
        pul +
        "Manat" +
        a +
        "Catmiyan mebleg:" +
        (yekun - pul) +
        "Manat" +
        a +
        "Yaxsi Yol"
    );
  }
}
} else {
  alert("Zehmet olmasa duzgun reqemi secin!!!");
}
