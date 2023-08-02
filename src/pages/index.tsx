import style from '../styles/pages/style.module.scss';
import bind from '../styles/cx';
import MainInput from '../components/Input/MainInput';
import List from '../components/List/List';
import Menu from '../components/Menu/Menu';

const cx = bind(style);

function Main() {
  return (
    <div className={cx(style.Wrapper)}>
      <h1>To Do List</h1>
      <MainInput />
      <Menu />
      <List />
    </div>
  );
}

export default Main;
