import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalNewTodoComponent } from './modal-new-todo.component';

describe('ModalNewTodoComponent', () => {
  let component: ModalNewTodoComponent;
  let fixture: ComponentFixture<ModalNewTodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalNewTodoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalNewTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
