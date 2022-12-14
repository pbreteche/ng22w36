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
import { APP_CONFIG_TOKEN, APP_CONFIG_VALUE } from './config';
import { HighlightableDirective } from './highlightable.directive';
import { UnlessDirective } from './unless.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatExpansionModule } from '@angular/material/expansion'

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
    HighlightableDirective,
    UnlessDirective,
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
    ]),
    BrowserAnimationsModule,
    MatExpansionModule,
  ],
  providers: [
    /*
    ContactResolverService, // Le nom de la classe sert d'identifiant du service
                            // il sert aussi de mode d'instanciation
    // Permet d'instancier ??ventuellement une autre classe
    { provide: ContactResolverService, useClass: ContactResolverService},
    // Permet de r??utiliser un service d??j?? existant
    { provide: ContactResolverService, useExisting: ContactResolverService},
    // Permet d'utiliser une valeur (objet d??j?? instanci?? par exemple)
    { provide: ContactResolverService, useValue: 123},
    // Permet de d??finir comment fabriquer le service
    { provide: ContactResolverService, useFactory: () => new ContactResolverService()},
    { 
      provide: APP_CONFIG_TOKEN, useValue: APP_CONFIG_VALUE
    }
    */
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
