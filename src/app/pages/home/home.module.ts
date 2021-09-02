import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule } from '@angular/forms'

import { StoreModule } from '@ngrx/store'

import { HomePage } from './home.page'
import { homeReducer } from './state/home.reducer'

@NgModule({
  declarations: [HomePage],
  imports: [CommonModule, ReactiveFormsModule, StoreModule.forFeature('home', homeReducer)],
})
export class HomeModule {}
