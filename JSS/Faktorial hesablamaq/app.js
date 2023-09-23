// ! Faktorial — riyaziyyatda sağına nida işarəsi qoyulmuş ədədə verilən ad daha ümumi Qamma funksiyasının tam ədədlərlə məhdudlaşmış xüsusi bir vəziyyətidir.
// ! 1-dən müəyyən bir natural ədədə qədər olan ədədlərin hasilinə o ədədin faktorialı deyilir.

let a = Number(prompt("Reqem daxil edin"));
let vurma = 1; //! Burda deyisen teyin ediriki ki kod her defe tekrarlandikca 1 e vursun
for (let i = 1; i <= a; i++) {
  vurma = vurma * i; //! Burda ise 1 i nin cavabina vuraraq deyisenin  qiymetini yaziriq
} //! Kod her defe tekrarlandikca qiymeti artir bu artmaqa FAKTORIAL hesablama deyilir
alert("Cavab:" + vurma);
