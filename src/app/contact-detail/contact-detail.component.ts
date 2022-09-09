import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from '../model/contact';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.scss']
})
export class ContactDetailComponent implements OnInit{
  contact?: Contact|undefined

  constructor(
    private route: ActivatedRoute,
    private router: Router
    ) {}

  ngOnInit(): void {
    this.route.data.subscribe(({contact}) => {
      if (!contact) {
        this.router.navigate([''])
      }
      this.contact = contact;
    })
  }

  titleClasses() {
    return {
      'has-first-name': this.contact?.firstName,
      completed: this.contact?.firstName && this.contact.lastName
    }
  }
}
