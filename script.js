var nbObj = 5;
var divObj = document.getElementById('nbObjs');
var displayObjs = function () {
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
    var errorParagraph = document.getElementById('error');
    errorParagraph.innerText = '';
    var inputElement = document.getElementById('objToRemove');
    if (inputElement) {
        var quantity = inputElement.value;
        var quantityToRemove = parseInt(quantity);
        if (isNaN(quantityToRemove) || quantityToRemove < 1 || quantityToRemove > 6) {
            var errorMessage = void 0;
            if (isNaN(quantityToRemove)) {
                errorMessage = "Merci d'entrer une valeur";
            }
            else {
                errorMessage = "Le nombre d'objets à retirer doit être entre 1 et 6";
            }
            errorParagraph.innerText = errorMessage;
            inputElement.value = '';
            return;
        }
        else {
            nbObj -= quantityToRemove;
            if (divObj)
                divObj.innerText = nbObj.toString();
            inputElement.value = '';
        }
    }
    return nbObj;
};
var displayChange = function () {
    var victoryDiv = document.getElementById('victoire');
    victoryDiv.innerText = 'Bravo, vous avez gagné !';
    victoryDiv.style.display = 'flex';
    var gameDiv = document.getElementById('gamePlayer');
    gameDiv.style.display = 'none';
};
var victoire = function () {
    removeSomeObjs2();
    if (nbObj <= 0) {
        if (divObj)
            divObj.innerText = '0';
        displayChange();
    }
};
displayObjs();
