/*
Selectorlar menasi Seciciler demekdir

classname,id,tag name gore secmek olur

getElementById:id ye gore elementi tapsin
getElementByClassName:Class gore elementi tapir
getElementsByTagName:etiketlere gore tapir

*/ 
// let value;

// value =document.getElementById("todoAddButton") //ID sine gore tapiriqki harda isdenib id di



// console.log(value);

// const button=document.getElementById("todoAddButton");

// console.log(button);
// console.log(button.className);//Burda classin adini console cixardir
// console.log(button.getAttribute("class"));//Burda ise classini yene getirir alternativ yoludu

 // const classSeyfe=button.classList[2];//Bu sekilde yazibda axtarmaq olur ve yaxudda index  yazmadan sadece clasList yazib hamisini cixartmaq olur console
 // console.log(classSeyfe);//Burda da butun seyfeni cixardir classin
// const classSeyfe=button.classList;
// classSeyfe.forEach(function(className) { //Method ilede axtarmaq olur
//     console.log(className);
// })
// console.log(classSeyfe);

// let buttonText =button.textContent;//Bu usul ile text cixartmaq olur console
// let buttonText2 =button.innerHTML;//Bu usul ile text cixartmaq olur console arasindaki ferq ise stringin etrafind html tag  varsa onlarida cixardir
// console.log(buttonText);
// console.log(buttonText2);

// const todoList=Array.from(document.getElementsByClassName("list-group")); //Bu qaydada gedib classinName olanin getirir array ile istesek arraysizde cagirmaq olur
// todoList.forEach(function(todo){
//     console.log(todo);
// })

// console.log(todoList);


// const forms=document.getElementsByTagName("form"); //Burda ise formlarini gedib getirir
// console.log(forms);
// const forms=Array.from(document.getElementsByTagName("form")); //Burda ise formlarini gedib getirir array methodu ile

// forms.forEach(function(form){
//     console.log(form);
// })
// console.log(forms[1]); //Indeksine gorede tapmaq olur 

// ! querySelector-querySelectorAll :methodlarimizda var ustunluyu id class tag hamisini secmek olur

// const clearButton=document.querySelector("#todoClearButton");//Id ye gore secdim qarsisinda # qoyub id ni yazmaq lazimdi
// console.log(clearButton);
// const todoList=document.querySelector(".list-group");//Class a gore secdim qarsisinda . qoyub class ni yazmaq lazimdi
// console.log(todoList);

// const todoList=document.querySelectorAll(".list-group-item"); //All ile isdedende classin hamisini getirir
// console.log(todoList);

const todoList=Array.from(document.querySelectorAll("li:nth-child(odd)")); //child ozelliyi ilede secmek olur tekler boz reng effekti verdim
todoList.forEach(function(todo){
    todo.style.backgroundColor="lightgrey"; //numuniye baxib siz deyisede bilersiz

})

console.log(todoList);