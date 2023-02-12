class Car {
    constructor(carModelName, carColor, carPrice, carSpeed) {
        this.carModelName = carModelName;
        this.carColor = carColor;
        this.carPrice = carPrice;
        this.carSpeed = carSpeed;
    }

    displaySpeed() {
        console.log(`The current speed of ${this.carModelName} is ${this.carSpeed} mph.`);
    }

    increaseSpeed(s) {
        this.carSpeed += s;
        console.log(`The speed of ${this.carModelName} has been increased by ${s} mph.`);
    }

    decreaseSpeed(s) {
        this.carSpeed -= s;
        console.log(`The speed of ${this.carModelName} has been decreased by ${s} mph.`);
    }
}

let myCar = new Car("Mustang", "Red", 45000, 0);

myCar.displaySpeed(); // The current speed of Mustang is 0 mph.

myCar.increaseSpeed(20); // The speed of Mustang has been increased by 20 mph.

myCar.displaySpeed(); // The current speed of Mustang is 20 mph.

myCar.decreaseSpeed(10); // The speed of Mustang has been decreased by 10 mph.

myCar.displaySpeed(); // The current speed of Mustang is 10 mph.
