/Що в нас є: 
var services = {
    "стрижка": "60 грн",
    "гоління": "80 грн",
    "Миття голови": "100 грн"
};
// додаємо нову послугу:
services['Розбити скло'] = "200 грн";

// Метод для обчислення загальної вартості:
services.price = function() {
    let total = 0;
    for (let key in this) {
        if (typeof this[key] === "string" && this[key].includes("грн")) {
            total += parseFloat(this[key]);
        }
    }
    return total + " грн";
};

// Метод для знаходження мінімальної ціни:
services.minPrice = function() {
    let prices = [];
    for (let key in this) {
        if (typeof this[key] === "string" && this[key].includes("грн")) {
            prices.push(parseFloat(this[key]));
        }
    }
    return Math.min(...prices) + " грн";
};

// Метод для знаходження максимальної ціни
services.maxPrice = function() {
    let prices = [];
    for (let key in this) {
        if (typeof this[key] === "string" && this[key].includes("грн")) {
            prices.push(parseFloat(this[key]));
        }
    }
    return Math.max(...prices) + " грн";
};

//що б вивести результати на консоль: 
console.log("Загальна вартість: " + services.price());  // Консоль виведе: "Загальна вартість:440 грн"
console.log("Мінімальна ціна: " + services.minPrice());  // Консоль виведе: "Мінімальна ціна: 60 грн"
console.log("Максимальна ціна: " + services.maxPrice()); // Консоль виведе:  "Максимальна ціна: 200 грн"