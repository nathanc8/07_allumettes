var nbObj = 5;
var divObj = document.getElementById("nbObjs");
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
    var errorParagraph = {};
    var toto = document.getElementById("error");
    if (toto)
        errorParagraph = toto;
    //const errorParagraph = document.getElementById('error') as HTMLElement;
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
            return nbObj;
        }
        errorParagraph.innerText = errorMessage;
        inputElement.value = "";
        return;
    }
};
var displayChange = function () {
    var victoryDiv = document.getElementById("victoire");
    victoryDiv.innerText = "Bravo, vous avez gagné !";
    victoryDiv.classList.add("visible");
    var gameDiv = document.getElementById("gamePlayer");
    gameDiv.classList.add("hidden");
    //gameDiv.style.display = 'none';
};
function clickButton() {
    var remove_input = document.getElementById("objToRemove");
    var remove_button = document.getElementById("play");
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
displayObjs();
clickButton();
