import style from './style.module.scss';
import bind from '../../styles/cx';
import menuImg from '../../assets/menu.png';
import { Dispatch, SetStateAction, useState } from 'react';
import OutSideClickHandler from './OutsideClick';

interface Props {
  setModifyState: Dispatch<SetStateAction<boolean>>;
  onDeleteFunction: () => void;
  onMenuClick: () => void;
}

const cx = bind(style);

function DropDown({ onDeleteFunction, setModifyState, onMenuClick }: Props) {
  const [isFold, setIsFold] = useState<boolean>(false);

  return (
    <OutSideClickHandler onOutSideClick={() => setIsFold(false)}>
      <div className={cx(style.DropDownWrapper)}>
        <label onClick={() => onMenuClick()}>
          <img onClick={() => setIsFold(!isFold)} src={menuImg} alt="" />
        </label>
        {isFold && (
          <div className={cx(style.DropdownContent)}>
            <p
              onClick={() => setModifyState(true)}
              className={cx(style.DropDownItem)}
            >
              수정
            </p>
            <p
              onClick={onDeleteFunction}
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
