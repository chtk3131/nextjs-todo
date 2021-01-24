import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { Todo, TodoListState } from '../store/TodoState';

let id: number = 0;
const getId = () => {
  return id++;
};

export const TodoItemCreator = () => {
  const [inputText, setInputText] = useState('');

  const setTodo = useSetRecoilState(TodoListState);

  const handleAdd = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setTodo((oldTodoList: Todo[]) => [
      ...oldTodoList,
      {
        key: getId(),
        text: inputText,
        isComplete: false,
      },
    ]);

    //入力欄をクリア
    setInputText('');
  };

  const handleInputChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={inputText}
        onChange={handleInputChanged}
      ></input>
      <button type="button" onClick={handleAdd}>
        追加
      </button>
    </div>
  );
};
