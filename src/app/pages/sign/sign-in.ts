import { AngularFire } from 'angularfire2';
import { Component } from '@angular/core';
import { UserService } from '../../service/user-service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-sign-in',
    templateUrl: './sign-in.html'
})
export class SignInComponent {
    user: User = { username: '', password: '' };
    constructor(private af: AngularFire,
        private userService: UserService,
        private router: Router) {

    }
    signIn() {

        this.af.database.list('/users').subscribe(serverUsers => {
            serverUsers.forEach((serverUser: User) => {
                if (this.user.username === serverUser.username && this.user.password === serverUser.password) {
                    // 用户登陆
                    this.userService.user = serverUser;
                    this.userService.login();
                    this.router.navigateByUrl('/home');
                }
            });
            if (!this.userService.isLogin) {
                alert('用户名或密码不正确');
            }
        });
    }
}
