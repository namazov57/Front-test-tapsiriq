
// Var-Let-Const--Acar sozunden istifade ederek deyisen yaradiriq

// Dəyişən nədir? Qisacasi fincanda cay varsa onu ozun ice bilerse kimese vere bilersen yeniki budu,
// Bos fincanin doldurduqsa onda onu kime istesek vererik
//  Kodda beledir bos bir deyisen yaradiriq ve onu istesek ozumuz istesekde istifadeciden alaraq dolduruq ve harda istesek istifade edirik
// Var acar sozunden istifade ederek methoddaki deyiseni methodun istenilen yerinde cagirmaq mumkundur
// Var in menfi cehetdi ram i zeyifledir
function cem() {
    var b =57;
    console.log(b); // Function Scope oldu ve bur var dan istifade ederek --b--deyisenin yaratdim
    if (true) {
        var ad ="Nicat Namazov"
        console.log(ad); // Bu sekildede Function Scope dur ve ifin icindede cagirmaq olur olur methodun icindede

    }
    console.log(ad);
}
cem(); // Method yaradanda mutleq sekilde methoddan colde methodu cagirmaq lazimdi

// Let/Const :Block Scope Özəlliyinə malikdir

function cem1() {
    let a =15;
    console.log(a); // Bu sekilde istifade etmek olur
    if (true) {
        let b =20;
        console.log(b); // Bu sekilde yazmaq olur
    }
    // console.log(b); //! Bu sekilde yazmaq isteseniz ERROR alirsan sebebi BLOCK SCOPE dur

}
cem1();

// Const-- eynidi -Let- ile
function cem2() {
    const a =19;
    console.log(a); // Bu sekilde istifade etmek olur
    if (true) {
        const b =200;
        console.log(b); // Bu sekilde yazmaq olur
    }
    // console.log(b); //! Bu sekilde yazmaq isteseniz ERROR alirsan sebebi BLOCK SCOPE dur

}
cem2();

var d =10;
var d=29;
console.log(d); //! Var in ustunlukleri eyni deyisen ne yazmisansa icerisini deyiserek en sonun yazdiqin deyeri goturur

//  let e=11;
//  let e=15;
//  console.log(e); //! Bunu diqqet etmek lazimdiki ERROR almiyasan yeniki let icaze vermir bu sekilde kod yazmaqa
 let f=11;
 f=15;
 console.log(f); //! Bu sekilde yazmaq olur LET ile deyiseni

// LET & CONST arasindaki ferq ise bunlardir
const h=23;
 //h =25;
 console.log(h); //! CONST da bir deyisene deyer verdinse deyismek olmur deyeri

//  const user ={
//     username :"Nicat",
//     password:"12345"

//  }
//  console.log(user); // Obyekt olaraq istifade etmek olur CONST du
let user ={
    username :"Nicat",
    password:"12345"

 }
 user={age:25};
 console.log(user); // Let ile etmek bele ancaq Const da olmurdu


