import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HarrypoterComponent } from './harrypoter.component';

describe('HarrypoterComponent', () => {
  let component: HarrypoterComponent;
  let fixture: ComponentFixture<HarrypoterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HarrypoterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HarrypoterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
