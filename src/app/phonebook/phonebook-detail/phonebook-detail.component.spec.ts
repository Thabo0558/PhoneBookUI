import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhonebookDetailComponent } from './phonebook-detail.component';

describe('PhonebookDetailComponent', () => {
  let component: PhonebookDetailComponent;
  let fixture: ComponentFixture<PhonebookDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhonebookDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhonebookDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
