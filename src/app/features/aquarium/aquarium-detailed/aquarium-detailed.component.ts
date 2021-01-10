import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { IAquarium } from 'src/app/core/models/aquarium';
import { AquariumService } from 'src/app/core/services/aquarium/aquarium.service';
import { ImageService } from 'src/app/core/services/image/image.service';

@Component({
  selector: 'app-aquarium-detailed',
  templateUrl: './aquarium-detailed.component.html',
  styleUrls: ['./aquarium-detailed.component.css']
})
export class AquariumDetailedComponent implements OnInit {

  public aquarium: IAquarium;
  public imgSrc?: SafeResourceUrl;
  public id: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private aquariumService: AquariumService,
    private imageService: ImageService,
    private router: Router,
    private loaderService: NgxSpinnerService) {
      this.id = this.activatedRoute.snapshot.paramMap.get('id') || '';
      this.aquarium = {};
    }

  ngOnInit(): void {
    this.loaderService.show();

    this.aquariumService.getAquariumDetailed(this.id).subscribe({
      error: (error: HttpErrorResponse) => {
        console.error(error);
        this.loaderService.hide();
        this.router.navigate(['dashboard']);
      },
      next: (response) => {
        this.aquarium = response;
        this.getImageSrc();
        this.loaderService.hide();
      }
    })
  }

  public getImageSrc() {
    const src = this.aquarium?.imageUrl || '';
    this.imgSrc = this.imageService.getImageSrcFromBase64(src);
  }

  public deleteAquarium(id: string) {
    this.loaderService.show();
    this.aquariumService.deleteAquarium(id).subscribe({
      error: (error: HttpErrorResponse) => {
        console.error(error);
        this.loaderService.hide();
        this.router.navigate(['dashboard']);
      },
      next: (response) => {
        this.loaderService.hide();
        this.router.navigate(['dashboard']);
      }
    })
  }
}
