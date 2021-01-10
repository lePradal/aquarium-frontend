import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
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

  constructor(private userService: UserService) {
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
    this.user = null;
    this.userService.logout();
  }

}
