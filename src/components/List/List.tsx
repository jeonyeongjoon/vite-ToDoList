import style from './style.module.scss';
import bind from '../../styles/cx';
import { useStore, useFilterStore } from '../../store';
import Menu from '../Menu/Menu';

const cx = bind(style);

function List() {
  const { filter } = useFilterStore();
  const { todos, checkTodos, removeTodos } = useStore();

  const handleCheckTodo = (key: number) => {
    checkTodos(key);
  };

  const handleRemoveTodo = (key: number) => {
    removeTodos(key);
  };

  return (
    <div>
      <Menu />
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
                  <h1 onClick={() => handleRemoveTodo(item.key)}>X</h1>
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
                <h1 onClick={() => handleRemoveTodo(item.key)}>X</h1>
              </div>
            ))}
      </div>
    </div>
  );
}

export default List;
