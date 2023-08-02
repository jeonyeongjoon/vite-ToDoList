import style from '../styles/pages/style.module.scss';
import bind from '../styles/cx';
import Input from '../components/Input/Input';
import List from '../components/List/List';
import Menu from '../components/Menu/Menu';

const cx = bind(style);

function Main() {
  return (
    <div className={cx(style.Wrapper)}>
      <h1>To Do List</h1>
      <Input />
      <Menu />
      <List />
    </div>
  );
}

export default Main;
