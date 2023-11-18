import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Box003Component } from './box-003.component';

describe('Box003Component', () => {
  let component: Box003Component;
  let fixture: ComponentFixture<Box003Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Box003Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Box003Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
