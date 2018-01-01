import { Component } from "@angular/core";

@Component({
    moduleId: module.id,
    selector: "dashboard",
    templateUrl: "dashboard.component.html",
    styleUrls: ["dashboard.component.css"]
}) 

export class DashboardComponent {
 
    links = [
        { path: '/home', icon: 'home', label: 'Главная'},
        { path: '/list', icon: 'list', label: 'Ссылки'},
        { path: '/statistics', icon: 'settings', label: 'Статистика'}
    ];
}