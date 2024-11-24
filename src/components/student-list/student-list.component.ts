import { Component, ElementRef, ViewChild, viewChild } from '@angular/core';
import { StudentDetailsComponent } from '../student-details/student-details.component';
import { Student } from '../../models/student ';
import { InfromationPopupComponent } from '../infromation-popup/infromation-popup.component';
import { NgTemplateOutlet } from '@angular/common'; 

@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [StudentDetailsComponent,InfromationPopupComponent,NgTemplateOutlet],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})
export class StudentListComponent {
  addStd:boolean=false;
  @ViewChild(InfromationPopupComponent) child!:InfromationPopupComponent;
  newstudent: Student = new Student(0, "",false,false);
  currentStudentList: Student[] = [
    new Student(1, " Tamar ",true, false, new Date(1, 12, 2024)),
    new Student(2, " Ahuvi ", true,false, new Date(1, 12, 2024)),
    new Student(1, " Rut ",false, false, new Date(1, 12, 2024))
  ]
  EditStudent(std:Student){
    std.flag=true
  }
  AddStudent(){
    this.addStd=true
  }
  ParentSave(std: Student){
    this.currentStudentList.push(std)
  }
  DeleteStudent(){
      this.child.showPopup('?האם אתה בטוח שברצונך למחוק תלמיד זה')
  }
}
