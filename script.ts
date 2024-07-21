let nbObj: number = 5;
let divObj = document.getElementById('nbObjs');

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
    const errorParagraph = document.getElementById('error') as HTMLParagraphElement;
    errorParagraph.innerText = '';
    const inputElement = document.getElementById('objToRemove') as HTMLInputElement;

    if (inputElement) {
        let quantity: string | null = inputElement.value;
        const quantityToRemove: number = parseInt(quantity);

        if (isNaN(quantityToRemove) || quantityToRemove < 1 || quantityToRemove > 6) {
            let errorMessage: string;
            if (isNaN(quantityToRemove)) {
                errorMessage = "Merci d'entrer une valeur";
            } else {
                errorMessage = "Le nombre d'objets à retirer doit être entre 1 et 6";
            }
            errorParagraph.innerText = errorMessage;
            inputElement.value = '';
            return;
        } else {
            nbObj -= quantityToRemove;
            if (divObj) divObj.innerText = nbObj.toString();
            inputElement.value = '';
        }
    }
    return nbObj;
};

const displayChange = () => {
    const victoryDiv = document.getElementById('victoire') as HTMLDivElement;
    victoryDiv.innerText = 'Bravo, vous avez gagné !';
    victoryDiv.style.display = 'flex';
    const gameDiv = document.getElementById('gamePlayer') as HTMLDivElement;
    gameDiv.style.display = 'none';
};

const victoire = () => {
    removeSomeObjs2();
    if (nbObj <= 0) {
        if (divObj) divObj.innerText = '0';
        displayChange();
    }
};

displayObjs();
