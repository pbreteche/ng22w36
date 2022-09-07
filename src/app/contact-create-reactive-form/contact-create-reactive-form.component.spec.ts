import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactCreateReactiveFormComponent } from './contact-create-reactive-form.component';

describe('ContactCreateReactiveFormComponent', () => {
  let component: ContactCreateReactiveFormComponent;
  let fixture: ComponentFixture<ContactCreateReactiveFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactCreateReactiveFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactCreateReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
