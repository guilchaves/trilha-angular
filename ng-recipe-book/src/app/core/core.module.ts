import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { AppRoutingModule } from '../app-routing.module'
import { SharedModule } from '../shared/shared.module'

import { FormsModule } from '@angular/forms'

import { HeaderComponent } from './components/header/header.component'
import { AuthComponent } from './components/auth/auth.component'
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component'

@NgModule({
  declarations: [HeaderComponent, AuthComponent, LoadingSpinnerComponent],
  imports: [CommonModule, AppRoutingModule, SharedModule, FormsModule],
  exports: [HeaderComponent],
})
export class CoreModule {}
