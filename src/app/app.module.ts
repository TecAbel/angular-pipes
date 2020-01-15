import { BrowserModule } from '@angular/platform-browser';
// para fechas en español
import { NgModule, LOCALE_ID } from '@angular/core';
import localEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localEs);
// creando pipe
import { CapitlizadoPipe } from './pipes/capitalizado.pipe';


import { AppComponent } from './app.component';
import { DomseguroPipe } from './pipes/domseguro.pipe';
import { ActivarContrasenaPipe } from './pipes/activar-contrasena.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CapitlizadoPipe,
    DomseguroPipe,
    ActivarContrasenaPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    // para fechas en español
    {provide: LOCALE_ID,
    useValue: 'es-MXN'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
