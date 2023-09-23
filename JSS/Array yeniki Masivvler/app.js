/*
?  Array yeniki Massivler demekdir 
Massivler 1 den cox olan deyeri bir yerde toplamaq ucun istifade olunur
Yeniki bir sebet demek olar 
let arr=["Nicat","Vaqif","Kenan"];--->Bu bir massivdir ve bu string tipindedi
let arr=[1,true,"Nicat",'?',null,5.15,underfined]; istediyimiz tipi massivde saxliya bilerik
Massivlerin icindeki deyeri cixartmaq ucun  indexlerine gore cagirriq ve 0 dan baslayir ve yuxaridaki Nicat deyeri 0 inci index di
Gedib massivin icinde olmayan indexsi cagiranda bu gelir==ArrayIndexOutOfBoundException-->Xeta olanda gelir,ancaq JavaScript de ise bu gelir bu soz gelir-->underfined yeniki icerisinde bos gelir
*/

let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "Nicat"]; //Massivler bu qaydada yazilir
console.log(numbers[10]); //Indexsi 10 olani getirdim ekrana
numbers[10] = "Vaqif"; //?massivin icindeki deyeri deyisidirmek olur bu qaydada
numbers[numbers.length - 1] = "Vaqif"; //?massivin icindeki deyeri uzunlugu ilede tapmaq olur
console.log(numbers[5]); //Indexsi 5 olani getirdim ekrana
console.log(numbers[10]); //Indexsi 10 olani getirdim ekrana
console.log(numbers[2]); //Indexsi 2 olani getirdim ekrana

let adlar = ["Nicat", "Vaqif", "Kenan", "Veli"];
console.log(adlar[3]); //3 cu indexsi cagirdim yeniki Velini
adlar[adlar.length - 1] = "Samir"; //Burda Velini deyisib Samir eledim
console.log(adlar[3]); //Ekrana Samir yazdirdim Velinin yerine
console.log(adlar); //Burda ise butun massivi ekrana cixartdim

let arr = [1, true, "Nicat", "?", null, 5.15, undefined]; //Burda ise butun tipde olan massivdi
console.log(arr); //Butun hamisini cixardiriq
console.log(arr[3]);
console.log(arr[5]);
