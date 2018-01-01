import { Component } from "@angular/core";
import { TaskService } from "./task.service";
import { Task, FilteredTasks, UrgencyMap } from "./../models/task.interface";


@Component({
    moduleId: module.id,
    selector: "task",
    templateUrl: "task.component.html",
    styleUrls: ["task.component.css"]
}) 

export class TaskComponent {
    isLoaded: Boolean = false;
    isCompletedVisible: Boolean = false;
    urgencyMap: Object[] = UrgencyMap;
    filteredTasks: FilteredTasks = {
        completed : [],
        uncompleted: []
    };
    
    constructor (
        private taskService: TaskService
    ) { }

    ngOnInit() {
        this.taskService.getFilteredTasks().subscribe(values => {
            this.filteredTasks = values;
            this.isLoaded = true;
        },
        error => console.log(error))

        /*  Пример вызова Observable напрямую из сервиса похоже на Promise
            this.taskService.getAllTasks()
            .subscribe(values => {
                // do something with values
            },
            error => console.log(error))
        */
     }

     toggleCompleted() {
         this.isCompletedVisible = !this.isCompletedVisible;
     }
}