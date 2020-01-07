import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MatToolbarModule, MatSidenavModule, MatListModule, MatButtonModule, MatIconModule, MatCheckboxModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ManagersidebarComponent } from './managersidebar/managersidebar.component';
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    ManagersidebarComponent,
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    ManagersidebarComponent,
  ]
})
export class ComponentsModule { }
