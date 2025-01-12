import { Component } from '@angular/core';
import { CourseService, CourseSyllabus } from '../../services/course.service';
import { MatTreeModule, MatTreeNestedDataSource } from '@angular/material/tree';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatIconModule} from '@angular/material/icon'

@Component({
  selector: 'app-available-courses',
  standalone: true,
  imports: [MatTreeModule, MatIconModule, MatButtonModule, CommonModule],
  templateUrl: './available-courses.component.html',
  styleUrl: './available-courses.component.css'
})

export class AvailableCoursesComponent {

  treeControl = new NestedTreeControl<CourseSyllabus>(node => node.children);
  dataSource = new MatTreeNestedDataSource<CourseSyllabus>();

  constructor(courseService:CourseService){
    this.dataSource.data = courseService.getCourses().map(c => ({
      name: c.NameCourse,
      children: c.Syllabus.map(syllabus => ({
        name: syllabus.name,        
        children: syllabus.children || []  
      })),
      semesterCount: c.semesters
    })
    
    );
    
  }

  hasChild = (_: number, node: CourseSyllabus) => !!node.children && node.children.length > 0;

}
