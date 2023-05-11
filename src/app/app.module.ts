import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { RecoveryComponent } from './recovery/recovery.component';
import { RecoverydoneComponent } from './recoverydone/recoverydone.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { BgcolorDirective } from './direktives/bgcolor.directive';

const materialModules = [MatIconModule];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    RecoveryComponent,
    RecoverydoneComponent,
    HomeComponent,
    NavbarComponent,
    BgcolorDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    materialModules,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [materialModules],
})
export class AppModule {}
