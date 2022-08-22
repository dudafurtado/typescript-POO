"use strict";
class Person {
    constructor(name) {
        this.name = '';
        this.age = 0;
        this.height = 0;
        this.weight = 0;
        this.age = 18;
        this.height = 150;
        this.weight = 40;
    }
}
let duda = new Person('Duda');
console.log(duda);
class Thing {
    constructor(data1, data2, data3, data4) {
        this.data1 = data1;
        this.data2 = data2;
        this.data3 = data3;
        this.data4 = data4;
    }
}
let realThing = new Thing('hello', 1, 'bye', 2);
console.log(realThing);
