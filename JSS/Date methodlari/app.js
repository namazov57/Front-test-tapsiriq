// ?Date methodunu isdedmek
let vaxt1 = new Date(1997, 9, 14, 12, 15, 56); //Burdda ozum el ile qeyd etdim tarixi
console.log(vaxt1); //Console baxaraq basa duse bilersiz
let vaxt = new Date(); //Burda date vaxtin icerisine atdim ve vaxti yazdirdim hal hazirki vaxt console cixir
console.log(vaxt); //Burda hal hazirdaki umumi gun ay ve saati gosterir
console.log(typeof vaxt); //Type obyejti ancaq deyismek olur
vaxt.toString();
console.log(typeof vaxt.toString()); //Burda type deyiserek stringe cevirdim
// !Asagida get methodlari ile gedib hansi vaxti isteyirikse cagirib console yazdiririq yeniki get methodu gedib alib getirmkedi menasi
console.log(vaxt.getTime()); //Gedib deqiqeni getirir
console.log(vaxt.getFullYear()); //Gedib hal hazirdaki ili gosterir
console.log(vaxt.getDate()); //Burda ayin necesi olduqunu gosteirir
console.log(vaxt.getDay()); //Bunda ise heftenin necenci gunu olduqunu
console.log(vaxt.getHours()); //Hal hazirki saati gosteirir
console.log(vaxt.getMilliseconds()); //Milli saniyeni gosterir
console.log(vaxt.getMonth()); //Buna fikir vermek lazimdi cunki 0 dan basdiyir console yazdirmaqa ona gorede 1 eksik yazdirilir ekrana
console.log(vaxt.getMonth() + 1); //Bele yazanda ise duzgun gorsedecek yeniki 0 dan baslasa da sen onun ustune 1 gelmis olusan ve aylari console da 1 den saymaqa basdiyir ele bil
console.log(vaxt.getSeconds()); //Sanileyere baxmaq mumkundur bu method ile
console.log(vaxt.toLocaleDateString()); //Bu qaydada beynelxalq ayin gun il gosteririr
console.log(vaxt.toLocaleTimeString()); //Burda ise vaxti gosterir beynelxalq yeniki
console.log(vaxt.toLocaleString()); //Burda ise saati ve ayi ili bir yerde gosterir
// !Asagidaki set methodu ile ise deyisiklik ede bilerik
console.log(vaxt); //Burda hal hazirki vaxti gosteirir
vaxt.setDate(12); //Burda set methodu ile deyisib ayin gununu 12 eledim
vaxt.setHours(20); //Saat hisesini 14 deyil 20 i elemis oldum yeniki men bu kodu yazdiqim vaxtan danisifram basqa baxan olanda casib qalmasin qeydlerde
vaxt.setMinutes(56); //Burda da deiqiqesini deyisdim
console.log(vaxt); //Burda artiq 7 deyil console 12 cixacaq
vaxt.setHours(vaxt.getHours() + 2); //Bu yazilisda ise 2 saat elave etdim yeniki qisaca birinci set yazilir onun methodunun icinde ise get methodu yazilir get methodunun colunde ise + isaresiyle artirmaq istediyimiz reqemi daxil edirik
console.log(vaxt);
