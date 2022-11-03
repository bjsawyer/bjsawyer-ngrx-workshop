import { Overlay, OverlayRef } from '@angular/cdk/overlay'
import { TemplatePortal } from '@angular/cdk/portal'
import {
  AfterViewInit,
  Component,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core'
import { Observable, of } from 'rxjs'

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css'],
})
export class LoaderComponent implements AfterViewInit {
  @ViewChild('spinnerRef') private _spinnerRef: TemplateRef<any>

  private _overlayRef: OverlayRef

  // TODO: Check if any of app's state is loading via a selector
  private _shouldShowLoader$: Observable<boolean> = of(false)

  constructor(
    private _viewContainerRef: ViewContainerRef,
    private _overlay: Overlay
  ) {}

  ngAfterViewInit(): void {
    this._createOverlay()

    this._shouldShowLoader$.subscribe((shouldShow) => {
      this._toggleLoadingSpinner(shouldShow)
    })
  }

  private _createOverlay(): void {
    this._overlayRef = this._overlay.create({
      hasBackdrop: true,
      positionStrategy: this._overlay
        .position()
        .global()
        .centerHorizontally()
        .centerVertically(),
    })
  }

  private _toggleLoadingSpinner(shouldShow: boolean): void {
    const isOverlayAttached = this._overlayRef.hasAttached()
    if (shouldShow && !isOverlayAttached) {
      this._showOverlay()
    } else if (!shouldShow && isOverlayAttached) {
      this._hideOverlay()
    }
  }

  private _showOverlay(): void {
    this._overlayRef.attach(
      new TemplatePortal(this._spinnerRef, this._viewContainerRef)
    )
  }

  private _hideOverlay(): void {
    this._overlayRef.detach()
  }
}
