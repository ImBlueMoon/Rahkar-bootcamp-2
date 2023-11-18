import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoTextcomponentComponent } from './todo-textcomponent.component';

describe('TodoTextcomponentComponent', () => {
  let component: TodoTextcomponentComponent;
  let fixture: ComponentFixture<TodoTextcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoTextcomponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TodoTextcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
