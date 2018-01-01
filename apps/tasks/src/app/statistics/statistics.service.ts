import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AppService } from "../app.service";
import { Statistics } from "../models/task.interface";
  
@Injectable()
export class StatisticsService {
    private statistics: Statistics = {
        all: 0,
        completed: 0,
        uncompleted: 0,
        urgent: 0
    };
  
    constructor(
        private appService: AppService
    ) { }

    private generateStatistics(values): void {
        
        values.forEach( item => {
            this.statistics.all++;
            if(item.status == true) {this.statistics.completed++}
            if(item.status == false) {this.statistics.uncompleted++}
            if(item.urgency == 0) {this.statistics.urgent++}
        }) 
    }

    getStatistics() : Observable<Statistics> {
        return new Observable(observer => {
           this.appService.getAllTasks().subscribe(values => {
                console.log(values);
                this.generateStatistics(values);
                observer.next(this.statistics);
                observer.complete();
            },
            error => console.log(error))
        });
    }

}