import { Component, OnInit } from "@angular/core";

@Component({
  selector   : "app-four",
  templateUrl: "./four.component.html",
  styleUrls  : ["./four.component.css"],
})
export class FourComponent implements OnInit {
  hasError       = true;
  highlightColor = "yellow";
  text           = "";

  styleOne = {
    color    : "blue",
    fontStyle: "italic",
  };

  constructor() {}

  ngOnInit(): void {}

  onClick() {
    this.text = "Clicked";
    window.alert("Clicked");
  }
}
