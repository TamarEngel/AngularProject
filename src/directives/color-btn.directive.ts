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
        color = 'lightblue';
        break;
      case 2:
        color = 'red';
        break;
      case 3:
        color = 'pink';
        break;
      default:
        color = 'gray';
    }
    this.el.nativeElement.style.backgroundColor = color;
  }

}
