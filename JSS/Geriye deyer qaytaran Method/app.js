// ? Geriye deyer qaytaran Method asagidaki kimi yazilir
// todo Geriye qaytarmaq ucun deyeri RETURN dan istifade olunur
// ! RETURN methodu dayandiri hardaki return yaziriqsa onan sonr kod isdemir

let geriye = kub(3);
console.log(geriye);

function kub(a) {
  let cavab = a * a * a;
  return cavab; //! Geriye qaytarmaq ucun return yazib deyeri qarsinda yazmaq lazimdi
}
// ! Void yazilirsa: Geriye deyer qaytarmiyandi
