import style from './style.module.scss';
import bind from '../../styles/cx';
import { useStore } from '../../store';
import { useState } from 'react';
import type { Dispatch, SetStateAction } from 'react';

interface Props {
  itemId: number;
  setModifyState: Dispatch<SetStateAction<boolean>>;
}

const cx = bind(style);

function SubInput({ itemId, setModifyState }: Props) {
  const [modifyTodoItem, setModifyTodoItem] = useState<string>('');
  const modifyTodo = useStore((state) => state.modifyTodo);

  const handleChageModifyInput = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setModifyTodoItem(event.target.value);
  };

  const handleEnterModifyForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (modifyTodoItem === '') {
      alert('내용을 입력해주세요!');
    } else {
      modifyTodo(modifyTodoItem, itemId);
      setModifyState(false);
    }
  };

  return (
    <form onSubmit={handleEnterModifyForm}>
      <input
        className={cx(style.submitModifyInput)}
        value={modifyTodoItem}
        onChange={handleChageModifyInput}
        type="text"
      />
    </form>
  );
}

export default SubInput;
