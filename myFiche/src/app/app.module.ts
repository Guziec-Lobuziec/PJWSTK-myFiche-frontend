import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { NgIf } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { StartPageComponent } from './start-page/start-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FicheEditComponent } from './fiche-edit/fiche-edit.component';
import { CatalogNavigatorComponent } from './catalog-navigator/catalog-navigator.component';
import { appRoutes } from './app.router';
import { EqualValidatorDirective } from './shared/equal-validator.directive';

import { DialogModule } from 'primeng/primeng';

@NgModule({
  declarations: [
    AppComponent,
    StartPageComponent,
    LoginPageComponent,
    RegisterPageComponent,
    HomePageComponent,
    FicheEditComponent,
    CatalogNavigatorComponent,
    EqualValidatorDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    DialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
