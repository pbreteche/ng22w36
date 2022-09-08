import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { TitleComponent } from './title/title.component';
import { ContactCreateFormComponent } from './contact-create-form/contact-create-form.component';
import { ContactCreateReactiveFormComponent } from './contact-create-reactive-form/contact-create-reactive-form.component';
import { EvenLengthDirective } from './even-length.directive';
import { DivisibleByLengthDirective } from './divisible-by-length.directive';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    ContactDetailComponent,
    ContactListComponent,
    TitleComponent,
    ContactCreateFormComponent,
    ContactCreateReactiveFormComponent,
    EvenLengthDirective,
    DivisibleByLengthDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: '', component: ContactListComponent},
      {path: 'contact/nouveau', component: ContactCreateFormComponent},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
