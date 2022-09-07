import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactBufferService } from '../contact-buffer.service';
import { Contact } from '../model/contact';

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

  constructor(private contactBuffer: ContactBufferService) {}

  get firstName() {
    return this.form.get('firstName')
  }

  get lastName() {
    return this.form.get('lastName')
  }

  get email() {
    return this.form.get('email')
  }

  save() {
    this.contactBuffer.push(this.form.value as Contact)
    this.form.reset()
  }
}
