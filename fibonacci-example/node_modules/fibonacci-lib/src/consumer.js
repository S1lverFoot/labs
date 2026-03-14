export function consumeIteratorWithTimeout(iterator, timeoutSeconds) {
    const timeoutMs = timeoutSeconds * 1000; 
    const startTime = Date.now();
    let count = 0n;
    let totalSum = 0n;

    console.log(`Починаємо обробку ітератора на ${timeoutSeconds} секунд(и)...\n`);
    while (Date.now() - startTime < timeoutMs) {
        const { value, done } = iterator.next(); 

        if (done) {
            console.log("Ітератор завершив роботу.");
            break;
        }

        count++;
        totalSum += value;
        const average = Number(totalSum) / Number(count); 
        console.log(`Крок: ${count} | Фібоначчі: ${value}`);
        console.log(`Поточна сума: ${totalSum} | Середнє: ${average}\n`);
    }

    const elapsed = Date.now() - startTime;
    console.log(`Тайм-аут`);
    console.log(`Час вийшов: пройшло ${elapsed} мс.`);
    console.log(`Всього оброблено значень: ${count}`);
}