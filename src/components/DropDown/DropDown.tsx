import style from './style.module.scss';
import bind from '../../styles/cx';
import menuImg from '../../assets/menu.png';
import { Dispatch, SetStateAction } from 'react';

interface Props {
  setModifyState: Dispatch<SetStateAction<boolean>>;
  onDeleteFunc: () => void;
  onMenuClick: () => void;
}

const cx = bind(style);

function DropDown({ onDeleteFunc, setModifyState, onMenuClick }: Props) {
  return (
    <div className={cx(style.DropDownWrapper)}>
      <img onClick={() => onMenuClick()} src={menuImg} alt="" />
      <div className={cx(style.DropdownContent)}>
        <p onClick={() => setModifyState(true)}>수정</p>
        <p className={cx(style.deleteText)} onClick={onDeleteFunc}>
          삭제
        </p>
      </div>
    </div>
  );
}

export default DropDown;
