import { HttpErrorResponse } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { imgPlaceholder } from 'src/app/config/const';
import { IUser } from '../../services/user/user';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public user$: Observable<IUser>;
  public user: IUser | null;

  @ViewChild('navbarText') public collapsable: any;

  public userImgSrc = imgPlaceholder;

  constructor(
    private userService: UserService,
    private router: Router,
    private _eref: ElementRef
  ) {
    this.user = null;
    this.user$ = this.userService.getUser();
    this.user$.subscribe({
      error: (error: HttpErrorResponse) => {
        console.error(error);
      },
      next: (response) => {
        this.user = response;
      }
    });
  }

  ngOnInit(): void {
  }

  public logout() {
    this.userService.logout();
    this.router.navigate(['login']);
  }

  public onClick(event: any) {
    if (!this._eref.nativeElement.contains(event.target)) {}
      //doSomething();
  }
}
