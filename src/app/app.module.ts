import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AppRoutingModule } from './/app-routing.module';
import { DocumentsComponent } from './documents/documents.component';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    DocumentsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [
  AppComponent
  ]
})
export class AppModule { }
