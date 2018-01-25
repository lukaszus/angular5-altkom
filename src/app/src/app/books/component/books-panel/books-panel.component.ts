import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../../model/book.model';

@Component({
  selector: 'app-books-panel',
  templateUrl: './books-panel.component.html',
  styleUrls: ['./books-panel.component.css']
})
export class BooksPanelComponent {

  editedBook = null;
  selectedBook = null // {}

  @Input()
  books: Book[]

  select(book) {
    //console.log(book);
    this.selectedBook = book;
    this.editedBook = Object.assign({}, book); //tworzenie kopii
  }

  cancel() {
    this.selectedBook = null;
    this.editedBook = null;
  }

  save(book: Book) {
    Object.assign(this.selectedBook, book);
    this.cancel();
  }

}
