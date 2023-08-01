import style from './style.module.scss';
import bind from '../../styles/cx';
import { useStore } from '../../store';
import React, { useState } from 'react';

const cx = bind(style);

function Input() {
  const [todoItem, setTodoItem] = useState<string>('');
  const addTodo = useStore((state) => state.addTodos);

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTodoItem(event.target.value);
  };

  const handleEnterForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addTodo(todoItem);
    setTodoItem('');
  };

  return (
    <form onSubmit={handleEnterForm} className={cx(style.submitInput)}>
      <input
        value={todoItem}
        onChange={handleChangeInput}
        type="text"
        placeholder="오늘의 To Do를 입력해주세요!"
      />
    </form>
  );
}

export default Input;
