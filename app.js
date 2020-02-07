let total = 0;
document.querySelector(".totalNum").innerText = total;

let add = function() {
    total += parseInt(`${document.querySelector(".inputField").value}`);
    document.querySelector(".totalNum").innerText = total;
}

let subtract = function() {
    total -= parseInt(`${document.querySelector(".inputField").value}`);
    document.querySelector(".totalNum").innerText = total;
}

document.querySelector(".addButton").addEventListener("click", add);
document.querySelector(".subtractButton").addEventListener("click", subtract);