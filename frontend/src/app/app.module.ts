import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductListComponent } from './product-list/product-list.component';
import { OrderAddComponent } from './order-add/order-add.component';
import { CustomerAddComponent } from './customer-add/customer-add.component';
import { OrderListComponent } from './order-list/order-list.component';
import { CustomerListComponent } from './customer-list/customer-list.component';

import { ApiService } from './api.service';


@NgModule({
  declarations: [
    AppComponent,
    ProductAddComponent,
    ProductListComponent,
    OrderAddComponent,
    CustomerAddComponent,
    OrderListComponent,
    CustomerListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: 'products',
        component: ProductListComponent
      },
      {
        path: 'orders',
        component: OrderListComponent
      },
      {
        path: 'customers',
        component: CustomerListComponent
      },
      {
        path: 'products/add',
        component: ProductAddComponent
      },
      {
        path: 'products/add/:id',
        component: ProductAddComponent
      },
      {
        path: 'orders/add',
        component: OrderAddComponent
      },
      {
        path: 'orders/add/:id',
        component: OrderAddComponent
      },

      {
        path: 'customers/add',
        component: CustomerAddComponent
      },
      {
        path: 'customers/add/:id',
        component: CustomerAddComponent
      },
      
    ]),
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
