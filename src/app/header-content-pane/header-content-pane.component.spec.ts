import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderContentPaneComponent } from './header-content-pane.component';

describe('HeaderContentPaneComponent', () => {
  let component: HeaderContentPaneComponent;
  let fixture: ComponentFixture<HeaderContentPaneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderContentPaneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderContentPaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
