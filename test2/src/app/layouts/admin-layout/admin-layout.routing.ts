import { ProductupdateComponent } from './../../admin/product/productupdate/productupdate.component';
import { Routes } from '@angular/router';

import { UserProfileComponent } from '../../manager/user-profile/user-profile.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { ProductaddComponent } from 'app/admin/product/productadd/productadd.component';
import { UserviewComponent } from 'app/admin/user/userview/userview.component';
import { WorkerviewComponent } from 'app/admin/worker/workerview/workerview.component';
import { DashboardComponent } from 'app/manager/dashboard/dashboard.component';
import { OtheruserComponent } from 'app/manager/otheruser/otheruser.component';
import { ProductComponent } from 'app/manager/product/product.component';
import { DistributorComponent } from 'app/manager/distributor/distributor.component';
import { DistributoraddComponent } from 'app/admin/distributor/distributoradd/distributoradd.component';
import { DistributoreditComponent } from 'app/admin/distributor/distributoredit/distributoredit.component';
import { DistributorprogressComponent } from 'app/admin/distributor/distributorprogress/distributorprogress.component';
import { DistributorblockComponent } from 'app/admin/distributor/distributorblock/distributorblock.component';
import { EstateaddComponent } from 'app/admin/estate/estateadd/estateadd.component';
import { EstateComponent } from 'app/manager/estate/estate.component';
import { EstateeditComponent } from 'app/admin/estate/estateedit/estateedit.component';
import { EstateprogressComponent } from 'app/admin/estate/estateprogress/estateprogress.component';
import { OrdereditComponent } from 'app/admin/order/orderedit/orderedit.component';
import { OrderComponent } from 'app/manager/order/order.component';
import { OrdersummaryComponent } from 'app/admin/order/ordersummary/ordersummary.component';
import { ProducteditComponent } from 'app/admin/product/productedit/productedit.component';
import { ProductprogressComponent } from 'app/admin/product/productprogress/productprogress.component';
import { UseraddComponent } from 'app/admin/user/useradd/useradd.component';
import { UsereditComponent } from 'app/admin/user/useredit/useredit.component';
import { UserblockComponent } from 'app/admin/user/userblock/userblock.component';
import { WorkeraddComponent } from 'app/admin/worker/workeradd/workeradd.component';
import { WorkerblockComponent } from 'app/admin/worker/workerblock/workerblock.component';
import { DistributorupdateComponent } from 'app/admin/distributor/distributorupdate/distributorupdate.component';
import { UserupdateComponent } from 'app/admin/user/userupdate/userupdate.component';
import { WorkereditComponent } from 'app/admin/worker/workeredit/workeredit.component';
import { EstateupdateComponent } from 'app/admin/estate/estateupdate/estateupdate.component';
import { OrderaddComponent } from 'app/admin/order/orderadd/orderadd.component';
import { WorkerupdateComponent } from 'app/admin/worker/workerupdate/workerupdate.component';

export const AdminLayoutRoutes: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full',},
    { path: 'dashboard',      component: DashboardComponent  },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'distributor/add', component: DistributoraddComponent },
    { path: 'distributor/view', component: DistributorComponent },
    { path: 'distributor/edit', component: DistributoreditComponent },
    { path: 'distributor/update', component: DistributorupdateComponent },
    { path: 'distributor/progress', component: DistributorprogressComponent },
    { path: 'distributor/block', component: DistributorblockComponent },
    { path: 'estate/add', component: EstateaddComponent },
    { path: 'estate/view', component: EstateComponent },
    { path: 'estate/edit', component: EstateeditComponent },
    { path: 'estate/progress', component: EstateprogressComponent },
    { path: 'estate/update', component: EstateupdateComponent },
    { path: 'order/view', component: OrderComponent },
    { path: 'order/add', component: OrderaddComponent },
    { path: 'order/summary', component: OrdersummaryComponent },
    { path: 'product/add', component: ProductaddComponent },
    { path: 'product/view', component: ProductComponent },
    { path: 'product/edit', component: ProducteditComponent },
    { path: 'product/progress', component: ProductprogressComponent },
    { path: 'product/update', component: ProductupdateComponent },
    { path: 'user/add', component: UseraddComponent},
    { path: 'user/view', component: UserviewComponent },
    { path: 'user/edit', component: UsereditComponent },
    { path: 'user/update', component: UserupdateComponent },
    { path: 'user/block', component: UserblockComponent },
    { path: 'worker/add', component: WorkeraddComponent },
    { path: 'worker/view', component: WorkerviewComponent },
    { path: 'worker/edit', component: WorkereditComponent },
    { path: 'worker/update', component: WorkerupdateComponent },
    { path: 'worker/block', component: WorkerblockComponent },
    
];
