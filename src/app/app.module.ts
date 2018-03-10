import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AppRoutingModule } from './/app-routing.module';
import { DocumentsComponent } from './documents/documents.component';
import { ProposalListComponent } from './proposal-list/proposal-list.component';
import { ProposalNewComponent } from './proposal/proposal-new/proposal-new.component';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    DocumentsComponent,
    ProposalListComponent,
    ProposalNewComponent
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
