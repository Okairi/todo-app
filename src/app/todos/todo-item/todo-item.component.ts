import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Todo } from '../models/todo.model';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
  @Input()
  todo!: Todo;
  chkCompletado!: FormControl;
  txtInput!: FormControl;

  @ViewChild('inputFisico') txtInputFiscio!: ElementRef;

  editando: boolean = false;

  constructor() {}

  ngOnInit(): void {
    this.chkCompletado = new FormControl(this.todo.completado);
    this.txtInput = new FormControl(this.todo.texto, Validators.required);
  }

  editar() {
    this.editando = true;

    setTimeout(() => {
      this.txtInputFiscio.nativeElement.select();
    }, 1);
  }

  terminarEdicion() {
    this.editando = false;
  }
}
