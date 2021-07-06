function add(x, y, printResult, resultPhrase) {
    if (printResult) {
        console.log(resultPhrase);
        console.log(x + y);
    }
    else {
        return x + y;
    }
}
var number1 = 5;
var number2 = 2.8;
var printResult = true;
var resultPhrase = 'Result is: ';
add(number1, number2, printResult, resultPhrase);
