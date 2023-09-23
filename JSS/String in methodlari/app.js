// !Stringin asagidaki methdolari var
/*
1.charAt()
2.concat()
3.indexof()
4.lastindexof()
5.toUpperCase()
6.toLowerCase()
7.trim()
8.slice()
9.substring()
10.replace()
11.split()
12.valueOf()
13.startWith()
14.endsWith();
Bu methodlari ezberlemek lazimdi deyil unutsamda internetden axatarmaliyam


*/
let kurs = "Gelecek harda, biz orda";

// let kurs="Gelecek harda, biz orda"; //Burda string yazi yazdim ve onun 0 inci indexsini tapmaq ucun asagidaki kimi yaziriq
// let index=kurs.charAt(0); //charAt methodu ile 0 inci tapdim console G herifi cixdi 5 inci index tap deseydim e herifi cixacaqdi
// console.log(index);

// let vaxt=" 2023"; //2 i nci string yaratdim ve yan yana yazmaq ucun concat methodunan istifadde edirik
// let cavab=kurs.concat(vaxt); //Bu qaydada cavab yazdirim bir yerde cixdi console cavabi yazdiranda
// console.log(cavab);

// let index=kurs.indexOf(",");//indexof methodu ise stringin necenci indexsde durduqunu gostererir (,indexsi 13 yerde dayanib)
// console.log(index);

// let cavab=kurs.lastIndexOf("orda");//Bu methoda orda sozunun 22 indexsde olduqunu gosterdi console da
// console.log(cavab);

// let cavab=kurs.toUpperCase();//Bu methodda butun herfleri boyuk yazir
// console.log(kurs);//Bu orginal yazilisi
// console.log(cavab);//Burda ise butun herfler boyuk yazilib

// let cavab=kurs.toLowerCase();//Bu method ise butun herfleri kicik ile yazir
// console.log(cavab);

// let kurs1="              Code Academy Bir Gun             ";//Sagdan ve solda bosluqlari temizlemek ucun  trim methodunan istifade edirikk
// console.log(kurs1.trim());//Burda cavabda sag ve soldaki bosluqlari sildiyini gore bilerik

//   console.log(kurs);
// console.log(kurs.slice(7,13));//Slice methodu ile gedib istediyimiz sozu ekrana yazdira biklerik men misal ucun harda sozunu cagirdim
// console.log(kurs.split());//Bu qaydada massivide qaytarir bize yazini

console.log(kurs);
// console.log(kurs.substring(0,7));//Burda ise 0 ile 7 indeks arasinda gelecek sozudu gedib onu ekrana yazdirir
//console.log(kurs.replace("Gelecek","Ireli"));//replace methodu istediyimiz sozu deyise bilirik bu sekilde yazib

// let arr=kurs.split(" ");//Bosluqa gore ayir ve onlari bir massivde saxla ve cavabda indekslerinide gore bilerik
// console.log(arr);

// console.log(kurs.valueOf());//primitiv olur valueof da

console.log(kurs.startsWith("G")); //G herifi ile basdiyirsa ture qaytarir yox duzgun herf olmasa false qaytaracaq qisacasi basladiqi herf baxar ona uygun deyer verer

console.log(kurs.endsWith("f")); //Sonu f ile bitseydi kursun icindeki string ture alardiq anca f ile bitmediyi ucun  galse aldiq yeniki qisacasi sonundaki herfe baxar
