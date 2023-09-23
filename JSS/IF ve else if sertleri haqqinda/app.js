
// ? if ve else is sertleri asagidakilardir ve qurulusu beledir:
/*
if(sert){

}else if(sert){

}else if(){

}else{

}
Qurulus beledir ve if den 1 denedir else if den 1 den cox ola biler else den ise 1 dene olur,
Anca bunlardan 1 denesi isdiyir hemise sert yene hec birine dusmese en sonda else ni isdedir
*/ 

let a="\r\n";  //Novbeti setire kecmek ucun istifade olunur,asagidaki kodda istifade edecem.
let unvan =prompt("Zehmet olmasa asagidkailari secin reqem ile:"+a+"1 ci Shamkir"+a+"2 ciBaku"+a+"3 cu Ganja"+a+"4 cu Lerik"+a+" 5cu Lenkaran"+a+" 6 ciAstara");
if(unvan==1){
    alert("Secdiyin yer->Shamkir");
}else if(unvan==2){
     alert("Secdiyin yer->Baku");
}else if(unvan==3){
     alert("Secdiyin yer->Ganja");
}else if(unvan==4){
     alert("Secdiyin yer->Lerik");

}else if(unvan==5){
     alert("Secdiyin yer->Lenkaran");
}else if(unvan==6){
     alert("Secdiyin yer->Astara");
}else{
    alert("Zehmet olmasa duzgun unvan secin");
}
