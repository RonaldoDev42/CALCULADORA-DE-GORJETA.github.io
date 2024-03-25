function calculateTip() {
    var billAmount = parseFloat(document.getElementById("billAmount").value);
    var tipPercentage = parseFloat(document.getElementById("tipPercentage").value);
    
    if (!isNaN(billAmount) && !isNaN(tipPercentage)) {
        var tipAmount = billAmount * (tipPercentage / 100);
        var totalAmount = billAmount + tipAmount;
        document.getElementById("totalTip").innerHTML = "Valor da Gorjeta: R$ " + tipAmount.toFixed(2) + "<br>Total a ser pago: R$ " + totalAmount.toFixed(2);
    } else {
        document.getElementById("totalTip").innerHTML = "Por favor, insira valores válidos.";
    }
}