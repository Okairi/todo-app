import { createReducer, on } from '@ngrx/store';
import { crear, listar } from './todo.actions';
import { Todo } from './models/todo.model';

export const initialState: Todo[] = [new Todo('Conseguir una waifu xd')];

export const todoReducer = createReducer(
  initialState,
  on(crear, (state, { texto }) => [...state, new Todo(texto)]),
  on(listar, (state) => [...state])
);
