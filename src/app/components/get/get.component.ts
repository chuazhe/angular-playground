import { Component, OnInit } from '@angular/core';

@Component({
  selector   : 'app-get',
  templateUrl: './get.component.html',
  styleUrls  : ['./get.component.css'],
})
export class GetComponent implements OnInit {
  title = 'Uninitialized';

  constructor() {
    // Setup Dependency Injection
  }

  ngOnInit(): void {
    // Called after the constructor and called  after the first ngOnChanges()
  }
}
