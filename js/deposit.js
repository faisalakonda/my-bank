document.getElementById('btn-deposit').addEventListener('click', function() {
    const newDeposit = document.getElementById('deposit-field');
    const newDepositString = newDeposit.value;
    const newDepositValue = parseFloat(newDepositString);
    // newDepositValue = '';
    const previousDeposit = document.getElementById('deposit-total');
    const previousDepositString = previousDeposit.innerText;
    const previousDepositValue = parseFloat(previousDepositString);
    const newDepositTotal = previousDepositValue + newDepositValue;
    console.log(newDepositValue, previousDepositValue, newDepositTotal);
    setTextElementValueById('deposit-total', newDepositTotal);
});