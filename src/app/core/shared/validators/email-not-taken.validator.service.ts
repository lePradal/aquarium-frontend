import { Injectable } from "@angular/core";
import { AbstractControl } from "@angular/forms";
import { debounceTime, first, map, switchMap } from "rxjs/operators";
import { AuthService } from "../../services/auth/auth.service";

@Injectable({
    providedIn: 'root',
})
export class EmailNotTakenValidatorService {

    constructor(private authService: AuthService) {

    }
    
    public checkEmailTaken() {
        return (control: AbstractControl) => {
            return control
                    .valueChanges
                    .pipe(debounceTime(500))
                    .pipe(switchMap(email => this.authService.emailAlreadyTaken(email) ))
                    .pipe(map(isTaken => isTaken ? { emailIsTaken: true } : null ))
                    .pipe(first());
        }
    }
}