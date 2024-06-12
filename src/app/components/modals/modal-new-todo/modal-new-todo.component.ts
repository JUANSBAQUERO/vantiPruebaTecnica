import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal-new-todo',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './modal-new-todo.component.html',
  styleUrl: './modal-new-todo.component.scss'
})

export class ModalNewTodoComponent {
  @Output() saveNewRow: EventEmitter<{ userId: number; title: string; completed: boolean }> = new EventEmitter();
  @Output() overlayChanged: EventEmitter<boolean> = new EventEmitter();
  @Input() isOverlay: boolean = false;
  userId: number = 0;
  title: string = '';
  completed: boolean = false;
  message: boolean = false;

  onSaveNewRow() {
    if (this.userId === 0 || !this.title) {
      this.message = true;
      return;
    } else {
      this.message = false;
    }

    this.saveNewRow.emit({ userId: this.userId, title: this.title, completed: this.completed });

    const modalElement = document.getElementById('creatTodo');
    if (modalElement) {
      modalElement.classList.remove('show');
      modalElement.setAttribute('aria-modal', 'false');
    }

    this.isOverlay = false;
    this.overlayChanged.emit(this.isOverlay);
    this.userId = 0;
    this.title = '';
    this.completed = false;
  }

  changeOverlay(){
    this.isOverlay = false;
    this.overlayChanged.emit(this.isOverlay);
  }
}
