import { HttpErrorResponse } from '@angular/common/http';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { ISignUpRequest } from 'src/app/core/models/requests/sign-up-request';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { EmailNotTakenValidatorService } from 'src/app/core/shared/validators/email-not-taken.validator.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit, AfterViewInit {

  public signUpForm: any;
  public requested: boolean;
  public createdUser: boolean;
  public returnMsg: string;

  @ViewChild('inputName') inputName: ElementRef<HTMLInputElement> | undefined;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private loaderService: NgxSpinnerService,
    private emailValidatorService: EmailNotTakenValidatorService, 
  ) {
    this.signUpForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.pattern('[a-zA-Z]*')]],
      surname: ['', [Validators.required, Validators.minLength(3), Validators.pattern('[a-zA-Z ]*')]],
      email: ['', [Validators.required, Validators.email], emailValidatorService.checkEmailTaken()],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });

    this.inputName?.nativeElement.focus();
    this.requested = false;
    this.createdUser = false;
    this.returnMsg = '';
  }

  ngOnInit(): void {
  }

  public ngAfterViewInit(): void {
    this.inputName?.nativeElement.focus();
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
