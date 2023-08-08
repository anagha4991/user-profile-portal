import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddressComponent } from './address/address.component';
import { CompanyComponent } from './company/company.component';
import { UserProfileComponent } from './user-profile/user-profile.component';



@NgModule({
  declarations: [
    UserProfileComponent,
    AddressComponent,
    CompanyComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    UserProfileComponent,
    AddressComponent,
    CompanyComponent
  ]
})
export class ComponentsModule { }
