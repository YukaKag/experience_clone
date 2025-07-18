function generateRandomNumbers(count) {
        if (count <= 0 || !Number.isInteger(count)) {
        console.log("Помилка, можна вводити тільки додаткові цілі числа");
        return;
    }
    let evenCount = 0;
    let oddCount = 0;
       for (let i = 0; i < count; i++) {
        let randomNumber = Math.floor(Math.random() * (1000 - 100 + 1)) + 100;
        
        if (randomNumber % 2 === 0) {
            evenCount++;
        } else {
            oddCount++;
        }
    }
    let evenOddRatio = (oddCount !== 0) ? (evenCount / oddCount) * 100 : 100;
    console.log(`Всього згенеровано чисел: ${count}`);
    console.log(`Із всіх згенерованих парних чисел: ${evenCount}`);
    console.log(`Із всіх згенерованих непарних чисел: ${oddCount}`);
    console.log(`співвідношення у % парних до непарних: ${evenOddRatio.toFixed(2)}%`);
}
generateRandomNumbers(count);

//наприклад згенеруємо 5 чисел   generateRandomNumbers(5);
/*Консоль виведе:
Всього згенеровано чисел: 5
Із всіх згенерованих парних чисел: 2
Із всіх згенерованих непарних чисел: 3
співвідношення у % парних до непарних: 66.67% */

