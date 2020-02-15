import { Routes } from '@angular/router';

import { DashboardComponent } from '../../manager/dashboard/dashboard.component';
import { UserProfileComponent } from '../../manager/user-profile/user-profile.component';
import { OrderComponent } from 'app/manager/order/order.component';
import { ProductComponent } from 'app/manager/product/product.component';
import { DistributorComponent } from 'app/manager/distributor/distributor.component';
import { OtheruserComponent } from 'app/manager/otheruser/otheruser.component';
import { EstateComponent } from 'app/manager/estate/estate.component';
import { OneproductComponent } from 'app/manager/oneproduct/oneproduct.component';
import { OneorderComponent } from 'app/manager/oneorder/oneorder.component';

export const ManagerLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'product',     component: ProductComponent },
    { path: 'distributor',     component: DistributorComponent },
    { path: 'otheruser',    component: OtheruserComponent },
    { path: 'estate',  component: EstateComponent },
    { path: 'order',  component: OrderComponent },
    { path: 'oneproduct',     component: OneproductComponent },
    { path: 'oneorder', component: OneorderComponent },
];
