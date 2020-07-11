import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OrdenComponent } from './components/orden/orden.component';
import {Service} from  "./services/service"

import {AppRoutingModule} from "./app.routing"

import {HttpClientModule} from '@angular/common/http'
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    OrdenComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
