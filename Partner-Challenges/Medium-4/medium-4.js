/*Create a car object with the items: Make, Model, Year, Milage, and Color. Then create 3 methods in the object; A driveToWork method, driveAroundTheWorld method, and runErrands method. Each of these methods should affect the car’s mileage adding to it each time and console logging the old mileage and the new mileage.

driveToWork = 33 miles

driveAroundTheWorld = 24,000 miles

runErrands = 30 miles */

class car  {

    constructor(make, model, year, milage, color, work, world, errands){
    this.make = 'Honda';
    this.model = 'Accord';
    this.year = 2015
    this.milage = 43000 
    this.color = 'blue'
    this.work = 33
    this.world = 24000
    this.errands = 30
    }
    driveToWork(){
         console.log(`My cars milage was ${this.milage} is now ${this.milage + this.work}`)
    }
    driveAroundTheWorld(){
        console.log(`My cars milage was ${this.milage} is now ${this.milage + this.world}`);
        }
        runErrand(){
            console.log(`My cars milage was ${this.milage} is now ${this.milage + this.errands}`);
        }
    }


var vehicle = new car

vehicle.driveAroundTheWorld();
vehicle.driveToWork();
vehicle.runErrand();

