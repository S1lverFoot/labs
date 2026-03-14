import { fibonacciGenerator, consumeIteratorWithTimeout } from 'fibonacci-lib';
console.log("=== Demo of Fibonacci Library ===");
const fibGen = fibonacciGenerator();
consumeIteratorWithTimeout(fibGen, 0.05);