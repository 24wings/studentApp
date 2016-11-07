import { AngularFire } from 'angularfire2';
import { Component, ViewContainerRef } from '@angular/core';
import { MdSnackBar, MdSnackBarConfig } from '@angular/material';
import { UserService } from '../../service/user-service';
import { Router } from '@angular/router';
@Component({
    selector: 'app-sign-up',
    templateUrl: './sign-up.html',
    providers: [MdSnackBar]
})
export class SignUpComponent {

    config: MdSnackBarConfig;
    repeatPassword = '';

    private user: User = {
        username: '',
        password: '',
        gender: '男',
        group: '项目组2'
    };
    public optionGroups: string[] = [
        '项目组1', '项目组2', '项目组3', '项目组4'
    ];

    constructor(private snackBar: MdSnackBar,
        private viewContainerRef: ViewContainerRef,
        private userService: UserService,
        private af: AngularFire,
        private router: Router) {

    }

    debugUser() {
        console.log(this.user);
    }

    repeatCheck() {
        if (this.user.password !== this.repeatPassword) {
            this.repeatError();
            return false;
        } else {
            return true;
        }
    }


    repeatError() {
        this.config = new MdSnackBarConfig(this.viewContainerRef);
        let snackBar = this.snackBar.open('两次密码不一致!', '请重新输入', this.config);
        setTimeout(() => {
            snackBar.dismiss();
        }, 3000);
    }

    signUp() {
        if (this.repeatCheck()) {
            this.debugUser();
            this.af.database.list('/users').push(this.user);
            this.userService.user = this.user;
            this.router.navigateByUrl('/home');

        }
    }
}

