import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAddPop } from '../../redux/reducers/popup';
const AddPopup = () => {
  let poplogin = document.getElementById('popup_add');
  const dispatch = useDispatch();
  const popInfo = useSelector((state: any) => state.popupInfoReducer);
  useEffect(() => {
    if (popInfo.AddPop.pop === true) {
      poplogin?.classList.add('pop');
    }
    if (popInfo.AddPop.pop === false) {
      poplogin?.classList.remove('pop');
    }
  }, [popInfo.AddPop]);

  const closePop = () => {
    dispatch(setAddPop(false, ''));
  };
  return (
    <div className="modal" id="popup_add">
      <div className="modal_inner">
        <div className="modal_content">
          <div
            style={{
              marginBottom: '2rem',
            }}
          >
            <p>{popInfo.AddPop.text}</p>
          </div>
          <button onClick={closePop}>
            <span>확인</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddPopup;
