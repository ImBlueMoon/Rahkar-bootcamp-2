import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Box002Component } from './box-002.component';

describe('Box002Component', () => {
  let component: Box002Component;
  let fixture: ComponentFixture<Box002Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Box002Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Box002Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
