import { UserService } from './../../service/user-service';
import { Component } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: 'home.html'
})
export class HomeComponent {
    public isLogin: Boolean = false;
    constructor(private userService: UserService) {

        this.userService.isLoginObservable.subscribe(islogin => {
            this.isLogin = islogin === 'true';

        });

    }

}
