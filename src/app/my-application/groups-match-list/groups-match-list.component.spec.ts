import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupsMatchListComponent } from './groups-match-list.component';

describe('GroupsMatchListComponent', () => {
  let component: GroupsMatchListComponent;
  let fixture: ComponentFixture<GroupsMatchListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupsMatchListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupsMatchListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
