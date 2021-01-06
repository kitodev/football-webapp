import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompetitionListComponent } from './competition-list/competition-list.component';
import { EventListComponent } from './event-list/event-list.component';

const routes: Routes = [
  { path: 'competition', component: CompetitionListComponent},
  { path: 'event', component: EventListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [CompetitionListComponent, EventListComponent]