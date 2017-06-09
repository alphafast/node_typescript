System.register("interface/myInterface", [], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
        }
    };
});
System.register("app", [], function (exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
    function createClock(ctor, hours, min) {
        return new ctor(hours, min);
    }
    function printLabel(labelledObj) {
        if (labelledObj.label) {
            console.log(labelledObj.label);
        }
        if (labelledObj.name) {
            console.log(labelledObj.name);
        }
        if (labelledObj.lastname) {
            console.log(labelledObj.lastname);
        }
        if (labelledObj.fullname) {
            console.log(labelledObj.fullname);
        }
    }
    function getFullname(name, lastname) {
        return name + " " + lastname;
    }
    var MockAnalog, MockDigital, tempArray, roArray, roReadOnlyArray, dump, analogClock, digitalClock, mockArray;
    return {
        setters: [],
        execute: function () {
            MockAnalog = (function () {
                function MockAnalog(h, m) {
                    this.hours = h;
                    this.minute = m;
                }
                MockAnalog.prototype.tick = function () {
                    console.log("Tik Tok: " + this.hours + "." + this.minute + " ");
                };
                return MockAnalog;
            }());
            MockDigital = (function () {
                function MockDigital(h, m) {
                    this.hours = h;
                    this.minute = m;
                }
                MockDigital.prototype.tick = function () {
                    console.log("beep beep : " + this.hours + "." + this.minute);
                };
                return MockDigital;
            }());
            tempArray = [];
            tempArray[0] = "0";
            tempArray[1] = "1";
            console.log(tempArray);
            roArray = ['hello 1', 'Hello 2'];
            roReadOnlyArray = roArray;
            dump = {
                label: "Hello readonly",
                name: "bird",
                lastname: "jaa",
                fullname: getFullname('bird', 'jaa')
            };
            printLabel(dump);
            analogClock = createClock(MockAnalog, 12, 23);
            digitalClock = createClock(MockDigital, 14, 56);
            analogClock.tick();
            digitalClock.tick();
            mockArray = ['test1', 'test2', 'test3'];
            for (var entry in tempArray) {
                console.log(entry);
                for (var _i = 0, mockArray_1 = mockArray; _i < mockArray_1.length; _i++) {
                    var entry_1 = mockArray_1[_i];
                    console.log(entry_1);
                }
            }
        }
    };
});
//# sourceMappingURL=app-build.js.map