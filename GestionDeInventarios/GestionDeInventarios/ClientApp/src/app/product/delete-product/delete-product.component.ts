import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { ProductService } from '../shared/product.service';

import { Product, setValidationMessageCondition } from '../shared/product.model';

import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit {
  private codeProduct: string;

  constructor(private _router: Router,
    private _productService: ProductService,
    private _toastr: ToastrService) { }

  ngOnInit() {
  }

  // Deletes a product
  public deleteProduct(isInvalid: boolean): void {
    if (isInvalid) {
      return
    }

    if (!confirm('¿Desea continuar con esta operación?')) {
      return;
    }

    this._productService.deleteProduct(this.codeProduct).subscribe(
      (data: Product) => {
        console.log('deleted data', data);
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
