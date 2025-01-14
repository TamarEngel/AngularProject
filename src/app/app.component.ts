import { Component } from '@angular/core'
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { TextToIconPipe } from "../pipes/text-to-icon.pipe";
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,TextToIconPipe,RouterOutlet,RouterLink, RouterLinkActive,HttpClientModule],
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
