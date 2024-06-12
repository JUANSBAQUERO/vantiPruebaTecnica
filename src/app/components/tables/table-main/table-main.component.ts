import { Component, TemplateRef, ViewChild, OnInit } from '@angular/core';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { TodoService } from '../../../services/todos/todos-service';
import Swal from 'sweetalert2';
import { ModalNewTodoComponent } from "../../modals/modal-new-todo/modal-new-todo.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-table-main',
    standalone: true,
    templateUrl: './table-main.component.html',
    styleUrls: ['./table-main.component.scss'],
    imports: [NgxDatatableModule, ModalNewTodoComponent, CommonModule, FormsModule]
})

export class TableMainComponent implements OnInit {
  @ViewChild('acciones', { static: true }) acciones!: TemplateRef<any>;
  @ViewChild('completed', { static: true }) completed!: TemplateRef<any>;
  @ViewChild('userId', { static: true }) userId!: TemplateRef<any>;
  @ViewChild('title', { static: true }) title!: TemplateRef<any>;
  isOpen: boolean = false;
  originalRows: { userId: number, title: string, completed: boolean }[] = [];
  rows: { userId: number, title: string, completed: boolean; isEditing?: boolean }[] = [];
  columns: { prop: string; name: string; sortable: boolean; cellTemplate?: TemplateRef<any> }[] = [];  
  isEditable: any = {};
  isOverlay: boolean = false;

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.todoService.list().then((result) => {
      if (!result.includes("Error")) {
        this.originalRows = result;
        this.rows = [...result];

        this.columns = [
          { prop: 'userId', name: 'ID Usuario', sortable: true, cellTemplate: this.userId},
          { prop: 'title', name: 'Título', sortable: true, cellTemplate: this.title},
          { prop: 'completed', name: 'Estado', sortable: true, cellTemplate: this.completed},
          { name: 'Acciones', sortable: false, prop: 'acciones', cellTemplate: this.acciones }
        ];
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: result
        })
      }
    }).catch((err: any) => {
      console.log('Error:', err);
    });
  }

  addRow(newRow: { userId: number; title: string; completed: boolean}) {
    this.rows = [...this.rows, newRow];
    this.originalRows = [...this.rows];
  }

  save(row: any, rowIndex: string){
    this.isEditable[rowIndex] = false;
  }

  cancelEdit(row: any, rowIndex: number) {
    row.isEditing = false;
    this.isEditable[rowIndex] = false;
  }

  deleteRow(row: any) {
    Swal.fire({
      title: '¿Estás seguro?',
      text: "¡No podrás revertir esto!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: 'rgb(17 52 85)',
      cancelButtonColor: 'rgb(246 204 92)',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Sí, eliminarlo!'
    }).then((result) => {
      if (result.isConfirmed) {
        const index = this.rows.indexOf(row);
        if (index !== -1) {
          this.rows.splice(index, 1);
          this.rows = [...this.rows];
          Swal.fire(
            'Eliminado!',
            'La fila ha sido eliminada.',
            'success'
          );
        }
      }
    });
  }

  applyFilter(event: any) {
    const filterValue = (event.target as HTMLInputElement).value.toLowerCase();
    if (!filterValue) {
      this.rows = [...this.originalRows];
    } else {
      this.rows = this.originalRows.filter(row =>
        row.userId.toString().toLowerCase().includes(filterValue) ||
        row.title.toLowerCase().includes(filterValue) ||
        row.completed.toString().toLowerCase().includes(filterValue)
      );
    }
  }

  changeOverlay(){
    const modalElement = document.getElementById('createTodo');
    if (modalElement) {
      modalElement.setAttribute('data-bs-dismiss', '');
    }
    this.isOverlay = true;
  }

  overlayChanged(isOverlay: boolean) {
    this.isOverlay = isOverlay;
  }  
}