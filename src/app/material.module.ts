import { NgModule } from '@angular/core'
import { MatBadgeModule } from '@angular/material/badge'
import { MatButtonModule } from '@angular/material/button'
import { MatCardModule } from '@angular/material/card'
import { MatGridListModule } from '@angular/material/grid-list'
import { MatIconModule } from '@angular/material/icon'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { MatToolbarModule } from '@angular/material/toolbar'

@NgModule({
  imports: [
    MatButtonModule,
    MatToolbarModule,
    MatBadgeModule,
    MatGridListModule,
    MatCardModule,
    MatIconModule,
    MatProgressSpinnerModule,
  ],
  exports: [
    MatButtonModule,
    MatToolbarModule,
    MatBadgeModule,
    MatGridListModule,
    MatCardModule,
    MatIconModule,
    MatProgressSpinnerModule,
  ],
})
export class MaterialModule {}
