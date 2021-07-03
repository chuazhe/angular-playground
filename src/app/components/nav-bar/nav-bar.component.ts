import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  @Output() public childEvent = new EventEmitter();


  url = "";
  constructor() { }

  ngOnInit(): void {
  }

  goToHome(){
    this.childEvent.emit("home");
  }

  goToSeven(){
    this.childEvent.emit("seven");
  }

  goToEight(){
    this.childEvent.emit("eight");
  }

  goToRecipe(){
    this.childEvent.emit("recipe");
  }

  goToReactive(){
    this.childEvent.emit("reactive");
  }

  goToTemplate(){
    this.childEvent.emit("template");
  }

}
