import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { UserSearchComponent } from '../user-search/user-search.component';
import { PeopleModule } from './people.module';
const routes: Routes = [
  { path: '', component: UserSearchComponent },
];
@NgModule({
  imports: [
    PeopleModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule,
    PeopleModule
  ],
  declarations: [
    UserSearchComponent
  ]
})
export class PeopleSearchRoutingModule { }