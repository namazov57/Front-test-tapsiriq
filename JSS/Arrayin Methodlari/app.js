/*
!Massivlerde methodlar isdedmek
!Massivlerin asagidaki method novleri var:
? 1.push : Massivin axirina yazi yazdirmaq ucundur ve geriye uzunlugunu qaytarar
? 2.unshift: Massivin evveline yazi yazdirar, yazinin sayini geriye qaytarar
? 3.shift: Massivin evvelinden siler ve icerisindekini geriye qaytarar
? 4.pop:Maasivin axrincisini silir,icerisindekini geriye qaytarar
? 5.splice(index,incdex): Maassive hem yazmaq hemdeki silmek ucu  istifade olunur
? 6.toString: Massivi stringe cevirir
? 7.join: Massivi stringe cevirir tiString methodunan ferqi ise arasina yazi yazmaq olur
? 8.concat: Massivleri birlesdirmek ucun istifade olunur
? 9.slice(arali arali yazmaq): Massivi istenilen yerinden bolub yenide yaradir
? 10.length: Massivin uzunlugunu olcur bir ozellikdi
? 11.reverse: Massivin icerisindeki yazini ters cevirir
? 12.split(Bolmek): Massiivi bir soze gore bolub yenide massive ceviri
? 13.indexOf: yazinin indexsini verir yeniki harda dayandiqini ancaq gerek siz yazdiqiniz massivin icinde olsun hemin  soz
? 14.includes: verilmis elementi ehtiva edirmi ona baxir

*/

let masinlar = ["Lada", "Reno", "BMW", "Kia", "Sym"];
let masinlar1 = ["Jeep", "Volvo", "Audi", "Daewoo", "Bajaj"];
console.log(masinlar);
masinlar.push("Opel"); //Push methodu ile massivin axirina yazdirdiq opeli ve uzunluqunuda gorduk
console.log(masinlar);
masinlar.unshift("Qaz"); //Massivin eveline elave edir elementi
console.log(masinlar);
masinlar.shift(); //Massivin evelindeki elementi silir
console.log(masinlar);
masinlar.pop(); //Massivin axirindaki elementi silir
console.log(masinlar);
masinlar.splice(0, 0, "Opel"); //Icindekil Elementleri silir
masinlar.splice(1, 2); //Burda 1 ciden sonra 2 sini sil dedim
console.log(masinlar);
let stringTipi = masinlar.toString(); //Massivi bu qaydada yazanda stringe cevirir icindeki elementi
console.log(typeof stringTipi);
let stringTipi1 = masinlar.join("~"); //Bu qaydada yazilir dirnaqin istesen bos qoy arali yazsin ve yazud dirnaqin icinde ne yazsan ele cixardir string kimi
console.log(stringTipi1);
let arrMasin = masinlar.concat(masinlar1); //Concat methodu bir biri ile birlesdirir massivi ve men burda hemde stringe cevirerek yazdirmisam
let stringTipi2 = arrMasin.join("~"); //Bu qaydada cevirib yazdirdim
console.log(stringTipi2);
let arrMasin1 = masinlar.slice(2); //2 ciden sonra butun hamisini yeni massivde yazdirdi
console.log(arrMasin1);
console.log(masinlar.length); //Uzunluqunu olcur ekrana 4 cixir sebebi ise massivlerin 0 dan baslamasidi
let ters = masinlar.reverse(); //Bu method tersine yazir yeniki axirdan evvele
console.log(ters);

let adlar = "Nicat,Vaqif,Kenan,Samir"; //Adlar deyiseni yaratdim
let arrAd = adlar.split(","); //Burda ise yuxardaki deyiseni SPLIT methodu ile ARRY cervirdim
console.log(adlar); //Burda sadece deyisenler ekrana cixir
console.log(arrAd); //Burda ise masssiv halinda ekrana cixir
let index = masinlar.indexOf("Kia"); //Burda ekranda 1 ci indeks cixir bunun sebeb men kodda massivi tersine cevirmisem ona gore
let index1 = masinlar1.indexOf("Audi"); //Burda ise ikinci massivi goturdum ve cavabda 2 cixdi cunki audi nin indexsi 2 di yeniki 0 dan basladiqi ucun massiv yaddan cixmasin
console.log(index);
console.log(index1);
let cavab = masinlar1.includes("Volvo"); //Burda ise geriye ya ture yadaki false qaytarir burda cavab ture du cunki massivde Volvo var
console.log(cavab);
let cavab1 = masinlar1.includes("Kia"); //Burda ise false qayidir cunki masssivde Kia yoxdu
console.log(cavab1);
