import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { AuthService } from '../../services/auth/auth.service';
import { ActivatedRoute } from '@angular/router';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent implements OnInit {
  emptyUser: string | undefined;

  currentUser?: User | null;

  constructor(private activatedRoute: ActivatedRoute, private authService: AuthService) { }
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      const id = params.get('userid');
      if (id) {
        let ID = +id
        this.currentUser = this.authService.getUserByID(ID);
        if (!this.currentUser) {
          this.emptyUser = "שגיאה 404"
        }
      }
      else {
        this.emptyUser = "שגיאה 404"
      }
    })
  }
}
