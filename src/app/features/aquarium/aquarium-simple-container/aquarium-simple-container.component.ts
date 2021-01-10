import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IAquarium } from 'src/app/core/models/aquarium';

@Component({
  selector: 'app-aquarium-simple-container',
  templateUrl: './aquarium-simple-container.component.html',
  styleUrls: ['./aquarium-simple-container.component.css']
})
export class AquariumSimpleContainerComponent implements OnInit {

  @Input() aquariumList: IAquarium[] = [];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public selectAquarium(id: number) {
    this.router.navigate(['/aquarium', id]);
  }

}
