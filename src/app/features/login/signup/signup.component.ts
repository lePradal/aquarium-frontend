import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { ISignUpRequest } from 'src/app/core/models/requests/sign-up-request';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public signUpForm: any;
  public requested: boolean;
  public createdUser: boolean;
  public returnMsg: string;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private loaderService: NgxSpinnerService) {
    this.signUpForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    });

    this.requested = false;
    this.createdUser = false;
    this.returnMsg = '';
  }

  ngOnInit(): void {
  }

  public onSubmit(customerData: ISignUpRequest) {
    this.createdUser = false;
    this.loaderService.show();
    this.authService.createAccount(customerData).subscribe({
      error: (error: HttpErrorResponse) => {
        console.error(error);
        this.requested = true;
        this.createdUser = false;

        this.returnMsg = error.error.message;
        this.loaderService.hide();
      },
      next: (response) => {
        this.requested = true;
        this.createdUser = true;
        this.loaderService.hide();
      },
    });
    
  }
}
