import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent {
  @Input()
  title?: Observable<string | undefined>;

  constructor() {

    //route.title.subscribe((title) => console.log(title))
  }
}
