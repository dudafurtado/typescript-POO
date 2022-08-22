"use strict";
class Character {
    constructor() {
        this.name = '';
        this.life = 0;
        this.energy = 0;
        this.attack = 0;
        this.defense = 0;
    }
}
let sansa;
sansa = new Character();
sansa.name = 'Sansa';
sansa.life = 100;
sansa.energy = 40;
sansa.attack = 20;
sansa.defense = 70;
console.log(sansa);
let meow = new Character();
meow.name = 'Meow';
meow.attack = 50;
meow.defense = 120;
console.log(meow);
