import { Pipe, PipeTransform } from '@angular/core';
import { transliterate } from 'transliteration';

@Pipe({
  name: 'transliterate'
})
export class TransliterationPipe implements PipeTransform {

  transform(value: string, ignore?: string[]): unknown {
    return transliterate(value, {ignore: ignore});
  }

}
