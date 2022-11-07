import { Injectable } from '@angular/core'
import { map, Observable, timer } from 'rxjs'
import { MOCK_PRODUCTS } from '../../../services/mock-products'
import { IProductEntity } from './product-entity.interface'

/**
 * @important DO NOT INJECT THIS INTO ANY COMPONENTS!
 */
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor() {}

  getAllProducts$(): Observable<IProductEntity[]> {
    return timer(2000).pipe(map(() => MOCK_PRODUCTS))
  }
}
