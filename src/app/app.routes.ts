import { Routes } from '@angular/router';
import { StudentListComponent } from '../components/student-list/student-list.component';
import { TemplateDrivenFormComponent } from '../components/template-driven-form/template-driven-form.component';
import { AppComponent } from './app.component';
import { MenuComponent } from '../components/menu/menu.component';
import { ReactiveFormClassComponent } from '../components/reactive-form-class/reactive-form-class.component';

export const routes: Routes = [
    { path: '', component:MenuComponent },
    { path: 'studentList', component:StudentListComponent},
    { path: 'teacherForm', component:TemplateDrivenFormComponent},
    { path: 'classForm', component:ReactiveFormClassComponent},
];
