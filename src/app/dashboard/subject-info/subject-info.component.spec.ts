import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectInfoComponent } from './subject-info.component';

describe('SubjectInfoComponent', () => {
  let component: SubjectInfoComponent;
  let fixture: ComponentFixture<SubjectInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubjectInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
