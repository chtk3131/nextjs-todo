import { selector } from 'recoil';

import { Todo, TodoKeys, TodoListState } from './TodoState';

export const TodoListStatsState = selector({
  key: TodoKeys.todoListStatsState,
  get: ({ get }) => {
    const allList = get(TodoListState);
    const allListCount = allList.length;
    const unCompleteCount = allList.filter((item: Todo) => !item.isComplete)
      .length;
    const completeCount = allListCount - unCompleteCount;
    const completeRatio = allListCount === 0 ? 0 : completeCount / allListCount;

    return {
      allListCount,
      unCompleteCount,
      completeCount,
      completeRatio,
    };
  },
});
