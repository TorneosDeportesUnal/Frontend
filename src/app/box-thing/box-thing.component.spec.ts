import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxThingComponent } from './box-thing.component';

describe('BoxThingComponent', () => {
  let component: BoxThingComponent;
  let fixture: ComponentFixture<BoxThingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoxThingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxThingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
