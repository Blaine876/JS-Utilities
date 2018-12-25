
/********************************************************************************************
 * 
 *                                TIP CALCULATOR 
 *                                FUNCTIONS
 *                                @function tipTen 
 *                                @function tipFifteen 
 *                                @function tipTwenty
 *                                @function tipCustom
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

/********************************************************************************* */
/*
 *                              UNIT CONVERSION
 *                               FUNCTIONS
 *                               @function unitCOnvert 
 *  3 feet = 1 yard
 *  100 yard = 1 mile
 *  
 ******************************************************************************************/

 function unitConvert()
 {
    var myInput = parseInt(document.getElementById("firstUnit").value);
    var first_unit = document.getElementById("mySelect1").value;
    var second_unit = document.getElementById("mySelect2").value;
    
    // MILLIMETER CONVERSIONS
    if (first_unit == "mm" && second_unit == "mm")
    {
        result = myInput;
    }

    else if (first_unit == "mm" && second_unit == "cm")
    {
        result = myInput * 10;
    }

    else if (first_unit == "mm" && second_unit == "m")
    {
        result = myInput * 1000;
    }

    else if (first_unit == "mm" && second_unit == "km")
    {
        result = myInput * 10000;
    }

    // CENTIMETER CONVERSIONS
    else if (first_unit == "cm" && second_unit == "mm")
    {
        result = myInput * 10;
    }

    else if (first_unit == "cm" && second_unit == "cm")
    {
        result = myInput;
    }

    else if (first_unit == "cm" && second_unit == "m")
    {
        result = myInput / 100;
    }

    else if (first_unit == "cm" && second_unit == "km")
    {
        result = myInput / 1000;
    }

    // METER CONVERSIONS
    else if (first_unit == "m" && second_unit == "mm")
    {
        result = myInput * 1000;
    }

    else if (first_unit == "m" && second_unit == "cm")
    {
        result = myInput * 100;
    }

    else if (first_unit == "m" && second_unit == "m")
    {
        result = myInput;
    }

    else if (first_unit == "m" && second_unit == "km")
    {
        result = myInput / 1000 ;
    }

    // KIOLOMETER CONVERSIONS
    else if (first_unit == "km" && second_unit == "mm")
    {
        result = myInput * 1000000;
    }

    else if (first_unit == "km" && second_unit == "cm")
    {
        result = myInput * 10000;
    }
    
    else if (first_unit == "km" && second_unit == "m")
    {
        result = myInput * 1000;
    }

    else if (first_unit == "km" && second_unit == "km")
    {
        result = myInput;
    }

    document.getElementById("convertOut").innerHTML = result + " " + second_unit;
 }