/*
!Decimal To Binary Conversion --> 10 luqda 2 lik say sistemine cevirmek



*/
covertDecimalToBinary(10); //Burda Methodu cagiririq
function covertDecimalToBinary(number) {
  //Method yaradiriq
  let binary = ""; //Bos deyer yaratdim burda
  while (true) {
    //Burda sonsuz tekrar edir while ture
    binary += (number % 2).toString(); //Stringe cevirdim burda
    number = Math.floor(number / 2);
    if (number == 1) {
      //Burda ise number 1 beraber olsa while dayansin
      binary += 1;

      break; //burda tekrari dayandirdiq
    }
  }
  let result = reverse(binary); //Burda ise aldiqim cavablari result icerisine atdim ve onu console cixartdim
  console.log("Cavab:" + result);
}

function reverse(binary) {
  //Basqa method yaratdim
  let reverseBinary = ""; //Bos deyer yaratdim burda
  for (let i = binary.length - 1; i >= 0; i--) {
    //For tekrari qurdumki davam etsin indeksleri qeder
    reverseBinary += binary.charAt(i); //ChartAt ile indexsini tapdim
  }
  return reverseBinary; //MEthodu cole cixartdim istediyim yerde cagira bildim
}
