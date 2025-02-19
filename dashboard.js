let userName = "Mohammad";

let userBalance = 0;
let balance  = 2000000.09
userBalance = balance.toLocaleString('en-US')
let investment =  1800000
let currentInvestment = investment.toLocaleString('en-US');
let deposit =  2000
let totalDeposited = deposit.toLocaleString('en-US')
let withdrawn =198000.09;
let totalWithdrawn = withdrawn.toLocaleString('en-US')

// Update displayed user info
document.getElementById("user-name").innerText = userName;
document.getElementById("user-balance").innerText = userBalance;
document.getElementById("current-investment").innerText = currentInvestment;
document.getElementById("total-deposited").innerText = totalDeposited;
document.getElementById("total-withdrawn").innerText = totalWithdrawn;

// Function to handle deposits
function depositFunds() {
    let depositAmount = parseFloat(document.getElementById("deposit-amount").value);
    if (isNaN(depositAmount) || depositAmount <= 0) {
        alert("Please enter a valid amount to deposit.");
        return;
    }
    
    alert("Contact customer care on WhatsApp for deposits.");
    window.open("https://wa.link/gngd9r", "_blank");
}

// Function to handle withdrawals
function withdrawFunds() {
    let withdrawAmount = parseFloat(document.getElementById("withdraw-amount").value);
    let withdrawWallet = document.getElementById("withdraw-wallet").value;
    
    if (isNaN(withdrawAmount) || withdrawAmount <= 0) {
        alert("Please enter a valid amount to withdraw.");
        return;
    }
    
    if (!withdrawWallet) {
        alert("Please enter a valid wallet address.");
        return;
    }
    
    if (withdrawAmount > userBalance) {
        alert("Insufficient balance!");
        return;
    }
    
    alert("Contact customer care on WhatsApp for withdrawals.");
    window.open("https://wa.link/gngd9r", "_blank");
}
