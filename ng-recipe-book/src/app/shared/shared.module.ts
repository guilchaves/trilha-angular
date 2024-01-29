import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { DropdownDirective } from './directives/dropdown.directive'
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [DropdownDirective],
  imports: [CommonModule, HttpClientModule],
  exports: [DropdownDirective, HttpClientModule],
})
export class SharedModule {}
