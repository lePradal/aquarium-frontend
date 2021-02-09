import { HttpErrorResponse } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ISignInRequest } from 'src/app/core/models/requests/sign-in-request';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  public signInForm: any;
  @ViewChild('emailInput') public emailInput: ElementRef<HTMLInputElement> | undefined;
  public accessDenied: boolean | undefined;;
  public returnMsg: string | undefined;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router, private loaderService: NgxSpinnerService) {
    this.signInForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  ngOnInit(): void {}

  public onSubmit(customerData: ISignInRequest) {
    this.loaderService.show();
    this.accessDenied = false;
    this.authService.login(customerData).subscribe({
      error: (error: HttpErrorResponse) => {
        this.accessDenied = true;
        console.error(error);

        if (error.status == 400) {
          this.signInForm.reset();
          this.returnMsg = 'Wrong username or password.';
        } else {
          this.returnMsg = 'Could not login. Please try again later.';
        }

        this.loaderService.hide();
        this.emailInput?.nativeElement.focus();
      },
      next: () => {
        this.loaderService.hide();
        this.router.navigate(['aquarium']);
      },
    });
  }
}
