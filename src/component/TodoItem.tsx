import React from 'react';
import { useRecoilState } from 'recoil';

import { Todo, TodoListState } from '../store/TodoState';

type Props = {
  item: Todo;
};

export const TodoItem: React.FC<Props> = ({ item }) => {
  const [todoList, setTodoList] = useRecoilState(TodoListState);

  const handleCheckChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // これ入れるとだめっぽい
    // e.preventDefault();

    //チェックを入れ替える
    const newTodoList = todoList.map((todo: Todo) => {
      if (todo.key === item.key) {
        return {
          ...item,
          isComplete: !todo.isComplete,
        };
      }
      return todo;
    });
    setTodoList([...newTodoList]);
  };

  const handleDeleteClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const newTodoList = todoList.filter((todo: Todo) => {
      if (item.key !== todo.key) {
        return {
          ...item,
        };
      }
    });

    setTodoList([...newTodoList]);
  };

  return (
    <>
      <input type="text" value={item.text} readOnly={true}></input>
      <input
        type="checkbox"
        checked={item.isComplete}
        onChange={handleCheckChange}
      ></input>
      <button type="button" onClick={handleDeleteClick}>
        削除
      </button>
    </>
  );
};
