import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ContactBufferService } from '../contact-buffer.service';
import { Contact } from '../model/contact';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.scss']
})
export class ContactDetailComponent implements OnInit{
  contact?: Promise<Contact|undefined>

  constructor(
    private route: ActivatedRoute,
    private buffer: ContactBufferService
    ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const idParam = params.get('id')      
      if (idParam != null) {
        this.contact = this.buffer.find(+idParam)
      }
    })
  }
}
