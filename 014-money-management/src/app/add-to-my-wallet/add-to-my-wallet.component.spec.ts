import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddToMyWalletComponent } from './add-to-my-wallet.component';

describe('AddToMyWalletComponent', () => {
  let component: AddToMyWalletComponent;
  let fixture: ComponentFixture<AddToMyWalletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddToMyWalletComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddToMyWalletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
