import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BooksModule } from './books/books.module';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BooksModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
