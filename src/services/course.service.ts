import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor() { }
  private courses: Course[] = [
    { IdCourse: 1, NameCourse: 'מבוא לחשבונאות', Subject: Subject.Accounting },
    { IdCourse: 2, NameCourse: 'תכנות מונחה עצמים', Subject: Subject.SoftwareEngineering },
    { IdCourse: 3, NameCourse: 'עיצוב גרפי למתחילים', Subject: Subject.Graphics },
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
}

