import React from 'react';
import { useRecoilState } from 'recoil';

import { TodoListFilteredState } from '../store/TodoState';

export const TodoListFilters = () => {
  const [filter, setFilter] = useRecoilState(TodoListFilteredState);

  const handleChangeFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(e.target.value);
    setFilter(e.target.value);
  };

  return (
    <>
      Filters:
      <select value={filter} onChange={handleChangeFilter}>
        <option value="Show All">All</option>
        <option value="UnCompleted">UnComplete</option>
        <option value="Completed">Complete</option>
      </select>
    </>
  );
};
