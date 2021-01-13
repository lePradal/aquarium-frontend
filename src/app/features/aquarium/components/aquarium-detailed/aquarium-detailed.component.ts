import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { imgPlaceholder } from 'src/app/config/const';
import { IAquarium } from 'src/app/features/aquarium/model/aquarium';
import { AquariumService } from 'src/app/features/aquarium/service/aquarium.service';

@Component({
  selector: 'app-aquarium-detailed',
  templateUrl: './aquarium-detailed.component.html',
  styleUrls: ['./aquarium-detailed.component.css']
})
export class AquariumDetailedComponent implements OnInit {

  public aquarium: IAquarium;
  public id: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private aquariumService: AquariumService,
    private router: Router,
    private loaderService: NgxSpinnerService) {
      this.id = this.activatedRoute.snapshot.paramMap.get('id') || '';
      this.aquarium = {
        imageUrl: imgPlaceholder,
      };
    }

  ngOnInit(): void {
    this.loaderService.show();

    this.aquariumService.getAquariumDetailed(this.id).subscribe({
      error: (error: HttpErrorResponse) => {
        console.error(error);
        this.loaderService.hide();
        this.router.navigate(['aquarium']);
      },
      next: (response) => {
        this.aquarium = response;
        this.loaderService.hide();
      }
    });
  }


  public deleteAquarium(id: string) {
    this.loaderService.show();
    this.aquariumService.deleteAquarium(id).subscribe({
      error: (error: HttpErrorResponse) => {
        console.error(error);
        this.loaderService.hide();
        this.router.navigate(['aquarium']);
      },
      next: (response) => {
        this.loaderService.hide();
        this.router.navigate(['aquarium']);
      }
    })
  }
}
