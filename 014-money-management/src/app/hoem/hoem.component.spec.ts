import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoemComponent } from './hoem.component';

describe('HoemComponent', () => {
  let component: HoemComponent;
  let fixture: ComponentFixture<HoemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HoemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HoemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
