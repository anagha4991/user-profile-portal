import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from  '@angular/common/http';
import { SharedRoutingModule } from './shared-routing.module';
import { SharedComponent } from './components/shared/shared.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    SharedComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    HttpClientModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [SharedComponent,SidebarComponent,HeaderComponent,FooterComponent,HttpClientModule,MatTableModule,
    MatButtonModule,
    MatIconModule]
})
export class SharedModule { }
