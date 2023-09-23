// Dinamik Element Yaratmaq

const cardBody=document.querySelectorAll(".card-body")[1]; //cardBody sinifini secirik ve 1 inci indeksdekinin yanina elqave edeceyik link ozellyiyini
const link=document.createElement("a");//link ozelliyi yaradiriq
//Asagida link ozellikleri yazacam nece gorsensin hara getsin deye
link.id="goBlogWebSite";
link.className="btn-dark btn-sm mt-3";
link.href="https://code.edu.az/";
link.target="blank";
link.textContent="Koda Yonlendir";

cardBody.appendChild(link);//link ozelliyini elave edirem appendChild ozelliyi ile
console.log(link);