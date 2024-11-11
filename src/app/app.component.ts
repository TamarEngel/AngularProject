import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StudentListComponent } from '../components/student-list/student-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [StudentListComponent],
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
