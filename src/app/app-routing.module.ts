import { ManageUserComponent } from './_components/user/manage-user/manage-user.component';
import { HomeComponent } from './_components/home/home.component';
import { UserListComponent } from './_components/user/user-list/user-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './_shared/auth.guard';
import { DashboardComponent } from './_components/dashboard/dashboard.component';
import { ScreeningcenterComponent } from './_components/screeningcenter/screeningcenter.component';
import { CustomerMasterComponent } from './_components/customer-master/customer-master.component';
import { CreateCustomerMasterComponent } from './_components/customer-master/create-customer-master/create-customer-master.component';
import { EditCustomerComponent } from './_components/customer-master/edit-customer/edit-customer.component';
import { CreateScreencenterComponent } from './_components/screeningcenter/create-screencenter/create-screencenter.component';
import { EditScreenCenterComponent } from './_components/screeningcenter/edit-screen-center/edit-screen-center.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent},
  { path: '', component: HomeComponent, canActivate: [AuthGuard]},
  { path: 'users', component: UserListComponent, canActivate: [AuthGuard]},
  {path: 'screeningcenter', component:ScreeningcenterComponent, canActivate: [AuthGuard]},
  {path: 'createscreeningcenter', component:CreateScreencenterComponent, canActivate: [AuthGuard]},
  {path: 'editscreeningcenter', component:EditScreenCenterComponent, canActivate: [AuthGuard]},
  {path: 'customermaster', component:CustomerMasterComponent, canActivate: [AuthGuard]},
  {path: 'createcustomer', component:CreateCustomerMasterComponent, canActivate: [AuthGuard]},
  {path: 'editecustomer', component:EditCustomerComponent, canActivate: [AuthGuard]},
  { path: 'manageuser', component: ManageUserComponent , canActivate: [AuthGuard]},
  { path: 'manageuser/:id', component: ManageUserComponent , canActivate: [AuthGuard]},
  { path: 'account', loadChildren: () => import('./_components/account/account.module').then(m => m.AccountModule) },
  { path: '**', redirectTo: '' }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
