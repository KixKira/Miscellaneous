import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_ROUTING } from './app.routes';
import { AppComponent } from './app.component';
import { NgStyleComponent } from './components/ng-style/ng-style.component';
import { CssComponent } from './components/css/css.component';
import { NgClassComponent } from './components/ng-class/ng-class.component';
import { HighlightedDirective } from './directives/highlighted.directive';
import { NgSwitchComponent } from './components/ng-switch/ng-switch.component';
import { HomeComponent } from './components/home/home.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { NewUserComponent } from './components/usuario/new-user.component';
import { EditUserComponent } from './components/usuario/edit-user.component';
import { DetailUserComponent } from './components/usuario/detail-user.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    NgStyleComponent,
    CssComponent,
    NgClassComponent,
    HighlightedDirective,
    NgSwitchComponent,
    HomeComponent,
    UsuarioComponent,
    NewUserComponent,
    EditUserComponent,
    DetailUserComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
