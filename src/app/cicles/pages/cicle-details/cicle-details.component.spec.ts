import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CicleDetailsComponent } from './cicle-details.component';

describe('CicleDetailsComponent', () => {
  let component: CicleDetailsComponent;
  let fixture: ComponentFixture<CicleDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CicleDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CicleDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
