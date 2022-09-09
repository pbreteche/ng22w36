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
import { ContactResolverService } from './contact-resolver.service';
import { ContactTitleResolverService } from './contact-title-resolver.service';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';
import { TransliterationPipe } from './transliteration.pipe';

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
    PipeDemoComponent,
    TransliterationPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: '', component: ContactListComponent, title: 'Carnet d\'adresse'},
      {path: 'contact/nouveau', component: ContactCreateFormComponent, title: 'Nouveau contact'},
      {
        path: 'contact/detail/:id',
        component: ContactDetailComponent,
        title: ContactTitleResolverService,
        resolve: {contact: ContactResolverService}
      },
      {path: '**', redirectTo: ''}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
