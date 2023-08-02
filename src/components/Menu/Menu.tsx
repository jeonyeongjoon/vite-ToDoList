import style from './style.module.scss';
import bind from '../../styles/cx';
import { useFilterStore, useStore } from '../../store';

const cx = bind(style);

function Menu() {
  const { filter, selectFilter } = useFilterStore();
  const { allDeleteTodos, todos } = useStore();

  const handleAllDeleteButton = () => {
    if (todos.length > 0) {
      alert('정말 전체 To Do를 삭제하시겠습니까?');
      allDeleteTodos();
    } else {
      alert('삭제할 To Do가 없습니다.');
    }
  };

  const handleFilterButton = () => {
    selectFilter();
  };

  return (
    <div className={cx(style.menuWrapper)}>
      <div className={cx(style.menuContent)}>
        <p onClick={handleAllDeleteButton} className={cx(style.deleteText)}>
          All To do Delete
        </p>
      </div>
      <div className={cx(style.menuContent)}>
        <p>Completed</p>
        <div
          className={cx({ [style.filterButton]: filter })}
          onClick={handleFilterButton}
        />
      </div>
    </div>
  );
}

export default Menu;
