import { Injectable } from '@angular/core';
import { Teacher } from '../../models/teacher';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  constructor() { }
  private teachers:Teacher[]=[
    {Id:1, Name:"Rachel",Class:["ה1", "ו1"]},
    {Id:2, Name:"Dina",Class:["ה11", "ט5"]},
    {Id:3, Name:"Tova",Class:["ד3", "ו1", "י2"]}
  ];
  getTeachers():Teacher[]{
    return this.teachers;
  }
  addTeacher(teacher:Teacher){
    this.teachers.push(teacher);
  }
  updateTeacher(teacher:Teacher){
    const index=this.teachers.findIndex(t=> t.Id==teacher.Id)
    if(index !==-1){
      this.teachers[index]=teacher;
    }
  }
  deleteTeacher(teacher:Teacher){
    const index=this.teachers.findIndex(t=> t.Id==teacher.Id)
    const last=this.teachers.length-1
    if(index !==-1){
      this.teachers.splice(index, 1);
    }
  }
}
