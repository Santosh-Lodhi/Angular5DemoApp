import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {DataTableModule} from "angular-6-datatable";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BasicFormComponent } from './basic-form/basic-form.component';
import { ScModalModule } from 'angular-5-popup';


@NgModule({
  declarations: [
    AppComponent,
    BasicFormComponent
  ],
  imports: [
    BrowserModule,
    DataTableModule,
    FormsModule,
    ReactiveFormsModule,
    ScModalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
