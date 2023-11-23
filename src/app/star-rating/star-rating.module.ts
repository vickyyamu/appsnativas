import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class StarRatingModule { }
import { Component, Input, EventEmitter ,Output} from "@angular/core";

@Component({
  selector: "rating",
  templateUrl: "rating.html"
})
export class RatingComponent {
  @Input() rating: number ;

  @Output() ratingChange: EventEmitter<number> = new EventEmitter();;

  constructor() {}

  rate(index: number) {
      // function used to change the value of our rating 
      // triggered when user, clicks a star to change the rating
   }

  getColor(index: number) {
      /* function to return the color of a star based on what
       index it is. All stars greater than the index are assigned
       a grey color , while those equal or less than the rating are
       assigned a color depending on the rating. Using the following criteria:
    
            1-2 stars: red
            3 stars  : yellow
            4-5 stars: green 
      */
    }

  isAboveRating(index: number): boolean {
    // returns whether or not the selected index is above ,the current rating
    // function is called from the getColor function.
  }
}