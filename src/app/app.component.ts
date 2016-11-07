import { UserService } from './service/user-service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username: string;
  isLogin: boolean;
  user: User;
  constructor(public userService: UserService) {
    this.userService.isLoginObservable.subscribe(islogin => {
      this.isLogin = islogin === 'true';

    });
  }
}
