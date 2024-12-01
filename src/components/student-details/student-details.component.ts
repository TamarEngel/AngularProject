import { Component, EventEmitter, Input, Output, output } from '@angular/core';
import { Student } from '../../models/student ';
import { json } from 'stream/consumers';

@Component({
  selector: 'app-student-details',
  standalone: true,
  imports: [],
  templateUrl: './student-details.component.html',
  styleUrl: './student-details.component.css'
})
export class StudentDetailsComponent {
  @Input() currentStudent!: Student | null;
  @Output() saveStudent: EventEmitter<any> = new EventEmitter<any>();
  @Output() outputStudent: EventEmitter<any> = new EventEmitter<any>();

  saveStd(id:number,name:string,active:string){
    this.saveStudent.emit(new Student(id,name,JSON.parse(active),false,false,false))
  }
}





