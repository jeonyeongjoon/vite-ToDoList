import style from './style.module.scss';
import bind from '../../styles/cx';
import { useStore, useFilterStore } from '../../store';
import DropDown from '../DropDown/DropDown';
import { useState } from 'react';

const cx = bind(style);

function List() {
  const [modifyState, setModifyState] = useState<boolean>(false);
  const { filter } = useFilterStore();
  const { todos, checkTodos, deleteTodos } = useStore();

  const handleCheckTodo = (key: number) => {
    checkTodos(key);
  };

  const handleDeleteTodo = (key: number) => {
    deleteTodos(key);
  };

  return (
    <div className={cx(style.List)}>
      {filter
        ? todos
            .filter((item) => item.check === true)
            .map((item) => (
              <div key={item.key} className={cx(style.item)}>
                <div
                  className={cx(style.itemContent, {
                    [style.true]: item.check,
                  })}
                >
                  <div
                    className={cx(style.check)}
                    onClick={() => handleCheckTodo(item.key)}
                  >
                    <div className={cx(style.checkBox)} />
                  </div>
                  <p>{item.text}</p>
                </div>
              </div>
            ))
        : todos.map((item) => (
            <div key={item.key} className={cx(style.item)}>
              <div
                className={cx(style.itemContent, {
                  [style.true]: item.check,
                })}
              >
                <div
                  className={cx(style.check)}
                  onClick={() => handleCheckTodo(item.key)}
                >
                  <div className={cx(style.checkBox)} />
                </div>
                <p>{item.text}</p>
              </div>
              <DropDown
                onDeleteFunc={() => handleDeleteTodo(item.key)}
                setModifyState={setModifyState}
              />
            </div>
          ))}
    </div>
  );
}

export default List;
