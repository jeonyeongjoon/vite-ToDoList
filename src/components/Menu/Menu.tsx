import style from './style.module.scss';
import bind from '../../styles/cx';
import { useFilterStore } from '../../store';

const cx = bind(style);

function Menu() {
  const { filter, selectFilter } = useFilterStore();

  const handleFilterButton = () => {
    selectFilter();
  };

  return (
    <div className={cx(style.menuWrapper)}>
      <div className={cx(style.menuWrapper)}>
        <div className={cx(style.menuContent)}>
          <p>Completed</p>
          <div
            className={cx({ [style.filterButton]: filter })}
            onClick={handleFilterButton}
          />
        </div>
      </div>
    </div>
  );
}

export default Menu;
