//! Parametrli method yazmaq
// Asagidaki kimi yazilir
// function vesiqe(ad, soyad) {
//   //? Bu qaydada yazanda parametrli olur yeniki ad ve soyad burda parametrdi

//   console.log(ad + " " + soyad); //? Burda ise consale cagirmaq ucun yazilir dirnaqlarin icinde bosluq qoymaq lazimdiki bir birine bitisik yazdirmasin
// }

// vesiqe("Nicat", "Namazov"); //Todo Burda ise methodu cagirib icersine deyer verdim
// vesiqe("Nihad", "Namazov"); //Todo Methodu bir defe cagirib icindeki deyerleri hemise feqli vermek olur
// vesiqe("Shamkir", "57"); //! Isimizi bu qeder asanlasdirmaq isteyirikse methodlarda istifade etmeliyik

// function kub(reqem) {
//     console.log(reqem*reqem*reqem);

// }
// kub(10); //Todo Bu sekilde kubunu yazdirdiq 10 nun

let yas = Number(prompt("Yasinizi daxil edin "));

function yoxla(yas) {
  if (yas > 18) {
    alert("Xarici pasportu ala bilersiz");
  } else {
    alert("Xarici pasportu ala bilmezsiz");
  }
}
yoxla(yas); // Buna diqqet etmek lazimdiki icerisne yas i yazmasam onda method hemise else girerek duzgun isdemiyecek
