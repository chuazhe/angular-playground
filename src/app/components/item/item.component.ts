import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";
import { SevenComponent } from "../seven/seven.component";

@Component({
  selector   : "app-item",
  templateUrl: "./item.component.html",
  styleUrls  : ["./item.component.css"]
})
export class ItemComponent implements OnInit {
  // Assign without alias
  @Input() parentData;
  // Assign with alias
  @Input("parentData") count;

  @Output() public childEvent = new EventEmitter();

  status = false;
  constructor() {}

  ngOnInit(): void {}

  reachFive() {
    console.log("parent:" + this.parentData);
    console.log("count:" + this.count);

    this.childEvent.emit("Hello from child component");
    let num = this.count;

    if (num > 4) {
      this.status = true;
      return "blue";
    }
    return "none";
  }
}
