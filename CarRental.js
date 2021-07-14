class CarRental {
    constructor() {
        this.list = []
        this.brokenCar = [];
    }
    intro() {
        let count = 0
        for (let i = 0; i < this.list.length; i++) {
            const object = this.list[i];
            if (object.working === true) {
                count++
            }

        }
        console.log(`Hi, we are CityBird and we have ${count} cars available.`);

    }

    addCar(model, color, price) {

        this.list.push({
            'model': model,
            'color': color,
            'price': price,
            working: true
        })
        // console.log(this.list);
    }

    carPark() {
        let position = 0
        for (let i = 0; i < this.list.length; i++) {
            const object = this.list[i];
            if (object.working === true) {
                position++
                console.log(
                    `${[position]}. ${object.model} (${object.color}) is for ${object.price}EUR/day.`
                )
            }
        }
    }
    updateCarPrice(index, newPrice) {
        this.list[index].price = newPrice
        // console.log(this.list);
    }


    carAccident(index) {
        this.list[index].working = false;
    }


    carRepair(index) {
        this.list[index].working = true;

    }



    removeCar(index) {
        const newList = [];
        for (let i = 0; i < this.list.length; i++) {
            let element = this.list[i];
            if (i !== index) {
                newList.push(element)
            }

        }
        this.list = newList;
    }
}
module.exports = CarRental;