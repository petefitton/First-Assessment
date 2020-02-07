let total = 0;
document.querySelector(".totalNum").innerText = total;

let add = function() {
    total += parseInt(`${document.querySelector(".inputField").value}`);
    if (total >= 0) {
        document.querySelector(".totalNum").style.color = "black";
    }
    document.querySelector(".totalNum").innerText = total;
}

let subtract = function() {
    total -= parseInt(`${document.querySelector(".inputField").value}`);
    if (total < 0) {
        document.querySelector(".totalNum").style.color = "red";
    }
    document.querySelector(".totalNum").innerText = total;
}




let addThemeChange = function() {
    document.querySelector(".addButton").style.backgroundColor = "white";
    document.querySelector(".addButton").style.color = "rgb(167, 167, 167)";
}

let subtractThemeChange = function() {
    document.querySelector(".subtractButton").style.backgroundColor = "white";
    document.querySelector(".subtractButton").style.color = "rgb(167, 167, 167)";
}

let addThemeRevert = function() {
    document.querySelector(".addButton").style.backgroundColor = "rgb(167, 167, 167)";
    document.querySelector(".addButton").style.color = "white";
}

let subtractThemeRevert = function() {
    document.querySelector(".subtractButton").style.backgroundColor = "rgb(167, 167, 167)";
    document.querySelector(".subtractButton").style.color = "white";
}



document.querySelector(".addButton").addEventListener("click", add);
document.querySelector(".subtractButton").addEventListener("click", subtract);

document.querySelector(".addButton").addEventListener("mouseover", addThemeChange);
document.querySelector(".subtractButton").addEventListener("mouseover", subtractThemeChange);

document.querySelector(".addButton").addEventListener("mouseout", addThemeRevert);
document.querySelector(".subtractButton").addEventListener("mouseout", subtractThemeRevert);


