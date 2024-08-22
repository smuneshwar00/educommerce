import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[highlight]',
  standalone: true
})
export class HighlightDirective {

  constructor(private el: ElementRef) { }

  @HostListener("mouseover") mouseover(){
    (this.el.nativeElement as HTMLElement).style.backgroundColor="red";
  } 

  @HostListener("mouseout") mouseout(){
    (this.el.nativeElement as HTMLElement).style.backgroundColor="";
  } 

}
