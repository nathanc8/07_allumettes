var nbObj = 50;
var divObj;
var displayObjs = function () {
    divObj = document.getElementById("nbObjs");
    if (divObj)
        divObj.innerText = nbObj;
    return divObj;
};
displayObjs();
var removeSomeObjs = function () {
    //const objToRemove = document.getElementById("objToRemove").innerText as HTMLElement
    var quantity = prompt("Combien d'allumettes retirons nous ?");
    console.log(quantity, typeof quantity);
    while (quantity == "" || quantity == null) {
        quantity = prompt("Combien d'allumettes retirons nous ?");
    }
    var quantityToRemove = parseInt(quantity);
    nbObj -= quantityToRemove;
    if (divObj)
        divObj.innerText = nbObj.toString();
};
var victoire = function (param) {
    var win = false;
    while (param > 0) {
        //appeler la fonction pour enlever x objets
    }
};
