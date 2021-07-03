import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seven',
  templateUrl: './seven.component.html',
  styleUrls: ['./seven.component.css'],
})
export class SevenComponent implements OnInit {
  public count = 0;
  items = [];
  message;

  public person = {
    firstName: 'John',
    lastName: 'Smith',
  };

  public date = new Date();

  constructor() {}

  ngOnInit(): void {}

  addItem() {
    this.items.push('Tuna');
    this.count++;
    console.log(this.message);
  }

  reachFive() {
    let num = this.count;

    if (num >= 5) {
      return 'blue';
    }
    return 'none';
  }
}
