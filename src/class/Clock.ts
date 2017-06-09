import * as clockInterface from "../interface/clockInterface";

export class MockAnalog implements clockInterface.ClockInterface {
    private hours: number;
    private minute: number;
    constructor(h: number, m: number){
        this.hours = h;
        this.minute = m
    }
    tick() {
        console.log(`Tik Tok: ${this.hours}.${this.minute} `);
    }
}

export class MockDigital implements clockInterface.ClockInterface {
    hours: number;
    minute: number;
    constructor(h: number, m: number){
        this.hours = h;
        this.minute = m
    }

    tick() {
        console.log(`beep beep : ${this.hours}.${this.minute}`);
    }
}