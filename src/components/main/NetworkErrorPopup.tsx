import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { setNetworkErrorPop } from '../../redux/reducers/popup';

const NetworkErrorPopup = () => {
  let popError = document.getElementById('popup_network_error');
  const history = useHistory();
  const dispatch = useDispatch();
  const popInfo = useSelector((state: any) => state.popupInfoReducer);
  useEffect(() => {
    if (popInfo.netWorkPop === true) {
      popError?.classList.add('pop');
    }
    if (popInfo.netWorkPop === false) {
      popError?.classList.remove('pop');
    }
  }, [popInfo.netWorkPop]);

  const closePop = () => {
    dispatch(setNetworkErrorPop(false));
    history.push('/home');
  };

  return (
    <div className="modal" id="popup_network_error">
      <div className="modal_inner">
        <div className="modal_content">
          <div
            style={{
              marginBottom: '2rem',
            }}
          >
            <p>
              일시적인 접속장애가 발생하였습니다.
              <br />
              잠시 후 다시 실행해주세요.
            </p>
          </div>
          <button onClick={closePop}>
            <span>확인</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NetworkErrorPopup;
