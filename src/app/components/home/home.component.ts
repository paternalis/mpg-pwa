import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  private store: Store<any>;

  constructor(store: Store<any>) {
      this.store = store;
  }

  ngOnInit() {
      this.store.dispatch({
        type: 'ADD_TRANSACTION',
        payload: 8
      })
  }

  getMainReducer = () => {
    return this.store.select(s => s.mainReducer);
  }

  addAmount = () => {
    this.store.dispatch({
      type: 'ADD_TRANSACTION',
      payload: 1
    })
  }
}
