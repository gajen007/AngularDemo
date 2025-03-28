import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input() appHighlight = '';
  
  constructor(private el:ElementRef) { }

  @HostListener('mouseenter') onMouseEnter(){
    this.hightlight(this.appHighlight||'yellow ')
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.hightlight('')
  }

  private hightlight(color:string){
    this.el.nativeElement.style.backgroundColor = color;
  }

}
