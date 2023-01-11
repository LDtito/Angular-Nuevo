import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductComponent } from './product/product.component';
import { CategoryComponent } from './category/category.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    DashboardComponent,
    ProductComponent,
    CategoryComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports:[
    DashboardComponent,
    ProductComponent,
    CategoryComponent,
  ]
})
export class PagesModuleModule { };
