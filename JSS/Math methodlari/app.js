// ! Hesablama methodu olan Math in asagidaki methodlari var
/*
1.Floor
2.Ceil
3.Round
4.Max
5.Min
6.Random
7.Abs
8.Sqrt
9.Pow

*/
// console.log(window.Math);//Bu qayda yazib console da math axtaraq methodlarini tapmaq mumkundur

// let a=3.126;
// let b=-23;
// let c=25;
// console.log(Math.floor(a));//Floor methodu noqteden sonrasini atir console butov reqemi yazdirir
// console.log(Math.ceil(a));//Ceil methodu ise yuxariya yuvarlaqlasdirir yeniki 4 edir cavabi
// console.log(Math.round(a));//Round methodunda ise hansina daha yaxindisa ona yuvarlaqlasdirir ededi

// console.log(Math.max(1,2,34,56,4,6,3));//Burda ise icerisindeki en boyuk ededi ekrana yazdirir
// console.log(Math.min(45,34,2,4,6,89,0.5,46));//Burda ise en kicik eddedi geri qaytarir odaki 0.5 ededidi

// console.log(Math.random());//Console tesadufu reqem cixardir onu yuvarlaqlasdirnmaq ucun asagidaki kimi yazmaq olar
// console.log(Math.floor(Math.random()*100));//ic ice yazdim floor methodunun icinde random yazdim ve ranomu 100 vurdumki tam eded cixarda bilim
// ! Asagidaki kimi yazaraq birinci randomu yaratdim sonra 100 vurdumki 0 olmasin daha sonra ise noqteden sonrasini atdimki tam eded olsun
let rnd = Math.random();
let cavab = rnd * 100;
let cavabYuvarlaqlasdir = Math.floor(cavab);

console.log(rnd);
console.log(cavab);
console.log(cavabYuvarlaqlasdir);
// ! 3 dene console da cavab var cavablara baxaraq daha yaxsi basa duse bilersiz

// console.log(Math.abs(b));//Abs methodunda eger deyisen menfidise console musbet olaraq yazdirir
// console.log(Math.sqrt(c));//Kok altini verir yeniki 5 kvadrati 25 dise onu geri qaytarir neceni neceye vuranda 25 edir 5 ona gorede cavab 5 di
// console.log(Math.pow(5,3));//Bu sekilde yazmaq olur yeniki quvvete yukseltmekdi cavabda 125 alinir 5 i 3 defe ozune vururuq
// console.log(Math.PI);//Icerisinde bir deyeri verir mende tam deqiq bilmedim
