class Appliance {
    constructor (options) {
        this.isElectric = true
        this.on = false
        this.power = options.power
        this.name = options.name
        this.productionYear = options.productionYear
        this.countryOfManufacture = options.countryOfManufacture
    }

    turnOn () {

        if (this.on) {
            console.log(`${this.name} is already connected`)
        } else {
            this.on = true
            sumPower += this.power
        }

        console.log(`Power consumption – ${sumPower} W`)
    }

    turnOff () {

        if (this.on) {
            this.on = false
            sumPower -= this.power
        } else {
            console.log(`${this.name} is already disconnected`)
        }

        console.log(`Power consumption – ${sumPower} W`)
    }
}

class Laptop extends Appliance {

    constructor (options) {
        super(options)
        
        this.type = 'Laptop'
        this.color = options.color
    }

    getDisplaySize (displaySize) {
        this.displaySize = displaySize
    }
}

const nyson = new Laptop ({
    productionYear: 2014,
    countryOfManufacture: 'Taiwan',
    name: 'Nyson',
    power: 60,
    color: 'black'
})

nyson.getDisplaySize (14)


class Kettle extends Appliance {
    
    constructor (options) {

        super(options)
        this.type = 'Kettle'
        this.capacity = options.capacity
    }

    boil () {
        console.log ("It's dangerous to boil the kettle without water")
    }
}

const lefal = new Kettle ({
    productionYear: 2003,
    countryOfManufacture: 'France',
    name: 'Lefal',
    power: 2400,
    capacity: 1.7
})

console.log(nyson)
console.log(lefal)
let sumPower = 0
nyson.turnOn()
nyson.turnOn()
lefal.turnOff()
lefal.turnOn()