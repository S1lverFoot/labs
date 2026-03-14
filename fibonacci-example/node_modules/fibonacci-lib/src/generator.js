export function* fibonacciGenerator() {
    let a = 0n;
    let b = 1n;
    
    while (true) {
        yield a;
        const temp = a;
        a = b;
        b = temp + b;
    }
}