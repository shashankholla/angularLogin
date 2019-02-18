import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login.service';
import { RegisterComponent } from './register/register.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { HeaderComponent } from './header/header.component';
import { authGuard } from './auth-guard';
import { RegisterService } from './register.service';
import { TempTableComponent } from './temp-table/temp-table.component';

const appRoutes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'register' , component: RegisterComponent}, 
  { path: 'tempTable', component: TempTableComponent},
  { path: 'welcome', component: WelcomePageComponent, canActivate: [authGuard]}  
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    WelcomePageComponent,
    HeaderComponent,
    TempTableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpModule
  ],
  providers: [LoginService, RegisterService, authGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
