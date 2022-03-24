import { Component, OnInit } from '@angular/core';
import firebase from "firebase/app";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'http';
  ngOnInit(){
    const firebaseConfig = {
      apiKey: "AIzaSyAHIyewdYH8g5lfiqSVwzvnzs34QWVa6Fs"
    };
    firebase.initializeApp(firebaseConfig);
  }
}
