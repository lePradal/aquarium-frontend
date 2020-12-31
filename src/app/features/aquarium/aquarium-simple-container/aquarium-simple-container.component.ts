import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { Aquarium } from 'src/app/core/models/aquarium';
import { AquariumService } from 'src/app/core/services/aquarium.service';

@Component({
  selector: 'app-aquarium-simple-container',
  templateUrl: './aquarium-simple-container.component.html',
  styleUrls: ['./aquarium-simple-container.component.css']
})
export class AquariumSimpleContainerComponent implements OnInit {

  @Input() aquariumList: Aquarium[] = [];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public selectAquarium(id: number) {
    this.router.navigate(['/aquarium', id]);
  }

}
