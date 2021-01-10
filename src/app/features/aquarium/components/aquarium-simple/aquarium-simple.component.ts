import { Component, Input, OnInit } from '@angular/core';
import { SafeResourceUrl } from '@angular/platform-browser';
import { IAquarium } from 'src/app/features/aquarium/model/aquarium';
import { ImageService } from 'src/app/core/services/image/image.service';
import { imgPlaceholder } from 'src/app/config/const';

@Component({
  selector: 'app-aquarium-simple',
  templateUrl: './aquarium-simple.component.html',
  styleUrls: ['./aquarium-simple.component.css']
})
export class AquariumSimpleComponent implements OnInit {

  @Input() aquarium: IAquarium;

  constructor(private imageService: ImageService) {
    this.aquarium = {
      imageUrl: imgPlaceholder,
    }
  }

  ngOnInit(): void {
  }

}
