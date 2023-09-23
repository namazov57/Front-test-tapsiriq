// Sozun sayini tapmaq

let a = "Code Academy de Gelecek Burada"; // Birden metin yaziriq

// let herf = prompt("Herf daxil edin "); // istifadeciden herf istedim
// let cavab = tap(herf);
// alert("Herf sayisi:" + cavab);
tap("c");
tap("q");
tap("a");
tap("l"); //!Bu qaydada da yazmaq olur methodlari cagirmaqla

function tap(herf) {
  // method yaratdim
  let cem = 0; // burda cem deyiseni yaratdimki orda cemliye bili eyni herfden nece dene olduqunu
  for (let i = 0; i < a.length; i++) {
    //a nin umumi uzunluqunu tapiram
    if (a.charAt(i).toLowerCase() === herf.toLowerCase()) {
      // Bu qaydada yazilanda hr ikisinide balaca yazir istifadeci kicik herifle daxil etsede axtarib tapir nece dene herf eynidise
      // Burdada charAT methodu ile indexsi 0 dan baslayib sonuncuya kimi baxir ve istifadeci daxil etdiyi herf ile eyni olsa hesablayib yazir
      cem += 1; // burda hesablanir
    }
  }
  //return cem; //?Geriye deyer qaytariram return ile
  console.log("Herf sayi:" + cem);
}
