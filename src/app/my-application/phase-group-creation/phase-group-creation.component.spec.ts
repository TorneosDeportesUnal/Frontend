import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhaseGroupCreationComponent } from './phase-group-creation.component';

describe('PhaseGroupCreationComponent', () => {
  let component: PhaseGroupCreationComponent;
  let fixture: ComponentFixture<PhaseGroupCreationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhaseGroupCreationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhaseGroupCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
