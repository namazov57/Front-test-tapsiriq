
// ? If serti nece isdeyir yeniki sert teyin edende if isdedilir if uygun gelmese else olur oda olmasa else if deye davam edir
/*
Sertleri yadda saxlamaq lazimdi:
if sertini tekde istifade etmek olur
ancaq else sertini tek istifade etmek olmur
if den 1 dene arasinda else if den ne qeder istesen ve sonda else den 1 dene olur bur sertlerden ancaq 1 denesi isdeyir hec birine uygun gelmese en sonda else isdiyir 

*/
let s=77;
if (s>51) {
    console.log("Qalibsiz"+s);
} 
console.log("==========");
let a=43;
if (a>50) {
    console.log("Qalibsiz"+a);
} else {
    console.log("Uduzduz"+a);//!Burda bu şərt işdədi çünki a 50 dən böyük deyil
}
console.log("===============");
let b=51;
if (b>50) {
    console.log("Qalibsiz"+b); //!Burda bu şərt işdədi çünki b 50 dın böyükdür
} else {
    console.log("Uduzduz"+b);
}

// let yas =Number(prompt("Yasiniz:"));
// let pul =Number(prompt("Geliriniz:"));
// let resmi=confirm("Resmi isdemi isdiyirsiz:")

// if (yas>18 && pul>500 && resmi==true) {
//     alert("Tebrik edirik size kredit teklif ede bilerik"); Bu qaydada istifade etmek olur if veya else bu qeder sade
// } else {
//     alert("Tessufku size size kredit teklif ede bilmiyeceyik:")
// }
let ad =prompt("Adinizi ve Soyadinizi yazin:");
let yas=Number(prompt("Yasinizi qeyd edin:"));
let say =Number(prompt("Imtahanda yigdiqiniz bal nece idi:"));
if (  yas>=18 && say>=8) {
    alert("Tebrikler suruculuk vesiqesi ala bildiz,Yigdiqiniz bal:"+say);//Bu qaydada istifade etmek olur if ve else leri
} else {
    alert("Tesufki imtahandam kesildiz,Yigdiqiniz bal:"+say)
}
