// Vurma Cedvelini asagidaki kimi yazilir
// Bunu for ile yazacam

for (let i = 1; i <= 5; i++) {
  // ! Birinci yuxardaki kimi for duzeldiriki ve bu forun icindede bir for qurmaq lazimdi ki vurma cedvelini yaza bilek
  for (let j = 1; j <= 5; j++) {
    console.log(i + "+" + j + "=" + i * j);
    // ! Bu qayda yazilanda her sefer i ni j ye vurur cavabi yazir 5 e kimi sonra ise bu for dan cixir 1 inci fora girir ve yeniden 5 kimi davam edir
  }
  console.log("-------------");
  // ! Burdaki log bir birinden ayirmaq ucundu rahat gore billekii kodumuz duzmu isdeyir
}
