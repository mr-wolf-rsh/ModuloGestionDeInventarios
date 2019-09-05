import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';

import { ProductService } from '../shared/product.service';

import { Product, setValidationMessageCondition } from '../shared/product.model';

import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  private codProduct: string;
  private productRequest: Product;

  constructor(private _router: Router,
    private _route: ActivatedRoute,
    private _productService: ProductService,
    private _toastr: ToastrService) {
    this.productRequest = { id: 0, name: '', code: '', description: '', stock: 0 };
  }

  ngOnInit() {
    this.codProduct = this._route.snapshot.paramMap.get('codProd');

    if (!this.codProduct) {
      this._router.navigate(['product']);
    } else {
      this.getProduct();
    }
  }

  // Retrieves product
  public getProduct(): void {
    this._productService.getProduct(this.codProduct).subscribe(
      (data: Product) => {
        console.log('fetched data', data);

        Object.keys(data).forEach(k => this.productRequest[k] = data[k]);
      },
      (error: any) => {
        console.log(error);
        this._toastr.error('Hubo un error al recuperar los datos.', '¡Error!');
      }
    );
  }

  // Updates a product
  public updateProduct(isInvalid: boolean): void {
    if (isInvalid) {
      return
    }

    this._productService.updateProduct(this.productRequest).subscribe(
      (data: Product) => {
        console.log('updated data', data);
        this._toastr.success('Se realizó la operación correctamente.', '¡Éxito!');
        this._router.navigate(['product']);
      },
      (error: any) => {
        console.log(error);
        this._toastr.error('Hubo un error al realizar la operación.', '¡Error!');
      }
    );
  }

  // Condition for validation message
  public setValidationMessageCondition(formControl: any, whenDirty: boolean = true, whenTouched: boolean = true) {
    return setValidationMessageCondition(formControl, whenDirty, whenTouched);
  }
}
