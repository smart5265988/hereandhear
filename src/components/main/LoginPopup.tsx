import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { setLoginPop } from '../../redux/reducers/popup';
const LoginPopup = () => {
  let poplogin = document.getElementById('popup_login');
  const history = useHistory();
  const dispatch = useDispatch();
  const popInfo = useSelector((state: any) => state.popupInfoReducer);

  useEffect(() => {
    // console.log(popInfo, ':::');

    if (popInfo.loginPop === true) {
      poplogin?.classList.add('pop');
    }
    if (popInfo.loginPop === false) {
      poplogin?.classList.remove('pop');
    }
  }, [popInfo.loginPop]);

  const goLogin = () => {
    dispatch(setLoginPop(false));

    history.push('/my/myLogin');
  };

  const closePop = () => {
    dispatch(setLoginPop(false));
    history.push('/home');
  };
  return (
    <div className="modal" id="popup_login">
      <div className="modal_inner">
        <div className="modal_content">
          <div
            style={{
              marginBottom: '2rem',
            }}
          >
            <p>
              로그인 후 이용할 수 있습니다.
              <br />
              지금 로그인 하시겠습니까?
            </p>
          </div>

          <button onClick={goLogin}>
            <span>예</span>
          </button>
          <button onClick={closePop}>
            <span>아니오</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPopup;
