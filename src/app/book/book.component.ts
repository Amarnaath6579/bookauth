import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  bookForm: FormGroup |any;
  myBooks:any = [];
  
  constructor(private _book: BookService) { }

  ngOnInit(): void {
    this.bookForm = new FormGroup({
      'bookid': new FormControl(null),
      'bookname': new FormControl(null),
      'author': new FormControl(null)
    });
  }
onPushBook(){
  const bookid = this.bookForm.get('bookid').value;
  const bookname = this.bookForm.get('bookname').value;
  const author = this.bookForm.get('author').value;
//Push into that array
this.myBooks.push({
  bookid: bookid,
  bookname: bookname,
  author: author
});
  }
  onSave(){
    this._book.saveBook(this.myBooks)
    .subscribe(sub => {
      console.log(sub);
    },
    error =>{
      console.error(error);
    })
  }
  onGet(){
    this._book.getBook()
    .subscribe((sub) => {
      console.log(sub);
    },
    (error) =>{
      console.error(error);
    });
  }
  
}
