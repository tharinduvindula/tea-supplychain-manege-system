import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';
import { NotificationsComponent } from './notifications/notifications.component';
import {
  AgmCoreModule
} from '@agm/core';
import { MatButtonModule,
         MatRippleModule,
         MatFormFieldModule,
         MatInputModule,
         MatSelectModule,
         MatTooltipModule,
         MatIconModule,
         MatToolbarModule,
         MatSidenavModule,
         MatSlideToggleModule,
         MatDialogModule} from '@angular/material';
import { LoginComponent } from './login/login.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ManagerLayoutComponent } from './layouts/manager-layout/manager-layout.component';
import { DistributoreditComponent } from './admin/distributor/distributoredit/distributoredit.component';
import { DistributorprogressComponent } from './admin/distributor/distributorprogress/distributorprogress.component';
import { DistributorblockComponent } from './admin/distributor/distributorblock/distributorblock.component';
import { EstateeditComponent } from './admin/estate/estateedit/estateedit.component';
import { EstateprogressComponent } from './admin/estate/estateprogress/estateprogress.component';
import { OrdersummaryComponent } from './admin/order/ordersummary/ordersummary.component';
import { ProducteditComponent } from './admin/product/productedit/productedit.component';
import { ProductprogressComponent } from './admin/product/productprogress/productprogress.component';
import { UseraddComponent } from './admin/user/useradd/useradd.component';
import { UsereditComponent } from './admin/user/useredit/useredit.component';
import { UserblockComponent } from './admin/user/userblock/userblock.component';
import { WorkeraddComponent } from './admin/worker/workeradd/workeradd.component';
import { WorkereditComponent } from './admin/worker/workeredit/workeredit.component';
import { WorkerblockComponent } from './admin/worker/workerblock/workerblock.component';
import { EthcontractService } from './web3-servise/ethcontract.service';
import { RegistationComponent } from './registation/registation.component';
import { PasswordResetComponent } from './password-reset/password-reset.component';
import { FrogetPasswordComponent } from './froget-password/froget-password.component';
import { CommonModule } from '@angular/common';
import { ProductupdateComponent } from './admin/product/productupdate/productupdate.component';
import { DistributorupdateComponent } from './admin/distributor/distributorupdate/distributorupdate.component';
import { UcWidgetModule } from 'ngx-uploadcare-widget';
import { EstateupdateComponent } from './admin/estate/estateupdate/estateupdate.component';
import { OneestateviewComponent } from './manager/oneestateview/oneestateview.component';


@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    CommonModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
    })
    ,
    MatToolbarModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSidenavModule,
    MatSelectModule,
    MatTooltipModule,
    MatIconModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    MatDialogModule,
    UcWidgetModule,
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    ManagerLayoutComponent,
    LoginComponent,
    RegistationComponent,
    PasswordResetComponent,
    FrogetPasswordComponent,
    ProductupdateComponent,
    EstateupdateComponent,
    OneestateviewComponent,

  ],
  providers: [EthcontractService],
  bootstrap: [AppComponent]
})
export class AppModule { }