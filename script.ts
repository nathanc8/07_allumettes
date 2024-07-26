let nbObj: number = 50;
let divObj = document.getElementById("nbObjs");
let playerID: number = 1;
const remove_input = document.getElementById("objToRemove") as HTMLInputElement;
const remove_button = document.getElementById("play") as HTMLElement;

const displayObjs = () => {
    let remove_label = document.getElementById("lblObjToRemove") as HTMLElement;
    remove_input.placeholder = `Joueur ${playerID}`;
    remove_label.innerText = `Joueur ${playerID}, à votre tour !`;
    if (divObj) divObj.innerText = nbObj.toString();
    return divObj;
};

/* const removeSomeObjs = () => {
    let quantity: null | string = prompt("Combien d'allumettes retirons nous ?");
    console.log(quantity, typeof quantity);
    while (quantity == '' || quantity == null) {
        quantity = prompt("Combien d'allumettes retirons nous ?");
    }
    let quantityToRemove: number = parseInt(quantity);
    nbObj -= quantityToRemove;
    if (divObj) divObj.innerText = nbObj.toString();
    return nbObj;
}; */

const removeSomeObjs2 = (): number | undefined => {
    const errorParagraph = document.getElementById("error") as HTMLElement;
    errorParagraph.innerText = "";
    const inputElement = document.getElementById("objToRemove") as HTMLInputElement;

    const quantityToRemove: number = parseInt(inputElement.value);
    if (inputElement) {
        let errorMessage: string = "";
        if (isNaN(quantityToRemove)) {
            errorMessage = "Merci d'entrer une valeur";
        } else if (quantityToRemove < 1 || quantityToRemove > 6) {
            errorMessage = "Le nombre d'objets à retirer doit être entre 1 et 6";
        } else {
            nbObj -= quantityToRemove;
            if (divObj) divObj.innerText = nbObj.toString();
            inputElement.value = "";
            if (nbObj !== 0) changePlayer(nbrPlayers);
            return nbObj;
        }
        errorParagraph.innerText = errorMessage;
        inputElement.value = "";
        return;
    }
};

const displayChange = () => {
    const victoryDiv = document.getElementById("victoire") as HTMLElement;
    victoryDiv.innerText = `Bravo Joueur ${playerID}, vous avez gagné !`;
    victoryDiv.classList.add("visible");
    const gameDiv = document.getElementById("gamePlayer") as HTMLElement;
    gameDiv.classList.add("hidden");
    //gameDiv.style.display = 'none';
};

function clickButton() {
    remove_button.addEventListener("click", function () {
        victoire();
    });
    remove_input.addEventListener("keypress", function (event) {
        if (event.key === "Enter") remove_button.click();
    });
}

const victoire = () => {
    removeSomeObjs2();
    if (nbObj <= 0) {
        if (divObj) divObj.innerText = "0";
        displayChange();
    }
};

function maxPlayers(): number {
    let nbrPlayers;
    while (isNaN(nbrPlayers)) {
        nbrPlayers = prompt("Déterminez le nombre de joueurs");
        nbrPlayers = parseInt(nbrPlayers);
    }
    return nbrPlayers;
}

function changePlayer(IDmax: number): number {
    let remove_label = document.getElementById("lblObjToRemove") as HTMLElement;
    if (playerID < IDmax) {
        playerID++;
    } else {
        playerID = 1;
    }
    remove_input.placeholder = `Joueur ${playerID}`;
    remove_label.innerText = `Joueur ${playerID}, à votre tour !`;
    console.log(playerID);
    return playerID;
}

const nbrPlayers = maxPlayers();

displayObjs();

clickButton();
