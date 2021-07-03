import { Component, OnInit } from '@angular/core';

@Component({
  selector   : "app-five",
  templateUrl: "./five.component.html",
  styleUrls  : ["./five.component.css"],
})
export class FiveComponent implements OnInit {
  sample   = "Initialized";
  text     = "";
  Char     = "";
  userName = "";
  isReset  = false;
  status   = false;

  constructor() {}
 
  ngOnInit(): void {}

  updateText(event: any) {
    this.isReset = false;
    this.text    = event.target.value;
    this.Char    = event.data;
  }

  onReset() {
    if (this.userName.length == 0) {
      window.alert("userName is Empty!");
    } else {
      this.userName = "";
      this.isReset  = true;
    }
  }

  getColor() {
    if (this.userName.length == 0) {
      return "red";
    } else {
      return "green";
    }
  }
}
