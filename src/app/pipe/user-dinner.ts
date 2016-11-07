import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'dinner'
})
export class UserDinnerPipe implements PipeTransform {
    transform(value: Dinner[], username: string) {
        return value.find((dinner: Dinner) => {
            return dinner.username === username;
        });
    }

}
