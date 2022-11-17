import { FuncionarioService, FuncionarioAbreviadoService } from './funcionario.service';
import { FuncionarioCardComponent } from './funcionario-card/funcionario-card.component';
import { FuncionarioFormComponent } from './funcionario-form/funcionario-form.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

const criarFuncionarioService = () => {
  return new FuncionarioAbreviadoService(2);
}

@NgModule({
  declarations: [
    AppComponent,
    FuncionarioCardComponent,
    FuncionarioFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    { provide: FuncionarioService, useFactory: criarFuncionarioService }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
