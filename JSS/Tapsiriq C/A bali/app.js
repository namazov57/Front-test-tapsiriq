
/*
 ? C/A sorular diplomu alma yazaq
1-Ingilis dili-10
2-Quiz-10
3-Bakend-40
4-Frontend-30
5-Davamiyet-10
Bunlarin cemi 100 edir 
Diplomu ala bilmeyimizi hesabliyaq gorek nece diplom ala biliriik
51-Balin altinda kesildin
51-75 arasinda olsa normal
75-91 arasinda olsa seref
91-100 arasinda olsa yuksek seref

*/ 
let davaDuz=0;
let ingilisDuz=0;
let testDuz =0;
let backDuz =0;
let frontDuz=0;
// Evvelce bos deyerler yaratdim

let s="\r\n";
let a="CODE ACADEMY ortalama hesablanmasi:"+s+
"1-Bali hesabla"+s+"2-Cixis et";
// burda ekran cixmaqini istediyimi yazini cixartdim
// alert(a);

let b=Number(prompt(a)); //Ekrandaki yazini b deyisenine menimsetdim ve onu switch ile isteddim
switch (b) {
    case 1:
        davaDuz=Number(prompt("Dersde istiraki"));
        

        ingilisDuz=Number(prompt("Ingilis dilndeki duzleri"));
       

        testDuz=Number(prompt("Testdeki duzler"));
       

        backDuz=Number(prompt("Backend deki duzlerin"));
      

        frontDuz=Number(prompt("Frontdaki duzler"));
        // Burda istifadecinin butun aldiqi ballari qeyd etdi
      

        let umumi=(davaDuz*0.1)+(ingilisDuz*0.1)+(testDuz*0.1)+(backDuz*0.4)+(frontDuz*0.3); // Burda aldiqi ballari % ini hesablayib umumi bir deyisene verdim
        if (umumi<51) {
            alert("Kesildiniz tesufki..."+umumi);
        } else if(umumi>51 && 75>umumi) {
            alert("Tebrikler siz normal diplom aldiz..."+umumi)
        } else if(umumi>75 && 91>umumi){

            alert("Tebrikler siz seref diplomu aldiz..."+umumi);

        } else if(umumi>91 && 100>=umumi){
            alert("Tebrikler siz yuksek seref diplomu");
        } else{
            prompt(a);
        }
        // Burda ise sertler yazdimki hansi bali alanda ekranda ne yazsin ve umumi balini gostersin
        
        break;
        case 2:
        confirm("Tesdiqlemek ucun tamama basin.")
        break;

    default:
        confirm("Yeniden basladin...");
        prompt(a);
        break;
    }
//  Bu kodda qisacasi umumi mekteb ve universitetlerdeki balinizi hesablamaqa komek edir istesek bu kodu dahada tekminlesdire bilerik
