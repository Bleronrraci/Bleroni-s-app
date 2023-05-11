import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appBgcolor]',
})
export class BgcolorDirective {
  constructor(private el: ElementRef) {}
  @HostListener('click') mouseclick() {
    this.el.nativeElement.style.color==='red'?this.el.nativeElement.style.color='':this.el.nativeElement.style.color = 'red';
    console.log('this.el.nativeElement.style.color', this.el.nativeElement.style.color)
  }

  @HostListener('dblclick') dblclick() {
    this.el.nativeElement.style.clolr = '';
  }
}
