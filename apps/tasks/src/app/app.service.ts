import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Task, Urgency } from "./models/task.interface";

@Injectable()
export class AppService {
    private tasks: Task[];

    private desk: String = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
    private items: [Task] = [
        {id: 100, name: 'Купить продуктов', description: this.desk, status: true, urgency: Urgency.Hi, finishTo: new Date('1/1/16') },
        {id: 101, name: 'Сходить в спорзал', description: 'Небыл уже неделю, давно полра', status: false, urgency: Urgency.Low, finishTo: new Date('5/2/16')},
        {id: 102, name: 'Доделать работу', description: 'Some text 2', status: false, urgency: Urgency.Hi, finishTo: new Date('1/20/16')},
        {id: 103, name: 'Отослать письмо по работе', description: 'Some text 3', status: true, urgency: Urgency.Middle, finishTo: new Date('3/2/17')},
        {id: 104, name: 'Написать еще один Ангуляр компонент', description: 'Some text 4', status: false, urgency: Urgency.Hi, finishTo: new Date('1/12/15')},
        {id: 105, name: 'Пополнить счет на телефоне', description: 'Some text 2', status: false, urgency: Urgency.Low, finishTo: new Date('1/20/16')},
        {id: 106, name: 'Посмотреть фильм', description: 'Some text 3', status: true, urgency: Urgency.Middle, finishTo: new Date('3/2/17')},
        {id: 107, name: 'Test8', description: '', status: false, urgency: Urgency.Hi, finishTo: new Date('1/12/15')}
    ];

    constructor() { }

    getAllTasks () : Observable<Task[]> {
        return new Observable(observer => {
            setTimeout(() => {
                observer.next(this.items);
                observer.complete();
            }, 800);
        });
    }


}