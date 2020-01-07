import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    MatButtonModule,
    MatInputModule,
    MatRippleModule,
    MatFormFieldModule,
    MatTooltipModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,

} from '@angular/material';
import { RouterModule } from '@angular/router';
import { AdminLayoutRoutes } from '../admin-layout/admin-layout.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { DashboardComponent } from 'app/manager/dashboard/dashboard.component';
import { UserProfileComponent } from 'app/manager/user-profile/user-profile.component';
import { ProductComponent } from 'app/manager/product/product.component';
import { DistributorComponent } from 'app/manager/distributor/distributor.component';
import { EstateComponent } from 'app/manager/estate/estate.component';
import { OtheruserComponent } from 'app/manager/otheruser/otheruser.component';
import { OrderComponent } from 'app/manager/order/order.component';
import { DistributorserviceService } from 'app/service/distributorservice.service';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        MatButtonModule,
        MatRadioModule,
        MatRippleModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatTooltipModule,
        MatSlideToggleModule,
        MatIconModule,
        MatDatepickerModule,
        MatNativeDateModule,
        ReactiveFormsModule,
        HttpClientModule,
        HttpModule,
    ],
    declarations: [
        DashboardComponent,
        UserProfileComponent,
        ProductComponent,
        DistributorComponent,
        EstateComponent,
        OrderComponent,
        OtheruserComponent,
    ],
    providers: [DistributorserviceService],

})
export class AllShareModule { }
