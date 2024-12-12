import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'textToIcon',
  standalone: true
})
export class TextToIconPipe implements PipeTransform {

  transform(value: string): string {
    return value.split(' ').map(word => this.icons[word] || word).join(' ');

  }
  private icons:{[key:string]:string}={
    "smile": "😊",
    "cry_from_happines":"😂",
    "music":"🎶",
    "good":"👍",
    "kiss":"😘",
    "heart":"❤️",
    "cry":"😢",
    "star": '⭐',
  }


}
