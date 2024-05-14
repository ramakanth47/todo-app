import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  
  booksApi: string = 'http://localhost:3000/books';
  books: any;
  constructor(private http:HttpClient) {}
  bookId: any;
  bookTitle: any;
  bookPrice: any;

  ngOnInit(): void {
    this.getAllBooks()


  }
    getAllBooks(){
     this.http.get(this.booksApi).subscribe((res) => {
      this.books = res;
      console.log(this.books);
     })
  }
  
addBook() {
  let newBook = {
    "id": this.bookId,
    "title": this.bookTitle,
    "price": this.bookPrice

  }
  this.http.post(this.booksApi, newBook).subscribe((res) => {
    alert('new book added');
    this.getAllBooks();
  })

}
 

}
