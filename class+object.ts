class Character {
  name: string = '';
  life: number = 0;
  energy: number = 0;
  attack: number = 0; 
  defense: number = 0;
}

let sansa: Character;
sansa = new Character();

sansa.name = 'Sansa';
sansa.life = 100;
sansa.energy = 40;
sansa.attack = 20;
sansa.defense = 70;

console.log(sansa);

let meow: Character = new Character();

meow.name = 'Meow';
meow.attack = 50;
meow.defense = 120;

console.log(meow);