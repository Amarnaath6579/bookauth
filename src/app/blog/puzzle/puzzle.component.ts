import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-puzzle',
  templateUrl: './puzzle.component.html',
  styleUrls: ['./puzzle.component.css']
})
export class PuzzleComponent implements OnInit {
  loginForms:FormGroup | any;

  constructor(private _auth: AuthService) { }

  ngOnInit(): void {
    this.loginForms = new FormGroup({
      'email':new FormControl(null,[Validators.email,Validators.required]),
      'password':new FormControl(null,[Validators.required])
    })
  }


  OnLogin(){
  const email = this.loginForms.get('email').value;
  const password = this.loginForms.get('password').value;
  this._auth.LoginUser(email,password);
  }
}
