
/********************************************************************************************
 * 
 *                                TIP CALCULATOR FUNCTIONS
 *                                 @function tipTen 
 *                                @function tipFifteen 
 *                                 @function tipTwenty
 *                                 @function tipCustom
 **********************************************************************************************/

function tipTen()
{
    var amount = parseInt ( document.getElementById("bill").value ) ;
    var percent = parseInt ( document.getElementById("ten").value ) ;
    const tip = amount * percent / 100;
    document.getElementById("tip").innerHTML = "Tip: $" + tip;
}

function tipFifteen()
{
    var amount = parseInt ( document.getElementById("bill").value ) ;
    var percent = parseInt ( document.getElementById("fifteen").value ) ;
    const tip = amount * percent / 100;
    document.getElementById("tip").innerHTML = "Tip: $" + tip;
}

function tipTwenty()
{
    var amount = parseInt ( document.getElementById("bill").value ) ;
    var percent = parseInt ( document.getElementById("twenty").value ) ;
    const tip = amount * percent / 100;
    document.getElementById("tip").innerHTML = "Tip: $" + tip;
}

function tipCustom()
{
    var amount = parseInt ( document.getElementById("bill").value ) ;
    var percent = parseInt ( document.getElementById("other").value ) ;
    const tip = amount * percent / 100;
    document.getElementById("tip").innerHTML = "Tip: $" + tip;
}