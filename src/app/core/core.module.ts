import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CourseInfoComponent } from '../courses/course-info/course-info.component'

import { CourseListComponent } from '../courses/course-list/course-list.component'
import { Error404Component } from './components/error-404/error-404.component'
import { NavBarComponent } from './components/nav-bar/nav-bar.component'

@NgModule({
  declarations: [NavBarComponent, Error404Component],
  imports: [
    RouterModule.forChild([
      {
        path: 'courses',
        component: CourseListComponent,
      },
      {
        path: 'courses/info/:id',
        component: CourseInfoComponent,
      },
      {
        path: '**',
        component: Error404Component,
      },
    ]),
  ],
  exports: [NavBarComponent],
})
export class CoreModule {}
