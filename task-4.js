function Appliance (type) {
    this.type = type
}

let sumPower = 0

Appliance.prototype.turnOn = function () {
    if (this.on) {
      console.log(`${this.name} is already connected`)
    } else {
      this.on = true
      sumPower += this.power
    }
    console.log(`Power consumption – ${sumPower} W`)
}

Appliance.prototype.turnOff = function () {
    if (this.on) {
      this.on = false
      sumPower -= this.power
    } else {
      console.log(`${this.name} is already disconnected`)
    }
    console.log(`Power consumption – ${sumPower} W`)
}

function Laptop (name, power) {
    this.name = name
    this.power = power
}

Laptop.prototype = new Appliance ('laptop')

Laptop.prototype.getDisplaySize = function (displaySize) {
    this.displaySize = displaySize
}

function Kettle (name, power) {
    this.name = name
    this.power = power
}

Kettle.prototype = new Appliance ('kettle')

Kettle.prototype.getCapacity = function (capacity) {
    this.capacity = capacity
}

const nyson = new Laptop ('Nyson', 60)
nyson.getDisplaySize (15)
nyson.turnOn ()

const lefal = new Kettle ('Lefal', 2400)
lefal.getCapacity (1.7)
lefal.turnOn ()

nyson.turnOff ()
nyson.turnOff ()