import { Component, OnInit } from '@angular/core';

@Component({
  selector   : 'app-three-extra',
  templateUrl: './three.component.html',
  styleUrls  : ['./three.component.css'],
})
export class ThreeComponent implements OnInit {
  att1     = 'text-success';
  hasError = true;

  public messageClasses = {
    'text-success': !this.hasError,
    'text-danger' : this.hasError,
    'text-special': !this.hasError,
  };

  constructor() {}

  ngOnInit(): void {}
}
