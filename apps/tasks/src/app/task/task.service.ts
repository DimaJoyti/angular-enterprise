import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AppService } from "../app.service";
import { Task, FilteredTasks } from "../models/task.interface";

@Injectable()
export class TaskService {
    private tasks: Task[];
    private filteredTasks: FilteredTasks;

    constructor(
        private appService: AppService
    ) { }

    private filterCompletedTasks(allItems) : Task[] {
        return allItems.filter(item => {return item.status == true})
    }
    
    private filterUncompletedTasks(allItems) : Task[] {
        return allItems.filter(item => {return item.status == false})
    }

    private satData(values): void {
        this.tasks = values;
        this.filteredTasks = {
            completed : this.filterCompletedTasks(values),
            uncompleted: this.filterUncompletedTasks(values)
        }
    }

    getFilteredTasks() : Observable<FilteredTasks> {
        return new Observable(observer => {
           this.appService.getAllTasks().subscribe(values => {
                this.satData(values);
                observer.next(this.filteredTasks);
                observer.complete();
            },
            error => console.log(error))
        });
    }

}