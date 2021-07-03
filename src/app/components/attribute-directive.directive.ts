import { Directive, ElementRef, Renderer2, OnInit, HostListener } from '@angular/core';

@Directive({
  selector: '[appAttributeDirective]'
})
export class AttributeDirectiveDirective implements OnInit {

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(){
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue')
  }

  @HostListener('mouseenter') mouseover(){
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'green')
  }

  @HostListener('mouseleave') mouseleave(){
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue')
  }

}
