/*
Mukemmel sayi tapsiriqi
mukemmel sayi asagidaki kimidir
6=1,2,3,6 .. 6 ya bolunenlerin cemleyib sonra ise hemin reqem birinci reqemin 2 qati olarsa buna mukkemel eded deyilir


*/

function mukemmel(number) {
  //Evvelce method yaratdim
  let cem = 0; //Deyisen yaratdim
  for (let i = 2; i <= number / 2; i++) {
    //burda ise for tekrarini qurdum ve uzunluqunu 2 ye bolunerse davam etsin
    if (number % i == 0) {
      //Alinan cavab qaliqsiz bolunerse onda asagida cem deyisenin yazirdim
      cem += i;
    }
  }
  cem += 1 + number; //Burda ise reqemin ustune bir gelib alinan cem  ile topladim

  if (cem == number * 2) {
    //Sert qoydum ki cem beraber olarsa reqem vurulsun 2 ye onda IDEAL REQEM yox beraber deyilse IDEAL OLMUYAN reqem oldu
    console.log("Ideal reqem");
  } else {
    console.log("Ideal reqem deyil");
  }
}
mukemmel(6);
