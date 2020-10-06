
const Gameboy = require('./gameboy');

describe('Gameboy', () => {

    test('has no power wihtout batteries', () => {
        const gameboy = new Gameboy();
        expect(gameboy.power).toEqual(false)
    });

    test('has power when batteries added', () => {
        const gameboy = new Gameboy();
        gameboy.addBatteries();
        expect(gameboy.power).toEqual(true)
    });

    describe('On', () => {
    
        test('Turns on with power', () => {
            const gameboy = new Gameboy();
            gameboy.addBatteries();
            gameboy.powerOn();
            expect(gameboy.powerMode).toEqual('on')
        });

        // How to test for an expected error
        test('Errors when unable to turn on', () => {
            const gameboy = new Gameboy();
            expect(() => gameboy.powerOn()).toThrow(Error)
        });
    });

    describe('Off', () => {

        test('Turns off when on', () => {
            const gameboy = new Gameboy();
            gameboy.powerMode = 'on';
            gameboy.powerOff();
            expect(gameboy.powerMode).toEqual('off')
        });

        // How to test for an expected error
        test('Errors when unable to turn off', () => {
            const gameboy = new Gameboy();
            expect(() => gameboy.powerOff()).toThrow(Error)
        });
    });

})

