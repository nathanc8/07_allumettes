let nbObj: number = 50;
let divObj;

const displayObjs = () => {
    divObj = document.getElementById("nbObjs");
    if (divObj) divObj.innerText = nbObj; //.toString();
    return divObj;
};

displayObjs();

const removeSomeObjs = () => {
    //const objToRemove = document.getElementById("objToRemove").innerText as HTMLElement
    let quantity: null | string = prompt("Combien d'allumettes retirons nous ?");
    console.log(quantity, typeof quantity);
    while (quantity == "" || quantity == null) {
        quantity = prompt("Combien d'allumettes retirons nous ?");
    }
    let quantityToRemove: number = parseInt(quantity);
    nbObj -= quantityToRemove;
    if (divObj) divObj.innerText = nbObj.toString();
    return nbObj;
};

const victoire = (param) => {
    let win: boolean = false;
    while (param > 0) {
        //appeler la fonction pour enlever x objets
    }
};
