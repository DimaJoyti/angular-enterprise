import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageBoxComponent } from './message-box/message-box.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { componentKitReducer } from './+state/component-kit.reducer';
import { componentKitInitialState } from './+state/component-kit.init';
import { ComponentKitEffects } from './+state/component-kit.effects';

@NgModule({
  imports: [CommonModule, StoreModule.forFeature('componentKit', componentKitReducer, {initialState: componentKitInitialState}), EffectsModule.forFeature([ComponentKitEffects])],
  declarations: [MessageBoxComponent],
  exports: [MessageBoxComponent],
  providers: [ComponentKitEffects]
})
export class ComponentKitModule {
}
