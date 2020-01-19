import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepoNavbarComponent } from './repo-navbar.component';

describe('RepoNavbarComponent', () => {
  let component: RepoNavbarComponent;
  let fixture: ComponentFixture<RepoNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepoNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepoNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});