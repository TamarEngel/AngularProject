import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StudentListComponent } from '../components/student-list/student-list.component';
import { TemplateDrivenFormComponent } from "../components/template-driven-form/template-driven-form.component";
import { TextToIconPipe } from "../pipes/text-to-icon.pipe";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [StudentListComponent, TemplateDrivenFormComponent, TextToIconPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tamar-engel';
  currentHour() {
    let currenTime = new Date()
    if (currenTime.getHours() > 6 && currenTime.getHours() < 12)
      return "good morning"
    if (currenTime.getHours() < 18)
      return "good aftertoon"
    return "good night"
  }
}
