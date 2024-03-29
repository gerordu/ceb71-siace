import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SemesterDetailsComponent } from './semester-details.component';

describe('SemesterDetailsComponent', () => {
  let component: SemesterDetailsComponent;
  let fixture: ComponentFixture<SemesterDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SemesterDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SemesterDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
