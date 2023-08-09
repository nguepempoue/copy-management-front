import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiRoutingModule } from './ui-routing.module';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    MenuComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    UiRoutingModule
  ],
  exports: [
    MenuComponent,
    HeaderComponent
  ]
})
export class UiModule { }
