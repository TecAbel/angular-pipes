import { Component } from '@angular/core';
import { resolve } from 'url';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre = 'Abelardo';
  nombre2 = 'aBelardO aqUI ArroYo';
  arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  PI = Math.PI;
  porcentaje = 0.234;
  salario = 1887.87;

  persona = {
    nombre: 'Abelardo',
    diminutivo: 'Abel',
    edad: 23,
    direccion: {
      calle: 'Miguel Negrete',
      numero: 80
    }
  };

  // tslint:disable-next-line:no-shadowed-variable
  valorPromesa = new Promise( ( resolve, reject) => {
    setTimeout(() => {
      return resolve('Legó la data');
    }, 3000);
  } );

  fecha = new Date();

  video = 'W5sn2Nmq1vE';

  activar = false;
}
