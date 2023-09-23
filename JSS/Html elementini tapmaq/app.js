// !HTML Elementlerinin uzerinde gezmek

const todo=document.querySelector(".list-group-item");
const todoList=document.querySelector(".list-group");
const card=document.querySelector(".card");
const row=document.querySelector(".row");
//Asagida valdeyinen usaqlara erisimek
let value;//Burda deyisen yaratdimki console logu her defe yazmiyim
// ? Asagidaki qaydada Anasindan usaqlarina elde etmek olur yeniki istediyimizi gedib cagirib getire bilirik
value=todoList;
value=todoList.children[0];
value=todoList.children[3]; //Indeksine gore tapdim
value=todoList.children[todoList.children.length-1]; //Uzunluquna gorede tapmaq olur men burda en sonuncu elementi yazdirdim
value=todoList.children[3].textContent="CODE";//Burda ise todo sozunu CODE sozu ile deyisdirdim ekranda

// value=Array.from(todoList.children);  //Array methodu ile isdedib ekrana yazdirdim
// value.forEach(function(todo){ 
//     console.log(todo.textContent);
// })
//Asagidaki usulda ise valdeyinini tapmaq olur
value=todo;
value=todo.parentElement.parentElement.parentElement.parentElement; // parentElement yazmaq ile sefer bir uste yeniki valdeyinini tapmaq olur 
value=value.parentElement;

//Asagidaki usulda ise qardaslarini getrir ozunden sonraki qardasini

value=todo;
value=todo.nextElementSibling.nextElementSibling; //qardas qalmiyanda ise null verir console

value=row.children[0].children[3].children[0].textContent="FRONTED"; //Burda row dan basdiyib bir bir usaqlarinin indeksini tapib axirda 0 inci indeksinin adini deyisib FRONTEND qoydum bunlar bize cox lazim olacaq
value=row.children[0].children[3].children[2].children[3].style.color="red"; //Burda row dan basdiyib bir bir usaqlarinin indeksini tapib axirda 3 uncu indeks olan CODE sozunu qirmizi yazdim 



console.log(value);
