import { Component, OnInit } from '@angular/core';
import { User } from '../../interface/user';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user: User = {} as User;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  signUp(): boolean{
    this.authService.signUp(this.user)
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
