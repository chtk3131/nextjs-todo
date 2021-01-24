import { atom } from 'recoil';

export type Todo = {
  key: number;
  text: string;
  isComplete: boolean;
};

export enum TodoKeys {
  todoListState = 'todoListState',
  todoListFilteredState = 'todoListFilteredState',
  filteredTodoListState = 'filteredTodoListState',
  todoListStatsState = 'todoListStatsState',
}

export enum FilteredPattern {
  showAll = 'Show All',
  Completed = 'Completed',
  UnCompleted = 'UnCompleted',
}

export const TodoListState = atom<Todo[]>({
  key: TodoKeys.todoListState,
  default: [],
});

export const TodoListFilteredState = atom<string>({
  key: TodoKeys.todoListFilteredState,
  default: FilteredPattern.showAll,
});
