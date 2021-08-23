import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-course-info',
  templateUrl: './course-info.component.html',
  styleUrls: ['./course-info.component.scss'],
})
export class CourseInfoComponent implements OnInit {
  courseId: number

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.courseId = +this.activatedRoute.snapshot.paramMap.get('id')
  }
}
