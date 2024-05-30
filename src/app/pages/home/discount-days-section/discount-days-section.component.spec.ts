import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscountDaysSectionComponent } from './discount-days-section.component';

describe('DiscountDaysSectionComponent', () => {
  let component: DiscountDaysSectionComponent;
  let fixture: ComponentFixture<DiscountDaysSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiscountDaysSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DiscountDaysSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
