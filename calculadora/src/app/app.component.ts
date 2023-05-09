import { DecimalPipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:String = 'calculadora';
  name:String = 'Aitor';
  private valor1:string;
  private valor2:string;
  private operador:string;
  private resultado:number;
  private count: number;

  getCount() {
    return this.count;
  }

  getValor1() {
    return this.valor1;
  }

  getValor2() {
    return this.valor2;
  }

  getOperador() {
    return this.operador;
  }

  getResultado() {
    return this.resultado;
  }


  constructor() {
    this.valor1 = '';
    this.valor2 = '';
    this.operador = '';
    this.count = 0;
    this.resultado = 0.0;


  }

  //PINTAR EN EL CUADRO DE TEXTO
  getPressOption() {
    if(this.count == 0) {
      return this.getValor1();
    } else if(this.count == 1 ) {
      return this.getOperador();
    } else if (this.count == 2) {
      return this.getValor2();
    } else {
      return this.getResultado();
    }

  }


  //Funciones operaciones basicas

sumar() {
  if(this.count = 0 && this.valor1.length != 0) {
    this.count = 1;
    this.operador = '+';
  }
}

restar() {
  if(this.count == 0 && this.valor1.length != 0) {
    this.count = 1;
    this.operador = '-';
  }
}

dividir() {
  if(this.count == 0 && this.valor1.length != 0) {
    this.count = 1;
    this.operador = '/';
  }
}

multiplicar() {
  if(this.count == 0 && this.valor1.length != 0) {
    this.count = 1;
    this.operador = '*';
  }
}

delete() {
  this.resultado = 0.0
  this.valor1 = '';
  this.valor2 = '';
  this.operador = '';
  this.count = 0;
}
//POR HACER
equal() {

  console.log(this.valor1);
  console.log(this.operador);
  console.log(this.valor2);
  this.count = 3;
  switch(this.operador) {
    case "+":
      this.resultado = parseFloat(this.valor1) + parseFloat(this.valor2);
      break;
    case "-":
      this.resultado = parseFloat(this.valor1) - parseFloat(this.valor2);
      break;
    case "/":
      this.resultado = parseFloat(this.valor1) / parseFloat(this.valor2);
      break;
    case "*":
      this.resultado = parseFloat(this.valor1) * parseFloat(this.valor2);
      break;
    default:
      break;
  }

  console.log(this.resultado);
}

one() {
  if(this.count == 0) {
    this.valor1 = this.valor1 + '1';
  } else {
    this.valor2 = this.valor2 + '1';
    this.count = 2;
  }
}

two() {
  if(this.count == 0) {
    this.valor1 = this.valor1 + '2';
  } else {
    this.valor2 = this.valor2 + '2';
    this.count = 2;
  }
}

three() {
  if(this.count == 0) {
    this.valor1 = this.valor1 + '3';
  } else {
    this.valor2 = this.valor2 + '3';
    this.count = 2;
  }
}

four() {
  if(this.count == 0) {
    this.valor1 = this.valor1 + '4';
  } else {
    this.valor2 = this.valor2 + '4';
    this.count = 2;
  }
}

five() {
  if(this.count == 0) {
    this.valor1 = this.valor1 + '5';
  } else {
    this.valor2 = this.valor2 + '5';
    this.count = 2;
  }
}

six() {
  if(this.count == 0) {
    this.valor1 = this.valor1 + '6';
  } else {
    this.valor2 = this.valor2 + '6';
    this.count = 2;
  }
}

seven() {
  if(this.count == 0) {
    this.valor1 = this.valor1 + '7';
  } else {
    this.valor2 = this.valor2 + '7';
    this.count = 2;
  }
}

eight() {
  if(this.count == 0) {
    this.valor1 = this.valor1 + '8';
  } else {
    this.valor2 = this.valor2 + '8';
    this.count = 2;
  }
}

nine() {
  if(this.count == 0) {
    this.valor1 = this.valor1 + '9';
  } else {
    this.valor2 = this.valor2 + '9';
    this.count = 2;
  }
}

point() {
  if(this.count == 0) {
    this.valor1 = this.valor1 + '.';
  } else {
    this.valor2 = this.valor2 + '.';
    this.count = 2;
  }
}

zero() {
  if(this.count == 0) {
    this.valor1 = this.valor1 + '0';
  } else {
    this.valor2 = this.valor2 + '0';
    this.count = 2;
  }
}

zeroZero() {
  if(this.count == 0) {
    this.valor1 = this.valor1 + '00';
  } else {
    this.valor2 = this.valor2 + '00';
    this.count = 2;
  }
}
}


