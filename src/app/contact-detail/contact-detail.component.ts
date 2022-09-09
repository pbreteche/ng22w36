import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
    ) {}

  ngOnInit(): void {
    this.route.data.subscribe(({contact}) => {
      this.contact = contact;
    })
  }
}
