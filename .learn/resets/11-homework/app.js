

// We declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.07;
    // return the dollar value
    return valueInDollar;
}

const fromDollarToYen = function(valueInDollar) {

    let valueInYen= valueInDollar * 1.07 * 156.5;
    return valueInYen; 
}
const fromYenToPound = function(valueInYen) {

    let valueInPound = valueInYen / 156.5 * .87;

    return valueInPound;
}

const sum = (a,b) => {
    return a + b
}

// We include fromEuroToDollar here as well because it needs to be exported
module.exports = { sum, fromEuroToDollar }
