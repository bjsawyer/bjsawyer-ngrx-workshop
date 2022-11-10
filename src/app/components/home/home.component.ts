import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { HomeService } from './home.service'
import { take } from 'rxjs/operators'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  technologiesOpened$: Observable<boolean>
  conceptsOpened$: Observable<boolean>
  stepsOpened$: Observable<boolean>

  constructor(private _homeService: HomeService) {}

  ngOnInit(): void {
    this.technologiesOpened$ = this._homeService.technologiesOpened$.pipe(take(1))
    this.conceptsOpened$ = this._homeService.conceptsOpened$.pipe(take(1))
    this.stepsOpened$ = this._homeService.stepsOpened$.pipe(take(1))
  }

  panelOpened(section: string): void {
    this._setExpansion(section, true)
  }

  panelClosed(section: string): void {
    this._setExpansion(section, false)
  }

  private _setExpansion(section: string, wasOpened: boolean): void {
    switch (section) {
      case 'technologies':
        this._homeService.technologiesOpened$.next(wasOpened)
      case 'concepts':
        this._homeService.conceptsOpened$.next(wasOpened)
      case 'steps':
        this._homeService.stepsOpened$.next(wasOpened)
    }
  }
}
