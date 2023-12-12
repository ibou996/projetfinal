// LES BUTTONS
let btnDecouvrir1 = document.getElementById("decouvrir1");
let btnDecouvrir2 = document.getElementById("decouvrir2")
let btnVoirPlus = document.getElementById("btnplus");
let btnVoirPlus1 = document.getElementById("btnplus");




// LES EVENEMENTS DE CLICK
btnDecouvrir1.addEventListener('click', decouvrirPlus1);
btnDecouvrir2.addEventListener('click', decouvrirPlus2);
// btnVoirPlus.addEventListener('click', voirPlus);




// LES FUNCTIONS


function decouvrirPlus1(){
    window.location.href = "assainissement.html";
}
function decouvrirPlus2(){
    window.location.href = "debouchage.html";
}
function voirPlus(){
    window.location.href = "services.html";
}
function voirPlus1(){
    window.location.href = "services.html#debouchage";
}
function voirPlus2(){
    window.location.href = "services.html#inspection-camera";
}
function voirPlus3(){
    window.location.href = "services.html#sanitairePlomberie";
}
function voirPlus4(){
    window.location.href = "services.html#rehabilitation";
}
function voirPlus5(){
    window.location.href = "services.html#hurricane";
}
function voirPlus6(){
    window.location.href = "services.html#haute-pression";
}
function voirPlus7(){
    window.location.href = "services.html#biohuile";
}

