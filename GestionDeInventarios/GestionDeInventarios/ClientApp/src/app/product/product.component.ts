import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { ProductService } from './shared/product.service';

import { Product } from './shared/product.model';

import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  public products: Product[];

  constructor(private _router: Router,
    private _productService: ProductService,
    private _toastr: ToastrService) { }

  ngOnInit() {
    this.getAllProducts();
  }

  // Retrieves all products
  public getAllProducts(): void {
    this._productService.getProducts().subscribe(
      (data: Product[]) => {
        console.log('fetched data', data);
        this.products = data;
      },
      (error: any) => {
        console.log(error);
        this._toastr.error('Hubo un error al recuperar los datos.', '¡Error!');
      }
    );
  }

  // Deletes a product
  public deleteProduct(idProduct: string): void {
    if (!confirm('¿Desea continuar con esta operación?')) {
      return;
    }

    this._productService.deleteProduct(idProduct).subscribe(
      (data: Product) => {
        console.log('deleted data', data);
        this._toastr.success('Se realizó la operación correctamente.', '¡Éxito!');
      },
      (error: any) => {
        console.log(error);
        this._toastr.error('Hubo un error al realizar la operación.', '¡Error!');
      },
      () => this.getAllProducts()
    );
  }

  // Redirects to specified route
  public goToAddProduct(): void {
    this._router.navigate(['product', 'add']);
  }

  public goToUpdateProduct(codProd: string): void {
    this._router.navigate(['product', 'update', codProd]);
  }

  public goToDeleteProduct(): void {
    this._router.navigate(['product', 'delete']);
  }
}
