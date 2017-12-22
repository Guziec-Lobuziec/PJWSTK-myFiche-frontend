import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StartPageComponent } from './start-page/start-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FicheEditComponent } from './fiche-edit/fiche-edit.component';
import { CatalogNavigatorComponent } from './catalog-navigator/catalog-navigator.component';

@NgModule({
  declarations: [
    AppComponent,
    StartPageComponent,
    LoginPageComponent,
    RegisterPageComponent,
    HomePageComponent,
    FicheEditComponent,
    CatalogNavigatorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
