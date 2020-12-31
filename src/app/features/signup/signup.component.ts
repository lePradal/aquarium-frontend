import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { ISignUpRequest } from 'src/app/core/models/requests/sign-up-request';
import { SignService } from 'src/app/core/services/sign.service';

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

  constructor(private formBuilder: FormBuilder, private signService: SignService, private loaderService: NgxSpinnerService) {
    this.signUpForm = this.formBuilder.group({
      name: '',
      email: '',
      password: '',
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
    this.signService.createAccount(customerData).subscribe({
      error: (error: HttpErrorResponse) => {
        console.error(error);
        this.requested = true;
        this.createdUser = false;

        this.returnMsg = error.error.message;
        this.loaderService.hide();
      },
      next: (response) => {
        console.log(response);
        this.requested = true;
        this.createdUser = true;
        this.loaderService.hide();
      },
    });
    
  }
}
