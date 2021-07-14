import { Injectable } from '@angular/core';
import { from, Observable, Subject } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Product } from 'src/app/shared/product.model';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  baseUrl: string = 'http://localhost:3001/products';
  private subject: Object = new Subject<Object>();

  constructor(
    private snackBar: MatSnackBar,
    private http: HttpClient
  ) { }



  // create(product: Product): Observable<Product> {

  //   return this.http.post<Product>(this.baseUrl, product).pipe(
  //     map(obj => obj),
  //     catchError(e => this.errorHandler(e))
  //   );
  // }

}
