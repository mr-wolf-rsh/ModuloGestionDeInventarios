import { Injectable, Inject } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { Product } from './product.model';

@Injectable()
export class ProductService {
  private baseHttpOptions: any;
  private baseUrl: string;

  constructor(private _httpClient: HttpClient, @Inject('BASE_URL') _baseUrl: string) {
    this.baseUrl = _baseUrl;
    this.baseHttpOptions =
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        })
      }
  }

  // Calls WS to retrieve all products
  public getProducts(): Observable<Product[] | {}> {
    const url = this.baseUrl + 'api/Products/';
    return this._httpClient.get<Product[]>(url, this.baseHttpOptions)
      .pipe(
        tap(() => this.log('fetched products')),
        catchError(this.handleError<Product[]>('getProducts'))
      );
  }

  // Calls WS to retrieve a product
  public getProduct(idOrCode: string | number): Observable<Product | {}> {
    const url = this.baseUrl + `api/Products/${idOrCode}/`;
    return this._httpClient.get<Product>(url, this.baseHttpOptions)
      .pipe(
        tap(() => this.log('fetched product')),
        catchError(this.handleError<Product>('getProduct'))
      );
  }

  // Calls WS to add a product
  public addProduct(product: Product): Observable<Product | {}> {
    const url = this.baseUrl + `api/Products/`;
    return this._httpClient.post<Product>(url, product, this.baseHttpOptions)
      .pipe(
        tap(() => this.log('added new product')),
        catchError(this.handleError<Product>('addProduct'))
      );
  }

  // Calls WS to update a product
  public updateProduct(product: Product): Observable<Product | {}> {
    const url = this.baseUrl + `api/Products/${product.id}/`;
    return this._httpClient.put<Product>(url, product, this.baseHttpOptions)
      .pipe(
        tap(() => this.log('updated product')),
        catchError(this.handleError<Product>('updateProduct'))
      );
  }

  // Calls WS to delete a product
  public deleteProduct(idOrCode: string | number): Observable<Product | {}> {
    const url = this.baseUrl + `api/Products/${idOrCode}/`;
    return this._httpClient.delete<Product>(url, this.baseHttpOptions)
      .pipe(
        tap(() => this.log('deleted product')),
        catchError(this.handleError<Product>('deleteProduct'))
      );
  }

  // Error handler
  private handleError<T>(operation = 'operation') {
    return (error: any): Observable<T> => {
      this.log(`${operation} failed: ${error.message}`);
      return throwError(error);
    };
  }

  private log(message: string) {
    console.log(`ProductService: ${message}`);
  }
}
