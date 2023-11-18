import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListShowingComponent } from './todo-list-showing.component';

describe('TodoListShowingComponent', () => {
  let component: TodoListShowingComponent;
  let fixture: ComponentFixture<TodoListShowingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoListShowingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TodoListShowingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
