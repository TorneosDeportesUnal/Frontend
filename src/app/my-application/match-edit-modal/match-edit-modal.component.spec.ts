import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchEditModalComponent } from './match-edit-modal.component';

describe('MatchEditModalComponent', () => {
  let component: MatchEditModalComponent;
  let fixture: ComponentFixture<MatchEditModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchEditModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchEditModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
