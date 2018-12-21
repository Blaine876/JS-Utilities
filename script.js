function tipCalc()
{
    var amount = document.getElementById('bill').value;
    var percent = document.getElementById('ten').value;
    var tip = amount * (percent/100);
    return tip;
}