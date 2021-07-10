import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {CommonModule} from '@angular/common';

import { AppComponent } from './app.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { ClassBindingComponent } from './class-binding/class-binding.component';
import { StyleBindingComponent } from './style-binding/style-binding.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { TemplateRefarenceVariableComponent } from './template-refarence-variable/template-refarence-variable.component';
import { NgModelTwoWayBindingComponent } from './ng-model-two-way-binding/ng-model-two-way-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    EventBindingComponent,
    ClassBindingComponent,
    StyleBindingComponent,
    PropertyBindingComponent,
    TemplateRefarenceVariableComponent,
    NgModelTwoWayBindingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
