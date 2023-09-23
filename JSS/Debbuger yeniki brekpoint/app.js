
// ? Breakpoint ve Tooltip ne demekdir

/**
 Tooltipin menasi misal ucun string sozunu axira kimi yazmiyib str yazanda ustune gelende qiraqinda cixan,
 aciqlamaya Tooltip deyilir

 Breakpoint menasi ise kod yuxaridan asgiya isdiyende kod error olarsa breakpoint qoyururuqki istediyimiz,
 dayansinki koddaki sefleriimizi tapa bilek asanliqla
 */
let a=10;
debugger; //? Gelib istediyiniz yerde debugger yazarsaq onda breakpoint teyin etmisi oluruq kodun icerisine
let b=23;
let c=34;
let v=45;
let n=87;
let p=57;
let w=86;

// ! Source hissesinden baxiriq debuggere nezerinde qalsin.

let cavab=a+b+c+v+n+p+w;

console.log(cavab);