import { Component, OnInit } from '@angular/core';
import { StatisticsService } from "./statistics.service";
import { Statistics } from "../models/task.interface";

@Component({
    moduleId: module.id,
    selector: 'statistics',
    templateUrl: 'statistics.component.html'
})

export class StatisticsComponent implements OnInit {
    isLoaded: Boolean = false;
    statistics: Statistics;
    
    constructor (
        private statisticsService: StatisticsService
    ) { }

    ngOnInit() {
        this.statisticsService.getStatistics().subscribe(values => {
            this.statistics = values;
            this.isLoaded = true;
        },
        error => console.log(error))
     }
}