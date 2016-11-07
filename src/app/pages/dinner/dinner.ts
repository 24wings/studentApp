import { Component, OnDestroy } from '@angular/core';
import { UserService } from '../../service/user-service';
import { DinnerService } from '../../service/dinner-service';
import { FirebaseListObservable } from 'angularfire2';
import { Subscription } from 'rxjs/Subscription';
@Component({
    selector: 'app-dinner',
    templateUrl: './dinner.html',
    styleUrls: ['./dinner.scss']
})
export class DinnerComponent implements OnDestroy {
    isLogin: boolean = false;
    todayDinners: FirebaseListObservable<any>;
    subScription: Subscription;
    username: string;
    get toDay(): QueryDate {
        let today = new Date();
        return { year: today.getFullYear(), month: today.getMonth(), date: today.getDate() };

    }
    constructor(public userService: UserService, private dinnerService: DinnerService) {

        this.isLogin = this.userService.isLogin;
        if (this.isLogin) {
            this.username = this.userService.user.username;
        }
        this.toDayMyDinner();



    }
    toDayMyDinner() {


        this.todayDinners = this.dinnerService.getDinnerByQueryDate(this.toDay);

    }

    toDayAllDinner() {

    }
    ngOnDestroy() {

    }


}
