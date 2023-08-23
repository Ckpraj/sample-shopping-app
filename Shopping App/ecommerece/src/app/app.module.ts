import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';8
import { RouterModule,Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Pages/home/home.component';
import { CartListComponent } from './Pages/cart/cart-list.component';
import { SaleComponent } from './Pages/sale/sale.component';

const routes:Routes = [
  {path:'cart-list',component:CartListComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CartListComponent,
    SaleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
