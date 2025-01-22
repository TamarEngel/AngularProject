import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { User } from '../../models/user'


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public isAuth: boolean = false;
  constructor(private router: Router) { }

  private users = [
    new User(1, "aaa"),
    new User(2, "bbb"),
    new User(3, "ccc"),
  ]
  getUserByID(id: number):User|null {
    return this.users.find(user => user.id === id) || null

  }

  getAllUsers(): User[] {
    return this.users;
  }

  signIn(id:number) {
    id=Number(id);
    if (this.getUserByID(id)) {      
      this.isAuth = true;
      this.router.navigate(['/dashboard']);
    }
  }
  signOut() {
    this.isAuth = false;
    this.router.navigate(['/signIn']);
  }
}
