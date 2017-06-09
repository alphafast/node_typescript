"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MockAnalog {
    constructor(h, m) {
        this.hours = h;
        this.minute = m;
    }
    tick() {
        console.log(`Tik Tok: ${this.hours}.${this.minute} `);
    }
}
exports.MockAnalog = MockAnalog;
class MockDigital {
    constructor(h, m) {
        this.hours = h;
        this.minute = m;
    }
    tick() {
        console.log(`beep beep : ${this.hours}.${this.minute}`);
    }
}
exports.MockDigital = MockDigital;
//# sourceMappingURL=Clock.js.map