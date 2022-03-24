import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css']
})
export class StoryComponent implements OnInit {
  registerForm: FormGroup | any;
 
  //service inject
  constructor(private _auth:AuthService) { }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      'email':new FormControl(null,[Validators.email,Validators.required]),
      'password':new FormControl(null,[Validators.required])
    })
  }
  onRegister(){
  const email = this.registerForm.get('email').value;
  
  const password = this.registerForm.get('password').value;
  this._auth.RegisterUser(email,password);
}
}


