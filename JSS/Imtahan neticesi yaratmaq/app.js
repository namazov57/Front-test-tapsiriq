
// ? Smestr imtahan neticesinin cavabini yaratmaq
prompt("Adiniz ve soyadinizi yazin:");
let giris=Number(prompt("Imtahana giris balinizi qeyd edin:"));

let imtahan=Number(prompt("Imtahandaki balinizi qeyd edin:"));

let Lahiye=Number(prompt("Lahiyedeki  balinizi qeyd edin:"));

let cem =(giris*0.25)+(imtahan*0.35)+(Lahiye *0.40);
if(cem>=51){
    alert("Tebrikler diplomu ala bilersiz,Gecis baliniz:"+cem);

}else{
    alert("Tessufki baliniz catmadi diplomu almaqa:"+cem);
}