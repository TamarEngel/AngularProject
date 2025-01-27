import { Routes } from '@angular/router';
import { StudentListComponent } from '../components/student-list/student-list.component';
import { TemplateDrivenFormComponent } from '../components/template-driven-form/template-driven-form.component';
import { AppComponent } from './app.component';
import { MenuComponent } from '../components/menu/menu.component';
import { ReactiveFormClassComponent } from '../components/reactive-form-class/reactive-form-class.component';
import { AvailableCoursesComponent } from '../components/available-courses/available-courses.component';
import { TicketHttpComponent } from '../components/ticket-http/ticket-http.component';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { SignInComponent } from '../components/sign-in/sign-in.component';
import { authGuard } from '../guards/auth.guard';
import { UserDetailsComponent } from '../components/user-details/user-details.component';

export const routes: Routes = [
    { path: '', component:MenuComponent },
    { path: 'studentList', component:StudentListComponent},
    { path: 'teacherForm', component:TemplateDrivenFormComponent},
    { path: 'classForm', component:ReactiveFormClassComponent},
    { path: 'availableCourses', component:AvailableCoursesComponent},
    { path: 'ticket', component:TicketHttpComponent},
    { path: 'signIn', component:SignInComponent},
    { path: 'dashboard', component:DashboardComponent,canActivate:[authGuard]},
    {path: 'allUsers/:userid',component:UserDetailsComponent}
];
