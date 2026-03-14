// 1. Функція-генератор, нескінченна послідовність Фібоначчі
function* fibonacciGenerator() {
    let a = 0n; //BigInt (n в кінці), бо числа швидко стають великими
    let b = 1n;
    
    while (true) {
        yield a; //повернення поточного числа і призупинка виконання до наступного виклику
        const temp = a;
        a = b;
        b = temp + b;
    }
}

// 2. Функція ітератора з тайм-аутом
function consumeIteratorWithTimeout(iterator, timeoutSeconds) {
    //переводення щ секунди в мілісекунди
    const timeoutMs = timeoutSeconds * 1000; 
    const startTime = Date.now();
    
    let count = 0n;
    let totalSum = 0n;

    console.log(`Починаємо обробку ітератора на ${timeoutSeconds} секунд(и)...\n`);

    //виконуємо цикл поки не вийде заданий час
    while (Date.now() - startTime < timeoutMs) {
        const { value, done } = iterator.next(); //наступне значення з генератора
        
        if (done) {
            console.log("Ітератор завершив роботу.");
            break;
        }

        count++;
        totalSum += value;
        const average = totalSum / count; //рахуємо середнє

        //виводимо результат
        console.log(`Крок: ${count} | Фібоначчі: ${value}`);
        console.log(`Поточна сума: ${totalSum} | Середнє: ${average}\n`);
    }

    const elapsed = Date.now() - startTime;
    console.log(`Тайм-аут!`);
    console.log(`Час вийшов: пройшло ${elapsed} мс.`);
    console.log(`Всього оброблено значень: ${count}`);
}
const fibGen = fibonacciGenerator();
consumeIteratorWithTimeout(fibGen, 0.05);