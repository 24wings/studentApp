import { Injectable } from '@angular/core';
import { AngularFire } from 'angularfire2';
import { Subject } from 'rxjs/Subject';
@Injectable()
export class UserService {
    static username: string;
    user: User;

    // 判断用户状态的observe
    private isLoginSource = new Subject<string>();

    isLoginObservable = this.isLoginSource.asObservable();
    get isLogin() {
        return !!this.user;
    }

    login() {
        this.isLoginSource.next('true');
    }
    logout() {
        this.isLoginSource.next('false');
    }
    constructor(private af: AngularFire) {

    }
    signUp(user: User) {
        console.log(user);
        this.af.database.object('users').set(user);
    }
}
