
let stat = document.getElementById("status");
let button = document.getElementById("pick")
let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let sum = document.getElementById("sumNum");

function checkCondition() {
    if (Number(sum.innerText) < 21) {
        stat.innerText = "Do You Want To Draw Another Card ?";
        stat.style.color = "black";
    }
    else if (Number(sum.innerText) === 21) {
        stat.textContent = "Whoo, You won !!! 🥳\nYou Can Pick Another";
        stat.style.color = "green";
    }
    else {
        stat.textContent= "You are Out !!! 😭\nYou Can't Pick Cards AnyMore";
        stat.style.color = "red";
        button.disabled = true;
    }
}

function selectRandom(){
    num1R = Math.floor((Math.random() * 12) + 2);
    num2R = Math.floor((Math.random() * 12) + 2);
    sumR = num1R + num2R;
    num1.innerText = num1R;
    num2.innerText =num2R;
    sum.innerText = sumR; 
    checkCondition();
}


