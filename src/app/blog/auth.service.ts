import { Injectable } from '@angular/core';
import firebase from "firebase";
import "firebase/auth";
@Injectable({
  providedIn: 'root'
})
export class AuthService {
currentToken: string | any;
  constructor() { }
  //register page

  RegisterUser(email:string,password:string){
    //To save first time in firebases
    firebase.auth().createUserWithEmailAndPassword(email,password)
    .then (resp =>{
      console.log(resp);
    })
    .catch(error =>{
      console.log(error);
    })

    }
//login page 
    LoginUser(email:string,password:string){
    //To save first time in firebases
    firebase.auth().signInWithEmailAndPassword(email,password)
    .then (resp =>{
      //calling the token
      this.getToken();
      console.log(resp);
    })
    .catch(error =>{
      console.log(error);
    })

    }
    //Get token
    getToken(){
      firebase.auth().currentUser?.getIdToken()
      .then(
        (token: string) => {
          this.currentToken = token
        }
      );
      return this.currentToken;
    }
  }
