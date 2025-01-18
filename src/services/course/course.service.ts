import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor() { }
  private courses: Course[] = [
    {
      IdCourse: 1,NameCourse: 'מבוא לחשבונאות',Subject: Subject.Accounting,semesters:5,
        Syllabus: [
        {
          name: "מתמטיקה ליניארית",
          children: [
            { name: "מתמטיקה" },
            { name: "אלגברה" }
          ]
        },
        { name: "דידקטיקה" }
      ]
    },
    {
      IdCourse: 2,NameCourse: 'עקרונות תכנות מונחה עצמים',Subject: Subject.SoftwareEngineering,semesters:1,
      Syllabus: [
        {
          name: "יסודות C#",
          children: [
            { name: "תכנות מונחה עצמים" }
          ]
        }
      ]
    },
    {
      IdCourse: 3,NameCourse: 'עיצוב גרפי למתחילים',Subject: Subject.Graphics,semesters:2,
      Syllabus: [
        {
          name: "ארכיטקטורה",
          children: [
            { name: 'תבניות עיצוב' }
          ]
        }
      ]
    }
  ];
  

  getCourses(): Course[] {
    return this.courses;
  }
}

export enum Subject {
  Accounting = 'חשבונאות',
  SoftwareEngineering = 'הנדסת תוכנה',
  Graphics = 'גרפיקה'
}

export interface Course {
  IdCourse: number;
  NameCourse: string;
  Subject: Subject;
  semesters:number,
  Syllabus: CourseSyllabus[]
}

export interface CourseSyllabus {

  name: string,
  children?: CourseSyllabus[]

}

