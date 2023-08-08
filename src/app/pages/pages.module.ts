import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { UserComponent } from './user/user.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserDetailsComponent } from './user/user-details/user-details.component';
import { ComponentsModule } from '../components/components.module';


@NgModule({
  declarations: [
    UserComponent,
    DashboardComponent,
    UserDetailsComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ComponentsModule
  ]
})
export class PagesModule { }
