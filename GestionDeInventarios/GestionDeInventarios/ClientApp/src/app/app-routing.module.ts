import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductComponent } from './product/product.component';
import { AddProductComponent } from './product/add-product/add-product.component';
import { UpdateProductComponent } from './product/update-product/update-product.component';
import { DeleteProductComponent } from './product/delete-product/delete-product.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'product', pathMatch: 'full'
  },
  {
    path: 'product', component: ProductComponent
  },
  { path: 'product/add', component: AddProductComponent },
  { path: 'product/update/:codProd', component: UpdateProductComponent },
  { path: 'product/delete', component: DeleteProductComponent },
  {
    path: '**', redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
