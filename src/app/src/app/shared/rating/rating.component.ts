import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  @Input()
  rating = 0;
  @Input()
  maxRating = 5;
  values: boolean[] = []

  constructor() { }

  ngOnInit() {
    for (let index = 1; index <= this.maxRating; index++) {
      this.values.push(index <= this.rating);
    }
  }

}
