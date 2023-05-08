import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:String = 'calculadora';
  name:String = 'Aitor';
  valor1:string;
  valor2:string;
  operador:string;
  resultado = 0.0;
  count: boolean = false;

  constructor() {
    this.valor1 = '';
    this.valor2 = '';
    this.operador = '';
  }


  //Funciones operaciones basicas

sumar() {
  if(this.count == false) {
    this.count = true;
    this.operador = '+';
  }
}

restar() {
  if(this.count == false) {
    this.count = true;
    this.operador = '-';
  }
}

dividir() {
  if(this.count == false) {
    this.count = true;
    this.operador = '/';
  }
}

multiplicar() {
  if(this.count == false) {
    this.count = true;
    this.operador = '*';
  }
}

delete() {
  this.resultado = 0
  this.valor1 = '';
  this.valor2 = '';
  this.operador = '';
  this.count = false;
}
//POR HACER
equal() {

  console.log(this.valor1);
  console.log(this.operador);
  console.log(this.valor2);

  switch(this.operador) {
    case "+":
      this.resultado = parseInt(this.valor1) + parseInt(this.valor2);
      break;
    case "-":
      this.resultado = parseInt(this.valor1) - parseInt(this.valor2);
      break;
    case "/":
      this.resultado = parseInt(this.valor1) / parseInt(this.valor2);
      break;
    case "*":
      this.resultado = parseInt(this.valor1) * parseInt(this.valor2);
      break;
    default:
      break;
  }
  console.log(this.resultado);
  this.delete();
}

one() {
  if(this.count == true) {
    this.valor2 = this.valor2 + '1';
  } else {
    this.valor1 = this.valor1 + '1';
  }
}

two() {
  if(this.count == true) {
    this.valor2 = this.valor2 + '2';
  } else {
    this.valor1 = this.valor1 + '2';
  }
}

three() {
  if(this.count == true) {
    this.valor2 = this.valor2 + '3';
  } else {
    this.valor1 = this.valor1 + '3';
  }
}

four() {
  if(this.count == true) {
    this.valor2 = this.valor2 + '4';
  } else {
    this.valor1 = this.valor1 + '4';
  }
}

five() {
  if(this.count == true) {
    this.valor2 = this.valor2 + '5';
  } else {
    this.valor1 = this.valor1 + '5';
  }
}

six() {
  if(this.count == true) {
    this.valor2 = this.valor2 + '6';
  } else {
    this.valor1 = this.valor1 + '6';
  }
}

seven() {
  if(this.count == true) {
    this.valor2 = this.valor2 + '7';
  } else {
    this.valor1 = this.valor1 + '7';
  }
}

eight() {
  if(this.count == true) {
    this.valor2 = this.valor2 + '8';
  } else {
    this.valor1 = this.valor1 + '8';
  }
}

nine() {
  if(this.count == true) {
    this.valor2 = this.valor2 + '9';
  } else {
    this.valor1 = this.valor1 + '9';
  }
}

point() {
  if(this.count == true) {
    this.valor2 = this.valor2 + '.';
  } else {
    this.valor1 = this.valor1 + '.';
  }
}

zero() {
  if(this.count == true) {
    this.valor2 = this.valor2 + '0';
  } else {
    this.valor1 = this.valor1 + '0';
  }
}

zeroZero() {
  if(this.count == true) {
    this.valor2 = this.valor2 + '00';
  } else {
    this.valor1 = this.valor1 + '00';
  }
}
}


