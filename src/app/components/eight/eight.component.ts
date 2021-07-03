import { Component, OnInit } from "@angular/core";
import { ItemService } from "src/app/service/item/item.service";

@Component({
  selector   : "app-eight",
  templateUrl: "./eight.component.html",
  styleUrls  : ["./eight.component.css"],
})
export class EightComponent implements OnInit {
  items;
  errorMsg;

  constructor(private _itemService: ItemService) {}

  ngOnInit(): void {
    this._itemService.getItems().subscribe(
      (data2) => (this.items = data2),
      (error) => (this.errorMsg = error)
    );
  }
}
