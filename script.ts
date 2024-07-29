let nbObj: number = 50;
let divObj = document.getElementById("nbObjs");
let playerID: number = 1;
const remove_input = document.getElementById("objToRemove") as HTMLInputElement;
const remove_button = document.getElementById("play") as HTMLElement;
const nbrPlayers = maxPlayers();

//Mise à jour des éléments HTML et initialisation des valeurs
const displayObjs = () => {
    let remove_label = document.getElementById("lblObjToRemove") as HTMLElement;
    remove_input.placeholder = `Joueur ${playerID}`;
    remove_label.innerText = `Joueur ${playerID}, à votre tour !`;
    if (divObj) divObj.innerText = nbObj.toString();
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
const removeSomeObjs2 = (): number | undefined => {
    //Manipulation et initialisation des éléments du DOM qui vont ête impactés par la fonction
    const errorParagraph = document.getElementById("error") as HTMLElement;
    errorParagraph.innerText = "";
    const inputElement = document.getElementById("objToRemove") as HTMLInputElement;

    //
    const quantityToRemove: number = parseInt(inputElement.value);
    //vérification de l'existence de la variable inputElement et de sa non nullité
    if (inputElement) {
        let errorMessage: string = "";
        //vérification de si quantityToRemove n'est pas null
        if (isNaN(quantityToRemove)) {
            errorMessage = "Merci d'entrer une valeur";
            //vérification de si quantityToRemove se situe bien dans les bornes définies
        } else if (quantityToRemove < 1 || quantityToRemove > 6) {
            errorMessage = "Le nombre d'objets à retirer doit être entre 1 et 6";
            //chemin passant, sans erreur
        } else {
            nbObj -= quantityToRemove;
            if (divObj) divObj.innerText = nbObj.toString();
            inputElement.value = "";
            if (nbObj !== 0) changePlayer(nbrPlayers);
            return nbObj;
        }
        //dans le cas d'un chemin avec erreur, mise à jour de celle ci et manipulation du DOM
        errorParagraph.innerText = errorMessage;
        inputElement.value = "";
        return;
    }
};

//Manipulation du DOM dans le cas d'une victoire via le changement de classe
const displayChange = () => {
    const victoryDiv = document.getElementById("victoire") as HTMLElement;
    victoryDiv.innerText = `Bravo Joueur ${playerID}, vous avez gagné !`;
    victoryDiv.classList.add("visible");
    const gameDiv = document.getElementById("gamePlayer") as HTMLElement;
    gameDiv.classList.add("hidden");
    //gameDiv.style.display = 'none';
};

//Attribution de fonctions au bouton "play" à l'aide d'écouteurs d'évènements
function clickButton() {
    remove_button.addEventListener("click", function () {
        main();
    });
    remove_input.addEventListener("keypress", function (event) {
        if (event.key === "Enter") remove_button.click();
    });
}

//Lance la fonction removeObj, vérifie la condition de victoire, et lance la fonction qui change l'affichage en cas de victoire
const main = () => {
    removeSomeObjs2();
    if (nbObj <= 0) {
        if (divObj) divObj.innerText = "0";
        displayChange();
    }
};

//définition du nombre de joueurs maximum
function maxPlayers(): number {
    //On agit sur une variable temporaire, qui sera stockée dans la constante "nbrPlayers"
    let nb;
    //vérification de si nb est null ou NaN : si correspond à l'un ou l'autre, on relance le prompt
    while (isNaN(nb) || nb == null) {
        nb = prompt("Déterminez le nombre de joueurs");
        nb = parseInt(nb);
    }
    return nb;
}

//Permet d'indiquer aux joueurs qu'on change de joueurs, appelé dans la fonction removeObj, avec manipulation du DOM
function changePlayer(IDmax: number): number {
    let remove_label = document.getElementById("lblObjToRemove") as HTMLElement;
    if (playerID < IDmax) {
        playerID++;
    } else {
        playerID = 1;
    }
    remove_input.placeholder = `Joueur ${playerID}`;
    remove_label.innerText = `Joueur ${playerID}, à votre tour !`;
    return playerID;
}

//initialisation du jeu
displayObjs();
clickButton();
