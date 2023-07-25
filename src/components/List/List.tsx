import style from './style.module.scss';
import bind from '../../styles/cx';
import { useStore } from '../../store';

const cx = bind(style);

function List() {
  const { ToDo, setRemoveTodo } = useStore();

  const handleRemoveTodo = (key: number) => {
    setRemoveTodo(key);
  };

  return (
    <div className={cx(style.List)}>
      {ToDo.map((item) => (
        <div key={item.key} className={cx(style.item)}>
          <div
            className={cx(style.check)}
            onClick={() => handleRemoveTodo(item.key)}
          >
            ✔
          </div>
          <p>{item.text}</p>
        </div>
      ))}
    </div>
  );
}

export default List;
