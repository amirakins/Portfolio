const btn = document.getElementById('btn');
btn.addEventListener('click', function(){
    const billAmount = document.getElementById('bill-amount');
    const tipPercentage = document.getElementById('tip-percentage');
    const tipAmount = document.getElementById('tip-amount');
    tipAmount.value = (tipPercentage.value / 100) * billAmount.value;
    tipAmount.value = (Math.round(tipAmount.value * 100) / 100).toFixed(2);
    const totalBill = document.getElementById('total-bill');
    totalBill.value = parseFloat(billAmount.value) + parseFloat(tipAmount.value);
    totalBill.value = (Math.round(totalBill.value * 100) / 100).toFixed(2);
})
