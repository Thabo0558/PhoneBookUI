import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhonebookEditorComponent } from './phonebook-editor.component';

describe('PhonebookEditorComponent', () => {
  let component: PhonebookEditorComponent;
  let fixture: ComponentFixture<PhonebookEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhonebookEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhonebookEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
