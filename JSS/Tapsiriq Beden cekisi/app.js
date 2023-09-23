/*
Kok ve yaxud ariq olduqunu ve ya normal olduqunu olcmeek ucun asgida kod yazacagiq evvelce 
aciqlamasini verim demeli bele hesablanir:
Bendenin kilosunun index tapmaq ucun,bedenin kilosunu, boyun metr ile kvadtrarina bolmek lazimdi

*/ 
let kilo= Number(prompt("Zehmet olmasa cekinizi daxil edin:"));
let boy= Number(prompt("Boyunuzun hundurluyunu metr ile daxil edin:"));
// ? Yuxardaki kodda istifadeciden boyunu ve cekisini aldiq geriye string qaytardiqi ucun onu number yazaraq reqeme cevirdik ki hesablama apara bilek

let cavab=kilo/(boy*2); //? burdada cavab deyiseni yaradib boyun kvadratini alib sonra ise cekini boyun kvadratinda bolduk


if(cavab<18.5){
    alert("Noramadan asgidi qidanizi artirin!"+cavab);
}else if(cavab>=18.5 && cavab<=24.9){
alert("Normal cekidesiz aferin..."+cavab)
}else if(cavab>=25 && cavab<=29.9){
alert("Normadan yuxari qidanizi azaldin!"+cavab)
}else if(cavab>=30 && cavab<=39.9){
alert("Normadan cox yuxari hekiminizle danisin!"+cavab)
}else if(cavab>=40){
alert("Normadan cox cox yuxaridi tecili hekim qebulu!"+cavab)
}
else{
    alert("Zehmet olmasa duzgun daxil edin melumatinizi.")
}
// ! Koda diqqetle baxib ve isdedikce daha yaxsi yadda qalacaq

