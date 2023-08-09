import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppModulesRoutingModule } from './app-modules-routing.module';
import { AppModuleComponent } from './app-module/app-module.component';
import { UiModule } from '../ui/ui.module';


@NgModule({
  declarations: [
    AppModuleComponent
  ],
  imports: [
    CommonModule,
    AppModulesRoutingModule,
    UiModule
  ]
})
export class AppModulesModule { }
