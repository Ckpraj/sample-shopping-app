import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { SaleComponent } from './Pages/sale/sale.component';
import { CartListComponent } from './Pages/cart/cart-list.component';

const routes: Routes = [
  {
    path:"**",
    component:HomeComponent
  },
  {
    path:'products',
    component:HomeComponent
  },
  {
    path:'cart',
    component:CartListComponent
  },
  {
  path:'sale',
  component:SaleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
