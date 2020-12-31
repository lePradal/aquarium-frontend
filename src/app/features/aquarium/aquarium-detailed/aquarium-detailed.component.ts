import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { Aquarium } from 'src/app/core/models/aquarium';
import { AquariumService } from 'src/app/core/services/aquarium.service';

@Component({
  selector: 'app-aquarium-detailed',
  templateUrl: './aquarium-detailed.component.html',
  styleUrls: ['./aquarium-detailed.component.css']
})
export class AquariumDetailedComponent implements OnInit {

  public aquarium: Aquarium = {}

  public imgSrc: SafeResourceUrl = '';

  constructor(private activatedRoute: ActivatedRoute, private aquariumService: AquariumService, private router: Router, private loaderService: NgxSpinnerService) { }

  ngOnInit(): void {
    this.loaderService.show();
    const id = this.activatedRoute.snapshot.paramMap.get('id') || '';

    this.aquariumService.getAquariumDetailed(id).subscribe({
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
    const src = this.aquarium.imageBase64 || '';
    this.imgSrc = this.aquariumService.getImageSrcFromBase64(src);
  }
}
