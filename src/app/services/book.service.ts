import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../blog/auth.service';
@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private _httpClient: HttpClient,private _auth: AuthService) { }
  //And also an observable
  saveBook(books: any[]){
    const tk = this._auth.getToken();
    return this._httpClient.post("https://http-b9286-default-rtdb.firebaseio.com/data.json?auth=" +tk, books)
  }
  getBook():Observable<any>{
    const tk = this._auth.getToken();
    return this._httpClient.get("https://http-b9286-default-rtdb.firebaseio.com/data.json?auth=" + tk)
  }
}
