// login button event handler
const loginBtn = document.getElementById('login');
loginBtn.addEventListener("click", function() {
    document.getElementById('login-area').style.display = "none";
    document.getElementById('transaction-area').style.display = "block"
})

// FUNCTION to update deposit and withdraw amount
function updateAccount(id, inputAmount) {
    const currentAmount = parseFloat(document.getElementById(id).innerText);
    const newAmount = currentAmount + inputAmount;
    document.getElementById(id).innerText = newAmount;
}

// deposit button event handler on mouse click
document.getElementById('addDeposit').addEventListener('click', function() {
    const depositAmount = parseFloat(document.getElementById('depositAmount').value);
    if(depositAmount >= 0) {
        updateAccount('currentDeposit', depositAmount);
        updateAccount('currentBalance', depositAmount);
        document.getElementById('depositAmount').value = "";
    }
})

// deposit button event handler on enter key press
document.getElementById('depositAmount').addEventListener('keyup', function(event) {
    if(event.keyCode === 13) 
        document.getElementById('addDeposit').click();
})

// withdraw button event handler on mouse click
document.getElementById('addWithdraw').addEventListener('click', function() {
    const withdrawAmount = parseFloat(document.getElementById('withdrawAmount').value);
    const currentBalance = parseFloat(document.getElementById('currentBalance').innerText);
    if(withdrawAmount >= 0 && withdrawAmount <= currentBalance) {
        updateAccount('currentWithdraw', withdrawAmount);
        updateAccount('currentBalance', -withdrawAmount);
        document.getElementById('withdrawAmount').value = "";
    }
})

// withdraw button event handler on enter key press
document.getElementById('withdrawAmount').addEventListener('keyup', function(event) {
    if(event.keyCode === 13)
        document.getElementById('addWithdraw').click();
})