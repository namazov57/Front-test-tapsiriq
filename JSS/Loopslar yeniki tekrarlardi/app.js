
// ! Loopslar yeniki tekrarlar cunki kodda tekrar lazimdisa loopslardan istifade olunur

/**
 Loopslarin novleri bunlardir:
 1-For
 2-While
 3-Do-While
 4-ForEach - //! Bnu arraylarda istifade edirik.

 */

//  ! For nece istifade olunur asagida numune yazaq
// Forda forun icerisinde deyisen yaradiriq ve ona deyer veririk sonra ise deyiseni nece defe tekrarlanmaqini isteyirikse onu yaziriq
//  sonra ise kod isdeyir ikinci sefer kod isdiyende verilen deyerin ustune 1 elave edir bu for tekraridi qisacasi.

//  1 den 10 na qeder for ile yazdiraq 
// for(let i=1; i<=10; i++){
//     console.log(i);
//     alert(i);
// }
// 1 den 10 na qeder cut ededleri yazdiraq
// for( let i=0; i<=10; i+=2){ 
//     console.log(i);
// }
// 1 den 10 na qeder tek ededleri yazdirmaq
// for( let i=1; i<=10; i+=2){
//     console.log(i);
// }
 // ! Asagida i nin 2 den qaliqinin 1 e beraber olanda tekleri yazdir eks halda cutleri
 // ! Neticede tek olanlarda Nicat cut olanlarda Namazov yazdi
// for( let i=1; i<=10; i++){
//     if(i%2==1){
//         console.log("Nicat");
//     }else{
//         console.log("Namazov");
//     }
// }
// ? 50 den 1 e qeder yazsin ve onlari bir bir ile cemlesin
// let cem=0;
// for(let i=50; i>=1; i--){ 
//     cem+=i; // Bu qayda yazilirki yeni her sefer qiymet alanda evekli qiymetin ustune gel ve cemi yaz
//     console.log(i);
//     console.log("Cem",cem); // Burda hem cemini hemde oz qiymetini yazdiririq bu kodla
//  }

// ? While tekrari nece yazilir ve nece isdiyir
// While icerisinde sert yazilir sonra kod yaziriq ve saygac yaziriqki sonsuz tekrar etmesin
// let counter=0;
// while(counter<=10){
//     if (counter%2==0) {
//         console.log(counter); // if yazarsaq ve counteri modunu alsaq onda tekleri ve cutleri tapa bilerik
//     }
    
//     counter++;

// }
// console.log("------------------");
// let counter1=0;
// while(counter1<=10){
//     if (counter1%2==1) { // Bu qayda yazsaq tekleri ekrana vere bilerik
//         console.log(counter1);
//     }
//     counter1++;
// }
// console.log("-------------------");
// let cem=0;
// let counter2=100;
// while (counter2>=0) {
//     console.log(counter2);
//     counter2--;
//     cem+=counter2;
//     console.log("Cem",cem);
// }
//  While da colde bir saygac yaradiriq ve icerisinde saygaca sert veirirk sonra icerisinde kod yaziriq sonra ise saygacin deyerini ya azaldiriq yadaki artirirqki sonsuz getmesin kod


// let saygac=1;
// while(true){
//     console.log(saygac);
//     if (saygac==7) {
//         break;           //Bu qaydada yazmaq olur 7 ye qeder cunki sonrasina break qoymusam ve kod dayanir
//     }
//     saygac++;
// }
// ? Do While isleme prinsipi while kimidir demek olarki, Ancaq arasindaki fer do while bir defe de olsa isdeyir.
// 1 den 10 na qeder yazdirmaq do while de.
// let saygac=1;
// do {
//     console.log(saygac);
//     saygac++;
// } while (saygac<=10);

let saygac=1;
let cem=0;
do {
    if(saygac%2==1){
        cem+=saygac;

    }
    saygac++;
} while (saygac<=57);
console.log("Cem:",cem);


