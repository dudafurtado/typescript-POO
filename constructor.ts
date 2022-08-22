class Person {
  name: string = '';
  age: number = 0;
  height: number = 0;
  weight: number = 0;

  constructor (name: string) {
    this.age = 18;
    this.height = 150;
    this.weight = 40;
  }
}

let duda: Person = new Person('Duda')

console.log(duda);

class Thing {
  constructor (
    public data1: string,
    public data2: number,
    public data3: string,
    public data4: number
  ) {}
}

let realThing: Thing = new Thing('hello', 1, 'bye', 2);

console.log(realThing);