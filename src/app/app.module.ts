import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {routing, appRoutingProviders} from "./app.routes";
import { NewsComponent } from './news/news.component';
import {MdListModule} from "@angular2-material/list";
import {MdCardModule} from "@angular2-material/card";
import {MdGridListModule} from "@angular2-material/grid-list";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MdListModule,
    MdCardModule,
    MdGridListModule,
    routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
