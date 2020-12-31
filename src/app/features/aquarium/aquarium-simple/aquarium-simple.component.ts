import { Component, Input, OnInit } from '@angular/core';
import { SafeResourceUrl } from '@angular/platform-browser';
import { Aquarium } from 'src/app/core/models/aquarium';
import { AquariumService } from 'src/app/core/services/aquarium.service';

@Component({
  selector: 'app-aquarium-simple',
  templateUrl: './aquarium-simple.component.html',
  styleUrls: ['./aquarium-simple.component.css']
})
export class AquariumSimpleComponent implements OnInit {

  @Input() aquarium: Aquarium = {};

  public imgSrc: SafeResourceUrl = '';

  constructor(private aquariumService: AquariumService) { }

  ngOnInit(): void {
    this.getImageSrc();
  }

  public getImageSrc() {
    const src = this.aquarium.imageBase64 || '';
    this.imgSrc = this.aquariumService.getImageSrcFromBase64(src);
  }

}
