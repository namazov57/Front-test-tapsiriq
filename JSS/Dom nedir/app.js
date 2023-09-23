// ! Dom ne demekdir:Document Object Module dur aciqlamasi,HTML icerisinde olan elementlerin uzerinde islemek ucun rahatciliq
// !Qisacasi dese Dom Html icerisnde olan kodlarin hamisinan elaqe yaratmaq mumkundur
// ? Butun html elementin uzerinde istediyimizi ede bilirik body icerisinde head icerisindeki kodlara

// todo:Document obyekti
//!Birde indi orgendim console birbasa girmek ucun f12 duymesinden istifade etmek lazimdi
//console.log(window);//Bunu axtararaq documente baxmaq olar

// ! DOM bir base kimi basa dusmek olar yeniki neyi axtarsaq onu tapmaq olur

let value;

//console.log(document.location);
// !Asagidakilari daha yaxsi basa dusmek ucun valueleri reye alib bir bir isdedin
// value = document.location.href; //Value yazdirdim ve href de locotionunuda cixardir console
// value = document.location.hostname; //Burda hostunu tapiriq
// value = document.location.port; //Portunu gorururuk
// value = document.location.pathname; //Hansi seyfenin isdediyini goruruk
// console.log(value);

// value=document.characterSet;//Dil desteklenmesi ucun istifade olunur
// value=document.title;//Basliqini gedib getirir
// value=document.links;//Seyfedeki linkleri getirmek ucundu
// value=document.links.item[2];//Indeksleride getirmek mumkundur ve item ilede isdedmek olur
// value=document.forms;//Formlari gedib getirir ve buna item da vermek mumkundur
value = document.forms.item(1); //Bu sekilde gedib item ilede yazmaq olur

console.log(value);
