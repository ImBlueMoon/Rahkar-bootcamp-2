import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransActionsComponent } from './trans-actions.component';

describe('TransActionsComponent', () => {
  let component: TransActionsComponent;
  let fixture: ComponentFixture<TransActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransActionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TransActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
