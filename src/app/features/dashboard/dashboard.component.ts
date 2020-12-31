import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Aquarium } from 'src/app/core/models/aquarium';
import { aquariumListMock } from 'src/app/core/models/mocks/aquariums-mock';
import { AquariumService } from 'src/app/core/services/aquarium.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public myAquariums: Aquarium[] = [];
  public returnMsg: string = '';
  public aquariumListRequested: boolean = false;

  constructor(private aquariumService: AquariumService, private loaderService: NgxSpinnerService) {
  }

  ngOnInit(): void {
    this.loaderService.show();
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
      next: (response: any) => {
        this.aquariumListRequested = true;
        this.myAquariums = response.content;
        console.log(response);
        this.loaderService.hide();
      },
    });
  }

}
