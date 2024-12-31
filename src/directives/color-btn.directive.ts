import { Directive, ElementRef, Input, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appColorBtn]',
  standalone: true
})
export class ColorBtnDirective {

  @Input() courseType: number=0;
  constructor(private el: ElementRef) { }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['courseType']) {
      this.setColor();
    }
  }
  private setColor() {
    let color: string;

    switch (this.courseType) {
      case 1:
        color = 'green';
        break;
      case 2:
        color = '#00bcd4';
        break;
      case 3:
        color = 'lightblue';
        break;
      default:
        color = 'gray';
    }
    this.el.nativeElement.style.backgroundColor = color;
  }

}
