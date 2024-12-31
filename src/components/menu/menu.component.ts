import { Component } from '@angular/core';
import { TextToIconPipe } from "../../pipes/text-to-icon.pipe";

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [TextToIconPipe],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

}
