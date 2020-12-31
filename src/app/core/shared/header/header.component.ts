import { Component, OnInit } from '@angular/core';
import { SignService } from '../../services/sign.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private signService: SignService) { }

  ngOnInit(): void {
  }

  public logout() {
    this.signService.logout();
  }

}
