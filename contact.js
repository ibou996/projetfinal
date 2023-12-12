// LES BOUTTONS
let btnsubmit = document.getElementById("submt");
let btnenvoyer = document.getElementById("btn");

// LES EVENEMENTS
btnsubmit.addEventListener('click', envoyer);
btnenvoyer.addEventListener('click', envoyer1)


// LES FONCTIONS

function envoyer(e){
    e.preventDefault(); 
    
    let erreur;
    let nom = document.getElementById("name");
    let nomUtilisateur = document.getElementById("username");
    let prenom = document.getElementById("name1");
    let message = document.getElementById("text1");

    if(!message.value){
        erreur = "Le Champ de message est vide"
    }
    if(!nomUtilisateur.value){
        erreur = "Veuillez renseigner votre adresse email";
    }

    if(!prenom.value){
        erreur = "Veuillez renseigner votre prénom"
    }
  
    if(!nom.value){
        erreur = "Veuillez renseigner votre nom";
    }
   
    
    if (erreur){
        e.preventDefault();
        document.getElementById("erreur").innerHTML = erreur;
        return false
    }else{
        alert("MESSAGE ENVOYER!");
     }

}

function envoyer1(e){
    e.preventDefault(); 

    let erreur1;
    let email = document.getElementById("email1");
    let text = document.getElementById("text");


    if(!text.value){
        erreur1 = "Le champ de commentaire est vide";
    }
    
    if(!email.value){
        erreur1 = "Veuillez renseigner votre Email";
    }
  

    if (erreur1){
        e.preventDefault();
        document.getElementById("erreur1").innerHTML = erreur1;
        return false
    }else{
        alert("FORMULAIRE ENVOYER!");
     }

}