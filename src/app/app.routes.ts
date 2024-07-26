import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AddCustomerComponent } from './pages/add-customer/add-customer.component';
import { ViewAllComponent } from './pages/view-all/view-all.component';

export const routes: Routes = [
    {
        path:"",
        component:HomeComponent 
    },
    {
        path:"home",
        component:HomeComponent
    },
    {
        path:"add-customer",
        component:AddCustomerComponent
    },
    {
        path:"view-all",
        component:ViewAllComponent   
    }
];
