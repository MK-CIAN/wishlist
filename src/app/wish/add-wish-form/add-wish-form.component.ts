import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { WishItem } from '../../../shared/models/wishitem';

@Component({
  selector: 'app-add-wish-form',
  templateUrl: './add-wish-form.component.html',
  styleUrl: './add-wish-form.component.css'
})
export class AddWishFormComponent implements OnInit{

  @Output() addWish = new EventEmitter<WishItem>();
  constructor() { }
  
  ngOnInit(): void {
  }

  newWishText = '';


  addNewWish() {
    //Adding the new wish to items array
    //Clear text box
    this.addWish.emit(new WishItem(this.newWishText));
    this.newWishText = '';
  }
}
