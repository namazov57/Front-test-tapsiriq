
/*
Istifadeciye bildiris kimi bu methodlarla cixartmaq olur

1 ci:Alert ---Istifadeciye xeberdarliq vermek ucun istifade olunur
2 ci:Prompt --Istifadeciden deyer almaq ucun istifade olunur
3 cu:Confirm


*/ 
// alert("Bu bir xetadir!");
 let ad =prompt("Zehmet olmasa adinizi daxil edin:");//Geri qaytardiqi deyer string deyerdi

console.log( ad);
console.log(typeof ad);

let cavab=confirm("Cixmaq istediyinize eminsinizmi");//Geriye boolean qaytarir yeniki ya ture yadaki false
console.log(cavab);
console.log(typeof cavab);
