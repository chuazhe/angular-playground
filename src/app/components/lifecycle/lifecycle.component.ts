import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges,
  OnInit,
  OnDestroy,
  ViewChild,
  ElementRef,
} from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css'],
})
export class LifecycleComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  @ViewChild('lifecycle') lifecycle: ElementRef;

  constructor() {
    console.log('constructor called');
  }

  ngOnInit(): void {
    console.log('ngOnInit called');
    console.log(this.lifecycle);
  }

  ngOnChanges() {
    console.log('ngOnChanges called');
  }

  ngDoCheck() {
    console.log('ngDoCheck called');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit called');
    console.log(this.lifecycle);
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked called');
    console.log(this.lifecycle);
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit called');
    console.log(this.lifecycle.nativeElement);
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked called');
    console.log(this.lifecycle);
  }

  ngOnDestroy() {
    console.log('ngOnDestroy called');
  }
}
