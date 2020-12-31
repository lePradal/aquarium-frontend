import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ISignInRequest } from 'src/app/core/models/requests/sign-in-request';
import { SignService } from 'src/app/core/services/sign.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public signInForm: any;
  public accessDenied: boolean;

  constructor(private formBuilder: FormBuilder, private signInService: SignService, private router: Router, private loaderService: NgxSpinnerService) {
    this.signInForm = this.formBuilder.group({
      email: '',
      password: '',
    });

    this.accessDenied = false;
  }

  ngOnInit(): void {}

  public onSubmit(customerData: ISignInRequest) {
    this.loaderService.show();
    this.accessDenied = false;
    this.signInService.login(customerData).subscribe({
      error: (error: HttpErrorResponse) => {
        this.accessDenied = true;
        console.log(error);
        this.loaderService.hide();
      },
      next: (response) => {
        sessionStorage.setItem('token', response.token);
        sessionStorage.setItem('type', response.type);
        this.loaderService.hide();
        this.router.navigate(['dashboard']);
      },
    });
  }
}
