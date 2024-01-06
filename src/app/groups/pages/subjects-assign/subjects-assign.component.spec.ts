import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectsAssignComponent } from './subjects-assign.component';

describe('SubjectsAssignComponent', () => {
  let component: SubjectsAssignComponent;
  let fixture: ComponentFixture<SubjectsAssignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubjectsAssignComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SubjectsAssignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
