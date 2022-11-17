import { LogService } from './log.service';
import { FuncionarioService } from './funcionario.service';
import { FuncionarioCardComponent } from './funcionario-card/funcionario-card.component';
import { FuncionarioFormComponent } from './funcionario-form/funcionario-form.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';


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
    FuncionarioService,
    LogService,
    { provide: 'LogPrefixo', useValue: 'LOG'}
],
  bootstrap: [AppComponent]
})
export class AppModule { }
