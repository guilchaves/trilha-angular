import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { AlunosComponent } from './alunos/alunos.component'
import { AppComponent } from './app.component'
import { HomeComponent } from './home/home.component'
import { ProfessoresComponent } from './professores/professores.component'

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'alunos',
    component: AlunosComponent,
  },
  {
    path: 'professores',
    component: ProfessoresComponent,
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
