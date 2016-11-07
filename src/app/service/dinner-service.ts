import { AngularFire } from 'angularfire2';
import { Injectable } from '@angular/core';
@Injectable()
export class DinnerService {
    constructor(private af: AngularFire) {

    }
    getAllDinners() {
        return this.af.database.list('/dinners');
    }
    getDinnerByQueryDate(queryDate: QueryDate) {
        return this.af.database.list(`/dinners/${queryDate.year}-${queryDate.month}-${queryDate.date}`);
    }

    addNewDinnerLog(log: Dinner) {
        this.af.database.list(`dinners/${log.date.year}-${log.date.month}-${log.date.date}`).push(log);
    }

}
