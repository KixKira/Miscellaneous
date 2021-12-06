import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlighted]'
})
export class HighlightedDirective {

  constructor(private el: ElementRef) {
    //el.nativeElement.style.backgroundColor = "yellow";
  }

  @Input("appHighlighted") newColor:string;
  
  @HostListener('mouseenter') mouseIn(){
    this.highlight(this.newColor || 'blue');
  }

  @HostListener('mouseleave') mouseOut(){
    this.highlight(null);
  }

  private highlight(color: string){
    this.el.nativeElement.style.backgroundColor = color;
  }

}
