import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ManagerLayoutRoutes } from './manager-layout.routing';
import { NotificationsComponent } from '../../notifications/notifications.component';
import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatSelectModule,
  MatIconModule,
  MatToolbarModule,
} from '@angular/material';
import { AllShareModule } from '../all-share/all-share.module';
import { DashboardComponent } from 'app/manager/dashboard/dashboard.component';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ManagerLayoutRoutes),
    FormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    MatIconModule,
    AllShareModule,
  ],
  declarations: [
    // DashboardComponent
  ]
})

export class ManagerLayoutModule {}
