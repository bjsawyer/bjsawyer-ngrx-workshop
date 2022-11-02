import { Overlay, OverlayRef } from '@angular/cdk/overlay'
import { TemplatePortal } from '@angular/cdk/portal'
import {
  Component,
  OnInit,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core'
import { Observable, of } from 'rxjs'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  @ViewChild('spinnerRef') private _spinnerRef: TemplateRef<any>
  private _overlayRef: OverlayRef

  private _shouldShowLoader$: Observable<boolean> = of(true)

  constructor(private _vcr: ViewContainerRef, private _overlay: Overlay) {}

  ngOnInit(): void {
    this._createOverlay()

    this._shouldShowLoader$.subscribe((shouldShow) => {
      const isOverlayAttached = this._overlayRef.hasAttached()

      if (shouldShow && !isOverlayAttached) {
        this._showOverlay()
      } else if (!shouldShow && isOverlayAttached) {
        this._hideOverlay()
      }
    })
  }

  private _createOverlay() {
    this._overlayRef = this._overlay.create({
      hasBackdrop: true,
      positionStrategy: this._overlay
        .position()
        .global()
        .centerHorizontally()
        .centerVertically(),
    })
  }

  private _showOverlay(): void {
    this._overlayRef.attach(new TemplatePortal(this._spinnerRef, this._vcr))
  }

  private _hideOverlay(): void {
    this._overlayRef.detach()
  }
}
