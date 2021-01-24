import { selector } from 'recoil';

import {
  Todo,
  TodoKeys,
  FilteredPattern,
  TodoListState,
  TodoListFilteredState,
} from './TodoState';

export const FilteredTodoListState = selector({
  key: TodoKeys.filteredTodoListState,
  get: ({ get }) => {
    // filterの種類
    const filter = get(TodoListFilteredState);

    // TodoList
    const list = get(TodoListState);

    switch (filter) {
      case FilteredPattern.UnCompleted:
        return list.filter((item: Todo) => !item.isComplete);
      case FilteredPattern.Completed:
        return list.filter((item: Todo) => item.isComplete);
      default:
        return list;
    }
  },
});
