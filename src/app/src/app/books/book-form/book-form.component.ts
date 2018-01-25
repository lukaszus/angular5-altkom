import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Book } from '../model/book.model';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent {
  @Input()
  book: Book
  @Output()
  save = new EventEmitter();
  @Output()
  cancel = new EventEmitter();
}
