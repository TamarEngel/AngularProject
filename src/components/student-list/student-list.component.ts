import { Component } from '@angular/core';
import { StudentDetailsComponent } from '../student-details/student-details.component';
import { Student } from '../../models/student ';

@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [StudentDetailsComponent],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})
export class StudentListComponent {
  addStd:boolean=false
  // isEditing: boolean = false
  newstudent: Student = new Student(0, "",false,false);
  currentStudentList: Student[] = [
    new Student(1, " Tamar ",true, false, new Date(1, 12, 2024)),
    new Student(2, " Ahuvi ", true,false, new Date(1, 12, 2024)),
    new Student(1, " Rut ",false, false, new Date(1, 12, 2024))
  ]
  editStudent(std:Student){
    std.flag=true
    // this.isEditing=true
  }
  AddStudent(){
    this.addStd=true
  }
  ParentSave(std: Student){
    this.currentStudentList.push(std)
    // this.isEditing = false
  }
}
