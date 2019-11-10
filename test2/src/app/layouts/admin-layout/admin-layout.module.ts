import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
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
  MatSlideToggleModule,
  MatDatepickerModule,
  MatRadioModule,
  MatNativeDateModule,
} from '@angular/material';
import { ProductaddComponent } from 'app/admin/product/productadd/productadd.component';
import { UserviewComponent } from 'app/admin/user/userview/userview.component';
import { WorkerviewComponent } from 'app/admin/worker/workerview/workerview.component';
import { AllShareModule } from '../all-share/all-share.module';
import { DistributoraddComponent } from 'app/admin/distributor/distributoradd/distributoradd.component';
import { DistributoreditComponent } from 'app/admin/distributor/distributoredit/distributoredit.component';
import { DistributorprogressComponent } from 'app/admin/distributor/distributorprogress/distributorprogress.component';
import { DistributorblockComponent } from 'app/admin/distributor/distributorblock/distributorblock.component';
import { EstateaddComponent } from 'app/admin/estate/estateadd/estateadd.component';
import { EstateeditComponent } from 'app/admin/estate/estateedit/estateedit.component';
import { EstateprogressComponent } from 'app/admin/estate/estateprogress/estateprogress.component';
import { OrdereditComponent } from 'app/admin/order/orderadd/orderedit.component';
import { OrdersummaryComponent } from 'app/admin/order/ordersummary/ordersummary.component';
import { ProducteditComponent } from 'app/admin/product/productedit/productedit.component';
import { ProductprogressComponent } from 'app/admin/product/productprogress/productprogress.component';
import { UseraddComponent } from 'app/admin/user/useradd/useradd.component';
import { UsereditComponent } from 'app/admin/user/useredit/useredit.component';
import { UserblockComponent } from 'app/admin/user/userblock/userblock.component';
import { WorkeraddComponent } from 'app/admin/worker/workeradd/workeradd.component';
import { WorkereditComponent } from 'app/admin/worker/workeredit/workeredit.component';
import { WorkerblockComponent } from 'app/admin/worker/workerblock/workerblock.component';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    MatIconModule,
    MatSlideToggleModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    AllShareModule,
  ],
  declarations: [
    NotificationsComponent,
    DistributoraddComponent,
    DistributoreditComponent,
    DistributorprogressComponent,
    DistributorblockComponent,
    EstateaddComponent,
    EstateeditComponent,
    EstateprogressComponent,
    OrdereditComponent,
    OrdersummaryComponent,
    ProductaddComponent,
    ProducteditComponent,
    ProductprogressComponent,
    UseraddComponent,
    UserviewComponent,
    UsereditComponent,
    UserblockComponent,
    WorkeraddComponent,
    WorkerviewComponent,
    WorkereditComponent,
    WorkerblockComponent,
  ]
})

export class AdminLayoutModule {}
