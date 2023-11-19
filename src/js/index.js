
let stat = document.getElementById("status");
let newCardButton = document.getElementById("pick")
let startButton = document.getElementById("startGame")

let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let sum = document.getElementById("sumNum");
let isOn = true;
function checkCondition() {
    if (Number(sum.innerText) < 21) {
        stat.innerText = "Draw Another Card";
        stat.style.color = "white";
        isOn = true;
        
    }
    else if (Number(sum.innerText) === 21) {
        stat.textContent = "Whoo, You won !!! 🥳";
        stat.style.color = "green";
        isOn =false;
    }
    else {
        stat.textContent= "You are Out !!! 😭\nYou Can't Pick Cards AnyMore";
        stat.style.color = "red";
        isOn = false;
    }

    if (isOn){
        startButton.disabled = true;
        newCardButton.disabled = false;
    }
        else{
        startButton.disabled = false;
        newCardButton.disabled = true;
    }
}

function startGame(){
    num1R = Math.floor((Math.random() * 12) + 2);
    num2R = Math.floor((Math.random() * 12) + 2);
    sumR = num1R + num2R;
    num1.innerText = num1R;
    num2.innerText =num2R;
    sum.innerText = sumR; 
    checkCondition();
}

function newCard(){
    let newCard = Math.floor((Math.random() * 12) + 2);
    num1.innerText = sum.innerText;
    num2.innerText = newCard;
    sum.innerText = Number(num1.innerText) + Number(num2.innerText);
    checkCondition();
}



