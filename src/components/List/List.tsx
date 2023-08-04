import style from './style.module.scss';
import bind from '../../styles/cx';
import { useStore, useFilterStore } from '../../store';
import DropDown from '../DropDown/DropDown';
import { useState } from 'react';
import SubInput from '../Input/SubInput';

const cx = bind(style);

function List() {
  const [isInModifyMode, setIsInModifyMode] = useState<boolean>(false);

  const { togglefilter } = useFilterStore();
  const { todos, toggleTodo, deleteTodo } = useStore();
  const [selectedItemId, setSelectedItemId] = useState<number | null>(null);

  const toggleFilterTodos = togglefilter
    ? todos.filter((item) => item.check === true)
    : todos;

  return (
    <div className={cx(style.List)}>
      {toggleFilterTodos.map((item) => (
        <div key={item.itemId} className={cx(style.item)}>
          <div
            className={cx(style.itemContent, {
              [style.done]: item.check,
            })}
          >
            <div
              className={cx(style.check)}
              onClick={() => toggleTodo(item.itemId)}
            >
              <div className={cx(style.checkBox)} />
            </div>
            {isInModifyMode && selectedItemId === item.itemId ? (
              <SubInput
                itemId={selectedItemId}
                setModifyState={setIsInModifyMode}
              />
            ) : (
              <p>{item.text}</p>
            )}
          </div>
          <DropDown
            onMenuClick={() => setSelectedItemId(item.itemId)}
            onDeleteTodoItem={() => deleteTodo(item.itemId)}
            setIsInModifyMode={setIsInModifyMode}
          />
        </div>
      ))}
    </div>
  );
}

export default List;
