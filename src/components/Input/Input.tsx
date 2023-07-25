import style from './style.module.scss';
import bind from '../../styles/cx';
import { useStore } from '../../store';
import React, { useState } from 'react';

const cx = bind(style);

function Input() {
  const [todo, setTodo] = useState<string>('');
  const Create = useStore((state) => state.setCreateToDo);

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };

  const onEnterForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    Create(todo);
    setTodo('');
  };

  return (
    <form onSubmit={onEnterForm} className={cx(style.submitInput)}>
      <input
        value={todo}
        onChange={onChangeInput}
        type="text"
        placeholder="오늘의 To Do를 입력해주세요!"
      />
    </form>
  );
}

export default Input;
