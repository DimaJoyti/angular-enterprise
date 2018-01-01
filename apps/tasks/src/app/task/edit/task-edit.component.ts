import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'task-edit',
    templateUrl: 'task-edit.component.html',
    styleUrls: ["task-edit.component.css"]
})

export class TaskEditComponent implements OnInit {
    isLoaded: Boolean = false;
    foods = [
        {value: '0', viewValue: 'Срочно'},
        {value: '1', viewValue: 'Нормально'},
        {value: '2', viewValue: 'Не срочно'}
    ];

    constructor() { }

    ngOnInit() {
        this.isLoaded = true;    
        
     }
}