import style from './style.module.scss';
import bind from '../../styles/cx';
import menuImg from '../../assets/menu.png';
import { Dispatch, SetStateAction, useState } from 'react';
import OutSideClickHandler from './OutsideClick';

interface Props {
  setIsInModifyMode: Dispatch<SetStateAction<boolean>>;
  onDeleteTodoItem: () => void;
  onMenuClick: () => void;
}

const cx = bind(style);

function DropDown({ onDeleteTodoItem, setIsInModifyMode, onMenuClick }: Props) {
  const [isFold, setIsFold] = useState<boolean>(false);

  return (
    <OutSideClickHandler onOutSideClick={() => setIsFold(false)}>
      <div
        onClick={() => setIsFold(!isFold)}
        className={cx(style.DropDownWrapper)}
      >
        <label onClick={() => onMenuClick()}>
          <img src={menuImg} alt="menu" />
        </label>
        {isFold && (
          <div className={cx(style.DropdownContent)}>
            <p
              onClick={() => setIsInModifyMode(true)}
              className={cx(style.DropDownItem)}
            >
              수정
            </p>
            <p
              onClick={onDeleteTodoItem}
              className={cx(style.DropDownItem, style.deleteText)}
            >
              삭제
            </p>
          </div>
        )}
      </div>
    </OutSideClickHandler>
  );
}

export default DropDown;
