function multiply() {
    num1 = document.getElementById("one").value;
    num2 = document.getElementById("two").value;
    document.getElementById("result").innerHTML = num1 * num2;
}

function divide() {
    num1 = document.getElementById("one").value;
    num2 = document.getElementById("two").value;
    document.getElementById("result").innerHTML = num1 / num2;
}

function add() {
    num1 = document.getElementById("one").value;
    num2 = document.getElementById("two").value;
    document.getElementById("result").innerHTML = parseFloat(num1) + parseFloat(num2);
}

function subtract() {
    num1 = document.getElementById("one").value;
    num2 = document.getElementById("two").value;
    document.getElementById("result").innerHTML = num1 - num2;
}