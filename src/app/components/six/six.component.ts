import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-six',
  templateUrl: './six.component.html',
  styleUrls: ['./six.component.css']
})
export class SixComponent implements OnInit {

  items = [1,2];

  constructor() { }

  ngOnInit(): void {
  }

}
