import { Component } from '@angular/core';
import { Book } from './books/model/book.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  books = [
    {
      id: 1,
      title: 'Angular in Action',
      authors: 'Jan Krowa',
      bestSeller: true,
      category: '#00ff00',
      rating: 5
    },
    {
      id: 2,
      title: 'ReactJS in Action',
      authors: 'Andrzej Koń, Aleksander Okoń',
      bestSeller: false,
      category: '#0000FF',
      rating: 3
    },
    {
      id: 3,
      title: 'Cokolwiek not in Action',
      authors: 'Jadwiga Owca',
      bestSeller: true,
      category: '#FF0040',
      rating: 1
    }
  ]

}
