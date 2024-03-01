import { Component } from '@angular/core';
import { WishItem } from '../shared/models/wishitem';
import events from '../shared/services/EventService';

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

  constructor() { 
    events.listen('removeWish', (wish: any) => {

      console.log(wish);
    });
  }

  filter: any;
}
