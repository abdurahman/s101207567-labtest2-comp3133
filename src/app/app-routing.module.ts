import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MissionListComponent } from './mission-list/mission-list.component'
import { MissionDetailsComponent } from "./mission-details/mission-details.component";

const routes: Routes = [
{ path: '', redirectTo: '/missionList', pathMatch: 'full'},
{ path: 'missionList', component: MissionListComponent },
{ path: 'missionDetails', component: MissionDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
