import React from 'react';
import { useRecoilValue } from 'recoil';

import { TodoItem } from './TodoItem';
import { Todo } from '../store/TodoState';
import { FilteredTodoListState } from '../store/FilteredTodoListState';
import { TodoItemCreator } from './TodoItemCreator';
import { TodoListFilters } from './TodoListFilters';
import { TodoListStats } from './TodoListStats';

export const TodoList = () => {
  const todoList = useRecoilValue(FilteredTodoListState);

  return (
    <>
      <TodoItemCreator></TodoItemCreator>
      <TodoListFilters></TodoListFilters>
      <TodoListStats></TodoListStats>
      {todoList &&
        todoList.map((todo: Todo) => {
          return (
            <div key={todo.key}>
              <TodoItem item={todo}></TodoItem>
            </div>
          );
        })}
    </>
  );
};
