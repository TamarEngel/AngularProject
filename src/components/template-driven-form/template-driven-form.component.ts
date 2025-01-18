import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Teacher } from '../../models/teacher';
import { TeacherService } from '../../services//teacher/teacher.service';

@Component({
  selector: 'app-template-driven-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './template-driven-form.component.html',
  styleUrl: './template-driven-form.component.css'
})
export class TemplateDrivenFormComponent {

  teacher: Teacher = new Teacher(0, '', []);
  public TeacherList: Teacher[] = [];

  constructor(private teacherService: TeacherService) { }

  ngOnInit(): void {
    this.TeacherList = this.teacherService.getTeachers();
  }
  onSubmit() {

    const isExists = this.teacherService.getTeachers().findIndex(t => t.Id == this.teacher.Id);
    if (isExists == -1) {
      this.teacherService.addTeacher(this.teacher);
    } else {
      this.teacherService.updateTeacher(this.teacher);
    }
  }
}
