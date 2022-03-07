import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSignUpErrorPop } from '../../redux/reducers/popup';

const SignUpError = () => {
  let popError = document.getElementById('popup_signup_error');
  const dispatch = useDispatch();
  const popInfo = useSelector((state: any) => state.popupInfoReducer);
  useEffect(() => {
    if (popInfo.SignUpError === true) {
      popError?.classList.add('pop');
    }
    if (popInfo.SignUpError === false) {
      popError?.classList.remove('pop');
    }
  }, [popInfo.SignUpError]);

  const closePop = () => {
    dispatch(setSignUpErrorPop(false));
  };

  return (
    <div className="modal" id="popup_signup_error">
      <div className="modal_inner">
        <div className="modal_content">
          <div
            style={{
              marginBottom: '2rem',
            }}
          >
            <p>
              아이디와 비밀번호를
              <br />
              다시 설정해주세요.
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

export default SignUpError;
