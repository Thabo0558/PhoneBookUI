import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntryManagerComponent } from './entry-manager.component';

describe('EntryManagerComponent', () => {
  let component: EntryManagerComponent;
  let fixture: ComponentFixture<EntryManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntryManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntryManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
