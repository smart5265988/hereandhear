import React from 'react';
import { useHistory } from 'react-router-dom';

const LoginPopup = () => {
  const history = useHistory();

  const goLogin = () => {
    const pop = document.getElementById('popup_login');
    if (pop) {
      pop.style.display = 'none';
    }
    history.push('/my/myLogin');
  };

  const closePop = () => {
    const pop = document.getElementById('popup_login');
    if (pop) {
      pop.style.display = 'none';
    }
  };
  return (
    <div className="modal" id="popup_login">
      <div className="modal_inner">
        <div className="modal_content">
          <div>
            <p>
              로그인 후 이용할 수 있습니다.
              <br />
              지금 로그인 하시겠습니까?
            </p>
          </div>

          <div onClick={goLogin}>
            <span>예</span>
          </div>
          <div onClick={closePop}>
            <span>아니오</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPopup;
