import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtomywalletComponent } from './addtomywallet.component';

describe('AddtomywalletComponent', () => {
  let component: AddtomywalletComponent;
  let fixture: ComponentFixture<AddtomywalletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddtomywalletComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddtomywalletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
