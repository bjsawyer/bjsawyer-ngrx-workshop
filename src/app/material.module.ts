import { NgModule } from '@angular/core'
import { MatBadgeModule } from '@angular/material/badge'
import { MatButtonModule } from '@angular/material/button'
import { MatToolbarModule } from '@angular/material/toolbar'

@NgModule({
  imports: [MatButtonModule, MatToolbarModule, MatBadgeModule],
  exports: [MatButtonModule, MatToolbarModule, MatBadgeModule],
})
export class MaterialModule {}
