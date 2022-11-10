import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'

@Injectable({ providedIn: 'root' })
export class HomeService {
  technologiesOpened$ = new BehaviorSubject<boolean>(true)
  conceptsOpened$ = new BehaviorSubject<boolean>(true)
  stepsOpened$ = new BehaviorSubject<boolean>(true)

  constructor() {}
}
