import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageRollerComponent } from './page-roller.component';

describe('PageRollerComponent', () => {
  let component: PageRollerComponent;
  let fixture: ComponentFixture<PageRollerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageRollerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageRollerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
