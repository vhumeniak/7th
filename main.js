const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function factorial(a) {
    if (a === 0 || a === 1) {
        return 1;
    } else {
        return a * factorial(a - 1);
    }
}

function fibonacci(a) {
    if (a <= 1) {
        return a;
    } else {
        return fibonacci(a - 1) + fibonacci(a - 2);
    }
}


rl.question('Число для обчислення факторіалу: ', (factorialInput) => {
    const resultFactorial = factorial(parseInt(factorialInput));
    console.log(`Факторіал ${factorialInput} = ${resultFactorial}`);

    rl.question('Число для обчислення числа Фібоначчі: ', (fibonacciInput) => {
        const resultFibonacci = fibonacci(parseInt(fibonacciInput));
        console.log(`Число Фібоначчі ${fibonacciInput} = ${resultFibonacci}`);

        rl.close();
    });
});