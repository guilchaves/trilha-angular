import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { MaterialModule } from './shared/material/material.module'

import { AlunosComponent } from './alunos/alunos.component'
import { ProfessoresComponent } from './professores/professores.component';
import { TopbarComponent } from './shared/components/topbar/topbar.component';
import { HomeComponent } from './home/home.component'

@NgModule({
  declarations: [AppComponent, AlunosComponent, ProfessoresComponent, TopbarComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, MaterialModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
