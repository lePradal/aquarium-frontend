import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Observable } from 'rxjs';
import { IAquarium } from 'src/app/core/models/aquarium';
import { IValidUserResponse } from 'src/app/core/models/responses/valid-user-response';
import { AquariumService } from 'src/app/core/services/aquarium/aquarium.service';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { UserService } from 'src/app/core/services/user/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public myAquariums: IAquarium[];
  public returnMsg?: string;
  public aquariumListRequested: boolean;

  constructor(
    private aquariumService: AquariumService,
    private loaderService: NgxSpinnerService,
    private authService: AuthService,
  ) {
    this.myAquariums = [];
    this.aquariumListRequested = false;
  } 

  ngOnInit(): void {
    this.loaderService.show();
    this.validateToken();
    this.loadAquariums();
  }

  public loadAquariums() {
    this.aquariumService.getAquariumList().subscribe({
      error: (error: HttpErrorResponse) => {
        this.aquariumListRequested = true;
        console.error(error);

        if (error.status == 404) {
          this.returnMsg = 'Você ainda não possui nenhum aquário.';
        } else {
          this.returnMsg = 'Não foi possível carregar seus aquários.';
        }

        this.loaderService.hide();
      },
      next: (response) => {
        this.aquariumListRequested = true;
        this.myAquariums = response.content;
        this.loaderService.hide();
      },
    });
  }

  public validateToken() {
    this.authService.validateToken();
  }

}
