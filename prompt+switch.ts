import prompt from 'prompt-sync';
let output = prompt();

class Car {
  brand: string = '';
  model: string = '';
  type: string = '';
  year: number = 0;
  potency: number = 0;

  constructor (
    public speed: number,
    public march: string
  ) {
    this.potency = 50;
    this.type = 'Sedan';
  }
}

let myCar: Car = new Car(180, 'D');
myCar.brand = 'Ford';
myCar.model = 'Fusion';
myCar.year = 2015;

let whichOne: number = 0;

while (whichOne < 4) {
  console.log('[---------Opções---------]');
  console.log('[-1.Aumentar Velocidade--]');
  console.log('[-2.Diminuir Velocidade--]');
  console.log('[-3.Aumentar Potência----]');
  console.log('[-4.Diminuir Potência----]');
  console.log('[-5.Sair-----------------]');

  whichOne = +output('Qual das opções você tem interesse em interagir no momento?');

  switch (whichOne) {
    case 1:
      myCar.speed += 30;
      break;
    case 2:
      myCar.speed -= 30;
      break;
    case 3:
      myCar.potency += 15;
      break;
    case 4:
      myCar.potency += 15;
      break;
    default:
      console.log('O seu carro permanece com todas as configurações iniciais');
      break;
  }

  console.log(myCar);
}
