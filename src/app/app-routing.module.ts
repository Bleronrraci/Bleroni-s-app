import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { RecoveryComponent } from './recovery/recovery.component';
import { RecoverydoneComponent } from './recoverydone/recoverydone.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
  { path: 'LOGIN', component: LoginComponent },
  { path: 'SIGNUP', component: SignupComponent },
  { path: 'RECOVERY', component: RecoveryComponent },
  { path: 'RECOVERYDONE', component: RecoverydoneComponent },
  { path: 'HOME', component: HomeComponent },
  { path: 'navbar', component: NavbarComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
