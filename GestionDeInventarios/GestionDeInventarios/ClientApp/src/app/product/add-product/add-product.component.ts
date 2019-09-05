import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { ProductService } from '../shared/product.service';

import { Product, setValidationMessageCondition } from '../shared/product.model';

import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  private productRequest: Product;

  constructor(private _router: Router,
    private _productService: ProductService,
    private _toastr: ToastrService) {
    this.productRequest = { id: 0, name: '', code: '', description: '', stock: 0 };
  }

  ngOnInit() {
  }

  // Adds a product
  public addProduct(isInvalid: boolean): void {
    if (isInvalid) {
      return
    }

    this._productService.addProduct(this.productRequest).subscribe(
      (data: any) => {
        console.log('added data', data);
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
