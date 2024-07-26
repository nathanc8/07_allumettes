var nbObj = 50;
var divObj = document.getElementById("nbObjs");
var playerID = 1;
var remove_input = document.getElementById("objToRemove");
var remove_button = document.getElementById("play");
var displayObjs = function () {
    var remove_label = document.getElementById("lblObjToRemove");
    remove_input.placeholder = "Joueur ".concat(playerID);
    remove_label.innerText = "Joueur ".concat(playerID, ", \u00E0 votre tour !");
    if (divObj)
        divObj.innerText = nbObj.toString();
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
var removeSomeObjs2 = function () {
    var errorParagraph = document.getElementById("error");
    errorParagraph.innerText = "";
    var inputElement = document.getElementById("objToRemove");
    var quantityToRemove = parseInt(inputElement.value);
    if (inputElement) {
        var errorMessage = "";
        if (isNaN(quantityToRemove)) {
            errorMessage = "Merci d'entrer une valeur";
        }
        else if (quantityToRemove < 1 || quantityToRemove > 6) {
            errorMessage = "Le nombre d'objets à retirer doit être entre 1 et 6";
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
        errorParagraph.innerText = errorMessage;
        inputElement.value = "";
        return;
    }
};
var displayChange = function () {
    var victoryDiv = document.getElementById("victoire");
    victoryDiv.innerText = "Bravo Joueur ".concat(playerID, ", vous avez gagn\u00E9 !");
    victoryDiv.classList.add("visible");
    var gameDiv = document.getElementById("gamePlayer");
    gameDiv.classList.add("hidden");
    //gameDiv.style.display = 'none';
};
function clickButton() {
    remove_button.addEventListener("click", function () {
        victoire();
    });
    remove_input.addEventListener("keypress", function (event) {
        if (event.key === "Enter")
            remove_button.click();
    });
}
var victoire = function () {
    removeSomeObjs2();
    if (nbObj <= 0) {
        if (divObj)
            divObj.innerText = "0";
        displayChange();
    }
};
function maxPlayers() {
    var nbrPlayers;
    while (isNaN(nbrPlayers)) {
        nbrPlayers = prompt("Déterminez le nombre de joueurs");
        nbrPlayers = parseInt(nbrPlayers);
    }
    return nbrPlayers;
}
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
    console.log(playerID);
    return playerID;
}
var nbrPlayers = maxPlayers();
displayObjs();
clickButton();
