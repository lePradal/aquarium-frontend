import { Component, Input, OnInit } from '@angular/core';
import { SafeResourceUrl } from '@angular/platform-browser';
import { IAquarium } from 'src/app/core/models/aquarium';
import { ImageService } from 'src/app/core/services/image/image.service';

@Component({
  selector: 'app-aquarium-simple',
  templateUrl: './aquarium-simple.component.html',
  styleUrls: ['./aquarium-simple.component.css']
})
export class AquariumSimpleComponent implements OnInit {

  @Input() aquarium?: IAquarium;

  public imgSrc: SafeResourceUrl = '';

  constructor(private imageService: ImageService) {
    this.aquarium = {}
  }

  ngOnInit(): void {
    this.getImageSrc();
  }

  public getImageSrc() {
    const src = this.aquarium?.imageUrl || '';
    this.imgSrc = this.imageService.getImageSrcFromBase64(src);
  }

}
