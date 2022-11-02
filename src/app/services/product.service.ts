import { Injectable } from '@angular/core'
import { map, Observable, timer } from 'rxjs'
import { MOCK_PRODUCTS } from './mock-products'

export interface IProduct {
  id: number
  title: string
  price: number
  description: string
  image: string
}

/**
 * @important DO NOT INJECT THIS INTO ANY COMPONENTS!
 */
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor() {}

  getAllProducts$(): Observable<IProduct[]> {
    return timer(2000).pipe(map(() => MOCK_PRODUCTS))
  }
}
