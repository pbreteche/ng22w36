import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export class Validators {
    static evenLength(control: AbstractControl): ValidationErrors | null {
        if (!control.value || !control.value.length) {
            return null
        }

        if (control.value.length % 2) {
            return { parityLength: { value: control.value, actualLength: control.value.length } }
        }

        return null
    }

    // La factory permet d'accepter un paramètre
    // La fonction Validator retourné peut l'exploiter car dans le scope enfant
    static divisibleByLength(divisor: number): ValidatorFn {
        return function(control: AbstractControl): ValidationErrors | null {
            if (!control.value) {
                return null
            }

            console.log(control.value.length % divisor);
            

            return control.value.length % divisor ? { divisibleByLength: {value: control.value, divisor: divisor } } : null
        }
    }
}
