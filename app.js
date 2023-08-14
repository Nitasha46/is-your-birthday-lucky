const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkNumber = document.querySelector("#check-number");
const outputContainer = document.querySelector("#output-container");

function calculateSum(dobValue) {
    let sum = 0;
    dobValue = dobValue.replaceAll("-","");
    for (let i=0; i<dobValue.length; i++) {
        sum = sum + Number(dobValue.charAt(i));
    }
    return sum;
}

function checkIsNumberLucky(sumOfDob,luckyNumberValue) {
    if (sumOfDob % luckyNumberValue === 0) {
        showMessage(luckyNumberValue + " is a lucky number");
    } else {
        showMessage(luckyNumberValue + " is not that lucky");
    }
}

function hideMessage() {
    outputContainer.style.display = "none";
}

function showMessage(message) {
    outputContainer.style.display = "block";
    outputContainer.innerText = message;
}

function clickEventHandler() {
    hideMessage();

    const dobValue = dateOfBirth.value;
    const luckyNumberValue = luckyNumber.value;
    if (dobValue && luckyNumberValue) {
        const sumOfDob = calculateSum(dobValue);
        checkIsNumberLucky(sumOfDob, luckyNumberValue);
    } else {
        showMessage("Please enter both the fields");
    }
}

checkNumber.addEventListener("click", clickEventHandler);