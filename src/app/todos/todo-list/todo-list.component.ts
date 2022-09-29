import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import { Todo } from '../models/todo.model';
import { listar } from '../todo.actions';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  constructor(private store: Store<AppState>) {}
  listTodo = [];

  ngOnInit(): void {
    this.store.dispatch(listar());
    this.store.select('todos').subscribe((todos: any) => {
      this.listTodo = todos;
    });
  }
}
