var nbObj = 50;
var divObj = document.getElementById("nbObjs");
var playerID = 1;
var remove_input = document.getElementById("objToRemove");
var remove_button = document.getElementById("play");
var nbrPlayers = maxPlayers();
//Mise à jour des éléments HTML et initialisation des valeurs
var displayObjs = function () {
    var remove_label = document.getElementById("lblObjToRemove");
    remove_input.placeholder = "Joueur ".concat(playerID);
    remove_label.innerText = "Joueur ".concat(playerID, ", \u00E0 votre tour !");
    if (divObj)
        divObj.innerText = nbObj.toString();
    return divObj;
};
//première version de la fonction majeure du jeu (retirer des objets), à l'aide d'un prompt, peu esthétique.
/* const removeSomeObjs = () => {
    let quantity: null | string = prompt("Combien d'allumettes retirons nous ?");
    console.log(quantity, typeof quantity);
    while (quantity == '' || quantity == null) {
        quantity = prompt("Combien d'allumettes retirons nous ?");
    }
    let quantityToRemove: number = parseInt(quantity);
    nbObj -= quantityToRemove;0
    if (divObj) divObj.innerText = nbObj.toString();
    return nbObj;
}; */
//Fonction princiale du jeu
var removeSomeObjs2 = function () {
    //Manipulation et initialisation des éléments du DOM qui vont ête impactés par la fonction
    var errorParagraph = document.getElementById("error");
    errorParagraph.innerText = "";
    var inputElement = document.getElementById("objToRemove");
    //
    var quantityToRemove = parseInt(inputElement.value);
    //vérification de l'existence de la variable inputElement et de sa non nullité
    if (inputElement) {
        var errorMessage = "";
        //vérification de si quantityToRemove n'est pas null
        if (isNaN(quantityToRemove)) {
            errorMessage = "Merci d'entrer une valeur";
            //vérification de si quantityToRemove se situe bien dans les bornes définies
        }
        else if (quantityToRemove < 1 || quantityToRemove > 6) {
            errorMessage = "Le nombre d'objets à retirer doit être entre 1 et 6";
            //chemin passant, sans erreur
        }
        else {
            nbObj -= quantityToRemove;
            if (divObj)
                divObj.innerText = nbObj.toString();
            inputElement.value = "";
            if (nbObj !== 0)
                changePlayer(nbrPlayers);
            return nbObj;
        }
        //dans le cas d'un chemin avec erreur, mise à jour de celle ci et manipulation du DOM
        errorParagraph.innerText = errorMessage;
        inputElement.value = "";
        return;
    }
};
//Manipulation du DOM dans le cas d'une victoire via le changement de classe
var displayChange = function () {
    var victoryDiv = document.getElementById("victoire");
    victoryDiv.innerText = "Bravo Joueur ".concat(playerID, ", vous avez gagn\u00E9 !");
    victoryDiv.classList.add("visible");
    var gameDiv = document.getElementById("gamePlayer");
    gameDiv.classList.add("hidden");
    //gameDiv.style.display = 'none';
};
//Attribution de fonctions au bouton "play" à l'aide d'écouteurs d'évènements
function clickButton() {
    remove_button.addEventListener("click", function () {
        main();
    });
    remove_input.addEventListener("keypress", function (event) {
        if (event.key === "Enter")
            remove_button.click();
    });
}
//Lance la fonction removeObj, vérifie la condition de victoire, et lance la fonction qui change l'affichage en cas de victoire
var main = function () {
    removeSomeObjs2();
    if (nbObj <= 0) {
        if (divObj)
            divObj.innerText = "0";
        displayChange();
    }
};
//définition du nombre de joueurs maximum
function maxPlayers() {
    //On agit sur une variable temporaire, qui sera stockée dans la constante "nbrPlayers"
    var nb;
    //vérification de si nb est null ou NaN : si correspond à l'un ou l'autre, on relance le prompt
    while (isNaN(nb) || nb == null) {
        nb = prompt("Déterminez le nombre de joueurs");
        nb = parseInt(nb);
    }
    return nb;
}
//Permet d'indiquer aux joueurs qu'on change de joueurs, appelé dans la fonction removeObj, avec manipulation du DOM
function changePlayer(IDmax) {
    var remove_label = document.getElementById("lblObjToRemove");
    if (playerID < IDmax) {
        playerID++;
    }
    else {
        playerID = 1;
    }
    remove_input.placeholder = "Joueur ".concat(playerID);
    remove_label.innerText = "Joueur ".concat(playerID, ", \u00E0 votre tour !");
    return playerID;
}
//initialisation du jeu
displayObjs();
clickButton();
