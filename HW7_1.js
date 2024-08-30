const car = {
    color: 'red',
    brand: 'Toyota',
    model: 'Corolla',
        getInfo() {
                for (let key in this) {
                        if (this.hasOwnProperty(key) && typeof this[key] !== 'function') {
                console.log(`${key}: ${this[key]}`);
            }
        }
    }
};
car['type of fuel'] = 'Petrol';
car.getInfo();