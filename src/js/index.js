
let stat = document.getElementById("status");
let newCardButton = document.getElementById("pick")
let startButton = document.getElementById("startGame")
let sum = document.getElementById("sumNum");
let isOn = true;
let cardDiv = document.getElementById("display1");
let cards = []
function checkCondition() {
    cardDiv.innerHTML = "";

    for (let card of cards) {
        cardDiv.innerHTML += `<div class="card">${card}</div>`;
    }
    if (Number(sum.innerText) < 21) {
        stat.innerText = "Draw Another Card";
        stat.style.color = "white";
        isOn = true;
        
    }
    else if (Number(sum.innerText) === 21) {
        stat.textContent = "Whoo, You won !!! 🥳";
        stat.style.color = "green";
        isOn =false;
        cards=[];
    }
    else {
        stat.textContent= "You are Out !!! 😭\nYou Can't Pick Cards AnyMore";
        stat.style.color = "red";
        isOn = false;
        cards =[];
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
    sum.innerText = sumR; 
    cards.push(num1R);
    cards.push(num2R);
    checkCondition();
}

function newCard(){
    let newCard = Math.floor((Math.random() * 12) + 2);
    cards.push(newCard);
    sum.innerText = Number(sum.innerText) + newCard;
    checkCondition();
}



