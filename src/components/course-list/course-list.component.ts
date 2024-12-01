import { Component, Input } from '@angular/core';
import { Course, CourseService } from '../../services/course.service';
import { Student } from '../../models/student ';
import { FormsModule } from '@angular/forms';
import { ColorBtnDirective } from '../../directives/color-btn.directive';
@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [FormsModule,ColorBtnDirective],
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.css'
})
export class CourseListComponent {
  @Input() currentStd!:Student;
  courses: Course [] = [];
  constructor(private courseService: CourseService) { 
    this.courses = this.courseService.getCourses();
  }
}
