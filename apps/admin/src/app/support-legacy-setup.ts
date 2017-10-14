import {Directive, ElementRef, Injector} from '@angular/core';
import {setAngularLib, UpgradeComponent, downgradeComponent, UpgradeModule} from '@angular/upgrade/static';

import * as angular from 'angular'; // replace with const angular = (<any>window).angular; if Angular is available globally

// import your application files here.

// import 'support-legacy';
// if (! angular.module('support-legacy')) {
//   throw new Error('"support-legacy" is not loaded');
// }


// all components downgraded from Angular to AngularJS go here
import {AppComponent} from './app.component';
angular.module('downgraded', []).
  directive('appRoot', downgradeComponent({component: AppComponent}));




export const upgradedComponents = [];



// additional configuration invoked right before bootstrap
export function configureSupportLegacy(i: Injector) {
  setAngularLib(angular);
  //  Insert additional configuration here
  
}
