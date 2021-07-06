function  add(x: number,y: number, printResult: boolean, resultPhrase: string) {
    if (printResult) {
        console.log(resultPhrase)
        console.log(x + y) 
    } else {
        return x + y;
    }
}

const number1 = 5;
const number2 = 2.8;
const printResult = true
const resultPhrase = 'Result is: ';

add(number1,number2,printResult,resultPhrase)
