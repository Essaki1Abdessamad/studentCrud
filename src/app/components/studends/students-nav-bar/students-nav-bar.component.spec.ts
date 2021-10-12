import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsNavBarComponent } from './students-nav-bar.component';

describe('StudentsNavBarComponent', () => {
  let component: StudentsNavBarComponent;
  let fixture: ComponentFixture<StudentsNavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentsNavBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentsNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
