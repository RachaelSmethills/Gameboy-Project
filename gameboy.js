const Battery = require('./battery');

class Gameboy {

    batteries = [];
    game = {};
    powerMode = 'off';
    
    get power() {
        return this.batteries.reduce(
        (acc, battery) => { 
            return acc + battery.voltage
        }, 0) == 6;
    }

    constructor() {
        this.power;
    }

    insertGame() {

    };
    ejectGame() {

    };
    start() {

    };
    Select() {

    };

    /* Power on the gameboy
        Requirements: 
            Must have battery power available
            Must not already be on
    */
    powerOn() {
        if (this.powerMode != 'on' && this.power) {
            this.powerMode = 'on'
            console.log('Powered On!');
        } else {
            throw new Error('Cannot Power On');
        }
    };

    /* Turn off the gameboy
        Must not already be on
    */
    powerOff() {
        if (this.powerMode == 'on') {
            this.powerMode = "off";
            console.log('Power Off!');
        } else {
            throw new Error('Already Off')
        }
    }

    /* Add batteries
        Adds the 4 required batteries to the GB
        Total 6v - 4 * 1.5v Batteries
    */
    addBatteries() {
        this.batteries.push(new Battery());
        this.batteries.push(new Battery());
        this.batteries.push(new Battery());
        this.batteries.push(new Battery());
    }
}

module.exports = Gameboy;
