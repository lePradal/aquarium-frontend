import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { LoginRoutingModule } from './login.routing.module';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [
    SigninComponent,
    SignupComponent,
  ],
  imports: [
    LoginRoutingModule,
    CommonModule,
    ReactiveFormsModule,
  ],
  providers: [
    AuthService,
  ],
  exports: [
    SigninComponent,
    SignupComponent,
  ]
})

export class LoginModule { }
