import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { EscolhaPage } from '../pages/escolha/escolha';
import { CadastroPage } from '../pages/cadastro/cadastro';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { AgendamentoService } from '../domain/agendamento/agendamento-service';
import { Storage } from '@ionic/storage';
import { AgendamentoDao } from '../domain/agendamento/agendamento-dao';
import { AgendamentosPage } from '../pages/agendamentos/agendamentos';
import { LoginPage } from '../pages/login/login';
import { UsuarioService } from '../domain/usuario/usuario-service';
import { PerfilPage } from '../pages/perfil/perfil';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

function provideStorage() {
  return new Storage({
    name: 'aluracar',
    storeName: 'agendamentos'
  })
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    EscolhaPage,
    CadastroPage,
    AgendamentosPage,
    LoginPage,
    PerfilPage
  ],
  imports: [
    HttpModule,
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    EscolhaPage,
    CadastroPage,
    AgendamentosPage,
    LoginPage,
    PerfilPage
  ],
  providers: [
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    AgendamentoService,
    { provide: Storage, useFactory: provideStorage },
    AgendamentoDao,
    UsuarioService
  ]
})
export class AppModule { }
