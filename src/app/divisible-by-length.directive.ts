import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';
import { Validators } from './validators';

@Directive({
  selector: '[appDivisibleByLength]',
  providers: [{provide: NG_VALIDATORS, useExisting: DivisibleByLengthDirective, multi: true}]
})
export class DivisibleByLengthDirective implements Validator {
  @Input('appDivisibleByLength') divisor: string|number = 1

  validate(control: AbstractControl): ValidationErrors | null {
    return Validators.divisibleByLength(+this.divisor)(control)
  }
}
