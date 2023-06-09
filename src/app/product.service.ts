import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from './product';
import { PRODUCTS } from './tableau-produits';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProducts(): Observable<Product[]> {
    const products = of(PRODUCTS)
    return products;
  }

  getProduct(id: number): Observable<Product> {
    const product = PRODUCTS.find(pr => pr.id === id)!;
    return of(product);
  }
}
