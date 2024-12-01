import { Component, ElementRef, ViewChild, output, viewChild } from '@angular/core';
import { StudentDetailsComponent } from '../student-details/student-details.component';
import { Student } from '../../models/student ';
import { InfromationPopupComponent } from '../infromation-popup/infromation-popup.component';
import { NgTemplateOutlet } from '@angular/common'; 
import { CourseListComponent } from '../course-list/course-list.component';


@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [StudentDetailsComponent,InfromationPopupComponent,NgTemplateOutlet,CourseListComponent],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})
export class StudentListComponent {
  addStd:boolean=false;
  @ViewChild(InfromationPopupComponent) child!:InfromationPopupComponent;
  newstudent: Student = new Student(0, "",false,false,false,false);
  currentStudentList: Student[] = [
    new Student(1, " Tamar ",true, false,false,false, new Date(1, 12, 2024)),
    new Student(2, " Ahuvi ", true,false,false,true, new Date(1, 12, 2024)),
    new Student(1, " Rut ",false, false,false,true, new Date(1, 12, 2024))
  ]
  EditStudent(std: Student){
    std.flagForEdit=true
  }
  closeStudent(std:Student){
    std.flagForEdit=false
  }
  AddStudent(){
    this.addStd=true
  }
  ParentSave(std: Student){
    const index = this.currentStudentList.findIndex(
      (student) => student.Id === std.Id
    );

    if (index !== -1) {
      this.currentStudentList[index] = std;
    } else {
      this.currentStudentList.push(std);
    }
  }
  DeleteStudent(){
      this.child.showPopup('?האם אתה בטוח שברצונך למחוק תלמיד זה')
  }
  showListCourses(std: Student){
    std.flagForList=true
  }
  closeListCourses(std: Student){
    std.flagForList=false
  }
}

