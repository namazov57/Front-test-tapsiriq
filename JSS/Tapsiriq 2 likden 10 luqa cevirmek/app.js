/*
!Binary To Decimal Conversion----> 2 likden 10 luq say sistemine cevirmek



*/

let binary = "1011"; //Burda deyisen verdim

function converBinaryToDecimal(binary) {
  //Method yaratdim ve adina decimal qoydum
  let cem = 0; //Deyisen yaratdimki bir yerde toplasin
  let a = 0; //Burda bir deyisene ehtiyac oldu cunki ustunu almaq lazimdi hemin ededin bunu ise asagida MATH.POW ile ededin ustunu aliriq
  for (let i = binary.length - 1; i >= 0; i--) {
    //for tekrari qoyduq
    cem += Number(binary.charAt(i)) * Math.pow(2, a); //Yuxarida verdiyim deyisen burda yazib icerisine binary nin indexsini ve ustunu alib numbere ceviriremki hesablaya bilsin
    a++; //her defe dovr tekrarlandiqkca 1 ustune gelsin
  }
  console.log("Cavab:" + cem); //Console cixardiram
}
converBinaryToDecimal(binary); //Burda ise Methodu cagiriramki kod isdesin
