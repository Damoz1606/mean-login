import { Component, OnInit } from '@angular/core';
import { User } from '../../interface/user';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  user: User = {} as User;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  signIn(): boolean{
    this.authService.signIn(this.user)
    .subscribe(
      res => {
        localStorage.setItem('token', res.token);
        this.router.navigate(["/private"]);
      },
      error => {
        console.log(error);
      }
    );
    return false;
  }

}
