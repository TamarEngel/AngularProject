import { Injectable } from '@angular/core';
import { Class } from '../../models/class';

@Injectable({
  providedIn: 'root'
})
export class ClassesService {

  constructor() { }
  private classes:Class[]=[
    {Id:1, Name:"v1",NumStudents:36},
    {Id:2, Name:"d2",NumStudents:45},
    {Id:3, Name:"a5",NumStudents:50}
  ];
  getClasses():Class[]{
    return this.classes;
  }
  addClasses(class1:Class){
    this.classes.push(class1);
  }
}
