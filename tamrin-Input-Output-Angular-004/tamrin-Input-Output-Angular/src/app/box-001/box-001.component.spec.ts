import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Box001Component } from './box-001.component';

describe('Box001Component', () => {
  let component: Box001Component;
  let fixture: ComponentFixture<Box001Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Box001Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Box001Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
