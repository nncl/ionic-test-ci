import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  items = [];

  constructor() {}

  add(): void {
    this.items.push({});
  }

  remove(index: number) {
    this.items.splice(index, 1);
  }

}
