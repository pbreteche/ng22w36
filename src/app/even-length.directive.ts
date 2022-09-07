import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';
import { Validators } from './validators';

@Directive({
  selector: '[appEvenLength]',
  providers: [{provide: NG_VALIDATORS, useExisting: EvenLengthDirective, multi: true}]
})
export class EvenLengthDirective implements Validator {

  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    return Validators.evenLength(control);
  }
}
