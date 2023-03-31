let btnLancer = document.getElementById("btnLancer");
let listResultats = document.getElementById("listResultats");
let message = document.getElementById("message");
let ul = document.createElement("ul");
let de = "6"

let resultat = "";


btnLancer.addEventListener("click",lancer);

function lancer(){
    resultat = Math.floor((Math.random() * de) + 1);
    console.log(resultat);
    console.log(de);
    if (resultat == 1) {
        message.innerHTML = " Pas de chance ! Ahahaha !";
        message.style.color = "white";
    }
    else {
        message.innerHTML = "";
    }

    listResultats.appendChild(ul);

    let face1 = document.createElement("img");
    face1.setAttribute("src","https://cdn.pixabay.com/photo/2013/07/12/17/39/dice-152173_960_720.png");
    let face2 = document.createElement("img");
    face2.setAttribute("src","https://cdn.pixabay.com/photo/2013/07/12/17/39/dice-152174_960_720.png");
    let face3 = document.createElement("img");
    face3.setAttribute("src","https://cdn.pixabay.com/photo/2013/07/12/17/39/dice-152175_960_720.png");
    let face4 = document.createElement("img");
    face4.setAttribute("src","https://cdn.pixabay.com/photo/2013/07/12/17/39/dice-152176_960_720.png");
    let face5 = document.createElement("img");
    face5.setAttribute("src","https://cdn.pixabay.com/photo/2013/07/12/17/39/dice-152177_960_720.png");
    let face6 = document.createElement("img");
    face6.setAttribute("src","https://cdn.pixabay.com/photo/2013/07/12/17/39/dice-152178_960_720.png");
    let newItem = document.createElement("li");

    switch (resultat) {
        case 1:
            resultat = face1;
            newItem.appendChild(resultat);
            break;
        case 2:
            resultat = face2;
            newItem.appendChild(resultat);
            break;
        case 3:
            resultat = face3;
            newItem.appendChild(resultat);
            break;
        case 4:
            resultat = face4;
            newItem.appendChild(resultat);
            break;
        case 5:
            resultat = face5;
            newItem.appendChild(resultat);
            break;
        case 6:
            resultat = face6;
            newItem.appendChild(resultat);
            break;
        default:
            newItem.innerHTML = resultat;
    }

    console.log(resultat);

    
    ul.insertBefore(newItem, ul.childNodes[0]);


}
