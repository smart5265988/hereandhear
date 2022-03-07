import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setLoginErrorPop } from '../../redux/reducers/popup';
const LoginError = () => {
  let poplogin = document.getElementById('popup_login_error');
  const dispatch = useDispatch();
  const popInfo = useSelector((state: any) => state.popupInfoReducer);

  useEffect(() => {
    // console.log(popInfo, ':::');

    if (popInfo.LoginError === true) {
      poplogin?.classList.add('pop');
    }
    if (popInfo.LoginError === false) {
      poplogin?.classList.remove('pop');
    }
  }, [popInfo.LoginError]);

  const closePop = () => {
    dispatch(setLoginErrorPop(false));
  };
  return (
    <div className="modal" id="popup_login_error">
      <div className="modal_inner">
        <div className="modal_content">
          <div
            style={{
              marginBottom: '2rem',
            }}
          >
            <p>
              로그인 오류 입니다.
              <br />
              다시 한번 시도해주세요
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

export default LoginError;
