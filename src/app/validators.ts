import { FormControl, ValidationErrors } from "@angular/forms";

export class Validators {
    static evenLength(control: FormControl): ValidationErrors | null {
        if (!control.value || !control.value.length) {
            return null
        }

        if (control.value.length % 2) {
            return { parityLength: { value: control.value, actualLength: control.value.length } }
        }

        return null
    }
}
