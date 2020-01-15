import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'activarContrasena'
})
export class ActivarContrasenaPipe implements PipeTransform {

  transform(value: string, activar: boolean): string {
    if (activar) {
      // tslint:disable-next-line:typedef-whitespace
      let salida = '';
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < value.length; i++) {
        salida += '*';
      }
      return salida;
    } else {
      return value;
    }
  }

}
