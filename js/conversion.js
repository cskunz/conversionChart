//Conversion chart to display american units displayed at conversion.php
//Cameron Kunz 9/13/16

//set vars
var amount = document.getElementById("amountValue");
var unit = document.getElementById("unit");
var chartInputs = document.getElementById("chartInputs");
var chartDiv = document.getElementById("chartDiv");
var br = "</br>";
var html = "";

//create arrays for each unit and the values
var Teaspoon = [
    [0.33, " Tablespoons"],
    [0.166667, " Ounces"],
    [0.0205372, " Cups"],
    [0.0104167, " Pints"],
    [0.00520833, " Quarts"],
    [0.00130208, " Gallons"]
];

var Tablespoon = [
    [3, " Teaspoons"],
    [0.5, " Ounces"],
    [0.0616115, " Cups"],
    [0.03125, " Pints"],
    [0.015625, " Quarts"],
    [0.00390625, " Gallons"]
];

var Ounce = [
    [6, " Teaspoons"],
    [2, " Tablespoons"],
    [0.123223, " Cups"],
    [0.0625, " Pints"],
    [0.03125, " Quarts"],
    [0.0078125, " Gallons"]
];

var Cup = [
    [48.6922, " Teaspoons"],
    [16.2307, " Tablespoons"],
    [8.11537, " Ounces"],
    [0.50721, " Pints"],
    [0.253605, " Quarts"],
    [0.0634013, " Gallons"]
];

var Pint = [
    [96, " Teaspoons"],
    [32, " Tablespoon"],
    [16, " Ounces"],
    [1.97157, " Cups"],
    [0.5, " Quarts"],
    [0.125, " Gallons"]
];

var Quart = [
    [192, " Teaspoons"],
    [64, " Tablespoon"],
    [32, " Ounces"],
    [3.94314, " Cups"],
    [2, " Pints"],
    [0.25, " Gallons"]
];

var Gallon = [
    [768, " Teaspoons"],
    [256, " Tablespoon"],
    [128, " Ounces"],
    [15.7725, " Cups"],
    [8, " Pints"],
    [4, " Quarts"]
];

//checks to see if the user selected value is above 0 and is a number or it sets it to 1
function numberCheck() {
    if (isNaN(amount.value)) {
        alert("You selected a NaN, Please pick a number above 0");
    } else if (amount.value <= 0) {
        alert("Please pick a value above 0");
    }
}

//iterates through the selected array and displays the unit value and name
function convert(array) {
    html = "";
    for (var i = 0; i < array.length; i++) {
        html += amount.value * array[i][0] + array[i][1] + br;

    }
    chartDiv.innerHTML = html;
}

//when the number input or the dropdown menu are click it runs my functions
chartInputs.onclick = function() {
    numberCheck();
    convert(window[unit.value]);

};

//when the number input is changed it updates the unit values
chartInputs.oninput = function() {
    convert(window[unit.value]);
};
