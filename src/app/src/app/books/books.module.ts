import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookCardComponent } from './component/book-card/book-card.component';
import { BookFormComponent } from './book-form/book-form.component';
import { FormsModule } from '@angular/forms';
import { BooksPanelComponent } from './component/books-panel/books-panel.component';
import { SharedModule } from '../shared/shared.module'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    BookCardComponent,
    BookFormComponent,
    BooksPanelComponent
  ],
  exports: [
    BookCardComponent, //inaczej komponent będzie prywatny - dostępny tylko dla tego modułu
    BookFormComponent,
    BooksPanelComponent
  ]
})
export class BooksModule { }
