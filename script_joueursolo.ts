let nbObj: number = 5;
let divObj = document.getElementById("nbObjs");

const displayObjs = () => {
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

const removeSomeObjs2 = () => {
    let errorParagraph = {} as HTMLElement;
    const toto = document.getElementById("error");
    if (toto) errorParagraph = toto;
    //const errorParagraph = document.getElementById('error') as HTMLElement;
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
            return nbObj;
        }
        errorParagraph.innerText = errorMessage;
        inputElement.value = "";
        return;
    }
};

const displayChange = () => {
    const victoryDiv = document.getElementById("victoire") as HTMLElement;
    victoryDiv.innerText = "Bravo, vous avez gagné !";
    victoryDiv.classList.add("visible");
    const gameDiv = document.getElementById("gamePlayer") as HTMLElement;
    gameDiv.classList.add("hidden");
    //gameDiv.style.display = 'none';
};

function clickButton() {
    const remove_input = document.getElementById("objToRemove") as HTMLElement;
    const remove_button = document.getElementById("play") as HTMLElement;
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

displayObjs();

clickButton();
