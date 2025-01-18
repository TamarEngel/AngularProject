import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //public isAuth = new BehaviorSubject<boolean>(false);
  public isAuth: boolean = false;
  constructor(private router: Router) { }
  signIn() {
    this.isAuth = true;
    this.router.navigate(['/dashboard']);
  }
  signOut() {
    this.isAuth = false;
    this.router.navigate(['/signIn']);
  }
}
