import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupsTeamListComponent } from './groups-team-list.component';

describe('GroupsTeamListComponent', () => {
  let component: GroupsTeamListComponent;
  let fixture: ComponentFixture<GroupsTeamListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupsTeamListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupsTeamListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
