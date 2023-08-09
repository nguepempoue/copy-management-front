import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UiModule } from './ui/ui.module';
import { SignModule } from './sign/sign.module';
import { AppModulesModule } from './app-modules/app-modules.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UiModule,
    SignModule,
    AppModulesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
