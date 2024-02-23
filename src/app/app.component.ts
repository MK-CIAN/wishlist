import { Component } from '@angular/core';
import { WishItem } from '../shared/models/wishitem';

const filters = [
  (item : WishItem) => item,
  (item : WishItem) => !item.isComplete,
  (item : WishItem) => item.isComplete
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  items : WishItem[] = [
    new WishItem('To learn Angular'),
    new WishItem('Get Coffee', true),
    new WishItem('Go for a run')
  ];

  listFilter : any = '0';

  newWishText = '';

  title = 'wishlist';

  get visibleItems() : WishItem[] {
    return this.items.filter(filters[this.listFilter]);
  }

  addNewWish() {
    //Adding the new wish to items array
    //Clear text box
    this.items.push(new WishItem(this.newWishText));
    this.newWishText = '';
  }

}
