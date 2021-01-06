import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule,  routingComponents} from './app-routing.module';
import { AppComponent } from './app.component';
import { CompetitionListComponent } from './competition-list/competition-list.component';
import { EventListComponent } from './event-list/event-list.component';
import { ApiComponent } from './api/api.component';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    ApiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
