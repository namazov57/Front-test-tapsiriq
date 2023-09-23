// Elementlerin yerini deyismek

const cardBody=document.querySelectorAll(".card-body")[1];//carsdBody inin icinde 1 inci indeksi tapiriq

const newTitle=document.createElement("h2");//h2 elave edirik
newTitle.className="card-title";//elave etdiyimize class veriririk
newTitle.textContent="Kod Yazan";//Adini yaziriq yeniki ekranda bu soz gorsensin

cardBody.replaceChild(newTitle,cardBody.childNodes[1]); //sonda ise replace methodu ile icerisinde nodes vererek indekse elave edirik