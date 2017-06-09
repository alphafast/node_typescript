"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const clockClass = require("./class/Clock");
function createClock(ctor, hours, min) {
    return new ctor(hours, min);
}
let dateTimeNow = new Date();
console.log(`code run at ${dateTimeNow}`);
var analogClock = createClock(clockClass.MockAnalog, 12, 23);
var digitalClock = createClock(clockClass.MockDigital, 14, 56);
analogClock.tick();
digitalClock.tick();
//var mockArray = ['test1','test2','test3'];
// for (let entry in tempArray) {
//     console.log(entry);
//     for (let entry of mockArray) {
//         console.log(entry);
//     }  
// }
//# sourceMappingURL=app.js.map