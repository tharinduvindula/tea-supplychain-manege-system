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
import { ComponentsModule } from 'app/components/components.module';
import { DistributorserviceService } from 'app/service/distributorservice.service';
import { AdminserviceService } from 'app/service/adminservice.service';
import { LoaderserviceService } from 'app/service/loaderservice.service';
import { ManagerserviceService } from 'app/service/managerservice.service';
import { SupervisorserviceService } from 'app/service/supervisorservice.service';
import { NgxQRCodeModule } from 'ngx-qrcode2';
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
    ComponentsModule,
    NgxQRCodeModule,
  ],
  declarations: [
     // DashboardComponent
  ],
  providers: [
    DistributorserviceService,
    AdminserviceService,
    LoaderserviceService,
    ManagerserviceService,
    SupervisorserviceService
  ],
})

export class ManagerLayoutModule {}
