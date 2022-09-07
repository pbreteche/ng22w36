import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-create-reactive-form',
  templateUrl: './contact-create-reactive-form.component.html',
  styleUrls: ['./contact-create-reactive-form.component.scss']
})
export class ContactCreateReactiveFormComponent {
  form = new FormGroup({
    firstName: new FormControl('', [
      Validators.required,
      Validators.minLength(5)
    ]),
    lastName: new FormControl('', [
      Validators.required
    ]),
    email: new FormControl('', [
      Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)
    ]),
  })
}
